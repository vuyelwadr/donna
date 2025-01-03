import React from 'react';
import { Outlet } from 'react-router-dom';
import { BookingProvider } from '../context/BookingContext';
import { ToastProvider } from '../context/ToastContext';

export default function MainLayout() {
  return (
    <ToastProvider>
      <BookingProvider>
        <Outlet />
      </BookingProvider>
    </ToastProvider>
  );
}