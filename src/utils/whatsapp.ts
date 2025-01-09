export function formatWhatsAppMessage(formData: {
  name: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  time: string;
  requirements?: string;
}): string {
  // Filter out empty fields and create message lines
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
    .map(field => `${field.label}: ${field.value}`);

  // Add requirements only if provided
  if (formData.requirements?.trim()) {
    messageLines.push(`\nSpecial Requirements:\n${formData.requirements.trim()}`);
  }

  // Construct final message
  const message = [
    '*New Booking Request*',
    ...messageLines
  ].join('\n');

  return encodeURIComponent(message);
}
