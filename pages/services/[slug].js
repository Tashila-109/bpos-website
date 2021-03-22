import React from 'react';
import Image from 'next/image';
import propTypes from 'prop-types';

import NavbarTwo from '../../components/_App/NavbarTwo';
import PageBanner from '../../components/Common/PageBanner';
import ServicesSidebar from '../../components/Services/ServicesSidebar';
import Footer from '../../components/_App/Footer';
import QuestionForm from '../../components/Services/QuestionsForm';

import {GetServicesData, GetServiceBySlug} from '../../api/ServicesApi';

const Service = ({service, serviceData}) => {
  return (
    <React.Fragment>
      <NavbarTwo />
      <PageBanner pageTitle={service?.pageHeader} homePageUrl='/' homePageText='Home' activePageText={service?.pageHeader} />

      <div className='service-details-area ptb-100'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4'>
              <ServicesSidebar />
            </div>

            <div className='col-lg-8'>
              <div className='service-details-wrap'>
                <div className='service-img'>
                  <Image
                    width='730'
                    height='600'
                    src={`${process.env.API_URL}${service?.serviceImage.url}`}
                    alt={`${service?.pageHeader}-image`}
                  />
                </div>
                <h2>{service?.serviceHeader}</h2>
                <p>{service?.serviceDescription}</p>

                <div className='car-service-list-wrap'>
                  <div className='row align-items-center'>
                    <div className='col-lg-6 col-md-6'>
                      <div className='car-service-list'>
                        <ul>
                          {service?.servicePointsColumnOne?.map(point => (
                            <li key={point.id}>
                              <i className='bx bx-check'></i>
                              {point?.servicePoint}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className='col-lg-6 col-md-6'>
                      <div className='car-service-list'>
                        <ul>
                          {service?.servicePointsColumnTwo?.map(point => (
                            <li key={point.id}>
                              <i className='bx bx-check'></i>
                              {point?.servicePoint}
                            </li>
                          ))}
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

Service.propTypes = {
  service: propTypes.object.isRequired,
  servicesData: propTypes.array.isRequired,
};

export const getStaticPaths = async () => {
  const data = await GetServicesData();

  return {
    paths: data.data.map(item => ({
      params: {slug: item.slug},
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({params}) => {
  const articleData = await GetServiceBySlug(params.slug);
  const allData = await GetServicesData();

  return {
    props: {
      service: articleData?.data[0],
      servicesData: allData?.data,
    },
    revalidate: 1,
  };
};

export default Service;
