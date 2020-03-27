import React from 'react';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Section from 'Layouts/Section';

import withClasses from 'Styles/components/hero';

const Hero = ({ classes }) => (
  <Section extraClasses={ classes }>
    <Typography color="inherit" variant="h2">
      #compraaospequenos
    </Typography>

    <Typography color="inherit" align="center" variant="h5" className={ classes.h5 }>
      An initiative from MenosHub.
    </Typography>

    <Button
      color="secondary"
      variant="contained"
      size="large"
      className={ classes.button }
      component="a"
      href="/shops"
    >
      List of shops
    </Button>

    <div className={ classes.backdrop } />
    <div className={ classes.background } />
  </Section>
);

export default withClasses(Hero);
