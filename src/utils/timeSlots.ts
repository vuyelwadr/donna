import { parse, addHours, format } from 'date-fns';
import { TimeSlot } from '../types/availability';
import { FormData } from '../types/booking';

export interface HourlySlot {
  start: string;
  end: string;
  display: string;
}

export function generateHourlySlots(
  timeSlots: TimeSlot[],
  appointments: FormData[],
  date: string
): HourlySlot[] {
  const hourlySlots: HourlySlot[] = [];

  // Filter appointments to include only those matching the specified date
  const existingAppointmentTimes = appointments
    .filter((appointment) => appointment.date === date)
    .map((appointment) => appointment.time);

  timeSlots.forEach((slot) => {
    let currentTime = parse(slot.start, 'HH:mm', new Date());
    const endTime = parse(slot.end, 'HH:mm', new Date());

    while (currentTime < endTime) {
      const slotStart = format(currentTime, 'HH:mm');
      const slotEnd = format(addHours(currentTime, 1), 'HH:mm');

      // Include the slot only if it doesn't match any existing appointment times
      if (!existingAppointmentTimes.includes(slotStart)) {
        hourlySlots.push({
          start: slotStart,
          end: slotEnd,
          display: `${slotStart} - ${slotEnd}`,
        });
      }

      currentTime = addHours(currentTime, 1);
    }
  });

  return hourlySlots;
}
