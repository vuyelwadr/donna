import React from 'react';

interface Props {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
}

export default function FormField({
  label,
  name,
  type,
  value,
  onChange,
  onBlur,
  error,
  required = false
}: Props) {
  return (
    <div>
      <label className="block text-brand-dark mb-2" htmlFor={name}>
        {label}
        {required && <span className="text-brand-primary ml-1">*</span>}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        required={required}
        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
}
