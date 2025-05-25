import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import UserForm from '../components/UserForm';
import { userService } from '../services/api';
import type { CreateUserRequest } from '../types/user';

const AddUserPage: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleCreateUser = async (userData: CreateUserRequest) => {
    try {
      setLoading(true);
      setError(null);
      setSuccessMessage(null);
      
      const newUser = await userService.createUser(userData);
      
      setSuccessMessage(`User "${newUser.firstName} ${newUser.lastName}" created successfully!`);
      
      // Redirect to users page after a short delay
      setTimeout(() => {
        navigate('/');
      }, 2000);
      
    } catch (err: any) {
      let errorMessage = 'Failed to create user';
      
      if (err.response?.data?.error) {
        errorMessage = err.response.data.error;
      } else if (err.message) {
        errorMessage = err.message;
      }
      
      setError(errorMessage);
      throw err; // Re-throw so form can handle it
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <div className="page-header">
        <div className="page-header-content">
          <h1>Add New User</h1>
          <div className="page-actions">
            <Link to="/" className="back-button">
              ← Back to Users
            </Link>
          </div>
        </div>
      </div>

      <div className="page-content">
        <div className="container">
          <div className="form-container">
            {successMessage && (
              <div className="success-message">
                {successMessage}
                <p className="redirect-text">Redirecting to users page...</p>
              </div>
            )}
            
            <UserForm 
              onSubmit={handleCreateUser}
              loading={loading}
              error={error}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUserPage;