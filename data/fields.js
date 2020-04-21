const lang = process.env.GOOGLE_DOC_LANG || 'en';

let configuredFields = {};

if (lang === 'pt') {
  configuredFields = require('../config/fields.pt.json');
}
else if (lang === 'en') {
  configuredFields = require('../config/fields.en.json');
}
else {
  throw new Error(`Environment variable GOOGLE_DOC_LANG has unrecognised language: ${lang}`);
}

module.exports = {
  fields: {},
  filters: {},
  ...configuredFields,
};
