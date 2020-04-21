import CMS from 'netlify-cms-app';

/**
 * Configure CMS to allow local git editing
 */
CMS.init({
  config: {
    local_backend: true,
  },
});
