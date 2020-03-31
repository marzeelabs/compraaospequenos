import React from 'react';
import { string } from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as icons from '@fortawesome/free-solid-svg-icons';

import useStyles from 'Styles/components/shops/phones';

import formatPhoneNumber from 'Utils/formatPhoneNumber';

const ShopsPhones = ({ phones }) => {
  const classes = useStyles();

  if (!phones) {
    return null;
  }

  const numbers = phones
    .split(',')
    .map(str => str.trim())
    .map(str => {
      const number = parseInt(str.replace(' ', ''), 10);
      const label = str.indexOf(number) !== -1
        ? str.replace(number, formatPhoneNumber(number))
        : str;

      return {
        label,
        number,
      };
    });

  return numbers.map(item => (
    <a
      key={ `phone-${item.number}` }
      className={ classes.link }
      href={ `tel://${item.number}` }
      title={ item.label }
    >
      <FontAwesomeIcon
        className={ classes.icon }
        icon={ icons.faPhone }
      />
      { item.label }
    </a>
  ));
};

ShopsPhones.propTypes = {
  phones: string,
};

ShopsPhones.defaultProps = {
  phones: '',
};

export default ShopsPhones;
