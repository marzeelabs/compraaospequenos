import React from 'react';
import { string } from 'prop-types';
import clsx from 'clsx';

import { Link } from 'gatsby';

import Section from 'Layouts/Section';

import useStyles from 'Styles/components/header';

const Header = ({ siteTitle }) => {
  const classes = useStyles();

  const isActiveLink = ({ isCurrent }) => clsx(classes.navigationLink, {
    [classes.activeLink]: isCurrent,
  });

  return (
    <Section extraClasses={ classes }>
      <Link className={ classes.title } to="/">
        { siteTitle }
      </Link>
      <nav className={ classes.navigation }>
        <Link to="/" getProps={ isActiveLink }>
          Início
        </Link>
        <Link to="/shops/" getProps={ isActiveLink }>
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
