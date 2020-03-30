import React from 'react';

import { Link } from 'gatsby';

import PageWrapper from 'Layouts/PageWrapper';
import SEO from '../components/SEO';

const NotFoundPage = () => (
  <PageWrapper>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist....</p>
    <Link to="/">
      Press here to go back to the homepage.
    </Link>
  </PageWrapper>
);

export default NotFoundPage;
