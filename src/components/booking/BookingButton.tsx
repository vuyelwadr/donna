import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import { FormData } from '../../types/booking';
import BookingConfirmModal from './BookingConfirmModal';
import { useToast } from '../../context/ToastContext';
import { submitBooking } from '../../services/bookingService';

interface Props {
  formData: FormData;
  isValid: boolean;
  errors: Partial<Record<keyof FormData, string>>;
}

export default function BookingButton({ formData, isValid, errors }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { showToast } = useToast();

  const hasValidContact = () => {
    const hasEmail = 
      formData.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
    const hasPhone =
      formData.phone && /^\+?[\d\s-]+$/.test(formData.phone);
    return hasEmail || hasPhone;
  };

  const getRequiredFields = () => {
    const missingFields = [];

    if (!hasValidContact()) {
      missingFields.push('Contact Information (Email or Phone)');
    }
    if (!formData.service) missingFields.push('Service');
    if (!formData.date) missingFields.push('Preferred Date');
    if (!formData.time) missingFields.push('Preferred Time');

    return missingFields;
  };

  const handleBookingClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const missingFields = getRequiredFields();

    if (missingFields.length > 0) {
      setIsModalOpen(true);
      return;
    }

    proceedWithBooking();
  };

  const proceedWithBooking = async () => {
    setIsSubmitting(true);
    try {
      // If submitBooking() doesn't throw, we assume a successful response (2xx)
      const response = await submitBooking(formData);

      if (response.success){
      // Show success toast (we assume the booking is successful if no error is thrown)

        showToast(
          `Your ${formData.service} appointment has been successfully booked for ${formData.date} at ${formData.time}.`,
          'success'
        );
      }
      else{
        showToast(
          'Booking failed. Please try again or contact support at +264 85 382 4491',
          'error'
        );
      }


    } catch (error) {
      // If an error is thrown from submitBooking, show error toast
      showToast(
        'Booking failed. Please try again or contact support at +264 85 382 4491',
        'error'
      );
    } finally {
      setIsSubmitting(false);
      setIsModalOpen(false);
    }
  };

  return (
    <>
      <button
        onClick={handleBookingClick}
        disabled={isSubmitting}
        className={`w-full md:w-auto bg-brand-primary hover:bg-brand-primary/90 text-white px-8 py-3 rounded-full flex items-center justify-center gap-2 transition-all ${
          isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        <Calendar className="w-5 h-5" />
        {isSubmitting ? 'Booking...' : 'Book Appointment'}
      </button>

      <BookingConfirmModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        missingFields={getRequiredFields()}
      />
    </>
  );
}
