import nodemailer from 'nodemailer';
import { emailConfig, emailAddresses } from '../config/email';
import { FormData } from '../../types/booking';
import { formatEmailContent } from '../utils/emailFormatter';

export class EmailService {
  private transporter: nodemailer.Transporter;
  private static instance: EmailService;

  private constructor() {
    this.transporter = nodemailer.createTransport(emailConfig);
  }

  public static getInstance(): EmailService {
    if (!EmailService.instance) {
      EmailService.instance = new EmailService();
    }
    return EmailService.instance;
  }

  async sendBookingEmail(bookingData: FormData): Promise<boolean> {
    try {
      const { subject, html } = formatEmailContent(bookingData);
      
      await this.transporter.sendMail({
        from: emailAddresses.from,
        to: emailAddresses.to,
        subject,
        html,
        headers: {
          'X-Priority': '1',
          'X-MSMail-Priority': 'High',
          'Importance': 'high'
        }
      });

      return true;
    } catch (error) {
      console.error('Email sending failed:', error);
      return false;
    }
  }

  async verifyConnection(): Promise<boolean> {
    try {
      await this.transporter.verify();
      return true;
    } catch (error) {
      console.error('SMTP connection verification failed:', error);
      return false;
    }
  }
}