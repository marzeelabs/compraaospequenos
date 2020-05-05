/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { node, string } from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({
  children,
  description,
  image,
  lang,
  location,
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

  const canonical = `${site.siteMetadata.siteUrl}${location.pathname}`;
  const metaImage = `${site.siteMetadata.siteUrl}${image || metaImageDefault.childImageSharp.fixed.src}`;

  return (
    <Helmet titleTemplate={ `%s | ${site.siteMetadata.title}` }>
      <html lang={ lang } />
      <link rel="canonical" href={ canonical } />
      <meta property="og:url" content={ canonical } />
      <title>{ title }</title>
      <meta property="og:title" content={ title } />
      <meta name="twitter:title" content={ title } />
      <meta name="description" content={ metaDescription } />
      <meta property="og:description" content={ metaDescription } />
      <meta name="twitter:description" content={ metaDescription } />
      <meta property="og:image" content={ metaImage } />
      <meta name="twitter:image" content={ metaImage } />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={ site.siteMetadata.author } />
      { children }
    </Helmet>
  );
};

SEO.propTypes = {
  children: node,
  description: string,
  image: string,
  lang: string,
  title: string.isRequired,
};

SEO.defaultProps = {
  children: null,
  image: '',
  lang: 'pt',
  description: '',
};

export default SEO;
