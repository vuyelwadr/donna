import React from 'react';
import Modal from '../shared/Modal';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactValidationModal({ isOpen, onClose }: Props) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-6">
        <h3 className="font-cormorant text-2xl text-brand-dark mb-4">
          Contact Information Required
        </h3>
        
        <p className="text-gray-600 mb-6">
          Please provide either an email address or phone number to continue.
        </p>
        
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