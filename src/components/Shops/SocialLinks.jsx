import React from 'react';
import { string } from 'prop-types';

import Typography from '@material-ui/core/Typography';

import SocialIcon from 'Components/SocialIcon';

import useStyles from 'Styles/components/shops/socialLinks';

const ShopsSocialLinks = ({ name, facebook, instagram }) => {
  const classes = useStyles();

  const linkFacebook = facebook && facebook.trim()
    .replace(/^(http:\/\/)?/i, '')
    .replace(/^(https:\/\/)?/i, '')
    .replace(/^(www\.)?/i, '')
    .replace(/^facebook\.com/i, '')
    .replace(/^\//, '');

  const linkInstagram = instagram && instagram.trim()
    .replace(/^(http:\/\/)?/i, '')
    .replace(/^(https:\/\/)?/i, '')
    .replace(/^(www\.)?/i, '')
    .replace(/^instagram\.com/i, '')
    .replace(/^\//, '');

  const hasFacebook = !!linkFacebook;
  const hasInstagram = !!linkInstagram;

  return (hasFacebook || hasInstagram) && (
    <Typography component="p" className={ classes.wrapper }>
      { hasFacebook && (
        <SocialIcon
          extraClasses={ classes }
          icon="faFacebookF"
          link={ `https://www.facebook.com/${linkFacebook}` }
          title={ `Facebook page for ${name}` }
        />
      ) }

      { hasInstagram && (
        <SocialIcon
          extraClasses={ classes }
          icon="faInstagram"
          link={ `https://www.instagram.com/${linkInstagram}` }
          title={ `Instagram page for ${name}` }
        />
      ) }
    </Typography>
  );
};

ShopsSocialLinks.propTypes = {
  name: string.isRequired,
  facebook: string,
  instagram: string,
};

ShopsSocialLinks.defaultProps = {
  facebook: '',
  instagram: '',
};

export default ShopsSocialLinks;
