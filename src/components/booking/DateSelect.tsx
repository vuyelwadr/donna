import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format, parseISO, isValid, isWithinInterval, isSameDay, addDays, startOfWeek } from 'date-fns';
import { DayAvailability, TimeSlot, WeekAvailability, MonthAvailability } from '../../types/availability';

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  schedule: MonthAvailability[];
  error?: string;
}

const DateSelect: React.FC<Props> = ({ value, onChange, onBlur, schedule, error }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  useEffect(() => {
    if (value) {
      const parsedDate = parseISO(value);
      if (isValid(parsedDate)) {
        setSelectedDate(parsedDate);
      }
    }
  }, [value]);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    if (date) {
      const formattedDate = format(date, 'yyyy-MM-dd');
      const fakeEvent = {
        target: {
          name: 'date',
          value: formattedDate,
        },
      } as React.ChangeEvent<HTMLInputElement>;
      onChange(fakeEvent);
    } else {
      // Handle null date case (e.g., clear the input)
      const fakeEvent = {
        target: {
          name: 'date',
          value: '',
        },
      } as React.ChangeEvent<HTMLInputElement>;
      onChange(fakeEvent);
    }
  };

  const isDateAvailable = (date: Date) => {
    const formattedDate = format(date, 'yyyy-MM');
    const monthAvailability = schedule.find((month) => month.month === formattedDate);

    if (!monthAvailability) {
      return false;
    }

    const dayOfWeek = date.getDay();
    const weekStart = format(startOfWeek(date, { weekStartsOn: 0 }), 'yyyy-MM-dd');
    const weekAvailability = monthAvailability.weeks.find((week) => week.weekStart === weekStart);

    if (!weekAvailability) {
      return false;
    }

    const dayAvailability = weekAvailability.days.find((day) => day.dayOfWeek === dayOfWeek);

    return dayAvailability?.enabled ?? false;
  };

  const dayClassName = (date: Date) => {
    return isDateAvailable(date) ? '' : 'react-datepicker__day--unavailable';
  };

  return (
    <div>
      <label className="block text-brand-dark mb-2" htmlFor="date">
        Preferred Date<span className="text-brand-primary ml-1">*</span>
      </label>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        onBlur={onBlur}
        filterDate={isDateAvailable}
        dayClassName={dayClassName}
        dateFormat="yyyy-MM-dd"
        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none"
        wrapperClassName="custom-date-picker-width"
        placeholderText="Select a date"
        minDate={new Date()}
      />

      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default DateSelect;
