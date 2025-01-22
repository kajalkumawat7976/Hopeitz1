import React from 'react'
// import { Link } from 'react-router-dom'

const Slider = () => {
  return (
    <div className='container-fluid ' style={{marginTop:'-650px'}}>
      {/* <div className='row'>
        <div className='col-md-12'>
  <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
    <div className='row carousel'>
      <div className='col-md-4'>
        <div class="card mt-5" style={{width: "23rem", backgroundColor:'#EDE6D6', marginLeft:'210px', height:'310px'}}>
  <img src="/services-icon4.png" style={{border:'none', height:'250px' , width:'380px', marginLeft:'-10px', marginTop:'10px'}} class="card-img-top" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title"style={{textAlign:'center'}}>Advanced Numerology Calculator</h5>
    <Link to="/Advance" class="btn " style={{marginLeft:'110px', backgroundColor:'#996515', color: 'black', borderRadius:'10px'}}>View More</Link>
  </div>
</div>
        </div>
        <div className='col-md-4'>
        <div class="card mt-5" style={{width: "23rem", backgroundColor:'#EDE6D6', marginLeft:'90px', height:'310px'}}>
  <img src="/app2 (2).png" style={{border:'none', height:'210px' , width:'200px', marginLeft:'80px', marginTop:'10px'}} class="card-img-top" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title"style={{textAlign:'center', marginTop:'-10px'}}>Dream Speaks App</h5>
    <Link to="/Dreams" class="btn " style={{marginLeft:'120px', backgroundColor:'#996515', color: 'black', borderRadius:'10px'}}>View More</Link>
  </div>
</div>
        </div>
        <div className='col-md-4 mb-5'>
        <div class="card mt-5" style={{width: "23rem", backgroundColor:'#EDE6D6', marginLeft:'-20px', height:'310px'}}>
  <img src="/app3.png" style={{border:'none', height:'210px' , width:'280px', marginLeft:'50px', marginTop:'10px'}} class="card-img-top" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title"style={{textAlign:'center', marginTop:'-10px'}}>Ramal Astrology</h5>
    <Link to="/Ramal" class="btn " style={{marginLeft:'120px', backgroundColor:'#996515', color: 'black', borderRadius:'10px'}}>View More</Link>
  </div>
</div>
        </div></div>
    </div>
    <div className="carousel-item">
    <div className='row carousel'>
      <div className='col-md-4'>
        <div class="card mt-5" style={{width: "23rem", backgroundColor:'#EDE6D6', marginLeft:'210px', height:'310px'}}>
  <img src="/soul compain.png" style={{border:'none', height:'200px' , width:'200px', marginLeft:'80px', marginTop:'10px'}} class="card-img-top" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title"style={{textAlign:'center'}}>Soul Companion - True Soulmate</h5>
    <Link to="/Soul" class="btn " style={{marginLeft:'110px', backgroundColor:'#996515', color: 'black', borderRadius:'10px'}}>View More</Link>
  </div>
</div>
        </div>
        <div className='col-md-4'>
        <div class="card mt-5" style={{width: "23rem", backgroundColor:'#EDE6D6', marginLeft:'90px', height:'310px'}}>
  <img src="/pics magic app.png" style={{border:'none', height:'210px' , width:'250px', marginLeft:'60px', marginTop:'10px'}} class="card-img-top" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title"style={{textAlign:'center', marginTop:'-10px'}}>Pics Magic App</h5>
    <Link to="/Pics" class="btn " style={{marginLeft:'120px', backgroundColor:'#996515', color: 'black', borderRadius:'10px'}}>View More</Link>
  </div>
</div>
        </div>
        <div className='col-md-4 mb-5'>
        <div class="card mt-5" style={{width: "23rem", backgroundColor:'#EDE6D6', marginLeft:'-20px', height:'310px'}}>
  <img src="/Daily Horoscope.png" style={{border:'none', height:'210px' , width:'280px', marginLeft:'50px', marginTop:'10px'}} class="card-img-top" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title"style={{textAlign:'center', marginTop:'-10px'}}>Daily Horoscope & Numerology</h5>
    <Link to="/Horoscopes" class="btn " style={{marginLeft:'120px', backgroundColor:'#996515', color: 'black', borderRadius:'10px'}}>View More</Link>
  </div>
</div>
        </div></div>
    </div>
    <div className="carousel-item">
    <div className='row carousel'>
      <div className='col-md-4'>
        <div class="card mt-5" style={{width: "23rem", backgroundColor:'#EDE6D6', marginLeft:'210px', height:'310px'}}>
  <img src="/Angel app.png" style={{border:'none', height:'200px' , width:'350px', marginLeft:'10px', marginTop:'10px'}} class="card-img-top" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title"style={{textAlign:'center'}}>Angel Numbers App - Numerology</h5>
    <Link to="/Angel" class="btn " style={{marginLeft:'110px', backgroundColor:'#996515', color: 'black', borderRadius:'10px'}}>View More</Link>
  </div>
</div>
        </div>
        <div className='col-md-4'>
        <div class="card mt-5" style={{width: "23rem", backgroundColor:'#EDE6D6', marginLeft:'90px', height:'310px'}}>
  <img src="/secret crush app.png" style={{border:'none', height:'210px' , width:'200px', marginLeft:'80px', marginTop:'10px'}} class="card-img-top" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title"style={{textAlign:'center', marginTop:'-10px'}}>Secret Crush Detector App</h5>
    <Link to="/Secret" class="btn " style={{marginLeft:'120px', backgroundColor:'#996515', color: 'black', borderRadius:'10px'}}>View More</Link>
  </div>
</div>
        </div>
        <div className='col-md-4 mb-5'>
        <div class="card mt-5" style={{width: "23rem", backgroundColor:'#EDE6D6', marginLeft:'-20px', height:'310px'}}>
  <img src="/Numerology.png" style={{border:'none', height:'210px' , width:'280px', marginLeft:'50px', marginTop:'10px'}} class="card-img-top" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title"style={{textAlign:'center', marginTop:'-10px'}}>Numerology - Empower Yourself</h5>
    <Link to="/Numerology" class="btn " style={{marginLeft:'120px', backgroundColor:'#996515', color: 'black', borderRadius:'10px'}}>View More</Link>
  </div>
</div>
        </div></div>
    </div>
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
<div className='col-md-12'style={{marginTop:'-120px',marginLeft:'500px'}}>
  <img src='/slider image.png' style={{width:'800px'}} alt=''></img>
</div>
        </div>
        
</div> */}
 
</div>

    
  )
}

export default Slider
