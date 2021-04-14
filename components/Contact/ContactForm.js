import React from 'react';
import propTypes from 'prop-types';

const ContactForm = ({ contactData }) => {
  return (
    <div className='contact-area ptb-100'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-8'>
            <div className='contact-wrap'>
              <div className='contact-form'>
                <div className='section-title'>
                  <h2>{contactData?.contactFormHeader}</h2>
                </div>

                <form id='contact' name='contact' method='post' data-netlify='true' netlify-honeypot='bot-field' action="/success">
                  <input type='hidden' name='bot-field' />
                  <input type='hidden' name='form-name' value='contact' />
                  <div className='row'>
                    <div className='col-lg-6 col-sm-6'>
                      <div className='form-group'>
                        <input type='text' name='name' id='name' className='form-control' required placeholder='Your Name' />
                      </div>
                    </div>

                    <div className='col-lg-6 col-sm-6'>
                      <div className='form-group'>
                        <input type='email' name='email' id='email' className='form-control' required placeholder='Your Email' />
                      </div>
                    </div>

                    <div className='col-lg-6 col-sm-6'>
                      <div className='form-group'>
                        <input
                          type='text'
                          name='number'
                          id='number'
                          required
                          className='form-control'
                          placeholder='Your Phone'
                        />
                      </div>
                    </div>

                    <div className='col-lg-6 col-sm-6'>
                      <div className='form-group'>
                        <input
                          type='text'
                          name='subject'
                          id='subject'
                          className='form-control'
                          required
                          placeholder='Your Subject'
                        />
                      </div>
                    </div>

                    <div className='col-lg-12 col-md-12'>
                      <div className='form-group'>
                        <textarea
                          name='message'
                          className='form-control'
                          id='message'
                          cols='30'
                          rows='5'
                          required
                          placeholder='Your Message'
                        ></textarea>
                      </div>
                    </div>

                    <div className='col-lg-12 col-md-12'>
                      <button type='submit' className='default-btn page-btn'>
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className='col-lg-4'>
            <div className='quick-contact'>
              <h3>Contact Info</h3>
              <ul>
                <li>
                  <i className='flaticon-maps-and-flags'></i>
                  Location:
                  <span>{contactData.contactInformation?.officeAddress}</span>
                </li>
                <li>
                  <i className='flaticon-call'></i>
                  Call Us:
                  <a href='tel:+96824121845'>
                    {contactData.contactInformation?.phoneNumber} <br /> Fax: {contactData.contactInformation?.faxNumber}
                  </a>
                </li>
                <li>
                  <i className='flaticon-email'></i>
                  Email Us:
                  <a href={`mailto:${contactData.contactInformation?.email}}`}>{contactData.contactInformation?.email}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ContactForm.propTypes = {
  contactData: propTypes.object.isRequired,
};

export default ContactForm;
