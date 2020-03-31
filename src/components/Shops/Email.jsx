import React from 'react';
import { string } from 'prop-types';

import useStyles from 'Styles/components/shops/email';

const ShopsEmail = ({ address }) => {
  const classes = useStyles();

  if (!address) {
    return null;
  }

  const email = address.trim().toLowerCase();

  const validate = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
  if (!validate.test(email)) {
    return null;
  }

  return (
    <a
      className={ classes.link }
      href={ `mailto://${email}` }
      title={ email }
      target="_blank"
      rel="noopener noreferrer"
    >
      { email }
    </a>
  );
};

ShopsEmail.propTypes = {
  address: string,
};

ShopsEmail.defaultProps = {
  address: '',
};

export default ShopsEmail;
