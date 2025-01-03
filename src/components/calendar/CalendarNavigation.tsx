import React from 'react';
import { format, isAfter, isBefore, startOfMonth, endOfMonth } from 'date-fns';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Props {
  currentMonth: Date;
  onPreviousMonth: () => void;
  onNextMonth: () => void;
  minDate?: Date;
  maxDate?: Date;
}

export default function CalendarNavigation({
  currentMonth,
  onPreviousMonth,
  onNextMonth,
  minDate,
  maxDate
}: Props) {
  const isPreviousDisabled = minDate && isBefore(startOfMonth(currentMonth), startOfMonth(minDate));
  const isNextDisabled = maxDate && isAfter(endOfMonth(currentMonth), endOfMonth(maxDate));

  return (
    <div className="flex items-center justify-between px-4 py-3 border-b">
      <button
        type="button"
        onClick={onPreviousMonth}
        disabled={isPreviousDisabled}
        className="p-2 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <h2 className="text-lg font-semibold text-gray-900">
        {format(currentMonth, 'MMMM yyyy')}
      </h2>
      <button
        type="button"
        onClick={onNextMonth}
        disabled={isNextDisabled}
        className="p-2 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}