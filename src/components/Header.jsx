import React from 'react';
import { string } from 'prop-types';

import { Link } from 'gatsby';

import Section from 'Layouts/Section';

import useStyles from 'Styles/components/header';

const Header = ({ siteTitle }) => {
  const classes = useStyles();

  const isActiveLink = ({ isCurrent }) => (isCurrent ? { className: classes.activeLink } : {});

  return (
    <Section extraClasses={ classes }>
      <Link className={ classes.title } to="/">
        { siteTitle }
      </Link>
      <nav className={ classes.navigation }>
        <Link to="/" className={ classes.navigationLink } getProps={ isActiveLink }>
          Início
        </Link>
        <Link to="/shops" className={ classes.navigationLink } getProps={ isActiveLink }>
          Portfolio
        </Link>
      </nav>
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
