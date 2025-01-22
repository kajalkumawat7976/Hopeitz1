import React from 'react'

const Zoadic = () => {
  return (
    <div className='container-fluid'>
        <div className='row'>
        <div className='col-12 about text-center'>
  <h1 style={{ color: '#EDE6D6', marginTop: "20px" }}>Choose Your Zodiac Sign</h1>
  <p style={{ color: '#EDE6D6', fontSize: '1.2rem', margin: '0 15px' }}>
    The zodiac is based on the position of the sun relative to constellations as seen from Earth. <br />
    Here are the twelve zodiac signs along with their corresponding date ranges:
  </p>

</div>
<div className='col-12 about '>
  <div className='row justify-content-center mt-5'>
    
    {[
      { name: 'Aries', date: 'Apr 05-May 20', img: '/zodiac-icon1.png' },
      { name: 'Taurus', date: 'Jan 12-Feb 17', img: '/zodiac-icon2.png' },
      { name: 'Gemini', date: 'Mar 20-May 23', img: '/zodiac-icon3.png' },
      { name: 'Cancer', date: 'Aug 22-Oct 20', img: '/zodiac-icon4.png' },
      { name: 'Leo', date: 'Jun 22-Jul 20', img: '/zodiac-icon5.png' },
      { name: 'Virgo', date: 'Aug 22-Sep 20', img: '/zodiac-icon6.png' },
      { name: 'Libra', date: 'Oct 27-Nov 10', img: '/zodiac-icon7.png' },
      { name: 'Scorpio', date: 'Dec 12-Jan 20', img: '/zodiac-icon8.png' },
    ].map((zodiac, index) => (
      <div className='col-6 col-md-3 d-flex justify-content-center mb-4' key={index}>
        <div className="card bg-transparent" style={{ border: 'none' }}>
          <img src={zodiac.img} style={{ height: '150px', width: '150px' }} alt={zodiac.name} />
          <div className="card-body text-center">
            <h5 className="card-title" style={{ color: '#EDE6D6' }}>{zodiac.name}</h5>
            <p className="card-text" style={{ color: '#EDE6D6' }}>{zodiac.date}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
         
        </div>
    </div>
  )
}

export default Zoadic
