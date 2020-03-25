import React from 'react';
import { string } from 'prop-types';

import { Link } from 'gatsby';

import './Header.scss';

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="header__container">
      <h1 className="header__title">
        <Link
          className="header__link"
          to="/"
        >
          { siteTitle }
        </Link>
      </h1>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
