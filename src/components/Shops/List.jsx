import React from 'react';

const ShopsList = ({ shops }) => (
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
      { shops.data.items.map(node => (
        <tr key={ `shop-${node.nome}-${node.localiza__o__distrito_}` }>
          <td>{ node.nome }</td>
          <td>{ node.localiza__o__distrito_ }</td>
          <td>{ node.tipoDeNeg_cio }</td>
          <td>{ node.oferta }</td>
        </tr>
      )) }
    </tbody>
  </table>
);

export default ShopsList;
