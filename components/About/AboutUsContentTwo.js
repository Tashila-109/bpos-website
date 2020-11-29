import React from 'react';

const AboutUsContentTwo = () => {
  return (
    <div className='about-area ptb-100'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-6 col-md-6'>
            <div className='about-content'>
              <span>Core Values</span>
              <h2>Heading about core values here</h2>

              <p>
                <strong>Excellence</strong> is not an act but a habit for us. We always use time tested proven methods
                to deliver services doing our best to exceed the client’s expectations.
              </p>

              <p>
                <strong>Integrity</strong> is paramount. Ethical behavior and integrity is an innate quality of our
                staff. We strongly believe in being fair and transparent in our dealings.
              </p>

              <p>
                <strong>Dependability</strong> is where we inspire confidence in our clients by being their trusted
                partner in both good and tough times. As a reliable service provider, we are committed to achieving
                client satisfaction and building enduring relationships.
              </p>

              {/* <div className='about-list'>
                <div className='row'>
                  <div className='col-lg-6'>
                    <div className='about-single-list list-2'>
                      <i className='flaticon-social-care-1'></i>
                      <span>We are always Care about Client Satisfy</span>
                    </div>
                  </div>
                  <div className='col-lg-6'>
                    <div className='about-single-list'>
                      <i className='flaticon-target'></i>
                      <span>100+ Community Involvement</span>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>

          <div className='col-lg-6 col-md-6'>
            <div className='about-img-3'>
              <img src='/images/about-img-3.jpg' alt='Image' />
              <div className='about-img-2'>
                <img src='/images/about-img-2.jpg' alt='Image' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsContentTwo;
