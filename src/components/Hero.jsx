import React from 'react';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import MenosLogo from 'Components/MenosLogo';

import Section from 'Layouts/Section';

import withClasses from 'Styles/components/hero';

import './Hero.scss';

const Hero = ({ classes }) => (
  <Section extraClasses={ classes } outerContainerClassName="hero-image__wrapper">
    <div className="hero-image__content">
      <Typography color="inherit" variant="h2">
        #compraaospequenos
      </Typography>

      <Typography color="inherit" align="center" variant="h5" className={ classes.h5 }>
        An initiative from
      </Typography>

      <div>
        <MenosLogo />
      </div>

      <Button
        color="white"
        variant="contained"
        size="large"
        className={ `${classes.button} hero-image__button` }
        component="a"
        href="/shops"
      >
        List of shops
      </Button>

    </div>

    <div className={ `${classes.background} hero-image__image` } />
  </Section>
);

export default withClasses(Hero);
