import { Link } from '@mui/material';

const WhatsappButton = () => {
  return (
    <div className="whatsapp-container">
      <div id="whatsapp-popup" className="whatsapp-popup">
        Entre em contato pelo WhatsApp!
      </div>
      <Link
        href="https://wa.me/5511939621151"
        className="btn whatsapp-btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-whatsapp"></i>
      </Link>
    </div>
  );
};

export default WhatsappButton;
