import React from 'react';
import { connectHits } from 'react-instantsearch-dom';
import Hit from './Hit';

const Hits = connectHits(({ hits }) => (
  <div className="ais-Hits">
    <ul className="ais-Hits-list">
      {hits.map(hit => (
        <Hit hit={hit} />
      ))}
    </ul>
  </div>
));

export default Hits;