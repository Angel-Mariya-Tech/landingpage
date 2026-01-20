# Azifa Job Platform

A modern, high-performance job portal designed to connect job seekers with top-tier employers. Built with React, TypeScript, and Supabase, this platform features a robust security architecture and an intuitive user experience for both applicants and administrators.

---

## 🚀 Project Overview

The Azifa Job Platform is a comprehensive solution for managing the end-to-end recruitment lifecycle. It serves as a bridge between talent and opportunity, providing a secure environment for job listings, applications, and administrative oversight.

### Core Modules
- **Job Seeker Portal**: Seamlessly browse, filter, and apply for opportunities.
- **Admin Dashboard**: Advanced tools for managing job providers, vacancies, and applicants.
- **Role-Based Access**: Granular control for Admin, Staff, and User accounts.
- **Real-time Analytics**: Monitor vacancy statuses and application flows in real-time.

## ✨ Key Features

### For Job Seekers
- **Smart Search**: Advanced filtering by category, salary, and requirements.
- **One-Click Application**: Direct submission system with CV upload integration.
- **Responsive Interface**: Fully optimized for mobile, tablet, and desktop browsing.
- **Direct Contact**: Integrated inquiry system for immediate communication.

### For Administrators
- **Candidate Hub**: Centralized system to track applicants and manage interview remarks.
- **Provider Management**: Dedicated module for managing partner companies and recruiters.
- **Vacancy Lifecycle**: Full control over job posting, from creation to hiring completion.
- **User Administration**: Secure staff account creation and role management.

## 🛠️ Technology Stack

### Frontend
- **React 18**: Component-based architecture with TypeScript for enterprise-grade type safety.
- **Vite**: Ultra-fast build tool and development server.
- **Tailwind CSS**: Utility-first styling with semantic design tokens.
- **Shadcn/UI**: Accessible and professionally designed UI components.
- **TanStack Query**: Efficient state management and data fetching.
- **React Hook Form + Zod**: Robust form handling and schema-based validation.

### Backend
- **PostgreSQL**: Reliable and scalable data persistence.
- **Supabase Authentication**: Secure, JWT-based user session management.
- **Row-Level Security (RLS)**: Database-level protection ensuring users only see data they own.
- **Edge Functions**: Scalable serverless logic for complex backend operations.

## 📋 Getting Started

### Prerequisites
- Node.js (v18.0.0 or higher)
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd azifa-job-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   Create a `.env` file in the root directory and add your Supabase credentials:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_anon_key
   ```

4. **Start Development Server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:8080`.

## 🏗️ Project Architecture

```text
├── src/
│   ├── components/      # UI components and feature-specific modules
│   ├── pages/           # Route-level page components
│   ├── hooks/           # Custom React hooks for business logic
│   ├── integrations/    # Supabase client and service configurations
│   ├── lib/             # Utility functions and validation schemas
│   └── main.tsx         # Entry point
├── supabase/
│   ├── functions/       # Serverless edge functions
│   └── migrations/      # Database schema and RLS policies
└── public/              # Static assets and media
```

## 🔐 Security & Best Practices

- **Zero-Trust Security**: RLS policies ensure data isolation at the database level.
- **Input Sanitization**: All user inputs are validated via Zod schemas.
- **Component Consistency**: Standardized UI through a centralized design system.
- **Performance Optimized**: Lazy loading and efficient data caching for fast interactions.

## 🤝 Contributing

We welcome contributions to the Azifa Job Platform.
1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---
*Built for the future of recruitment.*