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
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from 'Components/Header';
import Footer from 'Components/Footer';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FF0000',
    },
    secondary: {
      main: '#00FF00',
    },
    contrastThreshold: 3,
    tonalOffset: 0.5,
  },
});

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
      <Footer />
    </ThemeProvider>
  );
};

PageWrapper.propTypes = {
  children: node.isRequired,
};

export default PageWrapper;
