import { useState, useEffect } from 'react';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import { userService } from './services/api';
import type { User, CreateUserRequest } from './types/user';
import './App.css';

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [formLoading, setFormLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);

  // Fetch users on component mount
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await userService.getUsers();
      setUsers(response.users);
    } catch (err) {
      setError('Failed to fetch users. Please make sure the backend server is running.');
      console.error('Error fetching users:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateUser = async (userData: CreateUserRequest) => {
    try {
      setFormLoading(true);
      setFormError(null);
      
      const newUser = await userService.createUser(userData);
      
      // Add the new user to the list
      setUsers(prevUsers => [...prevUsers, newUser]);
      
      console.log('User created successfully:', newUser);
    } catch (err: any) {
      let errorMessage = 'Failed to create user';
      
      if (err.response?.data?.error) {
        errorMessage = err.response.data.error;
      } else if (err.message) {
        errorMessage = err.message;
      }
      
      setFormError(errorMessage);
      throw err; // Re-throw so form can handle it
    } finally {
      setFormLoading(false);
    }
  };

  const handleRefresh = () => {
    fetchUsers();
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>User Management System</h1>
        <p>Manage your users with ease</p>
      </header>

      <main className="app-main">
        <div className="container">
          <div className="content-grid">
            <div className="form-section">
              <UserForm 
                onSubmit={handleCreateUser}
                loading={formLoading}
                error={formError}
              />
            </div>
            
            <div className="list-section">
              <div className="list-header">
                <button 
                  onClick={handleRefresh}
                  className="refresh-button"
                  disabled={loading}
                >
                  {loading ? 'Refreshing...' : 'Refresh'}
                </button>
              </div>
              
              <UserList 
                users={users}
                loading={loading}
                error={error}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;