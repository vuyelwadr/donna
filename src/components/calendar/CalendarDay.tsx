import React from 'react';
import { format } from 'date-fns';

interface Props {
  date: Date;
  isCurrentMonth: boolean;
  isSelected: boolean;
  isToday: boolean;
  isDisabled: boolean;
  onSelect: () => void;
}

export default function CalendarDay({
  date,
  isCurrentMonth,
  isSelected,
  isToday,
  isDisabled,
  onSelect
}: Props) {
  return (
    <button
      type="button"
      onClick={onSelect}
      disabled={isDisabled}
      className={`
        w-full aspect-square flex items-center justify-center
        text-sm rounded-md transition-colors
        ${isCurrentMonth ? 'text-gray-900' : 'text-gray-400'}
        ${isSelected ? 'bg-brand-primary text-white' : ''}
        ${isToday && !isSelected ? 'bg-brand-primary/10' : ''}
        ${!isDisabled && !isSelected ? 'hover:bg-gray-100' : ''}
        ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}
      `}
      aria-label={format(date, 'MMMM d, yyyy')}
      aria-pressed={isSelected}
      aria-disabled={isDisabled}
    >
      {format(date, 'd')}
    </button>
  );
}
