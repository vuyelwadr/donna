import React, { useState } from 'react';
import { format, addDays, parse } from 'date-fns';
import { Calendar } from 'lucide-react';
import { DayAvailability } from '../../../types/availability';
import CalendarGrid from './CalendarGrid';
import AvailableDays from './AvailableDays';

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  schedule: DayAvailability[];
  error?: string;
}

export default function DateSelect({ value, onChange, onBlur, schedule, error }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  
  // Get next 30 days
  const dates = Array.from({ length: 30 }, (_, i) => addDays(new Date(), i));
  const selectedDate = value ? parse(value, 'yyyy-MM-dd', new Date()) : null;

  const handleDateSelect = (date: Date) => {
    const fakeEvent = {
      target: {
        name: 'date',
        value: format(date, 'yyyy-MM-dd')
      }
    } as React.ChangeEvent<HTMLInputElement>;
    
    onChange(fakeEvent);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <label className="block text-brand-dark mb-2" htmlFor="date">
        Preferred Date<span className="text-brand-primary ml-1">*</span>
      </label>
      
      <div className="relative">
        <input
          type="text"
          id="date"
          name="date"
          required
          readOnly
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none cursor-pointer"
          value={selectedDate ? format(selectedDate, 'MMMM d, yyyy') : ''}
          onClick={() => setIsOpen(!isOpen)}
          onBlur={onBlur}
        />
        <Calendar 
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" 
          size={20} 
        />
      </div>

      {isOpen && (
        <div className="absolute z-50 mt-2 p-4 bg-white rounded-lg shadow-xl border border-gray-200">
          <CalendarGrid
            dates={dates}
            selectedDate={selectedDate}
            schedule={schedule}
            onDateSelect={handleDateSelect}
          />
        </div>
      )}

      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      <AvailableDays schedule={schedule} />
    </div>
  );
}