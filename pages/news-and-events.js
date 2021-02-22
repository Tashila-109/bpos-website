import React from 'react';
import NavbarTwo from '../components/_App/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import NewsThreeGrid from '../components/Blog/NewsThreeGrid';
import Footer from '../components/_App/Footer';

const BlogGrid = () => {
    return (
        <React.Fragment>
            <NavbarTwo />
            <PageBanner 
                pageTitle="News & Events" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="News & Events" 
            /> 
            <NewsThreeGrid />
            <Footer />
        </React.Fragment>
    )
}

export default BlogGrid;