import React, { useEffect, useState } from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import itemsjs from "itemsjs";
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { FILTERS, FILTERS_LABELS } from '../utils/data';

const CONFIGURATION = {
  aggregations: {
    [FILTERS.LOCATION]: {
      title: FILTERS_LABELS.LOCATION,
    },
    [FILTERS.BUSINESS_TYPE]: {
      title: FILTERS_LABELS.BUSINESS_TYPE,
    },
  },
};

export default ({ data }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [store, setStore] = useState({});
  const [shops, setShops] = useState([]);
  // const [filters, setFilters] = useState({});

  useEffect(() => {
    const flatData = data.allGoogleSpreadsheetNegociosNegocios.edges.map(({ node }) => node);

    const _store = itemsjs(flatData, CONFIGURATION);
    const _shops = _store.search({
      per_page: 1000,
    });
    // const _filters = {};
    // Object.keys(CONFIGURATION.aggregations).map(f => _filters[f] = []);
    // setFilters(_filters);
    
    setIsLoading(false);
    setShops(_shops);
    setStore(_store);
  }, []);

  /**
   * Handle filter change.
   * @todo fix combination of filters to be kept
   * 
   * @param {*} filter 
   * @param {*} event 
   */
  const handleChange = (filter, event) => {
    if (event.target.checked) {
      const _shops = store.search({
        per_page: 1000,
        filters: {
          [filter]: [event.target.name],
        },
      });
      setShops(_shops);
    } else {
      // @todo keep existing filter combination
      setShops(store.search({
        per_page: 1000,
      }));
    }
  };

  return (
    <Layout>
      {!isLoading ? (
      <div>
        <h1>All shops</h1>

        {Object.keys(CONFIGURATION.aggregations).map((filter,idx) => (
          <div key={idx}>
          <h3>{FILTERS_LABELS[filter]}</h3>
          <ul>
          {shops.data.aggregations[filter].buckets.map((bucket, index) => (
            <FormControlLabel
              key={index}
              control={
                <Checkbox 
                  checked={bucket.selected} 
                  onChange={event => handleChange(filter, event)}
                  name={bucket.key}
                />
              }
              label={`${bucket.key} (${bucket.doc_count})`}
            />
          ))}
        </ul>
        </div>
        ))}

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
