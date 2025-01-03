import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import LoginForm from '../../components/admin/auth/LoginForm';
import Logo from '../../components/Logo';

export default function LoginPage() {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/admin" replace />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <Logo size="lg" className="mx-auto" />
          <h2 className="mt-6 text-3xl font-bold text-gray-900">Admin Login</h2>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}