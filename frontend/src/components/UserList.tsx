import React from 'react';
import type { User } from '../types/user';

interface UserListProps {
  users: User[];
  loading: boolean;
  error: string | null;
}

const UserList: React.FC<UserListProps> = ({ users, loading, error }) => {
  if (loading) {
    return (
      <div className="user-list">
        <h2>Users</h2>
        <div className="loading">Loading users...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="user-list">
        <h2>Users</h2>
        <div className="error">Error: {error}</div>
      </div>
    );
  }

  if (users.length === 0) {
    return (
      <div className="user-list">
        <h2>Users</h2>
        <div className="no-users">No users found. Add some users to get started!</div>
      </div>
    );
  }

  return (
    <div className="user-list">
      <h2>Users ({users.length})</h2>
      <div className="table-container">
        <table className="users-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Created</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>
                  <div className="user-name">
                    {user.firstName} {user.lastName}
                  </div>
                </td>
                <td>
                  <div className="user-email">{user.email}</div>
                </td>
                <td>
                  <span className={`status-badge ${user.active ? 'active' : 'inactive'}`}>
                    {user.active ? 'Active' : 'Inactive'}
                  </span>
                </td>
                <td>
                  <div className="user-date">
                    {user.createdAt 
                      ? new Date(user.createdAt).toLocaleDateString()
                      : 'N/A'
                    }
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;