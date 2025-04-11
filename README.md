# Next Playground

A modern Next.js 15 application with Supabase authentication and a custom Express backend server.

## Features

- Next.js 15 with App Router
- React 19
- Supabase Authentication
- TailwindCSS 4
- TypeScript
- Jest testing setup

## Prerequisites

- Node.js 18.x or higher
- npm or yarn
- Supabase account

## Environment Setup

### 1. Frontend Setup (.env.local in project root)

Create a `.env.local` file in the root of your project with the following variables:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

## Getting Started

### 1. Install Dependencies

```bash
# Install frontend dependencies
npm install

# Install backend dependencies
cd playground-server
npm install
cd ..
```

### 2. Set Up Supabase

1. Create a project at [supabase.com](https://supabase.com)
2. Get your project URL and anon key from the project settings
3. Add these to your `.env.local` file

### 4. Start the Development Servers

```bash
# In a new terminal, start the Next.js dev server
cd next-playground
npm run dev
```

### 5. Access the Application

- [http://localhost:3000](http://localhost:3000)

## Available Scripts

### Frontend

```bash
# Development
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint

# Run tests
npm test
npm run test:watch
npm run test:coverage
```

## Project Structure

```
next-playground/
├── public/             # Static files
├── src/
│   ├── app/            # Next.js App Router pages
│   ├── components/     # React components
│   └── utils/          # Utility functions and Supabase setup
└── .env.local          # Frontend environment variables
```

## Authentication Flow

This application uses Supabase for authentication. The authentication flow works as follows:

1. User signs up or logs in via the login page
2. Supabase handles the authentication and session management
3. Protected routes check for user session before allowing access

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
