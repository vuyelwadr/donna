import React, { useState, useEffect } from 'react';
import WeekSchedule from './WeekSchedule';
import { MonthAvailability, DayAvailability, TimeSlot } from '../../../types/availability';
import {
  startOfWeek,
  format,
  parseISO,
  addWeeks,
  isSameMonth,
  endOfMonth,
  eachDayOfInterval,
  addDays,
  isBefore,
} from 'date-fns';

interface Props {
  month: MonthAvailability;
  onUpdate: (updated: MonthAvailability) => void;
}

export default function MonthSchedule({ month, onUpdate }: Props) {
  const [expandedWeeks, setExpandedWeeks] = useState<string[]>([]);

  useEffect(() => {
    // Expand the current week by default
    const today = new Date();
    const currentWeekStart = format(startOfWeek(today, { weekStartsOn: 0 }), 'yyyy-MM-dd');
    if (isSameMonth(today, parseISO(month.month + '-01'))) {
      setExpandedWeeks([currentWeekStart]);
    }
  }, [month]);

  const handleWeekUpdate = (weekIndex: number, updatedWeek: any) => {
    const newWeeks = month.weeks.map((week, i) => (i === weekIndex ? updatedWeek : week));
    onUpdate({ ...month, weeks: newWeeks });
  };

  const handleAddWeek = () => {
    const newWeekStart = month.weeks && month.weeks.length > 0
      ? format(addWeeks(parseISO(month.weeks[month.weeks.length - 1].weekStart), 1), 'yyyy-MM-dd')
      : format(startOfWeek(new Date(month.month), { weekStartsOn: 0 }), 'yyyy-MM-dd');
    const newWeek = {
      weekStart: newWeekStart,
      days: Array.from({ length: 7 }, (_, dayOfWeek) => ({
        dayOfWeek,
        enabled: false,
        timeSlots: []
      }))
    };
    onUpdate({ ...month, weeks: [...(month.weeks || []), newWeek] });
  };

  const handleApplyToAll = (dayOfWeek: number, timeSlots: TimeSlot[]) => {
    const monthStart = parseISO(month.month + '-01');
    const monthEnd = endOfMonth(monthStart);
    const updatedWeeks = month.weeks.map(week => {
      const weekStart = parseISO(week.weekStart);
      const updatedDays = week.days.map(day => {
        if (day.dayOfWeek === dayOfWeek) {
          const currentDate = addDays(weekStart, day.dayOfWeek);
          if (isSameMonth(currentDate, monthStart) && !isBefore(currentDate, new Date())) {
            return { ...day, enabled: true, timeSlots };
          }
        }
        return day;
      });
      return { ...week, days: updatedDays };
    });
    onUpdate({ ...month, weeks: updatedWeeks });

    // Identify and expand weeks that have the specified dayOfWeek
    const weeksToExpand = updatedWeeks
      .filter(week => {
        const weekStart = parseISO(week.weekStart);
        return week.days.some(day => day.dayOfWeek === dayOfWeek && isSameMonth(addDays(weekStart, day.dayOfWeek), monthStart));
      })
      .map(week => week.weekStart);
    setExpandedWeeks(prev => [...new Set([...prev, ...weeksToExpand])]);
  };

  const handleToggleWeek = (weekStart: string) => {
    setExpandedWeeks(prev => {
      if (prev.includes(weekStart)) {
        return prev.filter(w => w !== weekStart);
      } else {
        return [...prev, weekStart];
      }
    });
  };

  // Generate week data for the month
  const monthStart = parseISO(month.month + '-01');
  const monthEnd = endOfMonth(monthStart);
  const weeksInMonth = [];
  let currentWeekStart = startOfWeek(monthStart, { weekStartsOn: 0 });

  while (isBefore(currentWeekStart, monthEnd)) {
    const weekStartFormatted = format(currentWeekStart, 'yyyy-MM-dd');
    weeksInMonth.push({
      weekStart: weekStartFormatted,
      days: Array.from({ length: 7 }, (_, dayOfWeek) => ({
        dayOfWeek,
        enabled: false,
        timeSlots: []
      }))
    });
    currentWeekStart = addWeeks(currentWeekStart, 1);
  }

  // Ensure the weeks data exists in state, and add any missing weeks
  useEffect(() => {
    if (!month.weeks || month.weeks.length === 0) {
      onUpdate({ ...month, weeks: weeksInMonth });
    } else {
      const updatedWeeks = [...month.weeks];
      let isUpdated = false;
      weeksInMonth.forEach(newWeek => {
        if (!month.weeks.some(week => week.weekStart === newWeek.weekStart)) {
          updatedWeeks.push(newWeek);
          isUpdated = true;
        }
      });
      if (isUpdated) {
        onUpdate({ ...month, weeks: updatedWeeks });
      }
    }
  }, [month, onUpdate]);

  return (
    <div className="space-y-4">
      {month.weeks && month.weeks.map((week, index) => (
        <WeekSchedule
          key={week.weekStart}
          week={week}
          onUpdate={(updated) => handleWeekUpdate(index, updated)}
          onApplyToAll={handleApplyToAll}
          isExpanded={expandedWeeks.includes(week.weekStart)}
          onToggleExpand={() => handleToggleWeek(week.weekStart)}
        />
      ))}
    </div>
  );
}
