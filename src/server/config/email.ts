import { config } from 'dotenv';

config();

export const emailConfig = {
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER || 'booking@donna.vuyelwa.com',
    pass: process.env.SMTP_PASSWORD
  },
  tls: {
    rejectUnauthorized: false
  }
};

export const emailAddresses = {
  from: 'booking@donna.vuyelwa.com',
  to: 'general@donna.vuyelwa.com'
};