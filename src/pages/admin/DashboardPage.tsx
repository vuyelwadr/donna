import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Calendar } from 'lucide-react';
import AppointmentList from '../../components/admin/dashboard/AppointmentList';
import AppointmentToggle from '../../components/admin/dashboard/AppointmentToggle';
import { getAppointments } from '../../services/appointmentService';

export default function DashboardPage() {
  const [showPastAppointments, setShowPastAppointments] = useState(false);

  const { data: appointments = [], isLoading, error } = useQuery({
    queryKey: ['appointments', showPastAppointments],
    queryFn: () => getAppointments(showPastAppointments)
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 text-red-600 p-4 rounded-lg">
        Error loading appointments. Please try again.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        <div className="flex items-center gap-4">
          <AppointmentToggle
            showPastAppointments={showPastAppointments}
            onToggle={() => setShowPastAppointments(prev => !prev)}
          />
          <div className="flex items-center gap-2 text-brand-primary">
            <Calendar className="w-5 h-5" />
            <span className="font-medium">
              {showPastAppointments ? 'All Appointments' : 'Upcoming Appointments'}
            </span>
          </div>
        </div>
      </div>

      {appointments.length === 0 ? (
        <div className="bg-white rounded-lg shadow p-6 text-center text-gray-500">
          No {showPastAppointments ? '' : 'upcoming'} appointments found
        </div>
      ) : (
        <AppointmentList appointments={appointments} />
      )}
    </div>
  );
}
