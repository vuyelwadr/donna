import type { Request, Response } from 'express';
import { EmailService } from '../services/emailService.js';
import type { FormData } from '../types/booking.js';

export async function handleBookingRequest(req: Request, res: Response) {
  try {
    const bookingData = req.body as FormData;
    
    // Validate required fields
    const requiredFields = ['service', 'date', 'time'];
    const missingFields = requiredFields.filter(field => !bookingData[field as keyof FormData]);
    
    if (missingFields.length > 0) {
      return res.status(400).json({
        success: false,
        message: `Missing required fields: ${missingFields.join(', ')}`
      });
    }

    // Validate contact information
    if (!bookingData.email && !bookingData.phone) {
      return res.status(400).json({
        success: false,
        message: 'Either email or phone is required'
      });
    }

    // Send email
    const emailService = EmailService.getInstance();
    const success = await emailService.sendBookingEmail(bookingData);
    
    if (success) {
      const confirmationNumber = Math.random().toString(36).substr(2, 9).toUpperCase();
      res.status(200).json({
        success: true,
        message: 'Booking request sent successfully',
        confirmationNumber
      });
    } else {
      res.status(500).json({
        success: false,
        message: 'Failed to send booking request'
      });
    }
  } catch (error) {
    console.error('Booking request failed:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
}