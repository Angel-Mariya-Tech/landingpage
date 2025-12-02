# Azifa Job Platform

A modern, secure job portal built with React, TypeScript, and Lovable Cloud. This platform connects job seekers with employers through an intuitive interface backed by robust security and role-based access control.

## 🚀 Project Overview

**Lovable Project URL**: https://lovable.dev/projects/d4f95857-f801-4415-9c24-6b0703bee4ed

Azifa Job Platform is a full-stack job portal featuring:
- Public job listings and application submissions
- Secure staff dashboard for managing customers and job providers
- Role-based access control (Admin, Staff, User)
- Real-time job vacancy tracking
- Customer relationship management tools

## ✨ Key Features

### For Job Seekers
- Browse job listings with advanced filtering
- Apply to jobs directly through the platform
- View job details including salary and requirements
- Contact form for inquiries

### For Staff & Admins
- **Customer Management** - Track job seekers, applications, and remarks
- **Job Provider Management** - Manage companies and their job postings
- **Vacancy Tracking** - Create and monitor job openings with status tracking
- **Application Management** - Review and update job application statuses
- **User Administration** - Create staff accounts, reset passwords, manage roles (Admin only)
- **Secure Authentication** - JWT-based authentication with Row-Level Security

### Security Features
- ✅ Row-Level Security (RLS) policies on all database tables
- ✅ Server-side role verification for admin operations
- ✅ Input validation using Zod schemas (client + server)
- ✅ Cryptographically secure password generation
- ✅ Protected edge functions with JWT authentication
- ✅ XSS protection through React's built-in escaping
- ✅ Text truncation with tooltips for long content

## 🛠️ Technology Stack

### Frontend
- **React 18** with TypeScript for type safety
- **Vite** for fast builds and hot module replacement
- **Tailwind CSS** for utility-first styling with semantic design tokens
- **Shadcn/ui** for accessible, customizable components
- **TanStack Query** for efficient data fetching and caching
- **React Router v6** for client-side routing
- **React Hook Form + Zod** for form validation

### Backend (Lovable Cloud)
- **Supabase PostgreSQL** for data persistence
- **Supabase Authentication** for user management
- **Row-Level Security** for database-level access control
- **Edge Functions** (Deno) for serverless API operations
- **Real-time subscriptions** for live data updates

## 📋 Quick Start

