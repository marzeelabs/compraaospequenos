import React from 'react';
import {
  arrayOf,
  bool,
  func,
  number,
  shape,
  string,
} from 'prop-types';

import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const ShopsFilters = ({
  aggregations,
  filter,
  handleChange,
  label,
}) => (
  <div>
    <h3>{ label }</h3>
    <ul>
      { aggregations.buckets.map(bucket => (
        <FormControlLabel
          key={ `filter-option-${bucket.key}` }
          control={ (
            <Checkbox
              checked={ bucket.selected }
              onChange={ event => handleChange(filter, event) }
              name={ bucket.key }
            />
            ) }
          label={ `${bucket.key} (${bucket.doc_count})` }
        />
      )) }
    </ul>
  </div>
);

ShopsFilters.propTypes = {
  aggregations: shape({
    buckets: arrayOf(shape({
      doc_count: number,
      key: string,
      selected: bool,
    })),
  }).isRequired,
  filter: string.isRequired,
  handleChange: func.isRequired,
  label: string.isRequired,
};

export default ShopsFilters;
