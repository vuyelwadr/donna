import React from 'react';
import { Clock } from 'lucide-react';
import { DayAvailability, TimeSlot } from '../../../types/availability';

interface Props {
  day: DayAvailability;
  onUpdate: (updated: DayAvailability) => void;
}

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export default function DaySchedule({ day, onUpdate }: Props) {
  const handleToggleDay = () => {
    onUpdate({
      ...day,
      enabled: !day.enabled,
      timeSlots: day.enabled ? [] : [{ start: '08:00', end: '20:00' }]
    });
  };

  const handleTimeChange = (index: number, field: keyof TimeSlot, value: string) => {
    const newTimeSlots = [...day.timeSlots];
    newTimeSlots[index] = { ...newTimeSlots[index], [field]: value };
    onUpdate({ ...day, timeSlots: newTimeSlots });
  };

  const addTimeSlot = () => {
    onUpdate({
      ...day,
      timeSlots: [...day.timeSlots, { start: '08:00', end: '20:00' }]
    });
  };

  const removeTimeSlot = (index: number) => {
    const newTimeSlots = day.timeSlots.filter((_, i) => i !== index);
    onUpdate({ ...day, timeSlots: newTimeSlots });
  };

  return (
    <div className="p-4 border rounded-lg bg-white">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium">{DAYS[day.dayOfWeek]}</h3>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={day.enabled}
            onChange={handleToggleDay}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-primary"></div>
        </label>
      </div>

      {day.enabled && (
        <div className="space-y-4">
          {day.timeSlots.map((slot, index) => (
            <div key={index} className="flex items-center gap-4">
              <Clock className="w-5 h-5 text-gray-400" />
              <input
                type="time"
                value={slot.start}
                onChange={(e) => handleTimeChange(index, 'start', e.target.value)}
                className="border rounded px-2 py-1"
              />
              <span>to</span>
              <input
                type="time"
                value={slot.end}
                onChange={(e) => handleTimeChange(index, 'end', e.target.value)}
                className="border rounded px-2 py-1"
              />
              <button
                onClick={() => removeTimeSlot(index)}
                className="text-red-500 hover:text-red-600"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            onClick={addTimeSlot}
            className="text-brand-primary hover:text-brand-primary/80"
          >
            Add Time Slot
          </button>
        </div>
      )}
    </div>
  );
}