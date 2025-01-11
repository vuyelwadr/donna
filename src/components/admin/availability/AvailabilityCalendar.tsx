import React, { useState, useEffect } from 'react';
import { Save } from 'lucide-react';
import MonthSchedule from './MonthSchedule';
import { loadAvailability, saveAvailability } from '../../../services/availabilityService';
import type { MonthAvailability, AvailabilityData } from '../../../types/availability';
import { format, startOfMonth, addMonths, subMonths } from 'date-fns';
import { useToast } from '../../../context/ToastContext';

export default function AvailabilityCalendar() {
  const [schedule, setSchedule] = useState<MonthAvailability[]>([]);
  const [isSaving, setIsSaving] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(startOfMonth(new Date()));
  const { showToast } = useToast();
  const [expandedAll, setExpandedAll] = useState(false);

  useEffect(() => {
    const fetchAvailability = async () => {
      try {
        const data: AvailabilityData = await loadAvailability();
        setSchedule(data.schedule);
      } catch (error) {
        console.error('Failed to load availability:', error);
      }
    };

    fetchAvailability();
  }, []);

  const handleMonthUpdate = (monthIndex: number, updatedMonth: MonthAvailability) => {
    setSchedule((prev) =>
      prev.map((month, i) => (i === monthIndex ? updatedMonth : month))
    );
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      await saveAvailability({ schedule });
      showToast('Availability saved successfully!', 'success');
    } catch (error) {
      console.error('Failed to save availability:', error);
      showToast('Failed to save availability', 'error');
    } finally {
      setIsSaving(false);
    }
  };

  const handlePrevMonth = () => {
    setCurrentMonth(prev => subMonths(prev, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(prev => addMonths(prev, 1));
  };

  const currentMonthStr = format(currentMonth, 'yyyy-MM');
  const currentMonthData = schedule.find(month => month.month === currentMonthStr);

  const handleAddMonth = () => {
    if (!currentMonthData) {
      const newMonth = {
        month: currentMonthStr,
        weeks: []
      };
      setSchedule(prev => [...prev, newMonth]);
    }
  };

  const handleToggleAll = () => {
    setExpandedAll(prev => !prev);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-gray-900">Availability Schedule</h2>
        <div className="flex items-center gap-4">
          <button
            onClick={handleToggleAll}
            className="text-sm text-gray-600 hover:text-brand-primary/80"
          >
            {expandedAll ? 'Collapse All' : 'Expand All'}
          </button>
          <button
            onClick={handleSave}
            disabled={isSaving}
            className="flex items-center gap-2 px-4 py-2 bg-brand-primary text-white rounded-md hover:bg-brand-primary/90 disabled:opacity-50"
          >
            <Save className="w-4 h-4" />
            {isSaving ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </div>

      <div className="flex justify-between items-center mb-4">
        <button onClick={handlePrevMonth} className="text-gray-600 hover:text-gray-800">&lt; Previous</button>
        <h3 className="text-xl font-medium">{format(currentMonth, 'MMMM yyyy')}</h3>
        <button onClick={handleNextMonth} className="text-gray-600 hover:text-gray-800">Next &gt;</button>
      </div>

      {currentMonthData ? (
        <MonthSchedule
          month={currentMonthData}
          onUpdate={(updated) => handleMonthUpdate(schedule.findIndex(month => month.month === currentMonthStr), updated)}
          expandedAll={expandedAll}
        />
      ) : (
        <div className="text-center">
          <p>No availability set for this month.</p>
          <button onClick={handleAddMonth} className="mt-4 bg-brand-primary text-white px-4 py-2 rounded-md hover:bg-brand-primary/90">
            Add Availability for {format(currentMonth, 'MMMM yyyy')}
          </button>
        </div>
      )}
    </div>
  );
}
