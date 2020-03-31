import React from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import ShopsEmail from 'Components/Shops/Email';
import ShopsPhones from 'Components/Shops/Phones';
import ShopsSocialLinks from 'Components/Shops/SocialLinks';
import ShopsWebsite from 'Components/Shops/Website';
import ShopsWhatsApp from 'Components/Shops/WhatsApp';

import useStyles from 'Styles/components/shops/card';

const ShopsCard = ({ shop }) => {
  const classes = useStyles();

  return (
    <Card className={ classes.card }>
      <CardActionArea
        className={ classes.actionArea }
        classes={ { focusHighlight: classes.focusHighlight } }
      >
        <CardContent className={ classes.content }>
          <Typography gutterBottom variant="h5" component="h2" className={ classes.title }>
            { shop.nome }
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={ classes.location }>
            { shop.location.join(', ') }
          </Typography>
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
      </CardActionArea>
    </Card>
  );
};

export default ShopsCard;
