import React from 'react';
import { format, parseISO } from 'date-fns';
import { Calendar, Clock, Mail, Phone, User } from 'lucide-react';
import { Appointment } from '../../../types/appointment';

interface Props {
  appointments: Appointment[];
}

export default function AppointmentList({ appointments }: Props) {
  const groupedAppointments = appointments.reduce((groups, appointment) => {
    const date = appointment.date;
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(appointment);
    return groups;
  }, {} as Record<string, Appointment[]>);

  return (
    <div className="space-y-6">
      {Object.entries(groupedAppointments).map(([date, dayAppointments]) => (
        <div key={date} className="space-y-4">
          <h3 className="font-semibold text-lg text-gray-900">
            {format(parseISO(date), 'EEEE, MMMM d, yyyy')}
          </h3>
          <div className="grid gap-4">
            {dayAppointments.map((appointment) => (
              <div
                key={appointment.id}
                className="bg-white rounded-lg shadow p-4 border-l-4 border-brand-primary"
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-gray-400" />
                      <span className="font-medium">{appointment.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span>{appointment.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span>{format(parseISO(appointment.date), 'MMM d, yyyy')}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-gray-400" />
                      <a 
                        href={`mailto:${appointment.email}`}
                        className="text-brand-primary hover:underline"
                      >
                        {appointment.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-gray-400" />
                      <a 
                        href={`tel:${appointment.phone}`}
                        className="text-brand-primary hover:underline"
                      >
                        {appointment.phone}
                      </a>
                    </div>
                    <div>
                      <span className="font-medium">Service:</span>{' '}
                      <span>{appointment.service}</span>
                    </div>
                  </div>
                </div>
                {appointment.requirements && (
                  <div className="mt-4 pt-4 border-t">
                    <span className="font-medium">Special Requirements:</span>
                    <p className="mt-1 text-gray-600">{appointment.requirements}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}