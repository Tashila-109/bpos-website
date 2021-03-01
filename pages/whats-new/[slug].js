import React from 'react';

import NavbarTwo from '../../components/_App/NavbarTwo';
import PageBanner from '../../components/Common/PageBanner';
import Footer from '../../components/_App/Footer';
import ArticleBody from '../../components/WhatsNew/ArticleBody';
import ArticleSidebar from '../../components/WhatsNew/ArticleSideBar';
import {GetWhatsNewData, GetArticleBySlug} from '../../api/WhatsNewApi';

const WhatsNewArticle = ({article}) => {
  console.log(article)
  return (
    <React.Fragment>
      <NavbarTwo />
      <PageBanner pageTitle='News Details' homePageUrl='/' homePageText='Home' activePageText='News Details' />

      <div className='blog-details-area ptb-100'>
        <div className='container'>
          <div className='row'>
            <ArticleBody />
            <div className='col-lg-4 col-md-12'>
              <div className='blog-right-sidebar'>
                <ArticleSidebar />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </React.Fragment>
  );
};

export const getStaticPaths = async () => {
  const data = await GetWhatsNewData();

  return {
    paths: data.data.map(item => ({
      params: {slug: item.slug},
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({params}) => {
  const data = await GetArticleBySlug(params.slug);

  return {
    props: {
      article: data?.data[0],
    },
  };
};

export default WhatsNewArticle;
