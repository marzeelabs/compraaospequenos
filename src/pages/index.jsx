import React from 'react';

import SEO from 'Components/SEO';

import About from 'Components/About';
import Hero from 'Components/Hero';
import Register from 'Components/Register';

import PageWrapper from 'Layouts/PageWrapper';

import useStyles from 'Styles/pages/home';

const IndexPage = () => {
  const classes = useStyles();

  return (
    <PageWrapper>
      <SEO title="Compra aos pequeneos" />
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
