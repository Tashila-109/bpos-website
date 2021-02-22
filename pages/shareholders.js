import React from 'react';
import NavbarTwo from '../components/_App/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import ShareHoldersContent from '../components/About/ShareHoldersContent';
import Footer from '../components/_App/Footer';
import Link from 'next/link';

const ShareHolders = () => {
  return (
    <React.Fragment>
      <NavbarTwo />
      <PageBanner pageTitle='Our Shareholders' homePageUrl='/' homePageText='Home' activePageText='Our Shareholders' />
      <ShareHoldersContent />
      <Footer />
    </React.Fragment>
  );
};

export default ShareHolders;
