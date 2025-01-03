import { FormData } from '../types/booking';
import { Appointment } from '../types/appointment';
import { parseISO, isAfter } from 'date-fns';

const API_URL = import.meta.env.DEV ? 'http://localhost:3000/api' : '/api';

export async function saveAppointment(formData: FormData): Promise<Appointment> {
  const response = await fetch(`${API_URL}/appointments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to save appointment');
  }

  return response.json();
}

export async function getAppointments(showPast: boolean = false): Promise<Appointment[]> {
  const response = await fetch(`${API_URL}/appointments?showPast=${showPast}`);
  
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to fetch appointments');
  }

  const appointments = await response.json();
  const now = new Date();

  return appointments
    .filter((appointment: Appointment) => {
      const appointmentDate = parseISO(`${appointment.date}T${appointment.time}`);
      return showPast ? true : isAfter(appointmentDate, now);
    })
    .sort((a: Appointment, b: Appointment) => {
      const dateA = parseISO(`${a.date}T${a.time}`);
      const dateB = parseISO(`${b.date}T${b.time}`);
      return dateA.getTime() - dateB.getTime();
    });
}