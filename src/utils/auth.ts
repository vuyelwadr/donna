import { jwtVerify, SignJWT } from 'jose';
import { AdminUser } from '../types/auth';

// Use Vite's import.meta.env instead of process.env
const JWT_SECRET = new TextEncoder().encode(import.meta.env.VITE_JWT_SECRET || 'your-secret-key');

export async function createToken(user: AdminUser): Promise<string> {
  return new SignJWT({ sub: user.id, email: user.email, role: user.role })
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('8h')
    .sign(JWT_SECRET);
}

export async function verifyToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);
    return payload;
  } catch (error) {
    return null;
  }
}

export function getStoredToken(): string | null {
  return localStorage.getItem('adminToken');
}

export function setStoredToken(token: string): void {
  localStorage.setItem('adminToken', token);
}

export function clearStoredToken(): void {
  localStorage.removeItem('adminToken');
}