import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import _ from 'lodash';
import ShopsCard from './Card';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const ShopsList = ({ shops }) => {
  const classes = useStyles();

  return (
    <div className={ classes.root }>
      { _.chunk(shops.data.items, 3).map(row => (
        <Grid container spacing={ 3 }>
          { row.map(shop => (
            <Grid item xs>
              <ShopsCard shop={ shop } />
            </Grid>
          )) }
        </Grid>
      )) }
    </div>
  );
};

export default ShopsList;

// {/* <table>
//   <thead>
//     <tr>
//       <th>Name</th>
//       <th>Location</th>
//       <th>Type of shop</th>
//       <th>Offer</th>
//     </tr>
//   </thead>
//   <tbody>
//     {shops.data.items.map(node => (
//       <tr key={`shop-${node.nome}-${node.localiza__o__distrito_}`}>
//         <td>{node.nome}</td>
//         <td>{node.localiza__o__distrito_}</td>
//         <td>{node.tipoDeNeg_cio}</td>
//         <td>{node.oferta}</td>
//       </tr>
//     ))}
//   </tbody>
// </table> */ }
