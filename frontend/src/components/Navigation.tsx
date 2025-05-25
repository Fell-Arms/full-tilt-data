import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-brand">
          <Link to="/" className="brand-link">
            User Management System
          </Link>
        </div>
        
        <div className="nav-links">
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            View Users
          </Link>
          <Link 
            to="/add-user" 
            className={`nav-link ${location.pathname === '/add-user' ? 'active' : ''}`}
          >
            Add User
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;