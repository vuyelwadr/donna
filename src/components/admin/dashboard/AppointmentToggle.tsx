import React from 'react';
import { ToggleLeft } from 'lucide-react';

interface Props {
  showPastAppointments: boolean;
  onToggle: () => void;
}

export default function AppointmentToggle({ showPastAppointments, onToggle }: Props) {
  return (
    <button
      onClick={onToggle}
      className={`
        relative inline-flex items-center px-4 py-2 rounded-full
        ${showPastAppointments ? 'bg-brand-primary text-white' : 'bg-gray-200 text-gray-700'}
        transition-colors duration-200 ease-in-out
      `}
    >
      <ToggleLeft className="w-4 h-4 mr-2" />
      <span className="text-sm font-medium">
        {showPastAppointments ? 'Showing All Appointments' : 'Showing Upcoming Only'}
      </span>
    </button>
  );
}