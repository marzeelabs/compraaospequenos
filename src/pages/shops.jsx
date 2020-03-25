import React, { useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import itemsjs from 'itemsjs';

import Grid from '@material-ui/core/Grid';

import Layout from '../components/Layout/Layout';
import ShopsFilters from '../components/Shops/Filters';
import ShopsList from '../components/Shops/List';

import { FILTERS, FILTERS_LABELS } from '../utils/data';

const CONFIGURATION = {
  aggregations: {
    [FILTERS.LOCATION]: {
      title: FILTERS_LABELS.LOCATION,
      size: 100,
    },
    [FILTERS.BUSINESS_TYPE]: {
      title: FILTERS_LABELS.BUSINESS_TYPE,
      size: 100,
    },
  },
};

export default ({ data }) => {
  const [ isLoading, setIsLoading ] = useState(true);
  const [ store, setStore ] = useState({});
  const [ shops, setShops ] = useState([]);
  // const [filters, setFilters] = useState({});

  useEffect(() => {
    const flatData = data.allGoogleSpreadsheetNegociosNegocios.edges.map(({ node }) => node);
    const _store = itemsjs(flatData, CONFIGURATION);
    const _shops = _store.search({
      per_page: 1000,
    });
    console.log(_shops);
    // const _filters = {};
    // Object.keys(CONFIGURATION.aggregations).map(f => _filters[f] = []);
    // setFilters(_filters);
    setIsLoading(false);
    setShops(_shops);
    setStore(_store);
  }, [ data ]);

  /**
   * Handle filter change.
   * @todo fix combination of filters to be kept
   *
   * @param {*} filter
   * @param {*} event
   */
  const handleChange = (filter, event) => {
    if (event.target.checked) {
      const _shops = store.search({
        per_page: 1000,
        filters: {
          [filter]: [ event.target.name ],
        },
      });
      setShops(_shops);
    }
    else {
      // @todo keep existing filter combination
      setShops(store.search({
        per_page: 1000,
      }));
    }
  };

  if (isLoading) {
    return (
      <Layout>
        <div>Initializing...</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div>
        <Grid container spacing={ 3 }>
          <Grid item xs={ 12 }>
            <h1>
              { `All shops (${shops.pagination.total})` }
            </h1>
          </Grid>

          <Grid item xs={ 3 }>
            { Object.keys(CONFIGURATION.aggregations).map(filter => (
              <ShopsFilters
                aggregations={ shops.data.aggregations[filter] }
                filter={ filter }
                handleChange={ handleChange }
                key={ `filter-${filter}` }
                label={ FILTERS_LABELS[filter] }
                shops={ shops }
              />
            )) }
          </Grid>

          <Grid item xs={ 9 }>
            <ShopsList
              shops={ shops }
            />
          </Grid>
        </Grid>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allGoogleSpreadsheetNegociosNegocios {
      edges {
        node {
          id
          nome
          oferta
          outraFormaDeContacto
          localiza__o__distrito_
          tipoDeNeg_cio
          tipoDeOferta
          redesSociais
        }
      }
    }
  }
`;
