import React from 'react';
import { Clock } from 'lucide-react';
import { MonthAvailability, TimeSlot } from '../../types/availability';
import { parseISO, format, isSameDay, addHours, isAfter, isBefore, startOfWeek } from 'date-fns';
import { generateHourlySlots } from '../../utils/timeSlots';

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  date: string;
  schedule: MonthAvailability[];
  appointments: any[];
  error?: string;
}

export default function TimeSelect({ value, onChange, onBlur, date, schedule, appointments, error }: Props) {
  const selectedDate = date ? parseISO(date) : null;
  const availableTimeSlots = selectedDate ? getAvailableTimeSlots(schedule, selectedDate, appointments) : [];

  const handleTimeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // Create a fake input event to maintain compatibility with the form
    const fakeEvent = {
      target: {
        name: 'time',
        value: e.target.value
      }
    } as React.ChangeEvent<HTMLInputElement>;
    
    onChange(fakeEvent);
  };

  return (
    <div>
      <label className="block text-brand-dark mb-2" htmlFor="time">
        Preferred Time<span className="text-brand-primary ml-1">*</span>
      </label>
      <div className="relative">
        <select
          id="time"
          name="time"
          required
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none appearance-none"
          value={value}
          onChange={handleTimeChange}
          onBlur={onBlur}
          disabled={!date || availableTimeSlots.length === 0}
        >
          <option value="">Select a time</option>
          {availableTimeSlots.map((slot) => (
            <option key={slot.start} value={slot.start}>
              {slot.display}
            </option>
          ))}
        </select>
        <Clock 
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" 
          size={20}
          strokeWidth={1.5}
        />
      </div>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      {date && availableTimeSlots.length === 0 && (
        <p className="mt-2 text-sm text-red-500">
          No available time slots for the selected date
        </p>
      )}
    </div>
  );
}

function getAvailableTimeSlots(schedule: MonthAvailability[], date: Date, appointments: any[]): any[] {
  const formattedDate = format(date, 'yyyy-MM-dd');
  const monthAvailability = schedule.find((month) => month.month === format(date, 'yyyy-MM'));

  if (!monthAvailability) {
    return [];
  }

  const dayOfWeek = date.getDay();
  const weekStart = format(startOfWeek(date, { weekStartsOn: 0 }), 'yyyy-MM-dd');
  const weekAvailability = monthAvailability.weeks.find((week) => week.weekStart === weekStart);

  if (!weekAvailability) {
    return [];
  }

  const dayAvailability = weekAvailability.days.find((day) => day.dayOfWeek === dayOfWeek);

  if (!dayAvailability || !dayAvailability.enabled) {
    return [];
  }

  return generateHourlySlots(dayAvailability.timeSlots, appointments, formattedDate);
}
