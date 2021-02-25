import React from 'react';
import Image from 'next/image';

import NavbarTwo from '../../components/_App/NavbarTwo';
import PageBanner from '../../components/Common/PageBanner';
import ServicesSidebar from '../../components/Services/ServicesSidebar';
import Footer from '../../components/_App/Footer';
import QuestionForm from '../../components/Services/QuestionsForm';

const CyberSecurity = () => {
  return (
    <React.Fragment>
      <NavbarTwo />
      <PageBanner pageTitle='Cyber Security' homePageUrl='/' homePageText='Home' activePageText='Cyber Security' />

      <div className='service-details-area ptb-100'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4'>
              <ServicesSidebar />
            </div>

            <div className='col-lg-8'>
              <div className='service-details-wrap'>
                <div className='service-img'>
                  <Image width='730' height='600' src='/images/services/service-details4.jpg' alt='Service-CyberSecurity' />
                </div>
                <h2>Cyber Security</h2>
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
                            Asset Discovery & Inventory
                          </li>
                          <li>
                            <i className='bx bx-check'></i>
                            Continuous Monitoring
                          </li>
                          <li>
                            <i className='bx bx-check'></i>
                            End Point Detection & Response
                          </li>
                          <li>
                            <i className='bx bx-check'></i>
                            File Integrity
                          </li>
                          <li>
                            <i className='bx bx-check'></i>
                            Intrusion
                          </li>
                          <li>
                            <i className='bx bx-check'></i>
                            SOC Management
                          </li>
                          <li>
                            <i className='bx bx-check'></i>
                            Real Time Threat
                          </li>
                          <li>
                            <i className='bx bx-check'></i>
                            Deep Threat Hunting
                          </li>
                          <li>
                            <i className='bx bx-check'></i>
                            Deception Technology
                          </li>
                          <li>
                            <i className='bx bx-check'></i>
                            Digital Forensic & Incident Response
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className='col-lg-6 col-md-6'>
                      <div className='car-service-list'>
                        <ul>
                          <li>
                            <i className='bx bx-check'></i>
                            Breach Assessment
                          </li>
                          <li>
                            <i className='bx bx-check'></i>
                            Dark Web Monitoring
                          </li>
                          <li>
                            <i className='bx bx-check'></i>
                            Real Time Event
                          </li>
                          <li>
                            <i className='bx bx-check'></i>
                            Incident Response
                          </li>
                          <li>
                            <i className='bx bx-check'></i>
                            Detection
                          </li>
                          <li>
                            <i className='bx bx-check'></i>
                            Proactive Tuning
                          </li>
                          <li>
                            <i className='bx bx-check'></i>
                            SIEM Event Correlation
                          </li>
                          <li>
                            <i className='bx bx-check'></i>
                            Risk Intelligence
                          </li>
                          <li>
                            <i className='bx bx-check'></i>
                            VAPT
                          </li>
                          <li>
                            <i className='bx bx-check'></i>
                            Malware and Binary Analysis
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

export default CyberSecurity;
