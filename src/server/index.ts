import express from 'express';
import cors from 'cors';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { Appointment } from '../types/appointment';
import { randomUUID } from 'crypto';

const app = express();
app.use(cors());
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataDir = path.join(__dirname, '../../src/data');

// Appointments endpoints
app.get('/api/appointments', async (req, res) => {
  try {
    const appointmentsPath = path.join(dataDir, 'appointments.json');
    const data = await fs.readFile(appointmentsPath, 'utf-8');
    const { appointments } = JSON.parse(data);
    res.json(appointments);
  } catch (error) {
    console.error('Failed to fetch appointments:', error);
    res.status(500).json({ error: 'Failed to fetch appointments' });
  }
});

app.post('/api/appointments', async (req, res) => {
  try {
    const appointmentsPath = path.join(dataDir, 'appointments.json');
    const data = await fs.readFile(appointmentsPath, 'utf-8');
    const { appointments } = JSON.parse(data);

    const newAppointment: Appointment = {
      ...req.body,
      id: randomUUID(),
      status: 'pending',
      createdAt: new Date().toISOString()
    };

    appointments.push(newAppointment);
    await fs.writeFile(
      appointmentsPath,
      JSON.stringify({ appointments }, null, 2),
      'utf-8'
    );

    res.status(201).json(newAppointment);
  } catch (error) {
    console.error('Failed to save appointment:', error);
    res.status(500).json({ error: 'Failed to save appointment' });
  }
});

// Other existing endpoints...

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`API server running on port ${port}`);
});