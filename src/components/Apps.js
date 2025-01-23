import React from 'react';
import { Link } from 'react-router-dom';

const Apps = () => {
  return (
    <div className='container-fluid about'>
      <div className='row'>
        <div className='col-12 text-center' style={{ position: 'relative', marginTop: '100px', zIndex: 1 }}>
          <h1 style={{ color: '#EDE6D6' }}>Our Apps</h1>
          <h2 style={{ color: '#EDE6D6' }}> "Let the stars inspire you: Daily affirmations and guidance based on your sign!"</h2>
        </div>
        <div className='col-12' style={{ marginTop: '50px', marginBottom:'200px' }}>
          <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className='row'>
                  <div className='col-md-4 col-12 mb-4'>
                   <div className="card mt-5" style={{ backgroundColor: '#EDE6D6', height: '400px' }}>
                                   <img src="/services-icon4.png" style={{ border: 'none', height: '250px', width: '100%', marginLeft:'' }} className="card-img-top" alt="..." />
                                   <div className="card-body">
                                     <h5 className="card-title" style={{ textAlign: 'center' }}>Advanced Numerology Calculator</h5>
                                     <div className="text-center">
                                      
                                       <Link to="/Advance" className="btn" style={{ color: 'black' , backgroundColor:'#996518'}} onClick={() => document.getElementById('advance-section').scrollIntoView({ behavior: 'smooth' })}>View More
                                       </Link>
                                     </div>
                                   </div>
                                 </div>
                  </div>
                  <div className='col-md-4 col-12 mb-4'>
                  <div className="card mt-5" style={{ backgroundColor: '#EDE6D6', height: '400px' }}>
                                   <img src="/app2 (2).png" style={{ border: 'none', height: '250px', width: '60%', marginLeft:'100px' }} className="card-img-top" alt="..." />
                                   <div className="card-body">
                                     <h5 className="card-title" style={{ textAlign: 'center' }}>Dream Speaks App</h5>
                                     <div className="text-center">
                                      
                                       <Link to="/Dreams" className="btn" style={{ color: 'black' , backgroundColor:'#996518'}} onClick={() => document.getElementById('Dreams-section').scrollIntoView({ behavior: 'smooth' })}>View More
                                       </Link>
                                     </div>
                                   </div>
                                 </div>
                  </div>
                  <div className='col-md-4 col-12 mb-4'>
                  <div className="card mt-5" style={{ backgroundColor: '#EDE6D6', height: '400px' }}>
                                   <img src="/Daily Horoscope.png" style={{ border: 'none', height: '250px', width: '60%', marginLeft:'100px' }} className="card-img-top" alt="..." />
                                   <div className="card-body">
                                     <h5 className="card-title" style={{ textAlign: 'center' }}>Daily Horoscope & Numerology</h5>
                                     <div className="text-center">
                                      
                                       <Link to="/Horoscopes" className="btn" style={{ color: 'black' , backgroundColor:'#996518'}} onClick={() => document.getElementById('Horoscope-section').scrollIntoView({ behavior: 'smooth' })}>View More
                                       </Link>
                                     </div>
                                   </div>
                                 </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className='row'>
                  <div className='col-md-4 col-12 mb-4'>
                  <div className="card mt-5" style={{ backgroundColor: '#EDE6D6', height: '400px' }}>
                                   <img src="/Angel app.png" style={{ border: 'none', height: '250px', width: '60%', marginLeft:'100px' }} className="card-img-top" alt="..." />
                                   <div className="card-body">
                                     <h5 className="card-title" style={{ textAlign: 'center' }}>Angel Numbers App - Numerology</h5>
                                     <div className="text-center">
                                      
                                       <Link to="/Angel" className="btn" style={{ color: 'black' , backgroundColor:'#996518'}}onClick={() => document.getElementById('Angel-section').scrollIntoView({ behavior: 'smooth' })}>View More
                                       </Link>
                                     </div>
                                   </div>
                                 </div>
                  </div>
                  <div className='col-md-4 col-12 mb-4'>
                  <div className="card mt-5" style={{ backgroundColor: '#EDE6D6', height: '400px' }}>
                                   <img src="/Numerology.png" style={{ border: 'none', height: '250px', width: '60%', marginLeft:'100px' }} className="card-img-top" alt="..." />
                                   <div className="card-body">
                                     <h5 className="card-title" style={{ textAlign: 'center' }}>Numerology-Empower yourself</h5>
                                     <div className="text-center">
                                      
                                       <Link to="/Numerology" className="btn" style={{ color: 'black' , backgroundColor:'#996518'}}onClick={() => document.getElementById('Empower-section').scrollIntoView({ behavior: 'smooth' })}>View More
                                       </Link>
                                     </div>
                                   </div>
                                 </div>
                  </div>
                  <div className='col-md-4 col-12 mb-4'>
                  <div className="card mt-5" style={{ backgroundColor: '#EDE6D6', height: '400px' }}>
                                   <img src="/secret crush app.png" style={{ border: 'none', height: '250px', width: '60%', marginLeft:'100px' }} className="card-img-top" alt="..." />
                                   <div className="card-body">
                                     <h5 className="card-title" style={{ textAlign: 'center' }}>Secret Crush Detector App</h5>
                                     <div className="text-center">
                                      
                                       <Link to="/Secret" className="btn" style={{ color: 'black' , backgroundColor:'#996518'}}onClick={() => document.getElementById('Secret-section').scrollIntoView({ behavior: 'smooth' })}>View More
                                       </Link>
                                     </div>
                                   </div>
                                 </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className='row'>
              
                <div className='col-md-4 col-12 mb-4'>
                  <div className="card mt-5" style={{ backgroundColor: '#EDE6D6', height: '400px' }}>
                                   <img src="/soul compain.png" style={{ border: 'none', height: '250px', width: '60%', marginLeft:'100px' }} className="card-img-top" alt="..." />
                                   <div className="card-body">
                                     <h5 className="card-title" style={{ textAlign: 'center' }}>Soul Companion-True Soulmate</h5>
                                     <div className="text-center">
                                      
                                       <Link to="/Soul" className="btn" style={{ color: 'black' , backgroundColor:'#996518'}}onClick={() => document.getElementById('Soul-section').scrollIntoView({ behavior: 'smooth' })}>View More
                                       </Link>
                                     </div>
                                   </div>
                                 </div>
                  </div>
                  <div className='col-md-4 col-12 mb-4'>
                  <div className="card mt-5" style={{ backgroundColor: '#EDE6D6', height: '400px' }}>
                                   <img src="/app3.png" style={{ border: 'none', height: '250px', width: '60%', marginLeft:'100px' }} className="card-img-top" alt="..." />
                                   <div className="card-body">
                                     <h5 className="card-title" style={{ textAlign: 'center' }}>Ramal Astrology</h5>
                                     <div className="text-center">
                                      
                                       <Link to="/Ramal" className="btn" style={{ color: 'black' , backgroundColor:'#996518'}}onClick={() => document.getElementById('Ramal-section').scrollIntoView({ behavior: 'smooth' })}>View More
                                       </Link>
                                     </div>
                                   </div>
                                 </div>
                  </div>
                  <div className='col-md-4 col-12 mb-4'>
                  <div className="card mt-5" style={{ backgroundColor: '#EDE6D6', height: '400px' }}>
                                   <img src="/pics magic app.png" style={{ border: 'none', height: '250px', width: '60%', marginLeft:'100px' }} className="card-img-top" alt="..." />
                                   <div className="card-body">
                                     <h5 className="card-title" style={{ textAlign: 'center' }}>Photo & Video Editor Pro App</h5>
                                     <div className="text-center">
                                      
                                       <Link to="/Pics" className="btn" style={{ color: 'black' , backgroundColor:'#996518'}}onClick={() => document.getElementById('Pics-section').scrollIntoView({ behavior: 'smooth' })}>View More
                                       </Link>
                                     </div>
                                   </div>
                                 </div>
                  </div>
                </div>
              </div>
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
  );
}

export default Apps;
