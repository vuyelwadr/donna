import React, { useState, useEffect } from 'react';
import DarkBackground from './shared/DarkBackground';
import ServiceSelect from './booking/ServiceSelect';
import WhatsAppButton from './booking/WhatsAppButton';
import BookingButton from './booking/BookingButton';
import FormField from './booking/FormField';
import DateSelect from './booking/DateSelect';
import TimeSelect from './booking/TimeSelect';
import { useBooking } from '../context/BookingContext';
import { useFormValidation } from './booking/useFormValidation';
import { FormData } from '../types/booking';
import { loadAvailability } from '../services/availabilityService';
import { getAppointments } from '../services/appointmentService';
import type { DayAvailability } from '../types/availability';

const initialFormData: FormData = {
  name: '',
  phone: '',
  email: '',
  service: '',
  date: '',
  time: '',
  requirements: ''
};

export default function BookingForm() {
  const { selectedService } = useBooking();
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const { errors, setErrors, touchedFields, setTouchedFields, validateField } = useFormValidation();
  const [availability, setAvailability] = useState<DayAvailability[]>([]);
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (selectedService) {
      setFormData(prev => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const availabilityData = await loadAvailability();
        setAvailability(availabilityData.schedule);
      } catch (error) {
        console.error('Error fetching availability:', error);
        setError('Failed to fetch availability data.');
      }

      try {
        const appointmentData = await getAppointments();
        setAppointments(appointmentData);
      } catch (error) {
        console.error('Error fetching appointments:', error);
        setError('Failed to fetch appointment data.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => {
      const newData = { ...prev, [name]: value };
      const error = validateField(name as keyof FormData, value, newData);
      setErrors(prev => ({ ...prev, [name]: error }));
      return newData;
    });
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setTouchedFields(prev => new Set(prev).add(name as keyof FormData));
    const error = validateField(name as keyof FormData, formData[name as keyof FormData], formData);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const hasValidEmail = formData.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
  const hasValidPhone = formData.phone && /^\+?[\d\s-]+$/.test(formData.phone);
  const isValid = Object.keys(errors).length === 0 && (hasValidEmail || hasValidPhone);

  return (
    <section id="booking" className="relative">
      <DarkBackground className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-cormorant text-4xl text-center text-white mb-8">Book Your Session</h2>
          
          <form className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-8">
            {error && (
              <div className="bg-red-100 text-red-700 p-4 mb-6 rounded">
                {error}
              </div>
            )}
            <div className="grid md:grid-cols-2 gap-6">
              <FormField
                label="Name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touchedFields.has('name') ? errors.name : undefined}
              />
              
              <FormField
                label="Phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touchedFields.has('phone') ? errors.phone : undefined}
              />
              
              <FormField
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touchedFields.has('email') ? errors.email : undefined}
              />
              
              <ServiceSelect
                value={formData.service}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              
              <DateSelect
                value={formData.date}
                onChange={handleChange}
                onBlur={handleBlur}
                schedule={availability}
                error={touchedFields.has('date') ? errors.date : undefined}
              />
              
              <TimeSelect
                value={formData.time}
                onChange={handleChange}
                onBlur={handleBlur}
                date={formData.date}
                schedule={availability}
                appointments={appointments}
                error={touchedFields.has('time') ? errors.time : undefined}
              />
            </div>
            
            <div className="mt-6">
              <label className="block text-brand-dark mb-2" htmlFor="requirements">
                Special Requirements
              </label>
              <textarea
                id="requirements"
                name="requirements"
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none"
                value={formData.requirements}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            
            <div className="mt-8 flex flex-col md:flex-row gap-4 justify-between items-center">
              <BookingButton 
                formData={formData} 
                isValid={isValid}
                errors={errors}
              />
              <WhatsAppButton formData={formData} />
            </div>
          </form>
        </div>
      </DarkBackground>
    </section>
  );
}
