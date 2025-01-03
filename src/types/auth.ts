export interface AdminUser {
  id: string;
  email: string;
  role: 'admin' | 'super_admin';
  name: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthResponse {
  user: AdminUser;
  token: string;
}