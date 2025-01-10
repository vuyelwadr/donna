export interface TimeSlot {
  start: string; // 24h format "HH:mm"
  end: string;
}

export interface DayAvailability {
  dayOfWeek: number; // 0-6 (Sunday-Saturday)
  enabled: boolean;
  timeSlots: TimeSlot[];
}

export interface WeekAvailability {
  weekStart: string; // Format "YYYY-MM-DD" (start of the week)
  days: DayAvailability[];
}

export interface MonthAvailability {
  month: string; // Format "YYYY-MM"
  weeks: WeekAvailability[];
}

export interface AvailabilityData {
  schedule: MonthAvailability[];
}
