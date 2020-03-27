import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import HeroLayout from './HeroLayout';

const backgroundImage = 'https://images.unsplash.com/photo-1516594798947-e65505dbb29d?auto=format&fit=crop&w=1400&q=80';

const useStyles = makeStyles(theme => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
}));

function Hero() {
  const classes = useStyles();

  return (
    <HeroLayout backgroundClassName={ classes.background }>
      <Typography color="inherit" align="center" variant="h2" marked="center">
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
    </HeroLayout>
  );
}

export default Hero;
