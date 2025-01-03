import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { LogOut, User, Home } from 'lucide-react';
import Logo from '../Logo';
import { Link } from 'react-router-dom';

export default function AdminHeader() {
  const { user, logout } = useAuth();

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-4">
            <Logo size="sm" />
            <span className="text-xl font-semibold text-gray-900">Admin Panel</span>
            <Link 
              to="/"
              className="flex items-center gap-2 text-brand-primary hover:text-brand-primary/80 transition-colors"
            >
              <Home className="w-4 h-4" />
              <span className="text-sm">View Site</span>
            </Link>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5 text-gray-500" />
              <span className="text-sm text-gray-700">{user?.email}</span>
            </div>
            <button
              onClick={logout}
              className="flex items-center gap-2 text-gray-700 hover:text-red-600 transition-colors"
            >
              <LogOut className="w-5 h-5" />
              <span className="text-sm">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}