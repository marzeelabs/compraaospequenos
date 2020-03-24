import React from 'react';
import { ClearRefinements } from 'react-instantsearch-dom';
import { RefinementList } from 'react-instantsearch-dom';

const Filters = () => (
  <div>
    <h4>Location</h4>
    <RefinementList title="Location" attribute="localiza__o__distrito_" />
    <h4>Type of Business</h4>
    <RefinementList title="Type of Business" attribute="tipoDeNeg_cio" />
    <h4>Type of Offer</h4>
    <RefinementList title="Type of Offer" attribute="tipoDeOferta" />
    <ClearRefinements />
  </div>
);
export default Filters;
