import React from 'react';
import ReactWOW from 'react-wow';

const OurMission = () => {
  return (
    <div className='our-vision-area ptb-100'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-6'>
            <ReactWOW animation='fadeInLeft' delay='0.1s'>
              <div className='about-img'>
                <img src='/images/mission-img.jpg' alt='mission' />
              </div>
            </ReactWOW>
          </div>

          <div className='col-lg-6'>
            <div className='vision-content'>
              <span>Our Mission</span>
              <h2>Our Mission</h2>

              <p>Be committed to achieve excellence by providing unparalleled solutions and value creation to our clients and partners</p>

              <p>
                Be innovative to develop customer centric solutions by maintaining the highest standards of professionalism and quality of
                service.
              </p>

              <p>Develop our People to be the best in what we do.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
