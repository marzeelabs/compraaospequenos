import React from 'react';

import useStyles from 'Styles/components/shops/list';

import ShopsCard from './Card';

const ShopsList = ({ shops }) => {
  const classes = useStyles();

  return (
    <div className={ classes.list }>
      { shops.data.items.map(shop => (
        // eslint-disable-next-line react/no-array-index-key
        <ShopsCard
          key={ shop.id }
          shop={ shop }
        />
      )) }
    </div>
  );
};

export default ShopsList;
