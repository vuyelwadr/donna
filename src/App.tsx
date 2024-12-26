import React from 'react';
import Header from './components/Header';
import Hero from './components/hero/Hero';
import MasseuseProfile from './components/sections/MasseuseProfile';
import Services from './components/Services';
import Testimonials from './components/sections/testimonials/Testimonials';
import BookingForm from './components/BookingForm';
import ContactDetails from './components/sections/ContactDetails';
import Footer from './components/Footer';
import MainBackground from './components/MainBackground';
import BackgroundDecoration from './components/BackgroundDecoration';
import { BookingProvider } from './context/BookingContext';
import { ToastProvider } from './context/ToastContext';
import Toast from './components/shared/Toast';
import { useToast } from './context/ToastContext';

function AppContent() {
  const { message, type, isVisible, hideToast } = useToast();
  
  return (
    <div className="min-h-screen relative">
      <MainBackground />
      <div className="relative z-10">
        <BackgroundDecoration />
        <Header />
        <Hero />
        <MasseuseProfile />
        <Services />
        <Testimonials />
        <BookingForm />
        <ContactDetails />
        <Footer />
        <Toast
          message={message}
          type={type}
          isVisible={isVisible}
          onClose={hideToast}
        />
      </div>
    </div>
  );
}

function App() {
  return (
    <ToastProvider>
      <BookingProvider>
        <AppContent />
      </BookingProvider>
    </ToastProvider>
  );
}

export default App;