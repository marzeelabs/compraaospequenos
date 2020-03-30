/**
 * PageWrapper component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { node } from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import {
  ThemeProvider,
} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from 'Components/Header';
import Initiative from 'Components/Initiative';
import Footer from 'Components/Footer';

import theme from 'Styles/theme';

// Include general styles to be applied throughout the website.
import './PageWrapper.scss';

const PageWrapper = ({ children }) => {
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
    <ThemeProvider theme={ theme }>
      <CssBaseline />
      <Header siteTitle={ data.site.siteMetadata.title } />
      { children }
      <Initiative />
      <Footer />
    </ThemeProvider>
  );
};

PageWrapper.propTypes = {
  children: node.isRequired,
};

export default PageWrapper;
