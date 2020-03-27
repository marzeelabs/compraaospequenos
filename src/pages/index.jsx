import React from 'react';

import SEO from 'Components/SEO';

import About from 'Components/About';
import Hero from 'Components/Hero';
import Register from 'Components/Register';

import PageWrapper from 'Layouts/PageWrapper';

const IndexPage = () => (
  <PageWrapper>
    <SEO title="Home" />
    <Hero />
    <About />
    <Register />
  </PageWrapper>
);

export default IndexPage;
