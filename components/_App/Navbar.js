import React from 'react';
import Link from '../../utils/ActiveLink';

const Navbar = () => {
  const [menu, setMenu] = React.useState(true);
  const [sidebarModal, setSidebar] = React.useState(false);
  const [searchModal, setSearch] = React.useState(false);
  const toggleSidebarModal = () => {
    setSidebar(!sidebarModal);
  };
  const toggleSearchModal = () => {
    setSearch(!searchModal);
  };

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  React.useEffect(() => {
    let elementId = document.getElementById('navbar');
    document.addEventListener('scroll', () => {
      if (window.scrollY > 170) {
        elementId.classList.add('is-sticky');
      } else {
        elementId.classList.remove('is-sticky');
      }
    });
    window.scrollTo(0, 0);
  });

  const classOne = menu ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
  const classTwo = menu ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

  return (
    <React.Fragment>
      <header className='header-area header-area-three fixed-top'>
        <div id='navbar' className='navbar-area navbar-three'>
          <div className='main-nav'>
            <nav className='navbar navbar-expand-lg navbar-light'>
              <div className='container'>
                <Link href='/'>
                  <a onClick={toggleNavbar} className='navbar-brand'>
                    <img src='/images/logo.png' alt='logo' className='navbar-logo' />
                  </a>
                </Link>

                <button
                  onClick={toggleNavbar}
                  className={classTwo}
                  type='button'
                  data-toggle='collapse'
                  data-target='#navbarSupportedContent'
                  aria-controls='navbarSupportedContent'
                  aria-expanded='false'
                  aria-label='Toggle navigation'
                >
                  <span className='icon-bar top-bar'></span>
                  <span className='icon-bar middle-bar'></span>
                  <span className='icon-bar bottom-bar'></span>
                </button>

                <div className={classOne} id='navbarSupportedContent'>
                  <ul className='navbar-nav m-auto'>
                    <li className='nav-item'>
                      <Link href='/' activeClassName='active'>
                        <a onClick={toggleNavbar} className='nav-link'>
                          Home
                        </a>
                      </Link>
                    </li>

                    <li className='nav-item'>
                      <Link href='/about' activeClassName='active'>
                        <a onClick={toggleNavbar} className='nav-link'>
                          About Us
                        </a>
                      </Link>
                    </li>

                    <li className='nav-item'>
                      <Link href='/services' activeClassName='active'>
                        <a onClick={toggleNavbar} className='nav-link'>
                          Products & Services
                        </a>
                      </Link>
                    </li>

                    <li className='nav-item'>
                      <Link href='/news-and-events' activeClassName='active'>
                        <a onClick={toggleNavbar} className='nav-link'>
                          News & Events
                        </a>
                      </Link>
                    </li>

                    <li className='nav-item'>
                      <Link href='/contact' activeClassName='active'>
                        <a onClick={toggleNavbar} className='nav-link'>
                          Contact
                        </a>
                      </Link>
                    </li>
                  </ul>

                  <div className='others-option'>
                    <div className='subscribe'>
                      <Link href='/contact'>
                        <a className='default-btn'>Get In Touch</a>
                      </Link>
                    </div>

                    <div className='sidebar-menu'>
                      <Link href='#'>
                        <a
                          onClick={e => {
                            e.preventDefault();
                            toggleSidebarModal();
                          }}
                        >
                          <i className='bx bx-grid-alt'></i>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Sidebar Modal */}
      <div className={`sidebar-modal ${sidebarModal ? 'active' : null}`}>
        <div className='modal'>
          <div className='modal-dialog'>
            <div className='modal-content'>
              <div className='modal-header'>
                <button
                  type='button'
                  className='close'
                  onClick={e => {
                    e.preventDefault();
                    toggleSidebarModal();
                  }}
                >
                  <span aria-hidden='true'>
                    <i className='bx bx-x'></i>
                  </span>
                </button>

                <h2 className='modal-title'>
                  <Link href='/'>
                    <a>
                      <img src='/images/logo.png' alt='Logo' className='navbar-logo' />
                    </a>
                  </Link>
                </h2>
              </div>

              <div className='modal-body'>
                <div className='sidebar-modal-widget'>
                  <h3 className='title'>About Us</h3>
                  <p>
                    BPOS Global is a company set up in Oman and Sri Lanka with the objective of providing services and solutions to BFSI as
                    well as Public and Private Sector Establishments in Sri Lanka and the Sultanate of Oman.
                  </p>
                </div>

                <div className='sidebar-modal-widget'>
                  <h3 className='title'>Additional Links</h3>

                  <ul>
                    <li>
                      <Link href='/services'>
                        <a>Products & Services</a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/news-and-events'>
                        <a>News & Events</a>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className='sidebar-modal-widget'>
                  <h3 className='title'>Contact Info</h3>

                  <ul className='contact-info'>
                    <li>
                      <i className='bx bx-location-plus'></i>
                      Address
                      <span>Office No 83, 8th Floor, Super Plaza Building, Azaiba, Sultanate of Oman</span>
                    </li>
                    <li>
                      <i className='bx bx-envelope'></i>
                      Email
                      <a href='mailto:contact@bposllc.com'>contact@bposllc.com</a>
                    </li>
                    <li>
                      <i className='bx bxs-phone-call'></i>
                      Phone
                      <a href='tel:+96824121845'>+968 2412 1845</a>
                    </li>
                  </ul>
                </div>

                <div className='sidebar-modal-widget'>
                  <h3 className='title'>Connect With Us</h3>

                  <ul className='social-list'>
                    <li>
                      <a href='#' target='_blank'>
                        <i className='bx bxl-twitter'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#' target='_blank'>
                        <i className='bx bxl-facebook'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#' target='_blank'>
                        <i className='bx bxl-instagram'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#' target='_blank'>
                        <i className='bx bxl-linkedin'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#' target='_blank'>
                        <i className='bx bxl-youtube'></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
