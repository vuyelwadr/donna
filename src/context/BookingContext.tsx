import React, { createContext, useContext, useState } from 'react';

interface BookingContextType {
  selectedService: string;
  setSelectedService: (service: string) => void;
  isPreselected: boolean;
  setIsPreselected: (value: boolean) => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [selectedService, setSelectedService] = useState('');
  const [isPreselected, setIsPreselected] = useState(false);

  return (
    <BookingContext.Provider value={{ 
      selectedService, 
      setSelectedService,
      isPreselected,
      setIsPreselected
    }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
}
