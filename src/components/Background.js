import React from "react";


const Background = () => {
  return (
    <div className="container-fluid background">
      <div className="row">
        <div className="col-md-12" style={{marginTop:'-200px'}}>
          <div className="video-container ">
            <video autoPlay loop muted className="background-video">
              <source src="/background.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
           
            <div className="col-md-12 container-md">
            <img src="/home2 (2).png" className="Home" alt="" />
            <p className="text text-title">Predict Future</p>
            <p className="text text-subtitle">
                "Catch a Glimpse of Your Destiny with our Captivating Astrological Readings"
            </p>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Background;
