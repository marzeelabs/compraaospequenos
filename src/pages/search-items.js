import React, { useEffect, useState } from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import itemsjs from "itemsjs";
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { FILTERS, FILTERS_LABELS } from '../utils/data';

export default ({ data }) => {
  // console.log(data);

  const [isLoading, setIsLoading] = useState(true);
  const [store, setStore] = useState({});
  const [shops, setShops] = useState([]);

  useEffect(() => {
    const flatData = data.allGoogleSpreadsheetNegociosNegocios.edges.map(({ node }) => node);

    const _store = itemsjs(flatData, {
      aggregations: {
        [FILTERS.LOCATION]: {
          title: FILTERS_LABELS.LOCATION,
          size: 10,
        },
      },
    });
    const _shops = _store.search({
      per_page: 1000,
      // filters: {
      //   localiza__o__distrito_: ['Aveiro'],
      // },
    });

    setIsLoading(false);
    setShops(_shops);
    setStore(_store);
  }, []);




  // const shops = store.search({
  //   per_page: 1000,
  //   // filters: {
  //   //   localiza__o__distrito_: ['Aveiro'],
  //   // },
  // });
  // console.log(shops.data.aggregations.localiza__o__distrito_.buckets);

  const handleChange = event => {

    console.log(event.target);
    if (event.target.checked) {
      const _shops = store.search({
        per_page: 1000,
        filters: {
          [FILTERS.LOCATION]: [event.target.name],
        },
      });
      setShops(_shops);
    } else {
      const _shops = store.search({
        per_page: 1000,
      });
      setShops(_shops);
    }

    console.log(event.target.name);
    console.log(event.target.checked);
  };

  return (
    <Layout>
      {!isLoading ? (
      <div>
        <h1>All shops</h1>

        <h3>Location</h3>
        <ul>
          {shops.data.aggregations[FILTERS.LOCATION].buckets.map((bucket, index) => (
            <FormControlLabel
              key={index}
              control={
                <Checkbox 
                  checked={bucket.selected} 
                  onChange={handleChange} 
                  name={bucket.key}
                />
              }
              label={`${bucket.key} (${bucket.doc_count})`}
            />
          ))}
        </ul>

        {/* <h3>Type of Business</h3>
        <ul>
          {shops.data.aggregations[FILTERS.BUSINESS_TYPE].buckets.map((bucket, index) => (
            <FormControlLabel
              key={index}
              control={
                <Checkbox 
                  checked={bucket.selected} 
                  // onChange={(input) => handleChange(input)} 
                  name={bucket.key}
                />
              }
              label={`${bucket.key} (${bucket.doc_count})`}
            />
          ))}
        </ul> */}


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
            {shops.data.items.map((node, index) => (
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
      ) : (
        <div>Initialising...</div>
      )}
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