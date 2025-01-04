import React from 'react';
import { Outlet } from 'react-router-dom';
import { BookingProvider } from '../context/BookingContext';

export default function MainLayout() {
  return (
      <BookingProvider>
        <Outlet />
      </BookingProvider>
  );
}