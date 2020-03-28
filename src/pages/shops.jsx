import React, { useEffect, useRef, useState } from 'react';
import { graphql } from 'gatsby';
import itemsjs from 'itemsjs';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

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

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));


export default ({ data }) => {
  const classes = useStyles();
  const theme = useTheme();

  const [ isLoading, setIsLoading ] = useState(true);
  const [ page, setPage ] = useState(1);
  const [ store, setStore ] = useState({});
  const [ shops, setShops ] = useState({});
  const [ filters, setFilters ] = useState({});
  const [ mobileOpen, setMobileOpen ] = useState(false);

  const containerRef = useRef(null);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

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

      <CssBaseline />

      <AppBar position="fixed" className={ classes.appBar }>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={ handleDrawerToggle }
            className={ classes.menuButton }
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            { `Shops that match criteria - ${total}` }
          </Typography>
        </Toolbar>
      </AppBar>

      <div className={ classes.drawer } aria-label="filters">
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={ theme.direction === 'rtl' ? 'right' : 'left' }
            open={ mobileOpen }
            onClose={ handleDrawerToggle }
            classes={ {
              paper: classes.drawerPaper,
            } }
            ModalProps={ {
              keepMounted: true, // Better open performance on mobile.
            } }
          >
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
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
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
          </Drawer>
        </Hidden>
      </div>

      <Section>
        <div ref={ containerRef }>

          { shops.data && (
            <ShopsList
              shops={ shops }
            />
          ) }
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
