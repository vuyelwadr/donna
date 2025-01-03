import React from 'react';
import { format } from 'date-fns';
import CalendarDay from './CalendarDay';
import CalendarHeader from './CalendarHeader';
import { DayAvailability } from '../../../types/availability';
import { isDateAvailable } from '../../../utils/availability';

interface Props {
  dates: Date[];
  selectedDate: Date | null;
  schedule: DayAvailability[];
  onDateSelect: (date: Date) => void;
}

export default function CalendarGrid({ dates, selectedDate, schedule, onDateSelect }: Props) {
  return (
    <div className="grid grid-cols-7 gap-1">
      <CalendarHeader />
      
      {dates.map(date => {
        const available = isDateAvailable(date, schedule);
        const selected = selectedDate && 
          format(date, 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd');
        
        return (
          <CalendarDay
            key={date.toISOString()}
            date={date}
            isAvailable={available}
            isSelected={selected}
            onSelect={onDateSelect}
          />
        );
      })}
    </div>
  );
}