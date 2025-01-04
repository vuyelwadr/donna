import { boolean } from 'zod';
import { TimeSlot } from '../types/availability';
import { FormData } from '../types/booking';

import { parse, addHours, format } from 'date-fns';

export interface HourlySlot {
  start: string;
  end: string;
  display: string;
}

export function generateHourlySlots(timeSlots: TimeSlot[], appointments: FormData[], date: string): HourlySlot[] {
  const hourlySlots: HourlySlot[] = [];
  const matchingAppointment = appointments.find(appointment => appointment.date === date);

  let existingAppointmentForDate = !!matchingAppointment; // true if a matching appointment exists
  let existingAppointmentTime = matchingAppointment?.time || ''; // Time of the found appointment, or an empty string

  timeSlots.forEach(slot => {
    let currentTime = parse(slot.start, 'HH:mm', new Date());
    const endTime = parse(slot.end, 'HH:mm', new Date());

    while (currentTime < endTime) {
      const slotStart = format(currentTime, 'HH:mm');
      const slotEnd = format(addHours(currentTime, 1), 'HH:mm');
      if (existingAppointmentForDate && existingAppointmentTime != slotStart){
        hourlySlots.push({
          start: slotStart,
          end: slotEnd,
          display: `${slotStart} - ${slotEnd}`
        });
      }
      

      currentTime = addHours(currentTime, 1);
    }
  });

  return hourlySlots;
}