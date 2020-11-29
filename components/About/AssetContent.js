import React from 'react';
import Link from 'next/link';
import ModalVideo from 'react-modal-video';

const AssetContent = () => {
  return (
    <React.Fragment>
      <div className='achievement-area'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-6'>
              <div className='achievement-content asset-content'>
                <span>Most Valued Asset</span>
                <h2>Our Most Valued Asset</h2>

                <p>
                  At BPOS, we take pride in hiring the best personnel who have years of experience and knowledge in
                  their relevant fields and complement the work culture and ethics at BPOS.
                </p>

                <p>
                  The company is led by a management comprising of professionals who are experts in their fields and
                  together possess an understanding of the business world that is parallel to none. The diverse business
                  background the management and staff hail from, gives BPOS the strategic and operational edge and
                  alignment with the client to deliver a service that meets their exact requirements.
                </p>

                <p>
                  We promote equal opportunities for development and our regular training programmes and performance
                  evaluations ensure that our staff meets their professional potential as well as achieve personal
                  growth. Staff are encouraged to develop their skills and capabilities; and we believe that our
                  investment in their growth is an investment in the performance of the organization.
                </p>

                <p>
                  The work environment at BPOS promotes productivity and efficiency which enables us to recruit and
                  retain the most vibrant and talented professionals in the field. It is this superior outlook towards
                  personnel and maximizing their potential which trickles down to the services that we provide to
                  clients.
                </p>

                <Link href='/contact'>
                  <a className='default-btn'>Be Connected</a>
                </Link>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='video-img'>
                <img src='/images/asset-img.jpg' alt='Image' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AssetContent;
