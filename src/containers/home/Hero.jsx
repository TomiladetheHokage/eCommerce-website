import React from 'react'

import './style/Hero.css'
import model from '../../assets/images/Layer 1.png'
const Hero = () => {


  return (
      <main>
          <div className='hero'>
              <div className='outer-hero'>
                  <div className='hero-content'>
                      <div>
                          <h1 className='hero-header'>FIND CLOTHES<br/>THAT MATCHES<br/>YOUR STYLE</h1>
                      </div>
                      <div>
                          <p className='hero-paragraph'>
                              Browse through our diverse range of meticulously crafted garments, designed
                              to bring out your individuality and cater to your sense of style.
                          </p>
                      </div>
                      <div className='hero-button-container'>
                          <button className='hero-button'>
                              SHOP NOW
                          </button>
                      </div>
                  </div>
                  <div className='hero-models'>
                      <img className='models' src={model}/>
                  </div>
              </div>
              <div className='brand-container'>
                  <h1 className='brand'>VERSACE</h1>
                  <h1 className='brand'>ZARA</h1>
                  <h1 className='brand'>GUCCI</h1>
                  <h1 className='brand'>PRADA</h1>
                  <h1 className='brand'>CALVIN KLEIN</h1>
              </div>
          </div>

      </main>

  )
}

export default Hero