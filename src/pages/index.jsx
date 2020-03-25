import React from 'react';

import { Link } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Link to="/shops/">Check out our shops</Link>
  </Layout>
);

export default IndexPage;
