import React from 'react';

const WEEKDAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

export default function CalendarHeader() {
  return (
    <>
      {WEEKDAYS.map(day => (
        <div 
          key={day} 
          className="text-center text-sm font-medium text-gray-600 p-2"
        >
          {day}
        </div>
      ))}
    </>
  );
}