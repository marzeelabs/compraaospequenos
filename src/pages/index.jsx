import React from 'react';

import SEO from 'Components/SEO';

import About from 'Components/About';
import Hero from 'Components/Hero';
import Register from 'Components/Register';

import PageWrapper from 'Layouts/PageWrapper';

import useStyles from 'Styles/pages/home';

const IndexPage = ({ location }) => {
  const classes = useStyles();

  return (
    <PageWrapper>
      <SEO title="Compra aos pequenos" location={ location } />
      <Hero
        background="homeBg"
        callToAction={ {
          label: 'Lista de Negócios',
          to: '/shops/',
        } }
        className={ classes.hero }
      />
      <About />
      <Register />
    </PageWrapper>
  );
};

export default IndexPage;
