import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';

export function ContactIcon () {
  const email = 'contact@openepi.io'; // Replace with your email address

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div>
      <AiOutlineMail onClick={handleEmailClick} size={30} style={{ cursor: 'pointer' }} />
    </div>
  );
};

export default ContactIcon;