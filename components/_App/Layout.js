import React from 'react';
import Head from 'next/head';
import GoTop from './GoTop';
import Preloader from './Preloader';

const Layout = ({children}) => {
  // Preloader
  const [loader, setLoader] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => setLoader(false), 1000);
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>BPOS - Global Process Outsourcing Services</title>
        <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
        <meta
          name='description'
          content='Business Process Outsourcing Services LLC (BPOS) is a company set up with the objective of providing services and solutions to Banks as well as Government and Commercial Establishments in the Sultanate of Oman.'
        />
        <meta
          name='og:title'
          property='og:title'
          content='BPOS - Home'
        ></meta>
        <meta name='twitter:card' content='Flexa - React Next Insurance & Finance Company Template'></meta>
        <link rel='canonical' href='#'></link>
      </Head>

      {children}

      {loader ? <Preloader /> : null}

      <GoTop scrollStepInPx='100' delayInMs='10.50' />
    </React.Fragment>
  );
};

export default Layout;
