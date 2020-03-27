import React from 'react';
import { string } from 'prop-types';

import { Link } from 'gatsby';

import Section from 'Layouts/Section';

import withClasses from 'Styles/components/header';

const Header = ({ classes, siteTitle }) => (
  <Section extraClasses={ classes } WrapperComponent="header">
    <h1>
      <Link className={ classes.link } to="/">
        { siteTitle }
      </Link>
    </h1>
  </Section>
);

Header.propTypes = {
  siteTitle: string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default withClasses(Header);
