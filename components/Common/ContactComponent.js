import React, { PureComponent } from 'react';
import propTypes from 'prop-types';
import Link from 'next/link';

export default class ContactComponent extends PureComponent {
  static propTypes = {
    contactInformation: propTypes.object.isRequired,
    generalData: propTypes.object.isRequired,
  };
  // Tab
  openTabSection = (evt, tabNmae) => {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName('tabs_item');
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].classList.remove('fadeInUp');
      tabcontent[i].style.display = 'none';
    }

    tablinks = document.getElementsByTagName('li');
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace('current', '');
    }

    document.getElementById(tabNmae).style.display = 'block';
    document.getElementById(tabNmae).className += ' fadeInUp animated';
    evt.currentTarget.className += 'current';
  };
  render() {
    const { contactInformation, generalData } = this.props;
    return (
      <div className='get-quat-area get-quat-area-three ptb-100'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-6 col-md-6'>
              <div className='get-quat-content'>
                <div className='section-title'>
                  <h2>{generalData?.contactHeader}</h2>
                  <p>{generalData?.contactDescription}</p>
                </div>
                <ul>
                  <li>
                    <i className='flaticon-maps-and-flags'></i>
                    <h3>Head Office Address</h3>
                    <p>{contactInformation?.officeAddress}</p>
                  </li>
                  <li>
                    <i className='flaticon-call'></i>
                    <h3>Phone</h3>
                    <p>{contactInformation?.phoneNumber}</p>
                  </li>
                  <li>
                    <i className='flaticon-email'></i>
                    <h3>Email Us For Information</h3>
                    <p>{contactInformation?.email}</p>
                  </li>
                </ul>
              </div>
            </div>

            <div className='col-lg-6 col-md-6'>
              <div className='quat-form'>
                <div className='tab'>
                  <ul className='tabs'>
                    <li className='current' onClick={e => this.openTabSection(e, 'tab1')}>
                      <div className='dot'></div> Contact
                    </li>
                  </ul>

                  <div className='tab_content'>
                    <div id='tab1' className='tabs_item'>
                      <form
                        id='contactForm'
                        name='contactFormTwo'
                        method='post'
                        data-netlify='true'
                        netlify-honeypot='bot-field'
                        action='/success'
                      >
                        <input type='hidden' name='bot-field' />
                        <input type='hidden' name='form-name' value='contactFormTwo' />
                        <div className='form'>
                          <div className='form-group'>
                            <input type='text' className='form-control' id='Name' placeholder='Your Name' />
                          </div>

                          <div className='form-group'>
                            <input type='email' className='form-control' id='Email' placeholder='Your Email' />
                          </div>

                          <div className='form-group'>
                            <input type='text' className='form-control' id='Number' placeholder='Your Number' />
                          </div>

                          <div className='form-group'>
                            <textarea
                              name='message'
                              className='form-control'
                              cols='30'
                              rows='6'
                              required
                              placeholder='Write your message...'
                            />
                          </div>

                          <button type='submit' className='default-btn'>
                            Send Message
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
