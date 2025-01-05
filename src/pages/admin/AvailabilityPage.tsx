import React from 'react';
import AvailabilityCalendar from '../../components/admin/availability/AvailabilityCalendar';
import Toast from '../../components/shared/Toast';

export default function AvailabilityPage() {

  return (
    <div className="max-w-4xl mx-auto">
      <AvailabilityCalendar />
    </div>
  );
}