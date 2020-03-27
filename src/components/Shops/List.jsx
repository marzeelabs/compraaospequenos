import React from 'react';

import Grid from '@material-ui/core/Grid';

import withClasses from 'Styles/components/shops/list';

import chunk from 'Utils/chunk';

import ShopsCard from './Card';

const ShopsList = ({ classes, shops }) => (
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

export default withClasses(ShopsList);
