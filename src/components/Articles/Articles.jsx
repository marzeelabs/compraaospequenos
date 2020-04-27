import React from 'react';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import ArticleCard from './Card';
import './Articles.scss';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));

const Articles = ({ articles }) => {
  const classes = useStyles();

  return (
    <div className={ clsx(classes.root, 'articles-pages') }>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        className="articles-list__wrapper"
      >
        { articles.map(({ node: article }, key) => (
          // eslint-disable-next-line react/no-array-index-key
          <Grid className="articles-card">
            <ArticleCard data={ article } />
          </Grid>
        )) }
      </Grid>
    </div>
  );
};

export default Articles;
