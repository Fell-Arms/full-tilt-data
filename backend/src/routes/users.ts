import express, { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import type { User, CreateUserRequest } from '../types/user';

const router = express.Router();

// In-memory storage (as specified in requirements)
let users: User[] = [
  {
    id: uuidv4(),
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    active: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: uuidv4(),
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane.smith@example.com',
    active: false,
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

// GET /api/users - Get all users
router.get('/', (req: Request, res: Response) => {
  try {
    res.json({
      users,
      total: users.length
    });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

// POST /api/users - Create a new user
router.post('/', (req: Request, res: Response): void => {
  try {
    const { firstName, lastName, email, active }: CreateUserRequest = req.body;

    // Basic validation
    if (!firstName || !lastName || !email) {
      res.status(400).json({ 
        error: 'Missing required fields: firstName, lastName, and email are required' 
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      res.status(400).json({ 
        error: 'Invalid email format' 
      });
    }

    // Check if email already exists
    const existingUser = users.find(user => user.email.toLowerCase() === email.toLowerCase());
    if (existingUser) {
      res.status(409).json({ 
        error: 'User with this email already exists' 
      });
    }

    const newUser: User = {
      id: uuidv4(),
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.toLowerCase().trim(),
      active: active ?? true, // Default to true if not provided
      createdAt: new Date(),
      updatedAt: new Date()
    };

    users.push(newUser);

    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Failed to create user' });
  }
});

export default router;