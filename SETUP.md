# Azifa Job Platform - Complete Setup Guide

This comprehensive guide will help you set up, configure, and run the Azifa Job Platform on your local machine.

## 📋 Table of Contents

1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Environment Configuration](#environment-configuration)
4. [Database Setup](#database-setup)
5. [Authentication Setup](#authentication-setup)
6. [Running the Application](#running-the-application)
7. [Edge Functions](#edge-functions)
8. [Security Configuration](#security-configuration)
9. [Project Structure](#project-structure)
10. [Development Workflow](#development-workflow)
11. [Troubleshooting](#troubleshooting)

---

## Prerequisites

Ensure you have the following installed before proceeding:

### Required Software
- **Node.js** v18 or higher - [Install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- **npm** (comes bundled with Node.js)
- **Git** - [Download Git](https://git-scm.com/downloads)

### Optional Tools
- **VS Code** or your preferred IDE
- **PostgreSQL Client** (for direct database access)
- **Postman/Insomnia** (for testing edge functions)

### Verify Installation
```bash
node --version  # Should be v18 or higher
npm --version   # Should be 8 or higher
git --version   # Any recent version
```

---

## Installation

### Step 1: Clone the Repository

```bash
git clone <YOUR_REPOSITORY_URL>
cd azifa-job-platform
```

### Step 2: Install Dependencies

```bash
npm install
```

This installs all required packages including:
- React, TypeScript, and Vite
- Supabase client libraries
- Shadcn/ui components
- TanStack Query for data fetching
- Zod for validation
- And more...

---

## Environment Configuration

The platform uses **Lovable Cloud** for backend services (Supabase). You have two configuration options:

### Option A: Lovable Cloud (Recommended) ✨

If you're using [Lovable](https://lovable.dev), your backend is automatically configured:

1. The `.env` file is **auto-generated** with proper credentials
2. Database migrations are **automatically applied**
3. Edge functions are **auto-deployed** on code changes
4. No manual Supabase setup required!

**Your `.env` should look like this:**
```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
VITE_SUPABASE_PROJECT_ID=your-project-id
```

### Option B: Manual Supabase Setup

If setting up your own Supabase project:

1. **Create a Supabase Project**
   - Go to [Supabase Dashboard](https://supabase.com/dashboard)
   - Click "New Project"
   - Choose organization and name your project
   - Select a database password and region

2. **Get API Credentials**
   - Go to Project Settings → API
   - Copy your **Project URL** and **anon/public key**

3. **Create `.env` File**
   ```env
   VITE_SUPABASE_URL=your_project_url
   VITE_SUPABASE_PUBLISHABLE_KEY=your_anon_key
   VITE_SUPABASE_PROJECT_ID=your_project_id
   ```

4. **Apply Migrations**
   - Copy contents from `supabase/migrations/*.sql`
   - Run them in order in the Supabase SQL Editor
   - Or use Supabase CLI: `supabase db push`

---

## Database Setup

### Database Schema Overview

The platform uses the following core tables:

#### Core Tables

**`customers`** - Job seekers/applicants
- `id` (uuid, primary key)
- `name` (text, required)
- `phone` (text, required, unique)
- `location` (text, required)
- `qualification` (text)
- `status` (text, default: 'New')
- `last_contacted` (timestamp)
- `created_at`, `updated_at` (timestamps)

**`job_providers`** - Companies posting jobs
- `id` (uuid, primary key)
- `name` (text, required)
- `industry` (text, required)
- `location` (text, required)
- `contact_number` (text, required)
- `notes` (text, optional)
- `created_at`, `updated_at` (timestamps)

**`vacancies`** - Job listings
- `id` (uuid, primary key)
- `provider_id` (uuid, foreign key → job_providers)
- `job_title` (text, required)
- `salary` (text, optional)
- `salary_type` (text, default: 'hourly')
- `openings` (integer, default: 1)
- `status` (text, default: 'Open')
- `created_at`, `updated_at` (timestamps)

**`applications`** - Job applications
- `id` (uuid, primary key)
- `vacancy_id` (uuid, foreign key → vacancies)
- `customer_id` (uuid, foreign key → customers)
- `status` (text, default: 'New')
- `notes` (text, optional)
- `applied_at` (timestamp)
- `created_at`, `updated_at` (timestamps)

**`customer_remarks`** - Notes about customers
- `id` (uuid, primary key)
- `customer_id` (uuid, foreign key → customers)
- `remark` (text, required)
- `created_by` (uuid, optional)
- `created_at` (timestamp)

**`user_roles`** - Role-based access control
- `id` (uuid, primary key)
- `user_id` (uuid, references auth.users)
- `role` (enum: 'admin' | 'staff' | 'user')
- `created_at` (timestamp)

### Row-Level Security (RLS)

All tables have **RLS enabled** with comprehensive policies:

**Example - customers table:**
```sql
-- Staff can view all customers
CREATE POLICY "Staff can view all customers"
ON customers FOR SELECT
USING (has_role(auth.uid(), 'staff') OR has_role(auth.uid(), 'admin'));

-- Staff can update customers
CREATE POLICY "Staff can update customers"
ON customers FOR UPDATE
USING (has_role(auth.uid(), 'staff') OR has_role(auth.uid(), 'admin'));

-- Public can submit applications (INSERT only)
CREATE POLICY "Anyone can submit applications"
ON customers FOR INSERT
WITH CHECK (true);
```

### Database Functions

**`has_role(user_id, role)`** - Security definer function for role checks
```sql
CREATE FUNCTION has_role(_user_id uuid, _role app_role)
RETURNS boolean
LANGUAGE sql
STABLE SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;
```

**`public_submit_customer_lead(...)`** - Public function for job applications
- Accepts customer details and remarks
- Reuses existing customers by phone
- Creates new customer if not found
- Stores remark without authentication

---

## Authentication Setup

### Supabase Authentication Configuration

The platform uses **email/password authentication** with role-based access:

#### Enable Auto-Confirm (Development)

For faster testing during development:

1. Open your backend (Lovable Cloud dashboard)
2. Navigate to **Authentication** → **Providers**
3. Find **Email Provider** settings
4. Enable **Confirm email** toggle to OFF
5. Save changes

**⚠️ Production**: Re-enable email confirmation before going live!

#### Password Security Recommendations

1. **Enable Leaked Password Protection**:
   - Go to **Authentication** → **Policies**
   - Enable "Leaked Password Protection"
   - This checks passwords against Have I Been Pwned database

2. **Set Password Requirements**:
   - Minimum length: 12 characters
   - Require: uppercase, lowercase, numbers, symbols
   - Prevent reuse of breached passwords

### User Role Setup

To create your first admin user:

1. **Sign up through the app** at `/staff/login`
2. **Manually add admin role** in Supabase SQL Editor:
   ```sql
   INSERT INTO user_roles (user_id, role)
   VALUES (
     (SELECT id FROM auth.users WHERE email = 'your-email@example.com'),
     'admin'
   );
   ```

3. **Log out and log back in** to refresh permissions

---

## Running the Application

### Development Mode

Start the dev server with hot module replacement:

```bash
npm run dev
```

The application will be available at:
- **Local**: `http://localhost:8080`
- **Network**: `http://192.168.x.x:8080` (for mobile testing)

### Production Build

Build optimized static files:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

### Environment-Specific Behavior

**Development (`npm run dev`)**:
- Hot module replacement enabled
- Source maps for debugging
- Verbose error messages
- Console logs visible

**Production (`npm run build`)**:
- Minified and optimized code
- Tree-shaking for smaller bundle
- No source maps (by default)
- Error tracking recommended

---

## Edge Functions

Edge functions are serverless API endpoints deployed automatically with Lovable Cloud.

### Available Edge Functions

#### 1. **create-staff-user** (Admin only)
Creates new staff or admin users.

**Request:**
```typescript
POST /functions/v1/create-staff-user
Headers: { Authorization: "Bearer <JWT>" }
Body: {
  email: "staff@example.com",
  password: "SecurePass123!",
  role: "staff" | "admin"
}
```

**Security:**
- ✅ Requires JWT authentication
- ✅ Verifies admin role server-side
- ✅ Validates email format and password complexity
- ✅ Rolls back user creation if role assignment fails

#### 2. **delete-staff-user** (Admin only)
Permanently deletes a user from Supabase Auth.

**Request:**
```typescript
POST /functions/v1/delete-staff-user
Headers: { Authorization: "Bearer <JWT>" }
Body: { userId: "uuid-here" }
```

**Security:**
- ✅ Requires admin role
- ✅ Validates UUID format
- ✅ Prevents self-deletion

#### 3. **reset-user-password** (Admin only)
Resets a user's password to a new value.

**Request:**
```typescript
POST /functions/v1/reset-user-password
Headers: { Authorization: "Bearer <JWT>" }
Body: {
  userId: "uuid-here",
  newPassword: "NewSecure123!"
}
```

**Security:**
- ✅ Enforces password complexity
- ✅ Admin-only access
- ✅ Uses Supabase Admin API

#### 4. **list-staff-users** (Staff/Admin)
Returns list of staff and admin users.

**Request:**
```typescript
POST /functions/v1/list-staff-users
Headers: { Authorization: "Bearer <JWT>" }
```

#### 5. **toggle-user-status** (Admin only)
Enables/disables user accounts.

**Request:**
```typescript
POST /functions/v1/toggle-user-status
Headers: { Authorization: "Bearer <JWT>" }
Body: {
  userId: "uuid-here",
  banned: true | false
}
```

### Edge Function Development

Edge functions auto-deploy on code changes. To test locally:

```bash
# View edge function logs
# (Available in Lovable Cloud dashboard)
```

---

## Security Configuration

### Security Features Implemented

✅ **Row-Level Security (RLS)**
- All tables protected with role-based policies
- Database-level access control
- Can't be bypassed by client code

✅ **JWT Authentication**
- All admin edge functions require valid JWT
- Token-based stateless authentication
- Automatic token refresh

✅ **Input Validation**
- Zod schemas on client and server
- Email format validation
- Password complexity requirements
- UUID validation for all IDs
- Length limits to prevent DoS

✅ **Secure Password Generation**
- Uses `crypto.getRandomValues()` (cryptographically secure)
- 12+ characters with mixed complexity
- Fisher-Yates shuffle with secure randomness

✅ **XSS Protection**
- React's built-in escaping
- No `dangerouslySetInnerHTML` with user input
- Sanitized data display

✅ **Defense in Depth**
- Client-side checks for UX
- RLS for data protection
- Edge functions for admin operations
- Multiple security layers

### Security Best Practices

**DO:**
- ✅ Always use semantic tokens (`bg-primary`, not `bg-blue-500`)
- ✅ Validate all user inputs with Zod
- ✅ Use Supabase client for database operations
- ✅ Implement proper error handling
- ✅ Show user-friendly error messages
- ✅ Test RLS policies thoroughly

**DON'T:**
- ❌ Never store secrets in client-side code
- ❌ Never bypass RLS with service role key on client
- ❌ Never log sensitive data to console
- ❌ Never trust client-side authorization alone
- ❌ Never modify auto-generated types file
- ❌ Never hardcode credentials

---

## Project Structure

```
azifa-job-platform/
│
├── src/                          # Frontend source code
│   ├── components/               # React components
│   │   ├── ui/                  # Shadcn UI primitives
│   │   │   ├── button.tsx       # Button component
│   │   │   ├── dialog.tsx       # Modal dialogs
│   │   │   ├── input.tsx        # Form inputs
│   │   │   ├── table.tsx        # Data tables
│   │   │   └── ...              # More UI components
│   │   ├── staff/               # Staff-specific components
│   │   │   └── StaffLayout.tsx  # Staff page layout
│   │   ├── Hero.tsx             # Homepage hero section
│   │   ├── JobCard.tsx          # Job listing card
│   │   ├── CustomerEditDialog.tsx
│   │   ├── ProviderEditDialog.tsx
│   │   └── ...                  # Feature components
│   │
│   ├── pages/                   # Route-level pages
│   │   ├── Index.tsx            # Homepage
│   │   ├── JobListings.tsx      # Public job listings
│   │   ├── StaffLogin.tsx       # Staff authentication
│   │   ├── StaffDashboard.tsx   # Staff overview
│   │   ├── StaffCustomers.tsx   # Customer management
│   │   ├── StaffProviders.tsx   # Provider management
│   │   ├── StaffUsers.tsx       # User administration
│   │   └── ...                  # More pages
│   │
│   ├── contexts/                # React Context providers
│   │   └── AuthContext.tsx      # Authentication state
│   │
│   ├── hooks/                   # Custom React hooks
│   │   ├── use-mobile.tsx       # Mobile detection
│   │   ├── use-toast.ts         # Toast notifications
│   │   └── useVacancies.ts      # Vacancy data fetching
│   │
│   ├── integrations/            # External integrations
│   │   └── supabase/
│   │       ├── client.ts        # Supabase client (auto-gen)
│   │       └── types.ts         # Database types (auto-gen)
│   │
│   ├── lib/                     # Utilities and helpers
│   │   ├── utils.ts             # General utilities
│   │   ├── validations.ts       # Zod schemas
│   │   └── passwordUtils.ts     # Password generation
│   │
│   ├── index.css                # Global styles + design tokens
│   ├── App.tsx                  # Root component
│   └── main.tsx                 # Application entry point
│
├── supabase/                    # Backend configuration
│   ├── functions/               # Edge functions (Deno)
│   │   ├── create-staff-user/
│   │   │   └── index.ts
│   │   ├── delete-staff-user/
│   │   │   └── index.ts
│   │   ├── reset-user-password/
│   │   │   └── index.ts
│   │   ├── list-staff-users/
│   │   │   └── index.ts
│   │   └── toggle-user-status/
│   │       └── index.ts
│   │
│   ├── migrations/              # Database migrations (SQL)
│   │   ├── 0000_initial_schema.sql
│   │   ├── 0001_add_roles.sql
│   │   └── ...
│   │
│   └── config.toml              # Supabase config (auto-gen)
│
├── public/                      # Static assets
│   ├── robots.txt
│   └── ...
│
├── .env                         # Environment variables (auto-gen)
├── package.json                 # Dependencies and scripts
├── tsconfig.json                # TypeScript configuration
├── vite.config.ts               # Vite build configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── README.md                    # Project overview
└── SETUP.md                     # This file
```

---

## Development Workflow

### Daily Development Process

1. **Pull Latest Changes**
   ```bash
   git pull origin main
   ```

2. **Create Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Start Dev Server**
   ```bash
   npm run dev
   ```

4. **Make Changes**
   - Edit components in `src/components/`
   - Update pages in `src/pages/`
   - Modify styles using Tailwind classes
   - Use semantic tokens from `index.css`

5. **Test Your Changes**
   - Check UI in browser at `http://localhost:8080`
   - Test on mobile by accessing network URL
   - Verify authentication flows
   - Check RLS policies in Supabase dashboard

6. **Commit and Push**
   ```bash
   git add .
   git commit -m "Add: customer search feature"
   git push origin feature/your-feature-name
   ```

### Code Style Guidelines

**TypeScript:**
```typescript
// ✅ Good: Explicit types
interface Customer {
  id: string;
  name: string;
  phone: string;
}

// ❌ Bad: Implicit any
const customer = getData();
```

**Tailwind CSS:**
```tsx
// ✅ Good: Semantic tokens
<div className="bg-primary text-primary-foreground">

// ❌ Bad: Direct colors
<div className="bg-blue-600 text-white">
```

**Components:**
```tsx
// ✅ Good: Typed props
interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

// ❌ Bad: Untyped
const Button = ({ onClick, disabled }: any) => { ... }
```

### Testing Checklist

Before committing:
- [ ] Code compiles without errors (`npm run build`)
- [ ] No TypeScript errors
- [ ] UI looks good on desktop and mobile
- [ ] Authentication works for staff/admin
- [ ] RLS policies prevent unauthorized access
- [ ] Forms validate correctly
- [ ] Loading states display properly
- [ ] Error messages are user-friendly

---

## Troubleshooting

### Common Issues and Solutions

#### **Issue: Port 8080 Already in Use**

```bash
# Option 1: Kill the process using port 8080
lsof -ti:8080 | xargs kill -9

# Option 2: Change port in vite.config.ts
server: { port: 3000 }
```

#### **Issue: Database Connection Errors**

**Symptoms:** "Failed to fetch", "Network error"

**Solutions:**
1. Verify `.env` file exists and has correct values
2. Check Supabase project is active (not paused)
3. Verify your IP isn't blocked in Supabase settings
4. Check internet connection

```bash
# Test connection
curl https://your-project.supabase.co
```

#### **Issue: Authentication Not Working**

**Symptoms:** "Invalid login credentials", stuck on login

**Solutions:**
1. Enable auto-confirm email in Supabase Auth settings
2. Check user has role in `user_roles` table:
   ```sql
   SELECT * FROM user_roles WHERE user_id = 'your-user-id';
   ```
3. Clear browser localStorage and try again
4. Verify `.env` has correct Supabase keys

#### **Issue: RLS Policy Violations**

**Symptoms:** "Row level security policy violated", "Permission denied"

**Solutions:**
1. Check user is authenticated: `supabase.auth.getSession()`
2. Verify user has correct role in `user_roles` table
3. Review RLS policies in Supabase dashboard
4. Ensure `has_role()` function exists and works
5. Check if RLS is enabled on the table

#### **Issue: Build Fails with TypeScript Errors**

**Solutions:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install

# Check for type mismatches
npm run build

# Update Supabase types
# (Usually auto-updated with migrations)
```

#### **Issue: Edge Functions Not Working**

**Symptoms:** 401 Unauthorized, 500 Internal Server Error

**Solutions:**
1. Check JWT token is passed in Authorization header
2. Verify user has admin role for admin-only functions
3. Check edge function logs in Lovable Cloud dashboard
4. Validate request body matches expected schema
5. Ensure function is deployed (auto-deployed with Lovable)

#### **Issue: Styles Not Applying**

**Solutions:**
1. Restart dev server (`Ctrl+C`, then `npm run dev`)
2. Clear browser cache
3. Check Tailwind class names are correct
4. Verify `index.css` is imported in `main.tsx`
5. Check for typos in semantic token names

#### **Issue: Data Not Updating in Real-Time**

**Solutions:**
1. Check TanStack Query is invalidating cache correctly
2. Add `refetch()` or `invalidateQueries()` after mutations
3. Consider enabling Supabase Realtime on table
4. Verify WebSocket connection in Network tab

---

## Additional Resources

### Documentation
- **Lovable**: [https://docs.lovable.dev](https://docs.lovable.dev)
- **Supabase**: [https://supabase.com/docs](https://supabase.com/docs)
- **React**: [https://react.dev](https://react.dev)
- **Shadcn/ui**: [https://ui.shadcn.com](https://ui.shadcn.com)
- **Tailwind CSS**: [https://tailwindcss.com/docs](https://tailwindcss.com/docs)
- **TanStack Query**: [https://tanstack.com/query](https://tanstack.com/query)

### Community
- **Lovable Discord**: [Join Community](https://discord.com/channels/1119885301872070706/1280461670979993613)
- **GitHub Issues**: Report bugs and feature requests

### Support
For help:
1. Check this SETUP.md guide
2. Review [README.md](./README.md) for overview
3. Search existing GitHub issues
4. Ask in Lovable Discord community
5. Open a new issue with reproduction steps

---

## Next Steps

Now that you're set up:

1. ✅ Verify the app runs locally at `http://localhost:8080`
2. ✅ Log in with your admin account at `/staff/login`
3. ✅ Explore the staff dashboard and features
4. ✅ Review the codebase structure in `src/`
5. ✅ Read through RLS policies in Supabase dashboard
6. ✅ Test creating customers, providers, and vacancies
7. ✅ Try the edge functions for user management

**Ready to develop?** Check the [Development Workflow](#development-workflow) section above!

---

## License

[Add your license information here]

**Built with** ❤️ **using [Lovable](https://lovable.dev)**