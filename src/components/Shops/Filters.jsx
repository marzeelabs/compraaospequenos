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

const sortBuckets = original => {
  // Array sorting is done in-place, we don't want to alter the original in this case.
  const buckets = [ ...original ];
  buckets.sort((a, b) => {
    // Found at https://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript
    const aKey = a.key.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const bKey = b.key.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    if (aKey < bKey) {
      return -1;
    }

    if (aKey > bKey) {
      return 1;
    }

    return 0;
  });

  // 'Todo o País' is always first.
  const allItemIdx = buckets.findIndex(item => item.key === 'Todo o País');
  if (allItemIdx !== -1) {
    const removed = buckets.splice(allItemIdx, 1);
    buckets.unshift(removed[0]);
  }

  return buckets;
};

const ShopsFilters = ({
  aggregations,
  filter,
  handleChange,
  label,
}) => (
  <div>
    <h3>{ label }</h3>
    <ul>
      { sortBuckets(aggregations.buckets).map(bucket => (
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
