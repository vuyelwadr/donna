import { TimeSlot } from '../types/availability';
import { parse, addHours, format } from 'date-fns';

export interface HourlySlot {
  start: string;
  end: string;
  display: string;
}

export function generateHourlySlots(timeSlots: TimeSlot[]): HourlySlot[] {
  const hourlySlots: HourlySlot[] = [];

  timeSlots.forEach(slot => {
    let currentTime = parse(slot.start, 'HH:mm', new Date());
    const endTime = parse(slot.end, 'HH:mm', new Date());

    while (currentTime < endTime) {
      const slotStart = format(currentTime, 'HH:mm');
      const slotEnd = format(addHours(currentTime, 1), 'HH:mm');
      
      hourlySlots.push({
        start: slotStart,
        end: slotEnd,
        display: `${slotStart} - ${slotEnd}`
      });

      currentTime = addHours(currentTime, 1);
    }
  });

  return hourlySlots;
}