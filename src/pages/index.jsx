import React from 'react';

import SEO from 'Components/SEO';

import About from 'Components/About';
import Hero from 'Components/Hero';
import Register from 'Components/Register';
import SurvivalKit from 'Components/SurvivalKit';

import PageWrapper from 'Layouts/PageWrapper';

import useStyles from 'Styles/pages/home';

const IndexPage = () => {
  const classes = useStyles();

  return (
    <PageWrapper>
      <SEO title="Compra aos pequenos" />
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
      <SurvivalKit />
    </PageWrapper>
  );
};

export default IndexPage;
