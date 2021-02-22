import React from 'react';
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
                  <img src='/images/services/service-details3.jpg' alt='Image' />
                </div>
                <h2>Imported Products & Produce</h2>
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
                            Fresh Fruits & Vegetables
                          </li>
                          <li>
                            <i className='bx bx-check'></i>
                            Sea Foods
                          </li>
                          <li>
                            <i className='bx bx-check'></i>
                            Tea
                          </li>
                          <li>
                            <i className='bx bx-check'></i>
                            Organic Products
                          </li>
                          <li>
                            <i className='bx bx-check'></i>
                            Spices
                          </li>
                          <li>
                            <i className='bx bx-check'></i>
                            Coconut Products
                          </li>
                          <li>
                            <i className='bx bx-check'></i>
                            Variety of High Quality Rice
                          </li>
                          <li>
                            <i className='bx bx-check'></i>
                            Processed Foods
                          </li>
                          <li>
                            <i className='bx bx-check'></i>
                            Poultry Products
                          </li>
                          <li>
                            <i className='bx bx-check'></i>
                            Hotel Amenities
                          </li>
                          <li>
                            <i className='bx bx-check'></i>
                            Personal Protective Equipment
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
