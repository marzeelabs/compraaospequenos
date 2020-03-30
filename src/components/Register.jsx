import React from 'react';

import Button from '@material-ui/core//Button';
import Typography from '@material-ui/core/Typography';

import Section from 'Layouts/Section';

import useStyles from 'Styles/components/register';

const Register = () => {
  const classes = useStyles();

  return (
    <Section extraClasses={ classes }>
      <Typography variant="h4" marked="center" className={ classes.title }>
        Como funciona?
      </Typography>

      <div>
        <Typography variant="body1" color="textSecondary" className={ classes.content }>
          Qualquer pequeno negócio, ou um seu apoiante, pode submeter uma candidatura desde que
          cumpra os dois requisitos seguintes:
        </Typography>

        <ol className={ classes.list }>
          <Typography component="span" color="textSecondary">
            <li>
              Ser um micro ou pequeno negócio
            </li>
          </Typography>
          <Typography component="span" color="textSecondary">
            <li>

              Ter uma oferta (produtos ou serviços) que, de alguma forma, se adapta à situação
              actual
            </li>
          </Typography>
        </ol>
      </div>

      <Button
        color="secondary"
        size="large"
        variant="contained"
        className={ classes.button }
        component="a"
        href="https://menos.typeform.com/to/zCesK3"
        target="_blank"
      >
        Registra o teu Negócio
      </Button>
    </Section>
  );
};

export default Register;
