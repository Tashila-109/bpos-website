import React from 'react';
import Link from 'next/link';

const OurServices = () => {
  return (
    <div className='services-area-three pt-100 pb-70'>
      <div className='container'>
        <div className='section-title'>
          <span>Our Services</span>
          <h2>Our Business Verticals</h2>
          <p>We cover a variety of Business areas, and focus on services related to non-core activities of our clients.</p>
        </div>

        <div className='row'>
          <div className='col-lg-6 col-sm-8'>
            <div className='single-choose'>
              <span className='flaticon-technical-support'></span>
              <h3>IT Products and Services</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>

              <Link href='/services/it-services'>
                <a>
                  <i className='flaticon-right'></i>
                </a>
              </Link>
            </div>
          </div>

          <div className='col-lg-6 col-sm-8'>
            <div className='single-choose'>
              <span className='flaticon-target-1'></span>
              <h3>Cyber Security</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>

              <Link href='/services/cybersecurity'>
                <a>
                  <i className='flaticon-right'></i>
                </a>
              </Link>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-lg-4 col-sm-6'>
            <div className='single-choose'>
              <span className='flaticon-team'></span>
              <h3>Agency Representation</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>

              <Link href='/services/agency-representation'>
                <a>
                  <i className='flaticon-right'></i>
                </a>
              </Link>
            </div>
          </div>

          <div className='col-lg-4 col-sm-6'>
            <div className='single-choose'>
              <span className='flaticon-experience'></span>
              <h3>Event Management</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>

              <Link href='/services/event-management'>
                <a>
                  <i className='flaticon-right'></i>
                </a>
              </Link>
            </div>
          </div>

          <div className='col-lg-4 col-sm-6'>
            <div className='single-choose'>
              <span className='flaticon-maps-and-flags'></span>
              <h3>Delivery Channels</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>

              <Link href='/services/delivery-channels'>
                <a>
                  <i className='flaticon-right'></i>
                </a>
              </Link>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-lg-6 col-sm-8'>
            <div className='single-choose'>
              <span className='flaticon-salesman'></span>
              <h3>Trading</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>

              <Link href='/insurance-details'>
                <a>
                  <i className='flaticon-right'></i>
                </a>
              </Link>
            </div>
          </div>

          <div className='col-lg-6 col-sm-8'>
            <div className='single-choose'>
              <span className='flaticon-support'></span>
              <h3>Non Core Support Services</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>

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

export default OurServices;
