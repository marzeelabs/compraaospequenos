import React from 'react';

import Typography from '@material-ui/core/Typography';

import ImpulsoLogo from 'Assets/impulso-logo.svg';
import SocialIcon from 'Components/SocialIcon';

import Section from 'Layouts/Section';

import useStyles from 'Styles/components/initiative';

const Initiative = () => {
  const classes = useStyles();

  return (
    <Section extraClasses={ classes }>
      <Typography variant="h4" marked="center" className={ classes.title } component="h2">
        #compraaospequenos
      </Typography>

      <Typography variant="body1" color="textSecondary" component="p" className={ classes.subtitle }>
        uma iniciativa
      </Typography>

      <a
        className={ classes.menosLink }
        href="https://impulso.site/"
        target="_blank"
        rel="noopener noreferrer"
        title="MenosHub"
      >
        <span className={ classes.menosLinkLogo }>
          <ImpulsoLogo />
        </span>
        impulso.site
      </a>

      <div>
        <SocialIcon
          extraClasses={ classes }
          icon="faFacebookF"
          link="https://www.facebook.com/organizacaoimpulso/"
          title="Impulso Facebook Page"
        />
        <SocialIcon
          extraClasses={ classes }
          icon="faLinkedinIn"
          link="https://www.linkedin.com/company/impulsoempreendedor/"
          title="Impulso LinkedIn Page"
        />
        <SocialIcon
          extraClasses={ classes }
          icon="faInstagram"
          link="https://www.instagram.com/impulso.site/"
          title="Impulso Instragram Page"
        />
      </div>
    </Section>
  );
};

export default Initiative;
