import React from "react";
import { InstantSearch } from 'react-instantsearch-dom';
import { ALGOLIA_SEARCH_CLIENT } from '../services/algolia';
import Hits from "../components/search/Hits";
import Filters from "../components/search/Filters";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

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

export default ({ data }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <InstantSearch
        searchClient={ALGOLIA_SEARCH_CLIENT}
        indexName="shops"
        // searchState={this.state.searchState}
        // onSearchStateChange={this.onSearchStateChange}
        // createURL={createURL}
      >
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <h1>Search</h1>
          </Grid>
          <Grid item xs={3}>
            <Filters />
          </Grid>
          <Grid item xs={9}>
            <Hits />
          </Grid>
        </Grid>
      </InstantSearch>
    </div>
  );
}