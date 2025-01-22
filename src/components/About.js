import React from 'react';

const About = () => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-12 col-md-6 about'>
          <img 
            src='/About1.png' 
            alt='' 
            className='img-fluid' 
            style={{ margin: '0 auto', height: 'auto', maxWidth: '100%', marginTop: '-50px' }} 
          />
        </div>
        
        <div className='col-12 col-md-6 about'>
          <h1 style={{ color: '#EDE6D6', marginTop: '50px', textAlign: 'center' }}>App Development & Solution Company</h1>
          <p style={{ color: '#EDE6D6', fontSize: '21px', marginTop: '30px', textAlign: 'center' }}>
            At our App Development Solution Company, we specialize in creating innovative astrology apps that cater to enthusiasts and casual users alike. Our team combines technical expertise with astrological knowledge to develop user-friendly applications that provide personalized horoscopes, detailed birth chart analyses, and compatibility assessments. We focus on intuitive design and robust features, ensuring a seamless experience across both iOS and Android platforms. With a commitment to data security and ongoing support, we empower users to explore the cosmos and gain valuable insights into their lives. Let us help you bring your astrology app vision to life!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;