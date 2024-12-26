import { FormData } from '../types/booking';

interface BookingResponse {
  success: boolean;
  message?: string;
  confirmationNumber?: string;
}

export async function submitBooking(formData: FormData): Promise<BookingResponse> {
  try {
    const response = await fetch('/api/booking', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to submit booking');
    }

    return await response.json();
  } catch (error) {
    console.error('Booking submission failed:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Failed to submit booking',
    };
  }
}