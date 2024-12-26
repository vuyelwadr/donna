import React from 'react';
import Modal from '../shared/Modal';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (e: React.MouseEvent) => void;
  emptyFields: string[];
}

export default function WhatsAppConfirmModal({ isOpen, onClose, onConfirm, emptyFields }: Props) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-6">
        <h3 className="font-cormorant text-2xl text-brand-dark mb-4">
          Incomplete Form Details
        </h3>
        
        <p className="text-gray-600 mb-4">
          The following fields are empty:
        </p>
        
        <ul className="list-disc list-inside mb-6 text-gray-600">
          {emptyFields.map(field => (
            <li key={field} className="capitalize">
              {field}
            </li>
          ))}
        </ul>
        
        <p className="text-gray-600 mb-6">
          Would you like to complete all fields or continue with partial information?
        </p>
        
        <div className="flex gap-4">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 bg-brand-primary text-white px-4 py-2 rounded-full hover:bg-brand-primary/90 transition-colors"
          >
            Go Back
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="flex-1 border border-brand-primary text-brand-primary px-4 py-2 rounded-full hover:bg-brand-primary/10 transition-colors"
          >
            Continue to WhatsApp
          </button>
        </div>
      </div>
    </Modal>
  );
}