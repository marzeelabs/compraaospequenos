import React from 'react';
import { string } from 'prop-types';

import { Link } from 'gatsby';

import Section from 'Layouts/Section';

import useStyles from 'Styles/components/header';

const Header = ({ siteTitle }) => {
  const classes = useStyles();

  return (
    <Section extraClasses={ classes }>
      <Link className={ classes.title } to="/">
        { siteTitle }
      </Link>
      <Link className={ classes.navigation } to="/">
        Início
      </Link>
      <Link className={ classes.navigation } to="/shops">
        Portfolio
      </Link>
    </Section>
  );
};

Header.propTypes = {
  siteTitle: string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
