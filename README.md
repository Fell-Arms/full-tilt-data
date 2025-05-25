# User Management System

A full-stack user management application built with React (TypeScript) frontend and Express (TypeScript) backend, containerized with Docker.

## Features

- ✅ Create new users with form validation
- ✅ View all users in a responsive table
- ✅ Real-time updates when adding users
- ✅ TypeScript interfaces shared between frontend and backend
- ✅ Fully containerized with Docker
- ✅ In-memory data storage
- ✅ Form validation and error handling
- ✅ Responsive design

## Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for build tooling
- **Axios** for API calls
- **CSS3** with modern styling

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
   git clone https://github.com/Fell-Arms/full-tilt-data
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
│   │   ├── types/          # TypeScript interfaces
│   │   └── server.ts       # Main server file
│   ├── Dockerfile
│   ├── package.json
│   └── tsconfig.json
├── frontend/               # React TypeScript app
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── services/       # API service layer
│   │   ├── types/          # TypeScript interfaces
│   │   └── App.tsx         # Main app component
│   ├── Dockerfile
│   ├── nginx.conf
│   ├── package.json
│   └── vite.config.ts
├── docker-compose.yml      # Container orchestration
├── .gitignore
└── README.md
```

## User Interface

The application features:
- **Add User Form**: Create new users with validation
- **User List**: View all users in a clean table format
- **Status Indicators**: Visual badges for active/inactive users
- **Responsive Design**: Works on desktop and mobile devices

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

1. **In-Memory Storage**: Used as specified in requirements for simplicity
2. **Shared Types**: TypeScript interfaces duplicated between frontend/backend (ready for npm package extraction)
3. **Form Validation**: Client-side and server-side validation for better UX
4. **Docker Multi-stage**: Optimized production builds with smaller image sizes
5. **Error Handling**: Comprehensive error handling on both frontend and backend
6. **Health Checks**: Docker health checks for monitoring container status

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

## License

This project was created as a coding challenge demonstration.