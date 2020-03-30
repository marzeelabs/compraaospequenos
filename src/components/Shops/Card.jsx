import React from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import useStyles from 'Styles/components/shops/card';

const ShopsCard = ({ shop }) => {
  const classes = useStyles();

  return (
    <Card className={ classes.card }>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            { shop.nome }
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            { shop.location.join(', ') }
          </Typography>
          <Typography gutterBottom variant="h6" component="h5" color="textSecondary">
            { shop.offerType.join(', ') }
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
};

export default ShopsCard;
