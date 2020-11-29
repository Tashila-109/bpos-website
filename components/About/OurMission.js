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
              <h2>We are Committed to Help Clients to Reach The Goals</h2>

              <p>
                Committed to achieve excellence by providing unparalleled solutions and value creation to our clients
                and partners.
              </p>

              <p>
                Innovative to develop customer centric solutions by maintaining the highest standards of professionalism
                and quality of service. Nurture the talent of our team to be the best in what we do.
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
        </div>
      </div>
    </div>
  );
};

export default OurMission;