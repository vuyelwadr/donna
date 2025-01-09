import React from 'react';
import { isSameMonth, isSameDay, isToday } from 'date-fns';
import CalendarDay from './CalendarDay';

interface Props {
  days: Date[];
  currentMonth: Date;
  selectedDate?: Date;
  onDateSelect?: (date: Date) => void;
  disabledDates: Date[];
}

export default function CalendarGrid({
  days,
  currentMonth,
  selectedDate,
  onDateSelect,
  disabledDates
}: Props) {
  return (
    <div className="grid grid-cols-7 gap-1">
      {days.map(date => (
        <CalendarDay
          key={date.toISOString()}
          date={date}
          isCurrentMonth={isSameMonth(date, currentMonth)}
          isSelected={selectedDate ? isSameDay(date, selectedDate) : false}
          isToday={isToday(date)}
          isDisabled={disabledDates.some(d => isSameDay(d, date))}
          onSelect={() => onDateSelect?.(date)}
        />
      ))}
    </div>
  );
}
