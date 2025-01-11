import React from 'react';
import { Clock } from 'lucide-react';
import { DayAvailability, TimeSlot } from '../../../types/availability';
import { isBefore, parseISO, format, addDays } from 'date-fns';

interface Props {
  day: DayAvailability;
  onUpdate: (updated: DayAvailability) => void;
  onApplyToAll: (dayOfWeek: number, timeSlots: TimeSlot[]) => void;
  weekStart: string;
}

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export default function DaySchedule({ day, onUpdate, onApplyToAll, weekStart }: Props) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Calculate the date of the day in the week
  const dayDate = addDays(parseISO(weekStart), day.dayOfWeek);

  const isPastDay = isBefore(dayDate, today);

  const handleToggleDay = () => {
    if (!isPastDay) {
      onUpdate({
        ...day,
        enabled: !day.enabled,
        timeSlots: day.enabled ? [] : [{ start: '08:00', end: '20:00' }]
      });
    }
  };

  const handleApplyToAll = () => {
    if (!isPastDay) {
      onApplyToAll(day.dayOfWeek, day.timeSlots);
    }
  };

  const handleTimeChange = (index: number, field: keyof TimeSlot, value: string) => {
    if (!isPastDay) {
      const newTimeSlots = [...day.timeSlots];
      newTimeSlots[index] = { ...newTimeSlots[index], [field]: value };
      onUpdate({ ...day, timeSlots: newTimeSlots });
    }
  };

  const addTimeSlot = () => {
    if (!isPastDay) {
      onUpdate({
        ...day,
        timeSlots: [...day.timeSlots, { start: '08:00', end: '20:00' }]
      });
    }
  };

  const removeTimeSlot = (index: number) => {
    if (!isPastDay) {
      const newTimeSlots = day.timeSlots.filter((_, i) => i !== index);
      onUpdate({ ...day, timeSlots: newTimeSlots });
    }
  };

  return (
    <div className={`p-4 border rounded-lg bg-white ${!day.enabled ? 'opacity-60' : ''}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className={`text-lg font-medium ${!day.enabled ? 'text-gray-500' : ''}`}>
          <span className={`${isPastDay ? 'line-through' : ''}`}>
            {DAYS[day.dayOfWeek]}
          </span>
          <span className="ml-2 text-sm text-gray-500">
            {format(dayDate, 'dd MMMM yyyy')}
          </span>
        </h3>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={day.enabled}
            onChange={handleToggleDay}
            className="sr-only peer"
            disabled={isPastDay}
          />
          <div className={`w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-primary ${isPastDay ? 'opacity-50 cursor-not-allowed' : ''}`}></div>
        </label>
      </div>

      {day.enabled && (
        <div className="space-y-4 relative">
          {day.timeSlots.map((slot, index) => (
            <div key={index} className="flex items-center gap-4">
              <Clock className="w-5 h-5 text-gray-400" />
              <input
                type="time"
                value={slot.start}
                onChange={(e) => handleTimeChange(index, 'start', e.target.value)}
                className="border rounded px-2 py-1"
                disabled={isPastDay}
              />
              <span>to</span>
              <input
                type="time"
                value={slot.end}
                onChange={(e) => handleTimeChange(index, 'end', e.target.value)}
                className="border rounded px-2 py-1"
                disabled={isPastDay}
              />
              <button
                onClick={() => removeTimeSlot(index)}
                className="text-red-500 hover:text-red-600"
                disabled={isPastDay}
              >
                Remove
              </button>
            </div>
          ))}
          <button
            onClick={addTimeSlot}
            className="text-brand-primary hover:text-brand-primary/80"
            disabled={isPastDay}
          >
            Add Time Slot
          </button>
          <button
            onClick={handleApplyToAll}
            className="absolute bottom-0 right-0 text-sm text-gray-600 hover:text-brand-primary/80 mt-4"
            disabled={isPastDay}
          >
            Apply to remaining {DAYS[day.dayOfWeek]}s of the month
          </button>
        </div>
      )}
    </div>
  );
}
