import axios from 'axios';
import type { User, CreateUserRequest, UserResponse } from '../types/user';

const API_BASE_URL = 'http://localhost:8080/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const userService = {
  // Get all users
  getUsers: async (): Promise<UserResponse> => {
    const response = await api.get<UserResponse>('/users');
    return response.data;
  },

  // Create a new user
  createUser: async (userData: CreateUserRequest): Promise<User> => {
    const response = await api.post<User>('/users', userData);
    return response.data;
  },
};

export default api;