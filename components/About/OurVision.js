import React from 'react';
import ReactWOW from 'react-wow';

const OurVision = () => {
  return (
    <div className='our-vision-area our-vision-secondary ptb-100'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-6'>
            <div className='vision-content'>
              <span>Our Vision</span>
              <h2>Our Vision</h2>
              <p>"To be the partner of choice of our clients,</p>
              <p>Engaging the most talented people, </p>
              <p>Producing the best in class solutions, </p>
              <p>And delivering powerful business results on behalf of our stakeholders"</p>
            </div>
          </div>
          <div className='col-lg-6'>
            <ReactWOW animation='fadeInRight' delay='0.1s'>
              <div className='about-img'>
                <img src='/images/vision-img.jpg' alt='Image' />
              </div>
            </ReactWOW>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurVision;
