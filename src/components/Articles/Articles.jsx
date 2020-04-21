import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import ArticleCard from './Card';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));

const Articles = ({ articles }) => {
  const classes = useStyles();

  return (
    <div className={ classes.root }>
      <Grid
        container
        spacing={ 2 }
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        { articles.map(({ node: article }, key) => (
          // eslint-disable-next-line react/no-array-index-key
          <Grid item xs={ 12 } sm={ 6 } key={ key }>
            <ArticleCard data={ article } />
          </Grid>
        )) }
      </Grid>
    </div>
  );
};

export default Articles;
