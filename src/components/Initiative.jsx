import React from 'react';

import Typography from '@material-ui/core/Typography';

import MenosLogo from 'Components/MenosLogo';
import SocialIcon from 'Components/SocialIcon';

import Section from 'Layouts/Section';

import withClasses from 'Styles/components/initiative';

const Initiative = ({ classes }) => (
  <Section extraClasses={ classes }>
    <Typography variant="h4" marked="center" className={ classes.title } component="h2">
      #compraaospequenos
    </Typography>

    <Typography variant="body1" color="textSecondary" component="p">
      uma iniciative
    </Typography>

    <MenosLogo />

    <div>
      <SocialIcon
        extraClasses={ classes }
        icon="faFacebookF"
        link="http://www.facebook.com/menoshub/"
        title="Menos Facebook Page"
      />
      <SocialIcon
        extraClasses={ classes }
        icon="faLinkedin"
        link="https://www.linkedin.com/company/menos/"
        title="Menos LinkedIn Page"
      />
      <SocialIcon
        extraClasses={ classes }
        icon="faInstagram"
        link="https://www.instagram.com/menoshub/"
        title="Menos Instragram Page"
      />
    </div>
  </Section>
);

export default withClasses(Initiative);
