import React from 'react';
import NavbarTwo from '../../components/_App/NavbarTwo';
import PageBanner from '../../components/Common/PageBanner';
import ServicesSidebar from '../../components/Services/ServicesSidebar';
import Footer from '../../components/_App/Footer';
import QuestionForm from '../../components/Services/QuestionsForm';

const ItServices = () => {
  return (
    <React.Fragment>
      <NavbarTwo />
      <PageBanner
        pageTitle='IT Products & Services'
        homePageUrl='/'
        homePageText='Home'
        activePageText='IT Products & Services'
      />

      <div className='service-details-area ptb-100'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4'>
              <ServicesSidebar />
            </div>

            <div className='col-lg-8'>
              <div className='service-details-wrap'>
                <div className='service-img'>
                  <img src='/images/services/service-details1.jpg' alt='Image' />
                </div>
                <h2>We have been Thriving in 37 Years The Area</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas veritatis ducimus rerum sunt dignissimos
                  libero et eum modi! Consequuntur rem incidunt et ducimus magnam sunt rerum hic beatae sed obcaecati.
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium asperiores eos obcaecati nostrum
                  sed, corporis placeat quasi pariatur id, est iure, minus quibusdam.
                </p>

                <div className='car-service-list-wrap'>
                  <div className='row align-items-center'>
                    <div className='col-lg-6 col-md-6'>
                      <div className='car-service-list'>
                        <ul>
                          <li>
                            <i className='bx bx-check'></i>
                            Enterprise Web Portal Development
                          </li>
                          <li>
                            <i className='bx bx-check'></i>
                            Centralized Public Display Systems
                          </li>
                          <li>
                            <i className='bx bx-check'></i>
                            Network Management Services
                          </li>
                          <li>
                            <i className='bx bx-check'></i>
                            Application Management Services
                          </li>
                          <li>
                            <i className='bx bx-check'></i>
                            Software Deployment
                          </li>
                          <li>
                            <i className='bx bx-check'></i>
                            Database Management Services
                          </li>
                          <li>
                            <i className='bx bx-check'></i>
                            IT Security Management
                          </li>
                          <li>
                            <i className='bx bx-check'></i>
                            CCTV Installation and Maintenance
                          </li>
                          <li>
                            <i className='bx bx-check'></i>
                            Enterprise Resource Planning
                          </li>
                          <li>
                            <i className='bx bx-check'></i>
                            SMS Server Solutions
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
