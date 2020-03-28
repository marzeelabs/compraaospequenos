import React, { useEffect, useRef, useState } from 'react';
import { graphql } from 'gatsby';
import itemsjs from 'itemsjs';

import Grid from '@material-ui/core/Grid';
import Pagination from '@material-ui/lab/Pagination';

import ShopsFilters from 'Components/Shops/Filters';
import ShopsList from 'Components/Shops/List';

import PageWrapper from 'Layouts/PageWrapper';
import Section from 'Layouts/Section';

import { FILTERS, FILTERS_LABELS } from 'Utils/data';

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

const MAX_ITEMS_PER_PAGE = 18;

export default ({ data }) => {
  const [ isLoading, setIsLoading ] = useState(true);
  const [ page, setPage ] = useState(1);
  const [ store, setStore ] = useState({});
  const [ shops, setShops ] = useState({});
  const [ filters, setFilters ] = useState({});
  const containerRef = useRef(null);

  useEffect(() => {
    const flatData = data.allGoogleSpreadsheetNegocios.edges
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
      page,
      per_page: MAX_ITEMS_PER_PAGE,
    });

    setShops(_shops || {});
  }, [ filters, page, store ]);

  if (isLoading) {
    return (
      <PageWrapper>
        <Section>
          <div>Initializing...</div>
        </Section>
      </PageWrapper>
    );
  }

  const total = (shops.pagination && shops.pagination.total) || 1;

  const scrollToTop = () => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView();
    }
  };

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

    // Reset to first page when switching filters
    setPage(1);

    // Scroll back to top when toggling filters pages
    scrollToTop();
  };

  /**
   * Handle pagination change.
   *
   * @param {*} filter
   * @param {*} event
   */
  const handlePageChange = (event, chosenPage) => {
    setPage(chosenPage);

    // Scroll back to top when changing pages
    scrollToTop();
  };

  return (
    <PageWrapper>
      <Section>
        <div ref={ containerRef }>
          <Grid container spacing={ 3 }>
            <Grid item xs={ 12 }>
              <h1>
                { `Shops that match criteria - ${total}` }
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
      </Section>

      <Section>
        <Pagination
          count={ Math.ceil(total / MAX_ITEMS_PER_PAGE) }
          page={ page }
          onChange={ handlePageChange }
        />
      </Section>
    </PageWrapper>
  );
};

export const query = graphql`
  query {
    allGoogleSpreadsheetNegocios {
      edges {
        node {
          id
          localiza__o__distrito_
          nome
          oferta
          produtoOuServi_o
          redesSociais
          site
          tipoDeNeg_cio
          tipoDeOferta
          outraFormaDeContacto
        }
      }
    }
  }
`;
