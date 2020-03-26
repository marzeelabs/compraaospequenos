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

const MAX_ITEMS_PER_PAGE = 1000;

export default ({ data }) => {
  const [ isLoading, setIsLoading ] = useState(true);
  const [ store, setStore ] = useState({});
  const [ shops, setShops ] = useState([]);
  const [ filters, setFilters ] = useState({});

  useEffect(() => {
    const flatData = data.allGoogleSpreadsheetNegociosNegocios.edges
      .map(({ node }) => node)
      .map(node => ({
        ...node,
        [FILTERS.LOCATION]: (node[FILTERS.LOCATION] || []).map(str => str.trim()),
        [FILTERS.BUSINESS_TYPE]: (node[FILTERS.BUSINESS_TYPE] || '').trim(),
      }));

    const _store = itemsjs(flatData, CONFIGURATION);

    setIsLoading(false);
    setStore(_store);
  }, [ data ]);

  useEffect(() => {
    const _shops = store.search && store.search({
      filters,
      per_page: MAX_ITEMS_PER_PAGE,
    });

    setShops(_shops || {});
  }, [ filters, store ]);

  if (isLoading) {
    return (
      <Layout>
        <div>Initializing...</div>
      </Layout>
    );
  }

  const total = (shops.pagination && shops.pagination.total) || 1;

  /**
   * Handle filter change.
   *
   * @param {*} filter
   * @param {*} event
   */
  const handleChange = (filter, event) => {
    const _filters = { ...filters };

    if (event.target.checked) {
      _filters[filter] = Array.isArray(filters[filter])
        ? [ ...filters[filter] ].concat([ event.target.name ])
        : [ event.target.name ];
    }
    else {
      _filters[filter] = Array.isArray(filters[filter])
        ? [ ...filters[filter] ].filter(n => n !== event.target.name)
        : null;
    }

    setFilters(_filters);
  };


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
            { shops.data && Object.keys(CONFIGURATION.aggregations).map(filter => (
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
            { shops.data && (
              <ShopsList
                shops={ shops }
              />
            ) }
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
