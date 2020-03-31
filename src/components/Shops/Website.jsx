import React from 'react';
import { string } from 'prop-types';

import useStyles from 'Styles/components/shops/website';

const ShopsWebsite = ({ url }) => {
  const classes = useStyles();

  if (!url) {
    return null;
  }

  const protocol = url.startsWith('https') ? 'https' : 'http';
  const link = url.trim()
    .toLowerCase()
    .replace(/^(http:\/\/)?/, '')
    .replace(/^(https:\/\/)?/, '');

  if (!link) {
    return null;
  }

  const label = link
    .replace(/^(www\.)?/, '')
    .replace(/\/$/, '')
    .replace(/(\?(.*)?)?$/, '')
    .replace(/\/$/, '');

  return (
    <a
      className={ classes.link }
      href={ `${protocol}://${link}` }
      title={ label }
      target="_blank"
      rel="noopener noreferrer"
    >
      { label }
    </a>
  );
};

ShopsWebsite.propTypes = {
  url: string,
};

ShopsWebsite.defaultProps = {
  url: '',
};

export default ShopsWebsite;
