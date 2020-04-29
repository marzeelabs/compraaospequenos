import React from 'react';

import TextField from '@material-ui/core/TextField';

import useStyles from 'Styles/components/shops/search';

const ShopsSearch = ({ onChange }) => {
  const classes = useStyles();

  return (
    <TextField
      className={ classes.textField }
      label={ (
        <span className={ classes.label }>Filtrar...</span>
      ) }
      onChange={ onChange }
    />
  );
};

export default ShopsSearch;
