/* eslint-disable react/no-danger */
import React from 'react';
import { graphql } from 'gatsby';

import PageWrapper from 'Layouts/PageWrapper';
import SEO from 'Components/SEO';

import SocialIcon from 'Components/SocialIcon';

import Img from 'gatsby-image';
import './article.scss';

export default ({ data, location }) => {
  const { markdownRemark: article } = data;


  return (
    <PageWrapper>
      <SEO title={ article.frontmatter.title } location={ location } />
      <div className="article__wrapper">
        <h1 className="article__title">{ article.frontmatter.title }</h1>
        <h2 className="article__date">{ article.frontmatter.formattedDate }</h2>

        <Img className="article__hero" fluid={ article.frontmatter.image.childImageSharp.fluid } />

        <div className="article__copy" dangerouslySetInnerHTML={ { __html: article.html } } />
        <div className="article__tags">
          <ul>
            { article.frontmatter.tags.map(tag => (
              <li key={ tag }>{ tag }</li>
            )) }
          </ul>
        </div>
        <h3 className="article-social__title">Partilhe</h3>
        <ul className="article-social__list">
          <li className="article-social__item">
            <SocialIcon
              icon="faFacebookF"
              link="#"
              title="Share on Facebook"
            />
          </li>
          <li className="article-social__item">
            <SocialIcon
              icon="faTwitter"
              link="#"
              title="Share on Twitter"
            />
          </li>
          <li className="article-social__item">
            <SocialIcon
              icon="faInstagram"
              link="#"
              title="Share on Instagram"
            />
          </li>
        </ul>

      </div>
    </PageWrapper>
  );
};

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        formattedDate: date(formatString: "DD/MM/YYYY")
        tags
        image {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
