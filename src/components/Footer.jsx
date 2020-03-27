import React from 'react';

import MarzeeLabsLogo from 'Assets/marzeelabs.svg';

import SocialIcon from 'Components/SocialIcon';

import Section from 'Layouts/Section';

import withClasses from 'Styles/components/footer';

const Footer = ({ classes }) => (
  <Section WrapperComponent="footer" extraClasses={ classes }>
    This website was proudly developed by
    <a
      className={ classes.mainLink }
      href="https://marzeelabs.org"
      target="_blank"
      rel="noopener noreferrer"
      title="Marzee Labs"
    >
      <MarzeeLabsLogo />
      marzeelabs.org
    </a>

    <div>
      <SocialIcon
        extraClasses={ classes }
        icon="faTwitter"
        link="http://www.twitter.com/marzeelabs"
        title="Menos Twitter Page"
      />
      <SocialIcon
        extraClasses={ classes }
        icon="faLinkedin"
        link="https://www.linkedin.com/company/marzee-labs"
        title="Menos LinkedIn Page"
      />
      <SocialIcon
        extraClasses={ classes }
        icon="faFacebookF"
        link="http://www.facebook.com/marzeelabs"
        title="Menos Facebook Page"
      />
      <SocialIcon
        extraClasses={ classes }
        icon="faGithub"
        link="http://github.com/marzeelabs/compraaospequenos"
        title="Menos Facebook Page"
      />
    </div>
  </Section>
);

export default withClasses(Footer);
