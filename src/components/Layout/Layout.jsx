/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { node } from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './Header';

import './Layout.scss';

const Layout = ({ children }) => {
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
      <Header siteTitle={ data.site.siteMetadata.title } />
      <div className="main-layout">
        <main>{ children }</main>
        <footer>
          { `${new Date().getFullYear()}, by ` }
          <a href="https://marzeelabs.org">Marzee Labs</a>
        </footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: node.isRequired,
};

export default Layout;
