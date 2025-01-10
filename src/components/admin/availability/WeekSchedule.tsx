import React, { useState, useEffect } from 'react';
import DaySchedule from './DaySchedule';
import { WeekAvailability, TimeSlot } from '../../../types/availability';
import { format, parseISO } from 'date-fns';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface Props {
  week: WeekAvailability;
  onUpdate: (updated: WeekAvailability) => void;
  onApplyToAll: (dayOfWeek: number, timeSlots: TimeSlot[]) => void;
  isExpanded: boolean;
  onToggleExpand: () => void;
}

export default function WeekSchedule({ week, onUpdate, onApplyToAll, isExpanded, onToggleExpand }: Props) {
  const handleDayUpdate = (dayIndex: number, updatedDay: any) => {
    const newDays = week.days.map((day, i) => (i === dayIndex ? updatedDay : day));
    onUpdate({ ...week, days: newDays });
  };

  return (
    <div className="p-4 border rounded-lg bg-white">
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-medium">
          Week of {format(parseISO(week.weekStart), 'MMM d, yyyy')}
        </h4>
        <button onClick={onToggleExpand} className="text-gray-500 hover:text-gray-700">
          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      </div>
      {isExpanded && (
        <div className="space-y-4">
          {week.days.map((day, index) => (
            <DaySchedule
              key={day.dayOfWeek}
              day={day}
              onUpdate={(updated) => handleDayUpdate(index, updated)}
              onApplyToAll={onApplyToAll}
              weekStart={week.weekStart}
            />
          ))}
        </div>
      )}
    </div>
  );
}
