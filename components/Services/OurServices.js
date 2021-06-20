import React from 'react';
import Link from 'next/link';
import propTypes from 'prop-types';

const OurServices = ({servicesData}) => {
  return (
    <div className='services-area-three pt-100 pb-70'>
      <div className='container'>
        <div className='section-title'>
          <span>{servicesData?.servicesSubHeader}</span>
          <h2>{servicesData?.servicesHeader}</h2>
          <p>{servicesData?.servicesDescription}</p>
        </div>

        <div className='row'>
          {servicesData?.products_services.map((service, index) => {
            let result = null;
            if (index === 2 || index === 3 || index === 4) {
              result = (
                <div key={service.id} className='col-lg-4 col-sm-6'>
                  <div className='single-choose'>
                    <span className={`flaticon-${service?.icon}`}></span>
                    <h3>{service?.pageHeader}</h3>
                    <p>{service?.serviceShortDescription}</p>

                    <Link href={`/services/${service?.slug}`}>
                      <a>
                        <i className='flaticon-right'></i>
                      </a>
                    </Link>
                  </div>
                </div>
              );
            } else {
              result = (
                <div key={service.id} className='col-lg-6 col-sm-8'>
                  <div className='single-choose'>
                    <span className={`flaticon-${service?.icon}`}></span>
                    <h3>{service.pageHeader}</h3>
                    <p>{service.serviceShortDescription}</p>

                    <Link href={`/services/${service?.slug}`}>
                      <a>
                        <i className='flaticon-right'></i>
                      </a>
                    </Link>
                  </div>
                </div>
              );
            }
            return result;
          })}
        </div>
      </div>
    </div>
  );
};

OurServices.propTypes = {
  servicesData: propTypes.object.isRequired,
};

export default OurServices;
