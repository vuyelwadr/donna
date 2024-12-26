import { FormData } from '../../types/booking';

export function formatEmailContent(data: FormData) {
  const subject = `New Booking Request - ${data.service}`;

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #8B2635; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
        .content { background-color: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
        .section { margin-bottom: 20px; }
        .label { font-weight: bold; color: #2C1810; }
        .value { margin-left: 10px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1 style="margin: 0;">New Booking Request</h1>
        </div>
        <div class="content">
          <div class="section">
            <h2>Client Information</h2>
            <p><span class="label">Name:</span><span class="value">${data.name}</span></p>
            <p><span class="label">Phone:</span><span class="value">${data.phone}</span></p>
            <p><span class="label">Email:</span><span class="value">${data.email}</span></p>
          </div>
          
          <div class="section">
            <h2>Booking Details</h2>
            <p><span class="label">Service:</span><span class="value">${data.service}</span></p>
            <p><span class="label">Date:</span><span class="value">${data.date}</span></p>
            <p><span class="label">Time:</span><span class="value">${data.time}</span></p>
          </div>
          
          ${data.requirements ? `
            <div class="section">
              <h2>Special Requirements</h2>
              <p>${data.requirements}</p>
            </div>
          ` : ''}
        </div>
      </div>
    </body>
    </html>
  `;

  return { subject, html };
}