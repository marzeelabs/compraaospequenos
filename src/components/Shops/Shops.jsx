import React, { useEffect, useRef, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import itemsjs from 'itemsjs';

import debounce from 'lodash/debounce';

import Pagination from '@material-ui/lab/Pagination';

import ShopsFilters from 'Components/Shops/Filters';
import ShopsList from 'Components/Shops/List';
import ShopsSearch from 'Components/Shops/Search';

import Section from 'Layouts/Section';

import useStyles from 'Styles/components/shops/shops';

const FILTERS = require('Data/filters');

// itemsjs configuration, built directly from the FILTERS object through each
// title and size properties, keyed to the field property.
const CONFIGURATION = {
  aggregations: Object.keys(FILTERS).reduce((acc, cur) => ({
    ...acc,

    [cur]: {
      size: FILTERS[cur].size,
      title: FILTERS[cur].label,
    },
  }), {}),
  searchableFields: [
    'nome',
    'produtoOuServi_o',
  ],
};

const MAX_ITEMS_PER_PAGE = 18;

const Shops = () => {
  const classes = useStyles();
  const containerRef = useRef(null);

  const [ isLoading, setIsLoading ] = useState(true);
  const [ page, setPage ] = useState(1);
  const [ store, setStore ] = useState({});
  const [ shops, setShops ] = useState({});
  const [ filters, setFilters ] = useState({});
  const [ query, setQuery ] = useState('');

  const data = useStaticQuery(graphql`
    query {
      allGoogleSpreadsheetNegocios {
        edges {
          node {
            id
            nome
            oferta
            produtoOuServi_o
            facebook
            instagram
            whatsApp
            outroContacto__eMail_
            outroContacto__telefone_
            site
            location
            businessType
            offerType
          }
        }
      }
    }
  `);

  // Initialize the store objects, this should only happen once.
  useEffect(() => {
    const flatData = data.allGoogleSpreadsheetNegocios.edges.map(({ node }) => node);
    const _store = itemsjs(flatData, CONFIGURATION);

    setIsLoading(false);
    setStore(_store);
  }, [ data ]);

  // Updates the shops list with each filter and page change.
  useEffect(() => {
    const _shops = store.search && store.search({
      filters,
      page,
      per_page: MAX_ITEMS_PER_PAGE,
      query,
    });

    setShops(_shops || {});
  }, [ filters, page, store, query ]);

  if (isLoading) {
    return (
      <Section>
        <div>Initializing...</div>
      </Section>
    );
  }

  const total = (shops.pagination && shops.pagination.total) || 1;

  const scrollToTop = () => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView();
    }
  };

  // Handle filter change.
  const filtersChange = (filter, event) => {
    const _filters = {
      // This is a state object, don't mutate it, instead create a new one with
      // existing filters unchanged.
      ...filters,

      // Add or remove the toggled item to the filter. If the filter doesn't
      // exist in the object yet; again, this is a state object, so create a
      // new empty array that we can manipulate instead of changing the
      // existing one.
      [filter]: event.target.checked
        ? [ ...(filters[filter] || []) ].concat([ event.target.name ])
        : [ ...(filters[filter] || []) ].filter(n => n !== event.target.name),
    };

    setFilters(_filters);

    // Reset to first page when switching filters
    setPage(1);

    // Scroll back to top when toggling filters pages
    scrollToTop();
  };

  const setQueryDebounced = debounce(value => {
    setQuery(value);
  }, 200);

  // Handle search
  const handleSearchChange = event => {
    setQueryDebounced(event.target.value);
  };

  // Handle pagination change.
  const handlePageChange = (event, chosenPage) => {
    setPage(chosenPage);

    // Scroll back to top when changing pages
    scrollToTop();
  };

  return (
    <>
      <Section>
        <div className={ classes.content }>

          <div className={ classes.filters }>
            { shops.data && Object.keys(FILTERS).map(filter => (
              <ShopsFilters
                activeFilters={ filters[filter] }
                aggregations={ shops.data.aggregations[filter] }
                filter={ filter }
                filtersChange={ filtersChange }
                key={ `filter-${filter}` }
              />
            )) }
          </div>

          <div className={ classes.list }>
            { shops.data && (
              <>
                <ShopsSearch onChange={ handleSearchChange } />
                <ShopsList
                  shops={ shops }
                />
              </>
            ) }
          </div>
        </div>
      </Section>

      <Section>
        <Pagination
          classes={ { ul: classes.ul } }
          count={ Math.ceil(total / MAX_ITEMS_PER_PAGE) }
          page={ page }
          onChange={ handlePageChange }
        />
      </Section>
    </>
  );
};

export default Shops;
