import React from 'react'

const Apps = () => {
  return (
    <div className='col-md-12'>
      <div className='row'>
  <div className='col-md-12 video-container'>
  <video autoPlay loop muted className="background-video">
              <source src="/client2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
  </div>

        <div className='col-md-12' style={{marginTop:'-800px'}}>
            <h1 style={{color:'#EDE6D6', textAlign:'center'}}>Our Apps</h1>
            <h2 style={{color:'#EDE6D6', textAlign:'center'}}> "Let the stars inspire you: Daily affirmations and guidance based on your sign!"</h2>
        </div>
      </div>
    </div>
  )
}

export default Apps
