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
          A maior parte dos pequenos negócios, devido à situação actual, enfrentam enormes desafios
          para sobreviver.
        </Typography>

        <Typography className={ classes.description } variant="body1">
          Muitos destes negócios estão a reinventar-se e começaram a desenvolver produtos digitais,
          a vender vouchers, a entregar ao domicílio, a oferecer masterclasses ou a prestar
          serviços remotamente para se adaptarem às nossas necessidades.
        </Typography>

        <Typography className={ classes.description } variant="body1">
          Porque a pequena economia de amanhã depende de nós hoje, nasceu o movimento
          #compraaospequenos, como um apelo a todos.
        </Typography>

        <Grid container spacing={ 5 } className={ classes.itemsWrapper }>
          <Grid className={ classes.item } item xs={ 12 } md={ 6 }>
            <ShopsIcon className={ classes.icon } />
            <Typography variant="h5" className={ classes.sectionHeading }>
              Pequenos negócios
            </Typography>
            <Typography variant="body1" className={ classes.sectionDescription }>
              com soluções adaptadas
            </Typography>
          </Grid>

          <ArrowsIcon className={ classes.arrows } />

          <Grid className={ classes.item } item xs={ 12 } md={ 6 }>
            <ClientsIcon className={ classes.icon } />
            <Typography variant="h5" className={ classes.sectionHeading }>
              Clientes
            </Typography>
            <Typography variant="body1" className={ classes.sectionDescription }>
              limitados ao isolamento
            </Typography>
          </Grid>
        </Grid>

        <Typography className={ classes.description } variant="body1">
          Como sabemos que, às vezes, o desafio é saber onde estão, o que oferecem e como apoiar,
          criámos um diretório onde mapeamos os pequenos negócios que têm ofertas adaptadas à nossa
          situação de isolamento.
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
