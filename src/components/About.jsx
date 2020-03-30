import React from 'react';

import ShopIcon from 'Assets/shops.svg';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core//Typography';

import Section from 'Layouts/Section';

import useStyles from 'Styles/components/about';

const About = () => {
  const classes = useStyles();

  return (
    <Section extraClasses={ classes }>
      <Typography variant="h4" marked="center" className={ classes.mainTitle } component="h2">
        O que é esta iniciativa?
      </Typography>

      <Grid container spacing={ 5 }>
        <Grid className={ classes.item } item xs={ 12 } md={ 6 }>
          <ShopIcon />
          <Typography variant="h5" className={ classes.title }>
            Pequenos negócios com soluções inovadoras*
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dolor sit amet, consectetur adipiscing leo nis.
          </Typography>
        </Grid>

        <Grid className={ classes.item } item xs={ 12 } md={ 6 }>
          <ShopIcon />
          <Typography variant="h5" className={ classes.title }>
            Clientes limitados ao isolamento
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit. Maecenas leo nis.
          </Typography>
        </Grid>
      </Grid>

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
    </Section>
  );
};

export default About;
