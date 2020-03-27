/**
 * PageWrapper component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { node } from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import CssBaseline from '@material-ui/core/CssBaseline';

import Header from 'Components/Header';
import Footer from 'Components/Footer';

import withClasses from 'Styles/layouts/pageWrapper';

const PageWrapper = ({ children, classes }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <CssBaseline />
      <Header siteTitle={ data.site.siteMetadata.title } />
      <main className={ classes.root }>{ children }</main>
      <Footer />
    </>
  );
};

PageWrapper.propTypes = {
  children: node.isRequired,
};

export default withClasses(PageWrapper);
