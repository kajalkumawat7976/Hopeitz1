import React from 'react';

const Contact = () => {
  return (
    <div className='container-fluid'>
      <div className='row about'>
        {/* Left Column with Image */}
        <div className='col-12 col-md-6 mt-5 mb-5 contact d-flex justify-content-center'>
          <img 
            src='/Contact.png' 
            alt='Contact Us' 
            className='img-fluid' // This class makes the image responsive
            style={{ maxHeight: '470px', width: 'auto', marginBottom: '20px' }} // Ensures the image scales properly
          />
        </div>
        
        {/* Right Column with Text */}
        <div className='col-12 col-md-6 mt-5'>
          <h2 className='About' style={{ color: '#EDE6D6', marginTop: '150px' }}>Get In Touch With Us</h2>
          <p className='About' style={{ fontSize: '20px', color: '#EDE6D6' }}>
            We love to hear the opinions of our readers and try to connect them as soon as possible. So, if you have any queries or suggestions, don't hesitate to contact us. You can always find us through our mail id. We are here 24*7 for you. :-)
          </p>
          <p className='AboutFive mb-5' style={{ fontSize: '20px', color: '#EDE6D6' }}>
            Email: feedback@hopeitz.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;