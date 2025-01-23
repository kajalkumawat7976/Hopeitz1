import React from 'react';
import { Link } from 'react-router-dom';

const Product = () => {
  return (
    <div className='container-fluid'id='Product-section'>
      <div className='row'>
        <div className='col-12 about'>
          <h1 style={{ textAlign: 'center', color: '#EDE6D6', marginTop: '30px' }}>Our Apps ✨</h1>
          <h5 style={{ textAlign: 'center', color: '#EDE6D6', marginTop: '30px' }}>
            Unlock the secrets of the universe with our suite of astrological apps designed just for you.<br />
            Whether you're seeking daily horoscopes, personalized birth charts, or compatibility insights, we have the perfect tools to guide you on your journey🌟.
          </h5>
        </div>
        <div className='col-12 about'>
          <div className='row'>
            {/* Card 1 */}
            <div className='col-md-4 col-12 mb-4'>
              <div className="card mt-5" style={{ backgroundColor: '#EDE6D6', height: '400px' }}>
                <img src="/services-icon4.png" style={{ border: 'none', height: '250px', width: '100%', marginLeft:'' }} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title" style={{ textAlign: 'center' }}>Advanced Numerology Calculator</h5>
                  <div className="text-center">
                    <button style={{ backgroundColor: '#996515', color: 'black', borderRadius: '5px' }}>Available on-</button>
                    <Link to="https://play.google.com/store/apps/details?id=free.birth.numerology.prediction.reading.love.calculator.compatibility.hopeitz&hl=en-IN" className="btn" style={{ color: 'black', marginLeft: "8px" }}>
                      <img src='/play_store_product.webp' style={{ height: '40px' }} alt='' />
                    </Link>
                    <Link to="#" className="btn" style={{ color: 'black' }}>
                      <img src='/app_store_product.webp' style={{ height: '40px' }} alt='' />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className='col-md-4 col-12 mb-4'>
              <div className="card mt-5" style={{ backgroundColor: '#EDE6D6', height: '400px' }}>
                <img src="/app2 (2).png" style={{ border: 'none', height: '240px', width: '60%', marginLeft:'60px'  }} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title" style={{ textAlign: 'center' }}>Dream Speaks App</h5>
                  <div className="text-center">
                    <button style={{ backgroundColor: '#996515', color: 'black', borderRadius: '5px' }}>Available on-</button>
                    <Link to="https://play.google.com/store/apps/details?id=com.hopeitz.nightmare.dream.speaks" className="btn" style={{ color: 'black', marginLeft: "8px" }}>
                      <img src='/play_store_product.webp' style={{ height: '40px' }} alt='' />
                    </Link>
                    <Link to="https://apps.apple.com/us/app/dream-meaning-interpretation/id1592445308" className="btn" style={{ color: 'black' }}>
                      <img src='/app_store_product.webp' style={{ height: '40px' }} alt='' />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className='col-md-4 col-12 mb-4'>
              <div className="card mt-5" style={{ backgroundColor: '#EDE6D6', height: '400px' }}>
                <img src="/Daily Horoscope.png" style={{ border: 'none', height: '250px', width: '60%',marginLeft:'70px' }} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title" style={{ textAlign: 'center' }}>Daily Horoscope & Numerology</h5>
                  <div className="text-center">
                    <button style={{ backgroundColor: '#996515', color: 'black', borderRadius: '5px' }}>Available on-</button>
                    <Link to="https://play.google.com/store/apps/details?id=free.daily.horoscope.numerology.app.match.making.lucky.number.tips.hopeitz&hl=en-IN" className="btn" style={{ color: 'black', marginLeft: "8px" }}>
                      <img src='/play_store_product.webp' style={{ height: '40px' }} alt='' />
                    </Link>
                    <Link to="#" className="btn" style={{ color: 'black' }}>
                      <img src='/app_store_product.webp' style={{ height: '40px' }} alt='' />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second Row of Cards */}
          <div className='row'>
            {/* Card 4 */}
            <div className='col-md-4 col-12 mb-4'>
              <div className="card mt-5" style={{ backgroundColor: '#EDE6D6', height: '380px' }}>
                <img src="/Angel app.png" style={{ border: 'none', height: '200px', width: '60%', marginLeft:'80px'}} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title" style={{ textAlign: 'center' }}>Angel Numbers App - Numerology</h5>
                  <div className="text-center">
                    <button style={{ backgroundColor: '#996515', color: 'black', borderRadius: '5px' }}>Available on-</button>
                    <Link to="https://play.google.com/store/apps/details?id=free.daily.angel.numbers.app.meaning.secret.number.message.spiritual.guide.signs.numerology&hl=en-IN" className="btn" style={{ color: 'black', marginLeft: "8px" }}>
                      <img src='/play_store_product.webp' style={{ height: '40px' }} alt='' />
                    </Link>
                    <Link to="#" className="btn" style={{ color: 'black' }}>
                      <img src='/app_store_product.webp' style={{ height: '40px' }} alt='' />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div className='col-md-4 col-12 mb-4'>
              <div className="card mt-5" style={{ backgroundColor: '#EDE6D6', height: '380px' }}>
                <img src="/Numerology.png" style={{ border: 'none', height: '250px', width: '60%',marginLeft:'70px'}} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title" style={{ textAlign: 'center' }}>Numerology-Empower yourself</h5>
                  <div className="text-center">
                    <button style={{ backgroundColor: '#996515', color: 'black', borderRadius: '5px' }}>Available on-</button>
                    <Link to="https://play.google.com/store/apps/details?id=free.numerology.reading.app.prediction.calculator.number.chart.hopeitz&hl=en-IN" className="btn" style={{ color: 'black', marginLeft: "8px" }}>
                      <img src='/play_store_product.webp' style={{ height: '40px' }} alt='' />
                    </Link>
                    <Link to="https://apps.apple.com/us/app/numerology-numbers-you/id1584135080" className="btn" style={{ color: 'black' }}>
                      <img src='/app_store_product.webp' style={{ height: '40px' }} alt='' />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 6 */}
            <div className='col-md-4 col-12 mb-4'>
              <div className="card mt-5" style={{ backgroundColor: '#EDE6D6', height: '380px' }}>
                <img src="/secret crush app.png" style={{ border: 'none', height: '200px', width: '60%',marginLeft:'70px' }} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title" style={{ textAlign: 'center' }}>Secret Crush Detector App</h5>
                  <div className="text-center">
                    <button style={{ backgroundColor: '#996515', color: 'black', borderRadius: '5px' }}>Available on-</button>
                    <Link to="https://play.google.com/store/apps/details?id=free.find.secret.crush.unknown.lover.soulmate.love&hl=en-IN" className="btn" style={{ color: 'black', marginLeft: "8px" }}>
                      <img src='/play_store_product.webp' style={{ height: '40px' }} alt='' />
                    </Link>
                    <Link to="#" className="btn" style={{ color: 'black' }}>
                      <img src='/app_store_product.webp' style={{ height: '40px' }} alt='' />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Third Row of Cards */}
          <div className='row'>
            {/* Card 7 */}
            <div className='col-md-4 col-12 mb-4'>
              <div className="card mt-5" style={{ backgroundColor: '#EDE6D6', height: '380px' }}>
                <img src="/soul compain.png" style={{ border: 'none', height: '200px', width: '60%', marginLeft:'70px' }} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title" style={{ textAlign: 'center' }}>Soul Companion-True Soulmate</h5>
                  <div className="text-center">
                    <button style={{ backgroundColor: '#996515', color: 'black', borderRadius: '5px' }}>Available on-</button>
                    <Link to="https://play.google.com/store/apps/details?id=free.soulmate.psychic.reading.emoji.quiz.zodiac.sign.soul.companion.hopeitz&hl=en-IN" className="btn" style={{ color: 'black', marginLeft: "8px" }}>
                      <img src='/play_store_product.webp' style={{ height: '40px' }} alt='' />
                    </Link>
                    <Link to="https://apps.apple.com/us/app/true-soulmate-finder-for-you/id1591621860" className="btn" style={{ color: 'black' }}>
                      <img src='/app_store_product.webp' style={{ height: '40px' }} alt='' />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 8 */}
            <div className='col-md-4 col-12 mb-4'>
              <div className="card mt-5" style={{ backgroundColor: '#EDE6D6', height: '380px' }}>
                <img src="/Signature app.png" style={{ border: 'none', height: '200px', width: '60%', marginLeft:'70px'}} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title" style={{ textAlign: 'center' }}>SignNature Analysis App</h5>
                  <div className="text-center">
                    <button style={{ backgroundColor: '#996515', color: 'black', borderRadius: '5px' }}>Available on-</button>
                    <Link to="https://play.google.com/store/apps/details?id=com.signature.hopeitz&hl=en-IN" className="btn" style={{ color: 'black', marginLeft: "8px" }}>
                      <img src='/play_store_product.webp' style={{ height: '40px' }} alt='' />
                    </Link>
                    <Link to="https://apps.apple.com/us/app/signnature-analysis-app/id1593181340" className="btn" style={{ color: 'black' }}>
                      <img src='/app_store_product.webp' style={{ height: '40px' }} alt='' />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 9 */}
            <div className='col-md-4 col-12 mb-4'>
              <div className="card mt-5" style={{ backgroundColor: '#EDE6D6', height: '380px' }}>
                <img src="/app3.png" style={{ border: 'none', height: '200px', width: '60%', marginLeft:'100px' }} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title" style={{ textAlign: 'center' }}>Ramal Astrology</h5>
                  <div className="text-center">
                    <button style={{ backgroundColor: '#996515', color: 'black', borderRadius: '5px' }}>Available on-</button>
                    <Link to="https://play.google.com/store/apps/details?id=ramal.indian.astrology.horoscope.prediction.dice.number.hopeitz&hl=en-IN" className="btn" style={{ color: 'black', marginLeft: "8px" }}>
                      <img src='/play_store_product.webp' style={{ height: '40px' }} alt='' />
                    </Link>
                    <Link to="https://apps.apple.com/us/app/signnature-analysis-app/id1593181340" className="btn" style={{ color: 'black' }}>
                      <img src='/app_store_product.webp' style={{ height: '40px' }} alt='' />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Last Row of Cards */}
          <div className='row'>
            {/* Card 10 */}
            <div className='col-md-6 col-12 mb-4'>
              <div className="card mt-5" style={{ backgroundColor: '#EDE6D6', height: '380px' }}>
                <img src="/pics magic app.png" style={{ border: 'none', height: '250px', width: '40%',marginLeft:'100px' }} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title" style={{ textAlign: 'center' }}>Photo & Video Editor Pro App</h5>
                  <div className="text-center">
                    <button style={{ backgroundColor: '#996515', color: 'black', borderRadius: '5px' }}>Available on-</button>
                    <Link to="https://play.google.com/store/apps/details?id=photo.slide.show.video.editing.app.music.reels.status.maker.picture.pix.magic.hopeitz&hl=en-IN" className="btn" style={{ color: 'black', marginLeft: "8px" }}>
                      <img src='/play_store_product.webp' style={{ height: '40px' }} alt='' />
                    </Link>
                    <Link to="https://apps.apple.com/us/app/photo-video-maker-editor/id1558642035" className="btn" style={{ color: 'black' }}>
                      <img src='/app_store_product.webp' style={{ height: '40px' }} alt='' />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 11 */}
            <div className='col-md-6 col-12 mb-4'>
              <div className="card mt-5" style={{ backgroundColor: '#EDE6D6', height: '380px' }}>
                <img src="/psycology app.png" style={{ border: 'none', height: '250px', width: '40%', marginLeft:'100px' }} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title" style={{ textAlign: 'center' }}>Psychological Life Facts</h5>
                  <div className="text-center">
                    <button style={{ backgroundColor: '#996515', color: 'black', borderRadius: '5px' }}>Available on-</button>
                    <Link to="https://apps.apple.com/us/app/psychological-life-facts/id1522839526" className="btn" style={{ color: 'black', marginLeft: "8px" }}>
                      <img src='/play_store_product.webp' style={{ height: '40px' }} alt='' />
                    </Link>
                    <Link to="https://apps.apple.com/us/app/psychological-life-facts/id1522839526" className="btn" style={{ color: 'black' }}>
                      <img src='/app_store_product.webp' style={{ height: '40px' }} alt='' />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;