import React from 'react';
import NavbarTwo from '../../components/_App/NavbarTwo';
import PageBanner from '../../components/Common/PageBanner';
import PortfolioSidebar from '../../components/Portfolio/PortfolioSidebar';
import Footer from '../../components/_App/Footer';
import QuestionForm from '../../components/Services/QuestionsForm';

const SupportServices = () => {
  return (
    <React.Fragment>
      <NavbarTwo />
      <PageBanner
        pageTitle='Non Core Support Services'
        homePageUrl='/'
        homePageText='Home'
        activePageText='Non Core Support Services'
      />

      <div className='service-details-area ptb-100'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4'>
              {/* Portfolio Sidebar */}
              <PortfolioSidebar />
            </div>

            <div className='col-lg-8'>
              <div className='service-details-wrap'>
                <div className='service-img'>
                  <img src='/images/services/service-details2.jpg' alt='Image' />
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
                            In Country Value (ICV) Project Management
                          </li>
                          <li>
                            <i className='bx bx-check'></i>
                            EMV Certification
                          </li>
                          <li>
                            <i className='bx bx-check'></i>
                            Business Recovery Planning
                          </li>
                          <li>
                            <i className='bx bx-check'></i>
                            Risk Management Framework
                          </li>
                          <li>
                            <i className='bx bx-check'></i>
                            Data Structure Cabling Services
                          </li>
                          <li>
                            <i className='bx bx-check'></i>
                            Customer Statement Printing and Mailing
                          </li>
                          <li>
                            <i className='bx bx-check'></i>
                            Credit / Debit Card Professionalization
                          </li>
                          <li>
                            <i className='bx bx-check'></i>
                            ATM Management
                          </li>
                          <li>
                            <i className='bx bx-check'></i>
                            Supply Chain Management
                          </li>
                          <li>
                            <i className='bx bx-check'></i>
                            Event Management
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

export default SupportServices;