### Prerequisites
- Node.js v18+ - [Install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- npm (comes with Node.js)
- Git

### Local Development

```bash
# Clone the repository
git clone <YOUR_GIT_URL>
cd azifa-job-platform

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:8080`

### Environment Setup

If using Lovable Cloud (recommended), your `.env` is auto-configured. Otherwise:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_anon_key
VITE_SUPABASE_PROJECT_ID=your_project_id
```

See [SETUP.md](./SETUP.md) for detailed installation instructions.

## 📝 How to Edit This Project

### Option 1: Use Lovable (Recommended)
Simply visit the [Lovable Project](https://lovable.dev/projects/d4f95857-f801-4415-9c24-6b0703bee4ed) and start prompting. Changes are automatically committed to this repo.

### Option 2: Use Your IDE
Clone this repo and push changes normally. All pushed changes sync with Lovable.

### Option 3: GitHub Web Editor
Navigate to files and click the "Edit" button (pencil icon) to edit directly in GitHub.

### Option 4: GitHub Codespaces
Click "Code" → "Codespaces" → "New codespace" for a full dev environment in your browser.

## 🏗️ Project Structure

```
├── src/
│   ├── components/          # React components
│   │   ├── ui/             # Shadcn UI components (buttons, dialogs, etc.)
│   │   ├── staff/          # Staff-specific layouts
│   │   └── *.tsx           # Feature components
│   ├── pages/              # Route-level page components
│   ├── contexts/           # React Context providers (Auth, etc.)
│   ├── hooks/              # Custom React hooks
│   ├── integrations/       # External service integrations
│   │   └── supabase/       # Supabase client and types
│   ├── lib/                # Utility functions and validations
│   ├── index.css           # Global styles with design tokens
│   └── main.tsx            # Application entry point
├── supabase/
│   ├── functions/          # Edge functions (serverless API)
│   │   ├── create-staff-user/
│   │   ├── delete-staff-user/
│   │   ├── reset-user-password/
│   │   ├── list-staff-users/
│   │   └── toggle-user-status/
│   ├── migrations/         # Database schema migrations
│   └── config.toml         # Supabase configuration
└── public/                 # Static assets
```

## 🔐 Security & Best Practices

This project follows enterprise security standards:

- **Row-Level Security (RLS)**: All tables protected with role-based policies
- **Server-Side Validation**: Zod schemas validate inputs in edge functions
- **Secure Password Handling**: Crypto API for random generation
- **JWT Authentication**: All admin operations require valid tokens
- **Defense in Depth**: Multiple security layers (client, RLS, edge functions)
- **Type Safety**: Full TypeScript coverage prevents runtime errors

### User Roles
- **Admin** - Full system access, user management
- **Staff** - Customer and job provider management
- **User** - Public job browsing and applications

## 📍 Key Routes

### Public Routes
- `/` - Homepage with featured jobs
- `/job-listings` - Browse all jobs with filters
- `/about` - About the platform
- `/privacy` - Privacy policy
- `/terms` - Terms of service

### Staff Routes (Authentication Required)
- `/staff/login` - Staff login
- `/staff/dashboard` - Staff overview
- `/staff/customers` - Customer management
- `/staff/providers` - Job provider management
- `/staff/users` - User administration (Admin only)

## 🚀 Deployment

### Via Lovable
1. Open [Lovable Project](https://lovable.dev/projects/d4f95857-f801-4415-9c24-6b0703bee4ed)
2. Click **Share** → **Publish**
3. Your app is live!

### Custom Domain
Navigate to **Project** → **Settings** → **Domains** → **Connect Domain**

[Learn more about custom domains](https://docs.lovable.dev/features/custom-domain)

## 🧪 Development Guidelines

### Code Style
- Use TypeScript for all new files
- Follow existing naming conventions
- Leverage Tailwind semantic tokens (`bg-primary`, `text-foreground`)
- Never use direct color values - use design tokens from `index.css`

### Database Operations
- Always use the Supabase client: `import { supabase } from "@/integrations/supabase/client"`
- Never modify `src/integrations/supabase/types.ts` (auto-generated)
- All database changes via migrations in `supabase/migrations/`

### Security
- Never store secrets in client-side code
- Always validate user input with Zod
- Implement proper error handling
- Use RLS policies for data access control
- Test edge functions thoroughly before deployment

### UI Components
- Use Shadcn/ui components for consistency
- Implement loading states for all async operations
- Show user-friendly error messages via toast notifications
- Ensure responsive design (mobile-first approach)

## 🤝 Contributing

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Make your changes with proper TypeScript types
3. Test thoroughly (especially security-sensitive areas)
4. Commit with clear messages: `git commit -m "Add: customer search feature"`
5. Push and open a pull request

## 📚 Resources

- [Lovable Documentation](https://docs.lovable.dev)
- [Supabase Documentation](https://supabase.com/docs)
- [React Documentation](https://react.dev)
- [Shadcn/ui Components](https://ui.shadcn.com)
- [Tailwind CSS](https://tailwindcss.com/docs)

## 🆘 Support

- **Documentation**: Check [SETUP.md](./SETUP.md) for detailed setup
- **Lovable Help**: Visit [Lovable Docs](https://docs.lovable.dev)
- **Community**: Join [Lovable Discord](https://discord.com/channels/1119885301872070706/1280461670979993613)
- **Issues**: Open a GitHub issue with reproduction steps

## 📄 License

[Add your license information here]

---

Built with ❤️ using [Lovable](https://lovable.dev) - The AI-powered platform that turns ideas into production-ready apps.