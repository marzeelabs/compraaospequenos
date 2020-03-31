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
  const { site, ogImageDefault } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            url
          }
        }
        # automatically optimise image for use in OG
        ogImageDefault: file(absolutePath: { regex: "/assets/og-image/" }) {
          childImageSharp {
            fixed(height: 630, width: 1200) {
              src
            }
          }
        }
      }
    `,
  );

  const metaDescription = description || site.siteMetadata.description;

  // the image url has to be an absolute url with http:// or https://
  // relative links do not work
  const ogImage = site.siteMetadata.url.concat(ogImageDefault.childImageSharp.fixed.src);

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
          name: 'og:title',
          content: title,
        },
        {
          name: 'og:description',
          content: metaDescription,
        },
        {
          name: 'og:image',
          content: ogImage,
        },
        {
          name: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
        {
          name: 'twitter:image',
          content: ogImage,
        },

        {
          name: 'twitter:card',
          content: 'summary_large_image',
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
