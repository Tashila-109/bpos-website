import React from 'react';

const TopHeader = () => {
    return (
        <div className="top-header-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-4 col-sm-6">
                        <div className="header-content-left">
                            <p>Welcome to BPOS Global</p>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-8 col-sm-6">
                        <ul className="header-content-right">
                            <li>
                                <a href="tel:+96824121845">
                                    <i className="bx bx-phone-call"></i>
                                    Call Us For Inquiry: +968 2412 1845
                                </a>
                            </li>

                            <li>
                                <a href="mailto:contact@bposllc.com">
                                    <i className="bx bx-envelope"></i>
                                    Email: contact@bposllc.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopHeader;