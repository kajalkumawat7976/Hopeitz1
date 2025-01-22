import React from 'react';
import { Link } from 'react-router-dom';
const Apps = () => {
  return (
    <div className='col-12'>
      <div className='row'>
        <div className='col-12 video-container'>
          <video autoPlay loop muted className="background-video w-100" style={{ height: 'auto' }}>
            <source src="/client2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className='col-12 text-center' style={{ position: 'absolute', transform: 'translateY(-50%)', marginTop:'100px' }}>
          <h1 style={{ color: '#EDE6D6' }}>Our Apps</h1>
          <h2 style={{ color: '#EDE6D6' }}> "Let the stars inspire you: Daily affirmations and guidance based on your sign!"</h2>
        </div>
        <div className='container-fluid' style={{marginTop:'-50px'}}>
  <div className='row'>
    <div className='col-md-12'>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className='row justify-content-center'>
              <div className='col-12 col-md-4 mb-4'>
                <div className="card" style={{ backgroundColor: '#EDE6D6', height: '410px' }}>
                  <img src="/services-icon4.png" style={{ border: 'none', height: '250px', width: '100%' , marginTop:'30px'}} className="card-img-top" alt="..." />
                  <div className="card-body text-center">
                    <h5 className="card-title">Advanced Numerology Calculator</h5>
                    <Link to="/Advance" className="btn" style={{ backgroundColor: '#996515', color: 'black', borderRadius: '10px' }}>View More</Link>
                  </div>
                </div>
              </div>
              <div className='col-12 col-md-4 mb-4'>
                <div className="card" style={{ backgroundColor: '#EDE6D6', height: '410px' }}>
                  <img src="/app2 (2).png" style={{ border: 'none', height: '250px', width: '100%', marginTop:'30px' }} className="card-img-top" alt="..." />
                  <div className="card-body text-center">
                    <h5 className="card-title">Dream Speaks App</h5>
                    <Link to="/Dreams" className="btn" style={{ backgroundColor: '#996515', color: 'black', borderRadius: '10px' }}>View More</Link>
                  </div>
                </div>
              </div>
              <div className='col-12 col-md-4 mb-4'>
                <div className="card" style={{ backgroundColor: '#EDE6D6', height: '410px' }}>
                  <img src="/app3.png" style={{ border: 'none', height: '280px', width: '100%', marginTop:'30px' }} className="card-img-top" alt="..." />
                  <div className="card-body text-center">
                    <h5 className="card-title">Ramal Astrology</h5>
                    <Link to="/Ramal" className="btn" style={{ backgroundColor: '#996515', color: 'black', borderRadius: '10px' }}>View More</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Repeat for other carousel items */}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
  );
}

export default Apps;
