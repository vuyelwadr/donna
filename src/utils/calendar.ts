import {
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  startOfWeek,
  endOfWeek,
  addDays,
  format
} from 'date-fns';

export function generateCalendarDays(month: Date, weekStartsOn: 0 | 1): Date[] {
  const monthStart = startOfMonth(month);
  const monthEnd = endOfMonth(month);
  const calendarStart = startOfWeek(monthStart, { weekStartsOn });
  const calendarEnd = endOfWeek(monthEnd, { weekStartsOn });

  return eachDayOfInterval({ start: calendarStart, end: calendarEnd });
}

export function getWeekDays(weekStartsOn: 0 | 1): string[] {
  const start = startOfWeek(new Date(), { weekStartsOn });
  return Array.from({ length: 7 }, (_, i) => 
    format(addDays(start, i), 'EEE')
  );
}
