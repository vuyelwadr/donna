import { useState, useCallback } from 'react';
import { FormData } from '../../types/booking';

export function useFormValidation() {
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [touchedFields, setTouchedFields] = useState<Set<keyof FormData>>(new Set());

  const validateField = useCallback((name: keyof FormData, value: string, formData: FormData) => {
    if (name === 'email' || name === 'phone') {
      const hasEmail = formData.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
      const hasPhone = formData.phone && /^\+?[\d\s-]+$/.test(formData.phone);

      if (!hasEmail && !hasPhone) {
        return 'Please provide either an email address or phone number to continue';
      }
    }

    if (name === 'email' && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        return 'Please enter a valid email address';
      }
    }

    if (name === 'phone' && value) {
      const phoneRegex = /^\+?[\d\s-]+$/;
      if (!phoneRegex.test(value)) {
        return 'Please enter a valid phone number';
      }
    }

    return '';
  }, []);

  const validateForm = useCallback((formData: FormData) => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    
    // Check if at least one contact method is provided and valid
    const hasValidEmail = formData.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
    const hasValidPhone = formData.phone && /^\+?[\d\s-]+$/.test(formData.phone);

    if (!hasValidEmail && !hasValidPhone) {
      newErrors.email = 'Please provide either an email address or phone number to continue';
      newErrors.phone = 'Please provide either an email address or phone number to continue';
    }

    return newErrors;
  }, []);

  return {
    errors,
    setErrors,
    touchedFields,
    setTouchedFields,
    validateField,
    validateForm
  };
}