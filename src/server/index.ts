import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import { handleBookingRequest } from './api/bookingController.js';
import { EmailService } from './services/emailService.js';

// Load environment variables
config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Health check endpoint
// @ts-ignore
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Initialize email service
const emailService = EmailService.getInstance();

// Verify email configuration on startup
emailService.verifyConnection()
  .then(isConnected => {
    if (!isConnected) {
      console.error('Failed to establish SMTP connection');
      process.exit(1);
    }
    console.log('SMTP connection verified successfully');
  })
  .catch(error => {
    console.error('SMTP verification error:', error);
    process.exit(1);
  });

// Routes
app.post('/api/booking', handleBookingRequest);

// Error handling middleware
// @ts-ignore
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Internal server error'
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});