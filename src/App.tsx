import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ContentProvider } from './context/ContentContext';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/admin/LoginPage';
import AdminLayout from './layouts/AdminLayout';
import AdminDashboard from './pages/admin/DashboardPage';
import ContentPage from './pages/admin/ContentPage';
import AvailabilityPage from './pages/admin/AvailabilityPage';
import ProtectedRoute from './components/admin/auth/ProtectedRoute';


const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ContentProvider>
        <BrowserRouter>
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<MainLayout />}>
              <Route index element={<HomePage />} />
            </Route>

            {/* Admin routes */}
            <Route path="/admin">
              <Route path="login" element={<LoginPage />} />
              <Route element={
                <ProtectedRoute>
                  <AdminLayout />
                </ProtectedRoute>
              }>
                <Route index element={<AdminDashboard />} />
                <Route path="content" element={<ContentPage />} />
                <Route path="availability" element={<AvailabilityPage />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </ContentProvider>
    </QueryClientProvider>
  );
}
