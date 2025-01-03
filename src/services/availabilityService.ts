import { AvailabilityData } from '../types/availability';
import availabilityData from '../data/availability.json';

const API_URL = import.meta.env.DEV ? 'http://localhost:3000/api' : '/api';

export function loadAvailability(): AvailabilityData {
  return availabilityData;
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