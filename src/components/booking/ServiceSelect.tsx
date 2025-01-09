import React from 'react';
import { useBooking } from '../../context/BookingContext';
import { services } from '../../data/services';

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLSelectElement>) => void;
  error?: string;
}

export default function ServiceSelect({ value, onChange, onBlur, error }: Props) {
  const { setSelectedService, isPreselected, setIsPreselected } = useBooking();
  
  const serviceOptions = services.flatMap(category => 
    category.items.map(service => ({
      name: service.name,
      category: category.category
    }))
  );

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setIsPreselected(false);
    setSelectedService('');
    onChange(e);
  };

  return (
    <div>
      <label className="block text-brand-dark mb-2" htmlFor="service">
        Service<span className="text-brand-primary ml-1">*</span>
      </label>
      <select
        id="service"
        name="service"
        required
        className={`w-full px-4 py-2 rounded-lg border ${error ? 'border-red-500' : 'border-gray-300'} focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none`}
        value={value || (isPreselected ? value : '')}
        onChange={handleChange}
        onBlur={onBlur}
      >
        <option value="">Select a service</option>
        {serviceOptions.map((service, index) => (
          <option key={index} value={service.name}>
            {service.name}
          </option>
        ))}
      </select>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}
