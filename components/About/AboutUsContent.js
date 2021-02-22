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
              <h2>Welcome to BPOS Global</h2>

              <p>
                <b>Business Process Outsourcing Services LLC (BPOS Global) </b> is a company set up in Oman and Sri Lanka with the objective
                of providing services and solutions to BFSI as well as Public and Private Sector Establishments in Sri Lanka and the
                Sultanate of Oman. The Company brings together competent people, processes and technologies from diverse backgrounds in
                order to provide expertise in Strategy Planning, Processes, ICT, Financial Services, Trading and Real Estate.
              </p>

              <p>
                With International strategic partners and a progressive company culture that emphasizes and nurtures innovation and
                creativity, BPOS delivers unique solutions that bring value to its customers and partners, which help make life easier, more
                productive and more enjoyable.
              </p>
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
