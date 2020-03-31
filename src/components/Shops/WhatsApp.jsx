import React from 'react';
import { string } from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as icons from '@fortawesome/free-brands-svg-icons';

import useStyles from 'Styles/components/shops/whatsApp';

import formatPhoneNumber from 'Utils/formatPhoneNumber';

const ShopsWhatsApp = ({ contact }) => {
  const classes = useStyles();

  if (!contact) {
    return null;
  }

  const number = contact.trim()
    .replace(' ', '');

  if (!contact) {
    return null;
  }

  const label = formatPhoneNumber(number);

  return (
    <a
      key={ `whatsapp-${number}` }
      className={ classes.link }
      href={ `whatsapp://send/?phone=${number}` }
      title={ label }
    >
      <FontAwesomeIcon
        className={ classes.icon }
        icon={ icons.faWhatsapp }
      />
      { label }
    </a>
  );
};

ShopsWhatsApp.propTypes = {
  contact: string,
};

ShopsWhatsApp.defaultProps = {
  contact: '',
};

export default ShopsWhatsApp;
