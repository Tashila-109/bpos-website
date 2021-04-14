import React from 'react';
import propTypes from 'prop-types';
import Link from 'next/link';

const ServicesSidebar = ({ servicesData }) => {
  return (
    <div className='service-sidebar-area'>
      <div className='service-list service-card'>
        <h3 className='service-details-title'>Services</h3>
        <ul>
          {servicesData?.map(service => (
            <Link href={`/services/${service?.slug}`} activeClassName='active'>
              <li key={service.id} className='serviceItem'>
                {service?.pageHeader}
                <i className='bx bx-check'></i>
              </li>
            </Link>
          ))}
        </ul>
      </div>

      {/* <div className="service-list service-card">
                <h3 className="service-details-title">Download Brochures</h3>
                <ul>
                    <li>
                        <a href="#">
                            PDF File (1)
                            <i className='bx bxs-cloud-download'></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            PDF File (2)
                            <i className='bx bxs-cloud-download'></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            PDF File (3)
                            <i className='bx bxs-cloud-download'></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            PDF File (4)
                            <i className='bx bxs-cloud-download'></i>
                        </a>
                    </li>
                </ul>
            </div> */}
    </div>
  );
};

ServicesSidebar.propTypes = {
  servicesData: propTypes.array.isRequired,
};

export default ServicesSidebar;
