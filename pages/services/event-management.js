import React from 'react';
import Image from 'next/image';

import NavbarTwo from '../../components/_App/NavbarTwo';
import PageBanner from '../../components/Common/PageBanner';
import ServicesSidebar from '../../components/Services/ServicesSidebar';
import Footer from '../../components/_App/Footer';
import QuestionForm from '../../components/Services/QuestionsForm';

const EventManagement = () => {
  return (
    <React.Fragment>
      <NavbarTwo />
      <PageBanner pageTitle='Event Management' homePageUrl='/' homePageText='Home' activePageText='Event Management' />

      <div className='service-details-area ptb-100'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4'>
              <ServicesSidebar />
            </div>

            <div className='col-lg-8'>
              <div className='service-details-wrap'>
                <div className='service-img'>
                  <Image width='730' height='600' src='/images/services/service-details6.jpg' alt='Service-Event-Management' />
                </div>
                <h2>Event Management</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas veritatis ducimus rerum sunt dignissimos libero et eum modi!
                  Consequuntur rem incidunt et ducimus magnam sunt rerum hic beatae sed obcaecati. Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Laudantium asperiores eos obcaecati nostrum sed, corporis placeat quasi pariatur id, est iure, minus
                  quibusdam.
                </p>

                <div className='car-service-list-wrap'>
                  <div className='row align-items-center'>
                    <div className='col-lg-6 col-md-6'>
                      <div className='car-service-list'>
                        <ul>
                          <li>
                            <i className='bx bx-check'></i>
                            Symposiums
                          </li>
                          <li>
                            <i className='bx bx-check'></i>
                            Road Shows
                          </li>
                          <li>
                            <i className='bx bx-check'></i>
                            Conferences
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className='col-lg-6 col-md-6'>
                      <div className='car-service-list'>
                        <ul>
                          <li>
                            <i className='bx bx-check'></i>
                            Brand Launching
                          </li>
                          <li>
                            <i className='bx bx-check'></i>
                            Workshops
                          </li>
                          <li>
                            <i className='bx bx-check'></i>
                            Seminars
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Question Form */}
                <QuestionForm />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </React.Fragment>
  );
};

export default EventManagement;
