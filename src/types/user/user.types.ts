export interface User {
  id: string;
  email: string;
  password?: string;
  firstName: string;
  lastName: string;
  phone: string;
  role: string;
  isActive: boolean;
  lastLogin: string;
  createdAt: string;
  updatedAt: string;
}
