export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  active: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface CreateUserRequest {
  firstName: string;
  lastName: string;
  email: string;
  active: boolean;
}

export interface UserResponse {
  users: User[];
  total: number;
}

export interface ApiError {
  error: string;
  message?: string;
}