import React from 'react';
import { DayAvailability } from '../../../types/availability';

interface Props {
  schedule: DayAvailability[];
}

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function AvailableDays({ schedule }: Props) {
  const availableDays = schedule
    .filter(day => day.enabled)
    .map(day => DAYS[day.dayOfWeek])
    .join(', ');

  return (
    <p className="mt-2 text-sm text-gray-600">
      Available days: {availableDays}
    </p>
  );
}
