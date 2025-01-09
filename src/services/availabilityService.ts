import { AvailabilityData } from '../types/availability';
import { API_URL } from '../utils/apiUrl';


export async function loadAvailability(): Promise<AvailabilityData> {
  try {
    const response = await fetch(`${API_URL}/availability`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to load availability');
    }

    const data: AvailabilityData = await response.json();
    return data;
  } catch (error) {
    console.error('Error loading availability:', error);
    throw new Error(
      error instanceof Error
        ? error.message
        : 'An unexpected error occurred while loading availability.'
    );
  }
}

export async function saveAvailability(data: AvailabilityData): Promise<void> {
  const response = await fetch(`${API_URL}/availability`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || 'Failed to save availability');
  }


  window.dispatchEvent(new Event('availability-updated'));
}
