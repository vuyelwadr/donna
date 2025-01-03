import React, { useState } from 'react';
import { addMonths, subMonths, startOfMonth } from 'date-fns';
import CalendarHeader from './CalendarHeader';
import CalendarGrid from './CalendarGrid';
import MonthNavigation from './MonthNavigation';
import { generateCalendarDays } from '../../utils/calendar';

interface Props {
  selectedDate?: Date;
  onDateSelect?: (date: Date) => void;
  minDate?: Date;
  maxDate?: Date;
  disabledDates?: Date[];
  weekStartsOn?: 0 | 1; // 0 for Sunday, 1 for Monday
}

export default function Calendar({
  selectedDate,
  onDateSelect,
  minDate,
  maxDate,
  disabledDates = [],
  weekStartsOn = 0
}: Props) {
  const [currentMonth, setCurrentMonth] = useState(startOfMonth(new Date()));
  const days = generateCalendarDays(currentMonth, weekStartsOn);

  const handlePrevMonth = () => setCurrentMonth(prev => subMonths(prev, 1));
  const handleNextMonth = () => setCurrentMonth(prev => addMonths(prev, 1));

  return (
    <div className="w-full max-w-md bg-white rounded-lg shadow-lg">
      <MonthNavigation
        currentMonth={currentMonth}
        onPrevMonth={handlePrevMonth}
        onNextMonth={handleNextMonth}
        minDate={minDate}
        maxDate={maxDate}
      />
      <div className="p-4">
        <CalendarHeader weekStartsOn={weekStartsOn} />
        <CalendarGrid
          days={days}
          currentMonth={currentMonth}
          selectedDate={selectedDate}
          onDateSelect={onDateSelect}
          disabledDates={disabledDates}
        />
      </div>
    </div>
  );
}