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
  const { site, metaImageDefault } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
        # automatically optimise image for use in OG
        metaImageDefault: file(absolutePath: { regex: "/assets/og-image/" }) {
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
  const metaImage = site.siteMetadata.siteUrl.concat(metaImageDefault.childImageSharp.fixed.src);

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
          property: 'og:description',
          content: metaDescription,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          property: 'og:image',
          content: metaImage,
        },
        {
          name: 'twitter:image',
          content: metaImage,
        },
        {
          property: 'og:type',
          content: 'website',
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
