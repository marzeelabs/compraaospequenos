require('dotenv').config();

const FILTERS = require('./data/filters');
const FIELDS = require('./data/fields');
const URL = require('./data/url');

const siteUrl = URL.getBaseUrl();

module.exports = {
  siteMetadata: {
    title: '#compraaospequenos',
    description: 'A ajudar lojas locais a sobreviver e prosperar durante a crise do Covid-19.',
    author: '@marzeelabs',
    siteUrl,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          Assets: 'src/assets',
          Components: 'src/components',
          Data: 'data',
          Layouts: 'src/layouts',
          Pages: 'src/pages',
          Polyfills: 'src/polyfills',
          Styles: 'src/styles',
          Utils: 'src/utils',
        },
      },
    },
    {
      resolve: 'gatsby-plugin-material-ui',
      // If you want to use styled components you should change the injection order.
      options: {
        // stylesProvider: {
        //   injectFirst: true,
        // },
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#2F5BEA',
        theme_color: '#2F5BEA',
        display: 'minimal-ui',
        icon: 'src/assets/favicon.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-source-google-spreadsheet-cap',
      options: {
        // The `spreadsheetId` is required, it is found in the url of your document:
        // https://docs.google.com/spreadsheets/d/<spreadsheetId>/edit#gid=0
        spreadsheetId: process.env.GOOGLE_DOC_SPREADSHEET_ID || '1VT6yvROk2V_Z438YdzBHkjeplqOeaTkAR4SfifBsMqg',

        // If set, the `spreadsheetSheet`  is the only sheet to be considered for mapping.
        // This is an adaptation to how the original plugin works.
        spreadsheetSheet: process.env.GOOGLE_DOC_SPREADSHEET_SHEET,

        // The `typePrefix` is optional, default value is "GoogleSpreadsheet"
        // It is used as part of the id's during the node creation, as well as in the generated
        // GraphQL-schema. It can be overridden to fully customize the root query.
        typePrefix: 'GoogleSpreadsheet',

        // The `credentials` are only needed when you need to be authenticated to read the document.
        // It's an object with the following shape:
        // {
        //   client_email: "<your service account email address>",
        //   private_key: "<the prive key for your service account>"
        // }
        //
        // Refer to googles own documentation to retrieve the credentials for your service account:
        //   - https://github.com/googleapis/google-api-nodejs-client#service-to-service-authentication
        //   - https://developers.google.com/identity/protocols/OAuth2ServiceAccount
        //
        credentials: {
          client_email: process.env.GOOGLE_CLOUD_CLIENT_EMAIL,
          private_key: process.env.GOOGLE_CLOUD_PRIVATE_KEY.replace(/_/gm, '\n'),
        },

        // Simple node transformation during node sourcing can be achieved by implementing the
        // following functions
        // - `filterNode`
        // - `mapNode`
        //
        // By implementing a `filterNode(node): boolean` function, you can choose to eliminate some
        // nodes before they're added to Gatsby, the default behaviour is to include all nodes:
        filterNode: () => true,

        // By implementing a `mapNode(node): node` function, you can provide your own node
        // transformations directly during node sourcing, the default implementation is to return
        // the node as is:
        // Map based on the fields settings.
        mapNode: node => Object.keys(FILTERS).reduce((acc, cur) => ({
          // Keep existing fields unchanged.
          ...acc,
          // Add translated field names so we can refer to them in Gatsby
          ...Object.keys(FIELDS).reduce((acc2, cur2) => ({
            ...acc2,
            [cur2]: node[FIELDS[cur2].field],
          }), {}),
          // Map new fields for filters based on the data settings for them.
          // Each filter will be an array of possible values.
          // NOTE: if the desired filter column has the same name as the
          // original field, the original will be overwritten; this should be
          // fine for most cases though.
          [cur]: node[FILTERS[cur].field].split(',').map(n => n.trim()),
        }), node),
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-162021632-1',
      },
    },
  ],
};
