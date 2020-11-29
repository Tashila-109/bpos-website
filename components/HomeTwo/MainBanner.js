import React from 'react';
import Link from 'next/link';
import ReactWOW from 'react-wow';

const MainBanner = () => {
    return (
        <div className="main-banner-area-two jarallax">
			<div className="container-fluid">
				<div className="row align-items-center">
					<div className="col-lg-6">
						<div className="banner-text">
                            <ReactWOW animation='fadeInUp' delay='0.1s'>
							    <span>Investment Retirement Insurance</span>
                            </ReactWOW>

                            <ReactWOW animation='fadeInUp' delay='0.2s'>
							    <h1>Take The Worry Out of Life with Insurance Protection</h1>
                            </ReactWOW>

                            <ReactWOW animation='fadeInUp' delay='0.3s'>
							    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum.</p>
                            </ReactWOW>

                            <ReactWOW animation='fadeInUp' delay='0.5s'>
                                <div className="banner-btn">
                                    <Link href="#">
                                        <a className="default-btn">Get Started</a>
                                    </Link>
                                    <Link href="#">
                                        <a className="default-btn active">Find An Agent</a>
                                    </Link>
                                </div>
                            </ReactWOW>
						</div>	
					</div>

					<div className="col-lg-6 pr-0">
                        <ReactWOW animation='fadeInRight' delay='0.2s'>
                            <div className="banner-img"></div>
                        </ReactWOW>
					</div>
				</div>
			</div>
		</div>
    )
}

export default MainBanner;