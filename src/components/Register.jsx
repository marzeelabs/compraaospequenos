import React from 'react';

import Button from '@material-ui/core//Button';
import Typography from '@material-ui/core/Typography';

import Section from 'Layouts/Section';

import withClasses from 'Styles/components/register';

const Register = ({ classes }) => (
  <Section extraClasses={ classes }>
    <Typography variant="h4" marked="center" className={ classes.title } component="h2">
      How it works
    </Typography>

    <Typography variant="body1" color="textSecondary" component="p">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas leo nisl, lobortis vitae mi at, condimentum tempor quam. Donec iaculis rhoncus dapibus. Etiam quis enim id augue cursus blandit nec sit amet ex. Nam ornare rhoncus convallis.
      Vestibulum eu quam luctus, rhoncus sapien eget, ultrices lacus. Nulla ullamcorper turpis erat, vel lobortis purus venenatis in.
    </Typography>

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

export default withClasses(Register);
