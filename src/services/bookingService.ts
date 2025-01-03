import { FormData } from '../types/booking';
import { saveAppointment } from './appointmentService';

interface BookingResponse {
  success: boolean;
  message?: string;
  confirmationNumber?: string;
}

export async function submitBooking(formData: FormData): Promise<BookingResponse> {
  try {
    const appointment = await saveAppointment(formData);
    
    if (!appointment) {
      throw new Error('Failed to create appointment');
    }
    
    return {
      success: true,
      confirmationNumber: appointment.id,
      message: 'Booking successful! You will receive a confirmation shortly.'
    };
  } catch (error) {
    console.error('Booking submission failed:', error);
    throw new Error('Unable to process your booking. Please try again later.');
  }
}