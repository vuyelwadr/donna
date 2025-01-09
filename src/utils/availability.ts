import { DayAvailability, TimeSlot } from '../types/availability';
import { parse, isValid } from 'date-fns';

export function isDateAvailable(date: Date, schedule: DayAvailability[]): boolean {
  const dayOfWeek = date.getDay();
  const daySchedule = schedule.find(day => day.dayOfWeek === dayOfWeek);
  return daySchedule?.enabled ?? false;
}

export function getAvailableDays(schedule: DayAvailability[]): number[] {
  return schedule
    .filter(day => day.enabled)
    .map(day => day.dayOfWeek);
}

export function getAvailableTimeSlots(schedule: DayAvailability[], dateStr: string): TimeSlot[] {
  // Parse the date string safely
  const date = parse(dateStr, 'yyyy-MM-dd', new Date());
  
  // Validate the parsed date
  if (!isValid(date)) {
    return [];
  }

  const dayOfWeek = date.getDay();
  const daySchedule = schedule.find(day => day.dayOfWeek === dayOfWeek);
  
  if (!daySchedule?.enabled) {
    return [];
  }
  
  return daySchedule.timeSlots;
}

export function formatTimeSlot(slot: TimeSlot): string {
  return `${slot.start} - ${slot.end}`;
}
