import React from 'react';
import Image from 'next/image';

import NavbarTwo from '../../components/_App/NavbarTwo';
import PageBanner from '../../components/Common/PageBanner';
import ServicesSidebar from '../../components/Services/ServicesSidebar';
import Footer from '../../components/_App/Footer';
import QuestionForm from '../../components/Services/QuestionsForm';

const ItServices = () => {
  return (
    <React.Fragment>
      <NavbarTwo />
      <PageBanner pageTitle='ICT Products & Services' homePageUrl='/' homePageText='Home' activePageText='ICT Products & Services' />

      <div className='service-details-area ptb-100'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4'>
              <ServicesSidebar />
            </div>

            <div className='col-lg-8'>
              <div className='service-details-wrap'>
                <div className='service-img'>
                  <Image width='730' height='600' src='/images/services/service-details1.jpg' alt='Service-ICT' />
                </div>
                <h2>ICT (Information and Communication Technology)</h2>
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
                            Customization
                          </li>
                          <li>
                            <i className='bx bx-check'></i>
                            Integration
                          </li>
                          <li>
                            <i className='bx bx-check'></i>
                            Maintenance & Support
                          </li>
                          <li>
                            <i className='bx bx-check'></i>
                            Process Re-engineering
                          </li>
                          <li>
                            <i className='bx bx-check'></i>
                            Data checking
                          </li>
                          <li>
                            <i className='bx bx-check'></i>
                            BFSI Quality Competencies
                          </li>
                          <li>
                            <i className='bx bx-check'></i>
                            Process Automation
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className='col-lg-6 col-md-6'>
                      <div className='car-service-list'>
                        <ul>
                          <li>
                            <i className='bx bx-check'></i>
                            Core Banking System
                          </li>
                          <li>
                            <i className='bx bx-check'></i>
                            Digital Signage
                          </li>
                          <li>
                            <i className='bx bx-check'></i>
                            Oracle
                          </li>
                          <li>
                            <i className='bx bx-check'></i>
                            Quality Engineering
                          </li>
                          <li>
                            <i className='bx bx-check'></i>
                            Test Automation
                          </li>
                          <li>
                            <i className='bx bx-check'></i>
                            Quality Management
                          </li>
                          <li>
                            <i className='bx bx-check'></i>
                            Quality Testing
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

export default ItServices;
