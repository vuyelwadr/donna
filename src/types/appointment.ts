import { FormData } from './booking';

export interface Appointment extends FormData {
  id: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: string;
}

export interface AppointmentGroup {
  date: string;
  appointments: Appointment[];
}
