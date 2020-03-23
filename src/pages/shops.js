import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

export default ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <div>
        <h1>All shops</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Location</th>
              <th>Type of shop</th>
              <th>Offer</th>
            </tr>
          </thead>
          <tbody>
            {data.allGoogleSpreadsheetNegociosNegocios.edges.map(({ node }, index) => (
              <tr key={index}>
                <td>{node.nome}</td>
                <td>{node.localiza__o__distrito_}</td>
                <td>{node.tipoDeNeg_cio}></td>
                <td>{node.oferta}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query {
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
  }
`