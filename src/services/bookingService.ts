import { FormData } from '../types/booking';
import { saveAppointment, emailBooking } from './appointmentService';
import { BookingResponse } from '../types/bookingResponse';


export async function submitBooking(formData: FormData): Promise<BookingResponse> {
  try {
    const appointment = await saveAppointment(formData);
    const appointmentEmail = await emailBooking(formData);
    
    if (!appointment || !appointmentEmail.success) {
      throw new Error('Failed to create appointment');
    }
    
    return {
      success: true,
      confirmationNumber: appointment.id,
      message: `Booking successful! confirmation: ${appointment.id}`
    };
  } catch (error) {
    console.error('Booking submission failed:', error);
    throw new Error('Unable to process your booking. Please try again later.');
  }
}