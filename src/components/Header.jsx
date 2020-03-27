import React from 'react';
import { string } from 'prop-types';

import { Link } from 'gatsby';

import withClasses from 'Styles/components/header';

const Header = ({ classes, siteTitle }) => (
  <div className={ classes.wrapper }>
    <Link className={ classes.title } to="/">
      { siteTitle }
    </Link>
    <Link className={ classes.navigation } to="/">
      Início
    </Link>
    <Link className={ classes.navigation } to="/shops">
      Portfolio
    </Link>
  </div>
);

Header.propTypes = {
  siteTitle: string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default withClasses(Header);
