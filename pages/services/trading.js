import React from 'react';
import Image from 'next/image';

import NavbarTwo from '../../components/_App/NavbarTwo';
import PageBanner from '../../components/Common/PageBanner';
import ServicesSidebar from '../../components/Services/ServicesSidebar';
import Footer from '../../components/_App/Footer';
import QuestionForm from '../../components/Services/QuestionsForm';

const Trading = () => {
  return (
    <React.Fragment>
      <NavbarTwo />
      <PageBanner pageTitle='Trading' homePageUrl='/' homePageText='Home' activePageText='Trading' />

      <div className='service-details-area ptb-100'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4'>
              <ServicesSidebar />
            </div>

            <div className='col-lg-8'>
              <div className='service-details-wrap'>
                <div className='service-img'>
                  <Image width='730' height='600' src='/images/services/service-details3.jpg' alt='Service-Event-Management' />
                </div>
                <h2>Trading</h2>
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
                            Fruits & Vegetables
                          </li>
                          <li>
                            <i className='bx bx-check'></i>
                            Wood Shaving
                          </li>
                          <li>
                            <i className='bx bx-check'></i>
                            Processed Foods
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className='col-lg-6 col-md-6'>
                      <div className='car-service-list'>
                        <ul>
                          <li>
                            <i className='bx bx-check'></i>
                            Biodegradable Tableware
                          </li>
                          <li>
                            <i className='bx bx-check'></i>
                            Horticulture Products
                          </li>
                          <li>
                            <i className='bx bx-check'></i>
                            Spices
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

export default Trading;
