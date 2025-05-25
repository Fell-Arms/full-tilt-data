# User Management System

A full-stack user management application built with React (TypeScript) frontend and Express (TypeScript) backend, containerized with Docker.

## Features

- ✅ **Separate pages** for viewing users and adding new users
- ✅ **Navigation** between different views
- ✅ Create new users with comprehensive form validation
- ✅ View all users in a responsive table
- ✅ Real-time updates and success feedback
- ✅ TypeScript interfaces shared between frontend and backend
- ✅ Fully containerized with Docker
- ✅ In-memory data storage
- ✅ Form validation and error handling
- ✅ Responsive design with modern UI

## Tech Stack

### Frontend
- **React 18** with TypeScript
- **React Router** for navigation and routing
- **Vite** for build tooling
- **Axios** for API calls
- **CSS3** with modern styling and responsive design

### Backend
- **Express.js** with TypeScript
- **CORS** enabled for cross-origin requests
- **UUID** for unique user IDs
- **In-memory storage** (as specified in requirements)

### DevOps
- **Docker** and **Docker Compose** for containerization
- **Multi-stage builds** for optimized production images
- **Nginx** for serving the frontend
- **Health checks** for all services

## Quick Start

### Prerequisites
- Docker and Docker Compose installed
- Git (for cloning)

### Running the Application

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd user-management-system
   ```

2. **Start the application:**
   ```bash
   docker-compose up --build
   ```

3. **Access the application:**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8080
   - Health check: http://localhost:8080/health

### Development Mode

If you want to run the application in development mode:

1. **Backend (in `/backend` directory):**
   ```bash
   npm install
   npm run dev
   ```

2. **Frontend (in `/frontend` directory):**
   ```bash
   npm install
   npm run dev
   ```

## API Endpoints

### Users
- `GET /api/users` - Get all users
- `POST /api/users` - Create a new user

### Health
- `GET /health` - Health check endpoint

## Project Structure

```
user-management-system/
├── backend/                 # Express TypeScript API
│   ├── src/
│   │   ├── routes/         # API routes
│   │   │   └── users.ts    # User endpoints
│   │   ├── types/          # TypeScript interfaces
│   │   │   └── user.ts     # User type definitions
│   │   └── server.ts       # Main server file
│   ├── Dockerfile
│   ├── package.json
│   └── tsconfig.json
├── frontend/               # React TypeScript app
│   ├── src/
│   │   ├── components/     # Reusable React components
│   │   │   ├── Navigation.tsx    # Navigation bar
│   │   │   ├── UserList.tsx      # User table component
│   │   │   └── UserForm.tsx      # User creation form
│   │   ├── pages/          # Page components
│   │   │   ├── UsersPage.tsx     # User listing page
│   │   │   └── AddUserPage.tsx   # Add user page
│   │   ├── services/       # API service layer
│   │   │   └── api.ts      # HTTP client and API calls
│   │   ├── types/          # TypeScript interfaces
│   │   │   └── user.ts     # User type definitions
│   │   ├── App.tsx         # Main app with routing
│   │   ├── App.css         # Global styles
│   │   └── main.tsx        # React entry point
│   ├── Dockerfile
│   ├── nginx.conf         # Nginx configuration
│   ├── package.json
│   └── vite.config.ts
├── docker-compose.yml      # Container orchestration
├── .gitignore
└── README.md
```

## User Interface

The application features a clean, modern interface with:

### Navigation
- **Header Navigation**: Easy switching between "View Users" and "Add User" pages
- **Responsive Design**: Works seamlessly on desktop and mobile devices

### User Listing Page (`/`)
- **User Table**: Displays all users with name, email, status, and creation date
- **Status Indicators**: Visual badges for active/inactive users
- **Refresh Button**: Manual data refresh capability
- **Add User Link**: Quick access to user creation

### Add User Page (`/add-user`)
- **Form Validation**: Real-time client-side validation
- **Success Feedback**: Confirmation message and automatic redirect
- **Error Handling**: Clear error messages for failed submissions
- **Navigation**: Easy return to user listing

## Data Model

```typescript
interface User {
  id: string;           // UUID
  firstName: string;
  lastName: string;
  email: string;
  active: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
```

## Design Decisions

1. **Separate Pages**: Implemented dedicated pages for user listing and user creation as specified in requirements
2. **React Router**: Added routing for better user experience and cleaner separation of concerns
3. **In-Memory Storage**: Used as specified in requirements for simplicity
4. **Shared Types**: TypeScript interfaces duplicated between frontend/backend (ready for npm package extraction)
5. **Form Validation**: Client-side and server-side validation for better UX
6. **Docker Multi-stage**: Optimized production builds with smaller image sizes
7. **Error Handling**: Comprehensive error handling on both frontend and backend
8. **Health Checks**: Docker health checks for monitoring container status
9. **Navigation UX**: Clear navigation with active state indicators and success feedback

## Future Enhancements

- [ ] Database integration (PostgreSQL)
- [ ] User editing and deletion
- [ ] Sorting and filtering
- [ ] Pagination for large datasets
- [ ] Unit and integration tests
- [ ] Authentication and authorization
- [ ] API rate limiting
- [ ] Logging and monitoring

## Development Notes

- Backend runs on port 8080
- Frontend runs on port 3000 (development) / 3000 (production)
- CORS is configured for cross-origin requests
- TypeScript strict mode enabled for both projects
- Environment variables supported via .env files
- React Router handles client-side navigation
- Form submissions include success feedback and automatic redirects

## License

This project was created as a coding challenge demonstration.