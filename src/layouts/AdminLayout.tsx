import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminHeader from '../components/admin/AdminHeader';
import AdminSidebar from '../components/admin/AdminSidebar';
import { ToastProvider } from '../context/ToastContext';
import Toast from '../components/shared/Toast';
import { useToast } from '../context/ToastContext';

export default function AdminLayout() {
  return (
    <ToastProvider>
      <div className="min-h-screen bg-gray-100">
        <AdminHeader />
        <div className="flex">
          <AdminSidebar />
          <main className="flex-1 p-6">
            <Outlet />
          </main>
        </div>
        <ToastContainer />
      </div>
    </ToastProvider>
  );
}

// Separate component to use the useToast hook within the ToastProvider
function ToastContainer() {
  const { message, type, isVisible, hideToast } = useToast();

  return (
    <Toast
      message={message}
      type={type}
      isVisible={isVisible}
      onClose={hideToast}
    />
  );
}
