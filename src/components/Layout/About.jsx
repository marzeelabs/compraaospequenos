import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core//Typography';
import Button from '@material-ui/core/Button';
import ShopIcon from '../../assets/shops.svg';

const styles = theme => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: theme.palette.secondary,
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
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
});

function About(props) {
  const { classes } = props;

  return (
    <section className={ classes.root }>
      <Container className={ classes.container }>
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
      </Container>
    </section>
  );
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);
