import { useQuery, useMutation } from '@tanstack/react-query';
import { LoginCredentials, AuthResponse } from '../types/auth';
import { getStoredToken, setStoredToken, clearStoredToken } from '../utils/auth';
import { mockLogin, mockGetUser } from '../services/mockAuthService';

export function useAuth() {
  const { data: user, isLoading } = useQuery({
    queryKey: ['admin-user'],
    queryFn: async () => {
      const token = getStoredToken();
      if (!token) return null;
      
      try {
        return await mockGetUser();
      } catch (error) {
        clearStoredToken();
        return null;
      }
    }
  });

  const login = useMutation({
    mutationFn: async (credentials: LoginCredentials): Promise<AuthResponse> => {
      try {
        const data = await mockLogin(credentials.email, credentials.password);
        setStoredToken(data.token);
        return data;
      } catch (error) {
        throw new Error('Invalid credentials');
      }
    }
  });

  const logout = () => {
    clearStoredToken();
    window.location.href = '/admin/login';
  };

  return {
    user,
    isLoading,
    login,
    logout,
    isAuthenticated: !!user
  };
}