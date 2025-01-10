import React from 'react';
import Modal from '../../shared/Modal';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  onCancel: () => void;
  dayOfWeek: string;
}

export default function ConfirmDefaultAvailabilityModal({ isOpen, onClose, onConfirm, onCancel, dayOfWeek }: Props) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-6">
        <h3 className="font-cormorant text-2xl text-brand-dark mb-4">
          Apply to All {dayOfWeek}s?
        </h3>
        
        <p className="text-gray-600 mb-6">
          Do you want to apply this availability to all {dayOfWeek}s for the rest of the month?
        </p>
        
        <div className="flex gap-4">
          <button
            onClick={onCancel}
            className="flex-1 border border-brand-primary text-brand-primary px-4 py-2 rounded-full hover:bg-brand-primary/10 transition-colors"
          >
            No, just this week
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 bg-brand-primary text-white px-4 py-2 rounded-full hover:bg-brand-primary/90 transition-colors"
          >
            Yes, apply to all
          </button>
        </div>
      </div>
    </Modal>
  );
}
