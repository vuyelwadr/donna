import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import { formatWhatsAppMessage } from '../../utils/whatsapp';
import WhatsAppConfirmModal from './WhatsAppConfirmModal';

interface Props {
  formData: {
    name: string;
    phone: string;
    email: string;
    service: string;
    date: string;
    time: string;
    requirements?: string;
  };
}

export default function WhatsAppButton({ formData }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const getEmptyFields = () => {
    const requiredFields = ['service', 'date', 'time'];
    const hasContact = formData.email || formData.phone;
    
    const emptyFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);
    if (!hasContact) {
      emptyFields.push('Contact Information (Email or Phone)');
    }
    
    return emptyFields;
  };

  const proceedToWhatsApp = (e: React.MouseEvent) => {
    e.preventDefault();
    const message = formatWhatsAppMessage(formData);
    window.open(`https://wa.me/264853824491?text=${message}`, '_blank', 'noopener,noreferrer');
    setIsModalOpen(false);
  };

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const emptyFields = getEmptyFields();
    if (emptyFields.length > 0) {
      setIsModalOpen(true);
    } else {
      proceedToWhatsApp(e);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={handleWhatsAppClick}
        className="w-full md:w-auto bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-3 rounded-full flex items-center justify-center gap-2 transition-all"
      >
        <MessageSquare className="w-5 h-5" />
        WhatsApp Me
      </button>

      <WhatsAppConfirmModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={proceedToWhatsApp}
        emptyFields={getEmptyFields()}
      />
    </>
  );
}