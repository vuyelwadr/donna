import React from 'react';
import { format, isBefore, isAfter, startOfMonth, endOfMonth } from 'date-fns';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Props {
  currentMonth: Date;
  onPrevMonth: () => void;
  onNextMonth: () => void;
  minDate?: Date;
  maxDate?: Date;
}

export default function MonthNavigation({
  currentMonth,
  onPrevMonth,
  onNextMonth,
  minDate,
  maxDate
}: Props) {
  const isPrevDisabled = minDate && isBefore(startOfMonth(currentMonth), startOfMonth(minDate));
  const isNextDisabled = maxDate && isAfter(endOfMonth(currentMonth), endOfMonth(maxDate));

  return (
    <div className="flex items-center justify-between p-4 border-b">
      <button
        type="button"
        onClick={onPrevMonth}
        disabled={isPrevDisabled}
        className="p-1 hover:bg-gray-100 rounded-full disabled:opacity-50"
        aria-label="Previous month"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      
      <h2 className="text-lg font-semibold">
        {format(currentMonth, 'MMMM yyyy')}
      </h2>
      
      <button
        type="button"
        onClick={onNextMonth}
        disabled={isNextDisabled}
        className="p-1 hover:bg-gray-100 rounded-full disabled:opacity-50"
        aria-label="Next month"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}
