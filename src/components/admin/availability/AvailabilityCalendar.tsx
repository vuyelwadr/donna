import React, { useState, useEffect } from 'react';
import { Save } from 'lucide-react';
import DaySchedule from './DaySchedule';
import { loadAvailability, saveAvailability } from '../../../services/availabilityService';
import type { DayAvailability, AvailabilityData } from '../../../types/availability';
import { useToast } from '../../../context/ToastContext';


export default function AvailabilityCalendar() {
  const [schedule, setSchedule] = useState<DayAvailability[]>([]);
  const [isSaving, setIsSaving] = useState(false);
  const { showToast } = useToast();
  

  useEffect(() => {
    const fetchAvailability = async () => {
      try {
        const data: AvailabilityData = await loadAvailability();
        setSchedule(data.schedule);
      } catch (error) {
        console.error('Failed to load availability:', error);
        // Optionally handle the error, e.g., set an error state or notify the user
      }
    };

    fetchAvailability();
  }, []);

  const handleDayUpdate = (dayIndex: number, updatedDay: DayAvailability) => {
    setSchedule((prev) =>
      prev.map((day, i) => (i === dayIndex ? updatedDay : day))
    );
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      await saveAvailability({ schedule });
  
          showToast(
            'Your Availability schedule has been updated.',
            'success'
          );
    } catch (error) {
      console.error('Failed to save availability:', error);
      showToast(
        'Your Availability schedule saving failed. Try again.',
        'error'
      );
      // Optionally handle the error, e.g., revert the update or notify the user
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-gray-900">Availability Schedule</h2>
        <button
          onClick={handleSave}
          disabled={isSaving}
          className="flex items-center gap-2 px-4 py-2 bg-brand-primary text-white rounded-md hover:bg-brand-primary/90 disabled:opacity-50"
        >
          <Save className="w-4 h-4" />
          {isSaving ? 'Saving...' : 'Save Changes'}
        </button>
      </div>

      <div className="space-y-4">
        {schedule.map((day, index) => (
          <DaySchedule
            key={day.dayOfWeek}
            day={day}
            onUpdate={(updated) => handleDayUpdate(index, updated)}
          />
        ))}
      </div>
    </div>
  );
}
