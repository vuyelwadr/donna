import React from 'react';
import AvailabilityCalendar from '../../components/admin/availability/AvailabilityCalendar';
import Toast from '../../components/shared/Toast';
import { useToast } from '../../context/ToastContext';

export default function AvailabilityPage() {
  const { message, type, isVisible, hideToast } = useToast();

  return (
    <div className="max-w-4xl mx-auto">
      <AvailabilityCalendar />
      <Toast
        message={message}
        type={type}
        isVisible={isVisible}
        onClose={hideToast}
      />
    </div>
  );
}