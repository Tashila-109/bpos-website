import React from 'react';
import propTypes from 'prop-types';

import NavbarTwo from '../../components/_App/NavbarTwo';
import PageBanner from '../../components/Common/PageBanner';
import Footer from '../../components/_App/Footer';
import ArticleBody from '../../components/WhatsNew/ArticleBody';
import ArticleSidebar from '../../components/WhatsNew/ArticleSideBar';
import {GetWhatsNewData, GetArticleBySlug} from '../../api/WhatsNewApi';

const WhatsNewArticle = ({article}) => {
  console.log(article);
  return (
    <React.Fragment>
      <NavbarTwo />
      <PageBanner
        pageTitle={article.articleName}
        homePageUrl='/'
        homePageText='Home'
        activePageText={article.articleName}
        secondaryPageText='Whats New'
        secondaryPageUrl='/whats-new'
      />

      <div className='blog-details-area ptb-100'>
        <div className='container'>
          <div className='row'>
            <ArticleBody article={article} />
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

WhatsNewArticle.propTypes = {
  article: propTypes.object.isRequired,
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
