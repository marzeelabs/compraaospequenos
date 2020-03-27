import React from 'react';

import ShopIcon from 'Assets/shops.svg';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core//Typography';

import Section from 'Layouts/Section';

import withClasses from 'Styles/components/about';

const About = ({ classes }) => (
  <Section extraClasses={ classes }>
    <Typography variant="h4" marked="center" className={ classes.title } component="h2">
      O que é esta iniciativa?
    </Typography>

    <div>
      <Grid container spacing={ 5 }>
        <Grid item xs={ 12 } md={ 6 }>
          <div className={ classes.item }>
            <ShopIcon />
            <Typography variant="h5" className={ classes.title }>
              Pequenos negócios com soluções inovadoras*
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas leo nis.
            </Typography>
          </div>
        </Grid>

        <Grid item xs={ 12 } md={ 6 }>
          <div className={ classes.item }>
            <ShopIcon />
            <Typography variant="h5" className={ classes.title }>
              Clientes limitados ao isolamento
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas leo nis.
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>

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

export default withClasses(About);
