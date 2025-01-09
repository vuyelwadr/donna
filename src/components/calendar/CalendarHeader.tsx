import React from 'react';
import { getWeekDays } from '../../utils/calendar';

interface Props {
  weekStartsOn: 0 | 1;
}

export default function CalendarHeader({ weekStartsOn }: Props) {
  const weekDays = getWeekDays(weekStartsOn);

  return (
    <div className="grid grid-cols-7 mb-4">
      {weekDays.map(day => (
        <div
          key={day}
          className="text-center text-sm font-medium text-gray-500"
        >
          {day}
        </div>
      ))}
    </div>
  );
}
