import React from 'react';

function ContactSection(){
  return (
    <div className='container container-contact'>
      <div className="card">
        <div className="card-header">
          <h1 className='fw-bolder text-center'>Contactanos!</h1>
        </div>
        <div className="card-body">
          <h1 className="card-title fw-bolder text-center">abii.alvarez37@gmail.com</h1>
          <p className="card-text text-center">Segui nuestras redes.</p>
          <div className='container-icons'>
            <a href='https://www.instagram.com/abii.37/' className="contact-iconSocial"><img src="/img/instagram.png" alt="" /></a>
            <a href="https://www.facebook.com/ChildProveedor" className="contact-iconSocial"><img src="/img/facebook.png" alt="" /></a>
            <a href="https://wa.me/+5491169792323" className="contact-iconSocial"><img src="/img/whatsapp.png" alt="" /></a>
          </div>
        </div>
      </div>
    </div>
  )
};

export default ContactSection;
