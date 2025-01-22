import React from 'react'

const Features = () => {
  return (
    <div className='container-fluid'>
      <div className='row about'>
        <div className='col-12  text-center' style={{marginTop:"-20px"}}>
        <h1 style={{color:'#EDE6D6', textAlign:'center'}}> Features Of Our Apps</h1>
        <p style={{color:'#EDE6D6', textAlign:'center', fontSize:'20px', marginTop:'30px'}}>"Enhance your spiritual journey with meditation guides, moon phase tracking, and zodiac compatibility analysis for profound self-discovery." </p>
        </div>
        <div className='container-fluid'>
  <div className='row'>
    <div className='col-md-12'>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {[...Array(3)].map((_, index) => (
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
              <div className='row'>
                {['/Numerology.webp', '/Secret crush.webp', '/Angel app.webp', '/Dream.webp'].map((src, idx) => (
                  <div className='col-12 col-sm-6 col-md-4 col-lg-3' key={idx}>
                    <div className="card mt-5" style={{ backgroundColor: 'white', marginBottom: '30px', width: '70%', margin: '0 auto' }}>
                      <div className="card-body text-center">
                        <img src={src} alt='' style={{ height: '420px', width: '100%', objectFit: 'cover' }} />
                      </div>
                    </div>
                    <div className="text-center">
                      <button style={{ color: '#996515', padding: '5px 10px', backgroundColor: 'white', borderRadius: '10px', marginBottom: "10px" }}>Read More</button>
                      <button style={{ color: 'black', padding: '5px 15px', backgroundColor: '#f502a4', borderRadius: '10px', marginBottom: "10px", fontWeight: 'bold' }}>Download Now!!</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
</div>
   
      </div>
    </div>
  )
}

export default Features
