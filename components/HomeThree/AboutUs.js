import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <div className='about-area about-area-three ptb-100'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-6 col-md-6'>
            <div className='about-content'>
              <span>About Us</span>
              <h2>About BPOS Global</h2>

              <p>
                In today’s economy success can only be derived from a well-planned, well executed and agile
                infrastructure. People and Process are the foundation of any organization and will determine the level
                of success achieved and sustained.
              </p>

              <p>
                In an era where rapid delivery of high quality, cost efficient business results are continuously
                required; BPOS is your solution. We are committed to understanding and strengthening your company's
                assets in order to drive a highly profitable and exciting future for all.
              </p>

              <Link href='/about'>
                <a className='default-btn'>Know Details</a>
              </Link>
            </div>
          </div>

          <div className='col-lg-6 col-md-6'>
            <div className='about-img-3'>
              <Image width='530' height='500' src='/images/about-img-5.jpg' alt='Home-About-us' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
