const shopsQuery = `{
  allGoogleSpreadsheetNegociosNegocios {
    edges {
      node {
        id
        nome
        oferta
        outraFormaDeContacto
        localiza__o__distrito_
        tipoDeNeg_cio
        tipoDeOferta
        redesSociais
      }
    }
  }
}`

const flatten = arr =>
  arr.map(({ node: { frontmatter, ...rest } }) => ({
    ...frontmatter,
    ...rest,
  }))
const settings = { attributesToSnippet: [`excerpt:20`] }

const queries = [
  {
    query: shopsQuery,
    transformer: ({ data }) => {
      console.log(data.allGoogleSpreadsheetNegociosNegocios.edges);
      return flatten(data.allGoogleSpreadsheetNegociosNegocios.edges)
    },
    indexName: `shops`,
    // settings,
  },
]

module.exports = queries