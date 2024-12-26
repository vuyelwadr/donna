import { FormData } from '../types/booking';

export function formatEmailBody(formData: FormData): string {
  const fields = [
    { label: 'Name', value: formData.name },
    { label: 'Phone', value: formData.phone },
    { label: 'Email', value: formData.email },
    { label: 'Service', value: formData.service },
    { label: 'Date', value: formData.date },
    { label: 'Time', value: formData.time },
  ];

  const messageLines = fields
    .filter(field => field.value.trim() !== '')
    .map(field => `${field.label}: ${field.value}`)
    .join('\n');

  const requirements = formData.requirements?.trim()
    ? `\nSpecial Requirements:\n${formData.requirements}`
    : '';

  return `${messageLines}${requirements}`;
}