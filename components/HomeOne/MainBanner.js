import React from 'react';
import Link from 'next/link';
import ReactWOW from 'react-wow';

const MainBanner = () => {
    return (
        <div className="main-banner-area">
			<div className="container-fluid">
				<div className="row align-items-center">
					<div className="col-lg-6">
						<div className="banner-text">
							<ReactWOW animation='fadeInUp' delay='0.1s'>
								<span>Investment Retirement Insurance</span>
							</ReactWOW>

							<ReactWOW animation='fadeInUp' delay='0.2s'>
								<h1>The Right Protection to Keep You Moving Forward</h1>
							</ReactWOW>

							<ReactWOW animation='fadeInUp' delay='0.4s'>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum.</p>
							</ReactWOW>

							<ReactWOW animation='fadeInUp' delay='0.6s'>
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
						<ReactWOW animation='fadeInUp' delay='0.2s'>
							<div className="banner-img">
								<img src="/images/banner/banner-img.png" alt="Image" />
							</div>
						</ReactWOW>
					</div>
				</div>
			</div>

            {/* Shape Images */}
			<div className="shape">
				<img src="/images/banner/banner-shape.png" alt="Image" />
			</div>
			<div className="banner-shape-right">
				<img src="/images/banner/banner-shape-right.png" alt="Image" />
			</div>
		</div>
    )
}

export default MainBanner;