import React from 'react';
import { shape, string } from 'prop-types';

import { Link } from 'gatsby';
import Typography from '@material-ui/core/Typography';

import MenosLogo from 'Components/MenosLogo';

import Section from 'Layouts/Section';
import SectionBackground from 'Layouts/SectionBackground';

import useStyles from 'Styles/components/hero';

const Hero = ({
  background,
  callToAction,
  className,
}) => {
  const classes = useStyles();

  return (
    <Section className={ className } extraClasses={ classes }>
      <div className={ classes.content }>
        <Typography color="inherit" variant="h2" className={ classes.title }>
          #compraaospequenos
        </Typography>

        <Typography color="inherit" variant="h5" className={ classes.subtitle }>
          uma iniciativa
        </Typography>

        <div>
          <MenosLogo />
        </div>

        { callToAction && (
          <Link
            className={ classes.button }
            to={ callToAction.to }
          >
            { callToAction.label }
          </Link>
        ) }
      </div>

      <div className={ classes.fold }>
        <div className={ classes.innerFold }>
          Vamos fazer diferença
        </div>
      </div>

      <SectionBackground image={ background } />
    </Section>
  );
};

Hero.propTypes = {
  background: string.isRequired,
  callToAction: shape({
    label: string,
    to: string,
  }),
  className: string,
};

Hero.defaultProps = {
  callToAction: null,
  className: '',
};

export default Hero;
