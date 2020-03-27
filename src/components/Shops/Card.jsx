import React from 'react';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
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
          { shop.oferta }
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="primary">
        { shop.localiza__o__distrito_ }
      </Button>
      <Button size="small" color="primary">
        Learn More
      </Button>
    </CardActions>
  </Card>
);

export default withClasses(ShopsCard);
