import React from 'react';
import Modal from '../shared/Modal';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  missingFields: string[];
}

export default function BookingConfirmModal({ isOpen, onClose, missingFields }: Props) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-6">
        <h3 className="font-cormorant text-2xl text-brand-dark mb-4">
          Required Fields Missing
        </h3>
        
        <p className="text-gray-600 mb-4">
          Please provide the following required information:
        </p>
        
        <ul className="list-disc list-inside mb-6 text-gray-600">
          {missingFields.map((field, index) => (
            <li key={index}>
              {field}
            </li>
          ))}
        </ul>
        
        <button
          onClick={onClose}
          className="w-full bg-brand-primary text-white px-4 py-2 rounded-full hover:bg-brand-primary/90 transition-colors"
        >
          Go Back
        </button>
      </div>
    </Modal>
  );
}
