export interface TimeSlot {
  start: string; // 24h format "HH:mm"
  end: string;
}

export interface DayAvailability {
  dayOfWeek: number; // 0-6 (Sunday-Saturday)
  enabled: boolean;
  timeSlots: TimeSlot[];
}

export interface AvailabilityData {
  schedule: DayAvailability[];
}