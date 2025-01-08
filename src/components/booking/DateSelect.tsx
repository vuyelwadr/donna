import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format, parseISO } from 'date-fns';

interface DayAvailability {
  dayOfWeek: number; // 0 (Sunday) to 6 (Saturday)
  enabled: boolean;
}

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  schedule: DayAvailability[];
  error?: string;
}

const DateSelect: React.FC<Props> = ({ value, onChange, onBlur, schedule, error }) => {
  const handleDateChange = (date: Date | null) => {
    if (date) {
      const formattedDate = format(date, 'yyyy-MM-dd');
      const fakeEvent = {
        target: {
          name: 'date',
          value: formattedDate,
        },
      } as React.ChangeEvent<HTMLInputElement>;
      onChange(fakeEvent);
    }
  };

  const isDateAvailable = (date: Date) => {
    const dayOfWeek = date.getDay();
    const availability = schedule.find((day) => day.dayOfWeek === dayOfWeek);
    return availability ? availability.enabled : false;
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
        selected={value ? parseISO(value) : null}
        onChange={handleDateChange}
        onBlur={onBlur}
        dayClassName={dayClassName}
        dateFormat="yyyy-MM-dd"
        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none"
        wrapperClassName="custom-date-picker-width"
      />

      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default DateSelect;
