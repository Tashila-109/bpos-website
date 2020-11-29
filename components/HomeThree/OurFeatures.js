import React from 'react';
import Link from 'next/link';

const OurFeatures = () => {
  return (
    <div className='choose-us-area-three pt-100 pb-70'>
      <div className='container'>
        <div className='section-title'>
          <span>Our Values</span>
          <h2>Some Values heading here</h2>
          <p>
            Committed to achieve excellence by providing unparalleled solutions and value creation to our clients and
            partners.
          </p>
        </div>

        <div className='row'>
          <div className='col-lg-4 col-sm-6'>
            <div className='single-choose'>
              <span className='flaticon-kindness'></span>
              <h3>Our Mission</h3>
              <p>
                Committed to achieve excellence by providing unparalleled solutions and value creation to our clients
                and partners.
              </p>

              <Link href='/about'>
                <a>
                  <i className='flaticon-right'></i>
                </a>
              </Link>
            </div>
          </div>

          <div className='col-lg-4 col-sm-6'>
            <div className='single-choose'>
              <span className='flaticon-target'></span>
              <h3>Our Vision</h3>
              <p>
                "To be the partner of choice of our clients engaging the most talented people, producing the best in
                class solutions and delivering powerful business results on behalf of our stakeholders"
              </p>

              <Link href='/insurance-details'>
                <a>
                  <i className='flaticon-right'></i>
                </a>
              </Link>
            </div>
          </div>

          <div className='col-lg-4 col-sm-6 offset-sm-3 offset-lg-0'>
            <div className='single-choose'>
              <span className='flaticon-experience'></span>
              <h3>Core Values</h3>
              <p>
                Excellence is not an act but a habit for us. We always use time tested proven methods to deliver
                services doing our best to exceed the client’s expectations.
              </p>

              <Link href='/insurance-details'>
                <a>
                  <i className='flaticon-right'></i>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFeatures;
