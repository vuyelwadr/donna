import React, { useState } from 'react';
import { DayAvailability } from '../../types/availability';
import { isDateAvailable } from '../../utils/availability';
import { format, parse } from 'date-fns';

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  schedule: DayAvailability[];
  error?: string;
}

export default function DateSelect({ value, onChange, onBlur, schedule, error }: Props) {
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = parse(e.target.value, 'yyyy-MM-dd', new Date());
    
    // Only allow changes if the selected date is available
    if (isDateAvailable(date, schedule)) {
      onChange(e);
    }
  };

  return (
    <div>
      <label className="block text-brand-dark mb-2" htmlFor="date">
        Preferred Date<span className="text-brand-primary ml-1">*</span>
      </label>
      <div className="relative">
        <input
          type="date"
          id="date"
          name="date"
          required
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none"
          value={value}
          onChange={handleDateChange}
          onBlur={onBlur}
        />
      </div>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      <AvailableDays schedule={schedule} />
    </div>
  );
}

function AvailableDays({ schedule }: { schedule: DayAvailability[] }) {
  const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const availableDays = schedule
    .filter(day => day.enabled)
    .map(day => DAYS[day.dayOfWeek])
    .join(', ');

  return (
    <p className="mt-2 text-sm text-gray-600">
      Available days: {availableDays}
    </p>
  );
}