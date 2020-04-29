import React, { useState } from 'react';
import clsx from 'clsx';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import ShopsEmail from 'Components/Shops/Email';
import ShopsPhones from 'Components/Shops/Phones';
import ShopsSocialLinks from 'Components/Shops/SocialLinks';
import ShopsWebsite from 'Components/Shops/Website';
import ShopsWhatsApp from 'Components/Shops/WhatsApp';

import useStyles from 'Styles/components/shops/card';

const ShopsCard = ({ shop }) => {
  const classes = useStyles();
  const [ expanded, setExpanded ] = useState(false);

  const handleExpandClick = event => {
    const cardClass = event.target.value;
    document.querySelector(`.${cardClass}`);
    setExpanded(!expanded);
  };

  return (
    <Card className={ classes.card }>
      <CardContent className={ classes.content }>
        <Typography gutterBottom variant="h5" component="h2" className={ classes.title }>
          { shop.nome }
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p" className={ classes.location }>
          { shop.location.join(', ') }
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p" className={ classes.businessType }>
          { shop.businessType.join(', ') }
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton
          className={ clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          }) }
          onClick={ handleExpandClick }
          value={ shop.nome }
          aria-expanded={ expanded }
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>

      <Collapse in={ expanded } timeout="auto" unmountOnExit className={ shop.nome }>
        <CardContent>
          <Typography gutterBottom variant="h6" component="h5" color="textSecondary" className={ classes.offerType }>
            { shop.offerType.join(', ') }
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={ classes.offer }>
            { shop.oferta }
          </Typography>

          <ShopsPhones phones={ shop.outroContacto__telefone_ } />
          <ShopsWhatsApp contact={ shop.whatsApp } />
          <ShopsEmail address={ shop.outroContacto__eMail_ } />
          <ShopsWebsite url={ shop.site } />
          <ShopsSocialLinks
            name={ shop.nome }
            facebook={ shop.facebook }
            instagram={ shop.instagram }
          />
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default ShopsCard;
