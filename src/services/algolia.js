import algoliasearch from 'algoliasearch/lite';

export const ALGOLIA_SEARCH_CLIENT = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY,
  {
    timeout: 30000,
  }
);