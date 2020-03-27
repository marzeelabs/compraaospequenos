import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core//Button';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.secondary.light,
    overflow: 'hidden',
  },
  container: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(15),
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  title: {
    marginBottom: theme.spacing(14),
  },
  button: {
    marginTop: theme.spacing(8),
  },
});

function Register(props) {
  const { classes } = props;

  return (
    <section className={ classes.root }>
      <Container className={ classes.container }>
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
      </Container>
    </section>
  );
}

Register.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Register);
