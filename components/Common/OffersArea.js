import React from 'react';
import Link from 'next/link';

const OffersArea = () => {
  return (
    <div className='business-contact-area'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-6 col-md-6 p-0'>
            <div className='business-img'>
              <img src='/images/business-img.jpg' alt='Image' />
            </div>
          </div>

          <div className='col-lg-6 col-md-6 p-0'>
            <div className='business-content'>
              <h3>Get Our Latest News Here Today</h3>

              <Link href='/news-and-events'>
                <a className='default-btn active ml-0'>News & Events</a>
              </Link>

              <p className='pl-4'>
                Call Us Today: <br /> +968 2412 1845
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffersArea;
