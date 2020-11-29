import React from 'react';
import Link from 'next/link';
import ModalVideo from 'react-modal-video';

const ProcessContent = () => {

  return (
    <React.Fragment>
      <div className='achievement-area'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-6'>
              <div className='video-img'>
                <img src='/images/process-img.jpg' alt='process' />
              </div>
            </div>

            <div className='col-lg-6'>
              <div className='achievement-content'>
                <span>Process</span>
                <h2>The Process we follow</h2>

                <p>
                  As the demand for outsourcing services grow and companies realize the need to concentrate on their
                  core business functions, we are well geared to meet market requirements and increase our value to
                  clients.
                </p>

                <p>
                  We continuously strive to achieve higher standards of quality of service while contributing value and
                  creative facets to the work of our clients; we are able to meet their diverse needs in the constantly
                  changing fast paced world of business.
                </p>

                <p>
                  Innovation and initiative is vital in our profession to meet client demands and we at BPOS take pride
                  in expanding our services, giving importance to employee growth and making our everyday experience a
                  vital factor in our constant effort to achieve better standards of service.
                </p>

                <p>
                  BPOS’ efforts to obtain a comprehensive insight into each industry sector of our clients, enables us
                  to provide services that are designed and executed to meet the client’s unique and diverse needs. This
                  not only gives us the edge over our competitors in the field but we are able to deliver customized
                  services to each client, thereby maintaining our commitment to best practices and excellence in
                  delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </React.Fragment>
  );
};

export default ProcessContent;
