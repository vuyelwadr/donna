import { FormData } from '../types/booking';

interface BookingResponse {
  success: boolean;
  message?: string;
  confirmationNumber?: string;
}

const parsedUrl = new URL(window.location.href);
// 2. Extract only the protocol (http/https) and hostname (e.g., localhost)
const { protocol, hostname } = parsedUrl;
// 3. Build the base URL
var baseUrl = `${protocol}//${hostname}`;
if (hostname == "localhost"){
  var port = '3000';
  baseUrl = `${baseUrl}:${port}`;
}

const bookingUrl = `${baseUrl}/api/booking`;

export async function submitBooking(formData: FormData): Promise<BookingResponse> {
  try {
    const response = await fetch(bookingUrl, {
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