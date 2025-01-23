import React from 'react';
import { Link } from 'react-router-dom';

const DailyHoroscopes = () => {
  return (
    <div className='container-fluid'id='Horoscope-section'>
      <div className='row about'>
        <div className='col-12'>
          <h1 style={{ color: "#EDE6D6", textAlign: 'center', marginTop: '100px', marginBottom: '100px', textShadow: '2px 2px blue' }}>
            Daily Horoscope & Numerology App
          </h1>
        </div>
        <div className='col-md-6 col-12' style={{ marginTop: '-10px' }}>
          <h1 style={{ color: '#EDE6D6', marginTop: '100px', marginLeft: '20px' }}>Daily Horoscope & Numerology App-</h1>
          <h4 style={{ color: '#EDE6D6', marginLeft: '20px' }}>
            "Unlock the secrets of your day with our Daily Horoscope & Numerology App—your personalized guide to navigating life’s journey with cosmic insights and powerful numbers!"
          </h4>
          <h5 style={{ color: '#EDE6D6', marginLeft: '20px', fontWeight: 'bold', marginTop: '30px' }}>
            "DAILY HOROSCOPE"- our Daily Horoscope app, where the stars align to illuminate your path! Each day, receive personalized insights tailored to your zodiac sign, helping you navigate life's challenges and seize opportunities with confidence.
          </h5>
          <ul style={{ color: '#EDE6D6', marginLeft: '20px', fontSize: '18px' }}>
            <li>Free Daily Numerology✔</li>
            <li>Free Love Matching💕</li>
          </ul>
          <ul style={{ color: '#EDE6D6', marginLeft: '20px', fontSize: '18px' }}>
            <li>Numerology Forecast🤳</li>
            <li>Lucky Color🎨</li>
          </ul>
          <div className="text-center">
            <Link to="https://play.google.com/store/apps/details?id=free.daily.horoscope.numerology.app.match.making.lucky.number.tips.hopeitz&hl=en_IN" className="btn" style={{ margin: "20px" }}>
              <img src='/play_store_product.webp' style={{ height: '50px' }} alt='' />
            </Link>
            <Link to="#" className="btn">
              <img src='/app_store_product.webp' style={{ height: '50px' }} alt='' />
            </Link>
          </div>
        </div>
        <div className='col-md-6 col-12'>
          <img src='' style={{ height: '500px', marginLeft: '80px' }} alt='' />
        </div>
        <div className='col-12 mt-5'>
          <h1 style={{ color: '#EDE6D6', textAlign: 'center' }}>About</h1>
          <h1 style={{ color: '#EDE6D6', textAlign: 'center' }}>Daily Horoscope & Numerology App</h1>
          <p style={{ color: '#EDE6D6', fontSize: '20px', textAlign: 'center' }}>
            Our Daily Horoscope & Numerology app! Each day, unlock personalized predictions and guidance tailored to your zodiac sign, while exploring the powerful influence of numbers in your life. Whether you're seeking clarity in love, career, or personal growth, our app provides the tools you need to navigate your journey with confidence. Embrace the magic of the universe and let the stars and numbers illuminate your path to success and fulfillment!
          </p>
          <p style={{ color: '#EDE6D6', fontSize: '20px', textAlign: 'center' }}>
            "Receive tailored daily horoscopes that align with your zodiac sign, offering guidance on love, career, and personal growth!"
          </p>
          <p style={{ color: '#EDE6D6', fontSize: '20px', textAlign: 'center' }}>
            <i className="bi bi-megaphone" style={{ color: 'orange' }}></i> "Unlock the secrets of your life path with in-depth numerology readings that reveal your strengths, challenges, and opportunities!"
          </p>
          <p style={{ color: '#EDE6D6', fontSize: '20px', textAlign: 'center' }}>
            <i className="bi bi-megaphone" style={{ color: 'orange' }}></i> "Explore compatibility insights with potential partners, friends, and colleagues based on astrological signs for deeper connections!"
          </p>
        </div>
        <div className='col-md-6 col-12'>
          <h1 style={{ color: '#EDE6D6', marginTop: '100px', marginLeft: '20px' }}>Amazing Key Features✨</h1>
          <p style={{ color: '#EDE6D6', marginLeft: '20px', marginTop: '30px', fontSize: '18px' }}>
            "Discover the magic of our app with amazing key features that empower you to unlock insights, enhance your journey, and connect with the universe like never before! ✨"
          </p>
          <div className='row'>
            <div className='col-12 col-md-6' style={{ color: '#EDE6D6', marginLeft: '20px' }}>
              <h2>✔Free Daily Numerology</h2>
              <p style={{ color: '#EDE6D6' }}>"Start each day with clarity and purpose through our free daily numerology insights, designed to empower your decisions and elevate your spirit!"
              </p>
            </div>
            <div className='col-12 col-md-6' style={{ color: '#EDE6D6', marginLeft: '20px' }}>
              <h2>💕Free Love Matching</h2>
              <p style={{ color: '#EDE6D6' }}>
                "Find your perfect match effortlessly with our free love matching feature, where cosmic compatibility meets heartfelt connections!"
              </p>
            </div>
            <div className='col-12 col-md-6' style={{ color: '#EDE6D6', marginLeft: '20px' }}>
              <h2>🤳Numerology Forecast</h2>
              <p style={{ color: '#EDE6D6 '}}>
                "Unlock your future with personalized numerology forecasts that reveal the hidden patterns guiding your life's journey!"
              </p>
            </div>
            <div className='col-12 col-md-6' style={{ color: '#EDE6D6', marginLeft: '20px' }}>
              <h2>🎨Lucky Color</h2>
              <p style={{ color: '#EDE6D6' }}>
                "Embrace the power of positivity with your lucky color of the day, enhancing your energy and attracting good fortune wherever you go!"
              </p>
            </div>
          </div>
        </div>
        <div className='col-12 mt-5'>
          <h1 style={{ color: '#EDE6D6', textAlign: 'center' }}>How Daily Horoscope & Numerology App Works?</h1>
          <p style={{ color: '#EDE6D6', fontSize: '20px', textAlign: 'center' }}>Follow these easy steps!</p>
          <p style={{ color: '#EDE6D6', fontSize: '20px', textAlign: 'center' }}>
            1. <i className="bi bi-download" style={{ fontSize: '40px', color: 'orange' }}></i> Download Daily Horoscope & Numerology App.
          </p>
          <p style={{ color: '#EDE6D6', fontSize: '17px', textAlign: 'center' }}>
            Go to Google Play Store/ App Store on your device and search for Daily Horoscope & Numerology App by Hopeitz Software, now install it on your device.
          </p>
          <p style={{ color: '#EDE6D6', fontSize: '20px', textAlign: 'center' }}>
            2. <i className="bi bi-download" style={{ fontSize: '40px', color: 'orange' }}></i> Select What you want to see.
          </p>
          <p style={{ color: '#EDE6D6', fontSize: '17px', textAlign: 'center' }}>
            Open Daily Horoscope & Numerology App on your Device and there are many options, select one. (Options Like: Numerology Forecast, Free Love Matching, Free Daily Numerology, Lucky Color, etc.)
          </p>
          <p style={{ color: '#EDE6D6', fontSize: '20px', textAlign: 'center' }}>
            3. <i className="bi bi-download" style={{ fontSize: '40px', color: 'orange' }}></i> Select One Category.
          </p>
          <p style={{ color: '#EDE6D6', fontSize: '17px', textAlign: 'center' }}>
            After selecting you will see your Lucky Number, Lucky Color, etc.
          </p>
        </div>
        <div className='col-12'>
          <h1 style={{ color: '#EDE6D6', textAlign: 'center' }}>App Screenshots</h1>
          <p style={{ color: '#EDE6D6', textAlign: 'center' }}>Take a quick look at the screenshots of Daily Horoscope & Numerology App to understand its interface and features in a better way.</p>
        </div>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className='row carousel'>
                <div className='col-12 col-md-3'>
                  <div className="card mt-5" style={{ height: '420px', width: '280px', margin: 'auto', backgroundColor: 'white', marginBottom: '30px' }}>
                    <div className="card-body">
                      <img src='/Horoscope1.webp' alt='' style={{ height: '420px', width: "100%", objectFit: 'cover' }} />
                    </div>
                  </div>
                </div>
                <div className='col-12 col-md-3'>
                  <div className="card mt-5" style={{ height: '420px', width: '280px', margin: 'auto', backgroundColor: 'white', marginBottom: '30px' }}>
                    <div className="card-body">
                      <img src='/Horoscope2.webp' alt='' style={{ height: '420px', width: "100%", objectFit: 'cover' }} />
                    </div>
                  </div>
                </div>
                <div className='col-12 col-md-3'>
                  <div className="card mt-5" style={{ height: '420px', width: '280px', margin: 'auto', backgroundColor: 'white', marginBottom: '30px' }}>
                    <div className="card-body">
                      <img src='/Horoscope3.webp' alt='' style={{ height: '420px', width: "100%", objectFit: 'cover' }} />
                    </div>
                  </div>
                </div>
                <div className='col-12 col-md-3'>
                  <div className="card mt-5" style={{ height: '420px', width: '280px', margin: 'auto', backgroundColor: 'white', marginBottom: '30px' }}>
                    <div className="card-body">
                      <img src='/Horoscope4.webp' alt='' style={{ height: '420px', width: "100%", objectFit: 'cover' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className='row carousel'>
                <div className='col-12 col-md-3'>
                  <div className="card mt-5" style={{ height: '420px', width: '280px', margin: 'auto', backgroundColor: 'white', marginBottom: '30px' }}>
                    <div className="card-body">
                      <img src='/Horoscope5.webp' alt='' style={{ height: '420px', width: "100%", objectFit: 'cover' }} />
                    </div>
                  </div>
                </div>
                <div className='col-12 col-md-3'>
                  <div className="card mt-5" style={{ height: '420px', width: '280px', margin: 'auto', backgroundColor: 'white', marginBottom: '30px' }}>
                    <div className="card-body">
                      <img src='/Horoscope6.webp' alt='' style={{ height: '420px', width: "100%", objectFit: 'cover' }} />
                    </div>
                  </div>
                </div>
                <div className='col-12 col-md-3'>
                  <div className="card mt-5" style={{ height: '420px', width: '280px', margin: 'auto', backgroundColor: 'white', marginBottom: '30px' }}>
                    <div className="card-body">
                      <img src='/Horoscope7.webp' alt='' style={{ height: '420px', width: "100%", objectFit: 'cover' }} />
                    </div>
                  </div>
                </div>
                <div className='col-12 col-md-3'>
                  <div className="card mt-5" style={{ height: '420px', width: '280px', margin: 'auto', backgroundColor: 'white', marginBottom: '30px' }}>
                    <div className="card-body">
                      <img src='/Horoscope8.webp' alt='' style={{ height: '420px', width: "100%", objectFit: 'cover' }} />
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
        <div className='col-12'>
          <h1 style={{ color: '#EDE6D6', marginTop: '80px', textAlign: 'center' }}>Daily Horoscope & Numerology App✨</h1>
          <p style={{ color: '#EDE6D6', fontSize: '19px', textAlign: 'center' }}>
            ✨ Unlock the Secrets of Your Day! ✨ Dive into the cosmic insights of our Daily Horoscope and discover what the stars have in store for you. Whether you're seeking guidance in love, career, or personal growth, our expert interpretations will illuminate your path. Plus, explore the fascinating world of Numerology to uncover the hidden meanings behind your numbers. Embrace the magic of the universe and let it guide you to a brighter tomorrow! 🌟
          </p>
          <p style={{ color: '#EDE6D6', fontSize: '18px', textAlign: 'center' }}>
            —your destiny awaits at your fingertips! Download now and start exploring the secrets of the universe today!
          </p>
        </div>
      </div>
    </div>
  );
}

export default DailyHoroscopes;