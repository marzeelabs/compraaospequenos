import React from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import withClasses from 'Styles/components/shops/card';

const ShopsCard = ({ classes, shop }) => (
  <Card className={ classes.root }>
    <CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          { shop.nome }
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          { shop.localiza__o__distrito_.join(', ') }
        </Typography>
        <Typography gutterBottom variant="h6" component="h5" color="textSecondary">
          { shop.tipoDeOferta.join(', ') }
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          { shop.oferta }
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          <a href={ shop.redesSociais } target="_blank">Social network</a>
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          <a href={ shop.site } target="_blank">Website</a>
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);

export default withClasses(ShopsCard);
