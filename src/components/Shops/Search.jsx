import React from 'react';
import TextField from '@material-ui/core/TextField';

const ShopsSearch = ({ onChange }) => (
  <TextField id="search" label="Search..." onChange={ onChange } />
);

export default ShopsSearch;
