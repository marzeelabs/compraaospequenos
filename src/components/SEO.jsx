/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { arrayOf, object, string } from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({
  description,
  lang,
  meta,
  title,
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `,
  );

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={ { lang } }
      title={ title }
      titleTemplate={ `%s | ${site.siteMetadata.title}` }
      meta={ [
        {
          name: 'description',
          content: metaDescription,
        },
        {
          name: 'twitter:title',
          property: 'og:title',
          content: title,
        },
        {
          name: 'twitter:description',
          property: 'og:description',
          content: metaDescription,
        },
        // {
        //   name: 'twitter:image',
        //   property: 'og:image',
        //   content: '/assets/default.jpg',
        // },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          content: site.siteMetadata.author,
        },
      ].concat(meta) }
    />
  );
};

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  description: '',
};

SEO.propTypes = {
  description: string,
  lang: string,
  meta: arrayOf(object),
  title: string.isRequired,
};

export default SEO;
