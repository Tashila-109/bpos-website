import React from 'react';
import Link from 'next/link';
import ModalVideo from 'react-modal-video';

const ServiceDetails = () => {
  return (
    <React.Fragment>
      <div className='achievement-area'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-6'>
              <div className='video-img'>
                <img src='/images/services-details.jpg' alt='process' />
              </div>
            </div>

            <div className='col-lg-6'>
              <div className='achievement-content'>
                <span>Services at BPOS</span>
                <h2>Products & Services at BPOS Global</h2>

                <p>
                  At BPOS we use strategic thinking and usability expertise to create better software solutions and
                  products. Our software solutions and products are elegantly simple, aesthetic and innovative. BPOS
                  specializes in User Centric Design (UCD) that reinforces our client’s vision and assists to fulfil
                  their objectives. We are a design driven Technology Company and this specialisation is a key part of
                  our quality differentiation.
                </p>

                <p>
                  Our team can help you strategize to successfully achieve your objectives. Our goal is to ensure
                  customer satisfaction through Excellence, Integrity and Dependability. For us, quality is more than
                  making a good product. It is a continuous process, shaping our imagination and determining all our
                  actions.
                </p>

                <p>
                  Other than our in-house built developments, BPOS sources a wide array of renowned quality software
                  solutions from our strategic partners. Our ability to support and maintain our partner’s products
                  locally as per the desired service levels of our valued clients, adds value to our clients and
                  provides the required added level of comfort when making decisions on procuring IT solutions and
                  products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ServiceDetails;
