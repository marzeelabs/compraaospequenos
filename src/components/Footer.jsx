import React from 'react';

import MarzeeLabsLogo from 'Assets/marzeelabs.svg';

import SocialIcon from 'Components/SocialIcon';

import Section from 'Layouts/Section';

import useStyles from 'Styles/components/footer';

const Footer = () => {
  const classes = useStyles();

  return (
    <Section WrapperComponent="footer" extraClasses={ classes }>
      <span className={ classes.title }>Este website foi desenvolvido com orgulho por</span>
      <a
        className={ classes.mainLink }
        href="https://marzeelabs.org"
        target="_blank"
        rel="noopener noreferrer"
        title="Marzee Labs"
      >
        <MarzeeLabsLogo className={ classes.mzLogo } />
        marzeelabs.org
      </a>

      <div>
        <SocialIcon
          extraClasses={ classes }
          icon="faTwitter"
          link="https://www.twitter.com/marzeelabs"
          title="Marzee Labs Twitter Page"
        />
        <SocialIcon
          extraClasses={ classes }
          icon="faLinkedinIn"
          link="https://www.linkedin.com/company/marzee-labs"
          title="Marzee Labs LinkedIn Page"
        />
        <SocialIcon
          extraClasses={ classes }
          icon="faFacebookF"
          link="https://www.facebook.com/marzeelabs"
          title="Marzee Labs Facebook Page"
        />
        <SocialIcon
          extraClasses={ classes }
          icon="faGithub"
          link="https://github.com/marzeelabs/compraaospequenos"
          title="Marzee Labs Facebook Page"
        />
      </div>
    </Section>
  );
};

export default Footer;
