import React from 'react';
import Hero from './components/Hero';
import MasseuseProfile from './components/MasseuseProfile';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import BookingForm from './components/BookingForm';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <MasseuseProfile />
      <Services />
      <Testimonials />
      <BookingForm />
    </div>
  );
}

export default App;