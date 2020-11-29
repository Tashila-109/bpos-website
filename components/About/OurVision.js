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
              <h2>We are Committed to Help Clients to Reach The Goals</h2>
              <p>
                "To be the partner of choice of our clients engaging the most talented people, producing the best in
                class solutions and delivering powerful business results on behalf of our stakeholders"
              </p>

              {/* <div className='vision-list'>
                <ul>
                  <li>
                    <i className='bx bx-chevrons-right'></i>
                    Save Money
                  </li>
                  <li>
                    <i className='bx bx-chevrons-right'></i>
                    Fast Application
                  </li>
                  <li>
                    <i className='bx bx-chevrons-right'></i>
                    Flexible Insurance
                  </li>
                  <li>
                    <i className='bx bx-chevrons-right'></i>
                    No Brokers, No Upselling
                  </li>
                  <li>
                    <i className='bx bx-chevrons-right'></i>
                    Investment Planning
                  </li>
                  <li>
                    <i className='bx bx-chevrons-right'></i>
                    Professional Advisor
                  </li>
                </ul>
              </div> */}
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
