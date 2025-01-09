import React from 'react';
import { format } from 'date-fns';

interface Props {
  date: Date;
  isAvailable: boolean;
  isSelected: boolean;
  onSelect: (date: Date) => void;
}

export default function CalendarDay({ date, isAvailable, isSelected, onSelect }: Props) {
  return (
    <button
      type="button"
      onClick={() => isAvailable && onSelect(date)}
      disabled={!isAvailable}
      className={`
        p-2 text-sm rounded-md transition-colors
        ${isSelected ? 'bg-brand-primary text-white' : ''}
        ${isAvailable 
          ? 'hover:bg-brand-primary/10 text-gray-900' 
          : 'text-gray-400 bg-gray-100 cursor-not-allowed opacity-50'
        }
      `}
      aria-label={`Select ${format(date, 'MMMM d, yyyy')}`}
      aria-disabled={!isAvailable}
      aria-selected={isSelected}
    >
      {format(date, 'd')}
    </button>
  );
}
