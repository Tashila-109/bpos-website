import React from 'react';
import NavbarTwo from '../components/_App/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import PortfolioColumnsTwoCard from '../components/Portfolio/PortfolioColumnsTwoCard';
import Footer from '../components/_App/Footer';

const WhatsNew = () => {
    return (
        <React.Fragment>
            <NavbarTwo />
            <PageBanner 
                pageTitle="Whats New" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Whats New" 
            /> 
            <PortfolioColumnsTwoCard />
            <Footer />
        </React.Fragment>
    )
}

export default WhatsNew;