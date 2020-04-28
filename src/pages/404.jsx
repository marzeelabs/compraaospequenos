import React from 'react';

import { Link } from 'gatsby';

import PageWrapper from 'Layouts/PageWrapper';
import SEO from '../components/SEO';

import Graphic404 from './page404.svg';

import './page404.scss';

const NotFoundPage = ({ location }) => (
  <PageWrapper>
    <SEO title="404: Not found" location={ location } />
    <div className="four-oh-four__wrapper">
      <h1 className="four-oh-four__title">And... You’re lost</h1>
      <img className="four-oh-four__img" src={ Graphic404 } alt="404 not found" />
      <p className="four-oh-four__list__title">You can:</p>

      <ul className="four-oh-four__list">
        <li>
          <Link to="/" className="four-oh-four__link">
            Get Back Home.
          </Link>
        </li>
        <li>
          <Link to="/shops" className="four-oh-four__link">
            Check the Shops.
          </Link>
        </li>
        <li>
          <Link to="/articles" className="four-oh-four__link">
            Read some tips.
          </Link>
        </li>
      </ul>
    </div>

  </PageWrapper>
);

export default NotFoundPage;
