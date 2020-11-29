import React from 'react';
import ReactWOW from 'react-wow';

const AboutUsContent = () => {
  return (
    <div className='about-area ptb-100'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-6'>
            <div className='about-content'>
              <span>About Us</span>
              <h2>We have been Thriving in 37 Years The Area</h2>

              <p>
                Business Process Outsourcing Services LLC (BPOS) is a company set up with the objective of providing
                services and solutions to Banks as well as Government and Commercial Establishments in the Sultanate of
                Oman. BPOS brings together competent people from diverse backgrounds possessing strategic, operational,
                IT and Financial expertise in their fields.
              </p>

              <p>
                With International strategic partners and a progressive company culture that emphasizes and nurtures
                innovation and creativity, BPOS delivers unique solutions that bring value to its customers and
                partners, which help make life easier, more productive and more enjoyable.
              </p>

              <div className='about-list'>
                <ul>
                  <li>
                    <i className='flaticon-checked'></i>
                    Save Money
                  </li>
                  <li>
                    <i className='flaticon-checked'></i>
                    Fast Application
                  </li>
                  <li>
                    <i className='flaticon-checked'></i>
                    Flexible Insurance
                  </li>
                  <li>
                    <i className='flaticon-checked'></i>
                    No Brokers, No Upselling
                  </li>
                  <li>
                    <i className='flaticon-checked'></i>
                    Investment Planning
                  </li>
                  <li>
                    <i className='flaticon-checked'></i>
                    Professional Advisor
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className='col-lg-6'>
            <ReactWOW animation='fadeInRight' delay='0.1s'>
              <div className='about-img'>
                <img src='/images/about-img.jpg' alt='about-image' />
              </div>
            </ReactWOW>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsContent;
