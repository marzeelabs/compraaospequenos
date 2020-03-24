import React from 'react';
import { connectHits } from 'react-instantsearch-dom';
import PropTypes from 'prop-types';
import Hit from './Hit';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { makeStyles } from '@material-ui/core/styles';

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