// This plugin is based on https://github.com/sondrele/gatsby-source-google-spreadsheet

const Sheets = require('node-sheets').default;
const createNodeHelpers = require('gatsby-node-helpers').default;
const camelCase = require('camelcase');
const { shuffle } = require('lodash');

const toNode = row => Object.entries(row).reduce((obj, [ key, cell ]) => {
  if (key === undefined || key === 'undefined') {
    return obj;
  }

  // `node-sheets` adds default values for missing numbers and dates, by checking
  // for the presence of `stringValue` (the formatted value), we can ensure that
  // the value actually exists.
  const value = typeof cell === 'object' && cell.stringValue !== undefined
    ? cell.value
    : null;
  obj[camelCase(key)] = value;

  return obj;
}, {});

exports.sourceNodes = async ({ actions, createNodeId }, pluginOptions) => {
  const { createNode } = actions;
  const {
    spreadsheetId,
    spreadsheetName = '',
    spreadsheetSheet = '',
    typePrefix = 'GoogleSpreadsheet',
    credentials,
    filterNode = () => true,
    mapNode = node => node,
  } = pluginOptions;

  const { createNodeFactory } = createNodeHelpers({
    typePrefix,
  });

  const gs = new Sheets(spreadsheetId);

  if (credentials) {
    await gs.authorizeJWT(credentials);
  }

  const promises = (await gs.getSheetsNames()).map(async sheetTitle => {
    // Adaptation: only consider sheets configured
    if (spreadsheetSheet !== '' && sheetTitle !== spreadsheetSheet) {
      return;
    }

    const tables = await gs.tables(sheetTitle);
    const { rows } = tables;

    const buildNode = createNodeFactory(
      camelCase(`${spreadsheetName} ${sheetTitle}`),
    );

    shuffle(rows)
      .map(toNode)
      .filter(filterNode)
      .map(mapNode)
      .forEach((node, i) => {
        const hasProperties = Object.values(node).some(value => value !== null);
        if (hasProperties) {
          createNode({
            ...buildNode(node),
            id: createNodeId(
              `${typePrefix} ${spreadsheetName} ${sheetTitle} ${i}`,
            ),
          });
        }
      });
  });
  return Promise.all(promises);
};
