import React from 'react';

import Component404 from 'Components/404';
import PageWrapper from 'Layouts/PageWrapper';
import SEO from '../components/SEO';

import './page404.scss';

const NotFoundPage = ({ location }) => (
  <PageWrapper>
    <SEO title="404: Not found" location={ location } />
    <Component404 />
  </PageWrapper>
);

export default NotFoundPage;
