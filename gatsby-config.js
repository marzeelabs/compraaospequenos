GOOGLE_SERVICE_ACCOUNT_CREDENTIALS = {
  client_email: "compra@onthemooove-1575038580315.iam.gserviceaccount.com",
  private_key: "-----BEGIN PRIVATE KEY-----\nMIIEuwIBADANBgkqhkiG9w0BAQEFAASCBKUwggShAgEAAoIBAQDgxbQUVbrxLdmn\nQfVwXqZ6FedH0uBq6etHQ//pMxdxE0KscXJgBVpTWLqApvyybeQgXSLAghXMiu+i\nGlqxry5ZJeDTzXyPdUhiydCzODNPOG07JUvep4nr2WHx2yopHvAp3F2kzyYqaGaK\nndD79ml3j7QW/sXzzLpEmlixlhviEdJVKIL97OMTVOtPzG+IQ0cAQVke+8RiJSVd\nmamCQWW7Bm5F6oBjATRQlIxhv4LIAtF8rvHzt22x8fL1hCnNeSkihRguwGl9fT1H\nFQjjhN77xAgg6JefL8h25Js5mmSafYTlqOeK16yYW6dL4A6o13D+UHjPrpJKc5Wy\nhbJqn3aNAgMBAAECgf889lvsAoZxaZJk+y8eKkLBZn135gydYxwaOaOtcee/kwGK\nJHk9BUlfvuRyn3ofFnOoQLmnhh2MCbiNsK4EkrujQ1Y+46OrMlFbWpZXfAd0x8fr\nLnJqGCj0BWC1W/jDwRuwMleRR1LDBSbKmldXKt0oN1x2p/dKAWoZkftZ8IzzvogQ\nyYX7WZpyIqHPaKN/gWhm8CRyyfcXSBX0L79MnSNvJxLqvGjHyCN7FKbX8pR3RnnE\nBFeaO0R/4I75tXzsoWl1PQzw55VAjo6qKrmH+L/vOvXvBaJRUItUiKKxg0IKQVvf\nsCqtMdea6v1M553STwU+qBWe3VWJb7bBO9xlBOECgYEA91wBjZUexdV897MRTDLL\nD6H/xpItpD4fD11SxnjijHHR5Wtng0Tsl4F7HKpCHC/+D1LTMpiHBSp5/8Qogz38\nYN5d92FrFWlXjX80UfeZ9UmnhC8qjjIy/2Iw8EwIqbIefUWICDzoi6S6Ovdjsmfe\n4sswVvG3PlWyZmmy31reEOECgYEA6J+2saWF7RLsR7cb6IcjzpWFxoq4aXg1GIcb\nod6Pb9Onbn7nCzh9LoMRH8f8KlMJ5bxmPfud+BPrBcoDL1IDMoxwbqtIBT3Ua60E\ncOcOi4c+paWXyvpifDLgiGPtxRmDK7/4E3GmzZuZebvGYm8QkGLDdm7vyKPhJqp5\njLyzXy0CgYB94NVtfpB9bso8p2TLGSIbH36xR5xwc6iMwhoopEXt4NJG5OR1efLI\nmvzStpYUEBxDIgwWOGalq1sQXHudZkLz7NV22Z2L9OK4QB6ZA97WY5ga/YGzgTpQ\nmmB7OMZDzUAU0fiK8KwKvFaFQXX7yT40veAorrNoxmWWFn4PigduIQKBgCb83bnY\nbCHX0hIS9nJ6c93j4Y/tIAtNQljiDBeNHa04ZA945XBT/2cUQIJ7GiBd2oLOmLQ6\nv7ccX3+Q5AfCTxbhwtZJjsCSJFAHp37kuuNXv4AzyMUUQf1e6ZLybJ9kLz/d5M4d\ndj9vnMFyX0WQJ86LPwdSgI24Kbw5RjX4SnfhAoGBAKcABGdKpL/dcYjPxW0QVzs7\nre8V4+m/aSeNdKI/l1GoJAstUrMjkGSMpDCjCflIbjHs3TuH0JBEIqIUly2NRhEZ\n+W4uMYODYd6gMtCK1eX4B5d0VpH6gUH3TB8hmetidNcbNVweAEPwANQSGE+r1LIp\n0dKrbREwO+n1HzN+B60n\n-----END PRIVATE KEY-----\n",
};

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: "gatsby-source-google-spreadsheet",
      options: {
        // The `spreadsheetId` is required, it is found in the url of your document:
        // https://docs.google.com/spreadsheets/d/<spreadsheetId>/edit#gid=0
        spreadsheetId: "18aa2jtoNLeebymORRigaNleTB2tbIJBWIC1RwfJPYxc",
    
        // The `spreadsheetName` is recommended, but optional
        // It is used as part of the id's during the node creation, as well as in the generated GraphQL-schema
        // If you are sourcing multiple sheets, you can set this to distringuish between the source data
        spreadsheetName: "Negocios",
    
        // The `typePrefix` is optional, default value is "GoogleSpreadsheet"
        // It is used as part of the id's during the node creation, as well as in the generated GraphQL-schema
        // It can be overridden to fully customize the root query
        typePrefix: "GoogleSpreadsheet",
    
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
        // When you have generated your credentials, it's easiest to refer to them from an environment variable
        // and parse it directly:
        // credentials: JSON.parse(GOOGLE_SERVICE_ACCOUNT_CREDENTIALS),
        credentials: GOOGLE_SERVICE_ACCOUNT_CREDENTIALS,
    
        // Simple node transformation during node sourcing can be achieved by implementing the following functions
        // - `filterNode`
        // - `mapNode`
        //
        // By implementing a `filterNode(node): boolean` function, you can choose to eliminate some nodes before
        // they're added to Gatsby, the default behaviour is to include all nodes:
        filterNode: () => true,
    
        // By implementing a `mapNode(node): node` function, you can provide your own node transformations directly
        // during node sourcing, the default implementation is to return the node as is:
        mapNode: node => node
      }
    },
  ],
}
