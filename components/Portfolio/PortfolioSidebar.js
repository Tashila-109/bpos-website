import React from 'react';

const PortfolioSidebar = () => {
  return (
    <div className='service-sidebar-area'>
      <div className='service-list service-card'>
        <h3 className='service-details-title'>Services</h3>
        <ul>
          <li>
            IT Products & Services
            <i className='bx bx-check'></i>
          </li>
          <li>
            Non Core Support Services
            <i className='bx bx-check'></i>
          </li>
          <li>
            Trading
            <i className='bx bx-check'></i>
          </li>
        </ul>
      </div>

      <div className='service-list service-card'>
        <h3 className='service-details-title'>Contact Info</h3>
        <ul>
          <li>
            <a href='tel:+968 2412 1845'>
              +968 2412 1845
              <i className='bx bx-phone-call bx-rotate-270'></i>
            </a>
          </li>
          <li>
            <a href='mailto:contact@bposllc.com'>
              contact@bposllc.com
              <i className='bx bx-envelope'></i>
            </a>
          </li>
          <li>
            9:00 AM – 5:00 PM
            <i className='bx bx-time'></i>
          </li>
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

export default PortfolioSidebar;
