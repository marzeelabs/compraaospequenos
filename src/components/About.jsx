import React from 'react';

import ArrowsIcon from 'Assets/arrows.svg';
import ClientsIcon from 'Assets/clients.svg';
import ShopsIcon from 'Assets/shops.svg';

import Grid from '@material-ui/core/Grid';
import { Link } from 'gatsby';
import Typography from '@material-ui/core//Typography';

import Section from 'Layouts/Section';

import useStyles from 'Styles/components/about';

const About = () => {
  const classes = useStyles();

  return (
    <Section extraClasses={ classes }>
      <Typography variant="h4" marked="center" className={ classes.title } component="h2">
        O que é esta iniciativa?
      </Typography>

      <div className={ classes.descriptionWrapper }>
        <Typography className={ classes.description } variant="body1">
          Os micro e pequenos negócios representam 99% das empresas em Portugal e,
          devido aos muitos desafios que enfrentam, precisam do apoio de todos nós
          para sobreviver, e crescer!
        </Typography>

        <Typography className={ classes.description } variant="body1">
          Porque a pequena economia de amanhã depende de nós hoje, nasceu o movimento
          #compraaospequenos, como um apelo a todos para apoiarem os pequenos negócios
          de todo o país.
        </Typography>

        <Grid container spacing={ 5 } className={ classes.itemsWrapper }>
          <Grid className={ classes.item } item xs={ 12 } md={ 6 }>
            <ShopsIcon className={ classes.icon } />
            <Typography variant="h5" className={ classes.sectionHeading }>
              Pequenos negócios
            </Typography>
          </Grid>

          <ArrowsIcon className={ classes.arrows } />

          <Grid className={ classes.item } item xs={ 12 } md={ 6 }>
            <ClientsIcon className={ classes.icon } />
            <Typography variant="h5" className={ classes.sectionHeading }>
              Consumidores conscientes
            </Typography>
          </Grid>
        </Grid>

        <Typography className={ classes.description } variant="body1">
          Como sabemos que, às vezes, o desafio é saber onde estão, o que oferecem e como comprar,
          mapeamos e partilhamos pequenos negócios por todo o país.
        </Typography>
      </div>

      <Link
        className={ classes.button }
        to="/shops/"
      >
        Lista de Negócios
      </Link>
    </Section>
  );
};

export default About;
