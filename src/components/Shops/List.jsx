import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import ShopsCard from './Card';

import chunk from '../../utils/chunk';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const ShopsList = ({ shops }) => {
  const classes = useStyles();

  return (
    <div className={ classes.root }>
      { chunk(shops.data.items, 3).map((row, idx) => (
        // eslint-disable-next-line react/no-array-index-key
        <Grid key={ idx } container spacing={ 3 }>
          { row.map(shop => (
            <Grid key={ shop.id } item xs>
              <ShopsCard shop={ shop } />
            </Grid>
          )) }
        </Grid>
      )) }
    </div>
  );
};

export default ShopsList;
