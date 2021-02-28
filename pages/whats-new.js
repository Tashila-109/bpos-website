import React from 'react';
import NavbarTwo from '../components/_App/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import WhatsNewGrid from '../components/WhatsNew/WhatsNewPage/WhatsNewGrid';
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
            <WhatsNewGrid />
            <Footer />
        </React.Fragment>
    )
}

export default WhatsNew;