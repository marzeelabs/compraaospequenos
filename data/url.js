module.exports = {
  getNetlifyBaseUrl: () => {
    let baseurl = '';

    // Get the correct netlify url to use as basedir
    if (process.env.CONTEXT !== undefined) {
      switch (process.env.CONTEXT) {
        case 'production':
          if (process.env.URL) {
            baseurl = process.env.URL;
            break;
          }

        // eslint-disable-next-line no-fallthrough
        case 'deploy-preview':
        case 'branch-deploy':
          if (process.env.DEPLOY_PRIME_URL) {
            baseurl = process.env.DEPLOY_PRIME_URL;
            break;
          }

        // eslint-disable-next-line no-fallthrough
        default:
          if (process.env.DEPLOY_URL) {
            baseurl = process.env.DEPLOY_URL;
            break;
          }
      }
    }

    return baseurl;
  },
};
