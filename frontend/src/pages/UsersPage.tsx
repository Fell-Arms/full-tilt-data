import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import UserList from '../components/UserList';
import { userService } from '../services/api';
import type { User } from '../types/user';

const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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

  return (
    <div className="page">
      <div className="page-header">
        <div className="page-header-content">
          <h1>All Users</h1>
          <div className="page-actions">
            <button 
              onClick={fetchUsers}
              className="refresh-button"
              disabled={loading}
            >
              {loading ? 'Refreshing...' : 'Refresh'}
            </button>
            <Link to="/add-user" className="add-user-button">
              Add New User
            </Link>
          </div>
        </div>
      </div>

      <div className="page-content">
        <div className="container">
          <UserList 
            users={users}
            loading={loading}
            error={error}
          />
        </div>
      </div>
    </div>
  );
};

export default UsersPage;