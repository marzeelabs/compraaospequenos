import React from 'react';
import clsx from 'clsx';

import Fab from '@material-ui/core/Fab';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as icons from '@fortawesome/free-brands-svg-icons';

import withClasses from 'Styles/components/socialIcon';

const SocialIcon = ({
  classes,
  extraClasses,
  icon,
  link,
  title,
}) => (
  <Fab
    className={ clsx(classes.link, extraClasses.link) }
    component="a"
    href={ link }
    title={ title }
    target="_blank"
    rel="noopener noreferrer"
  >
    <FontAwesomeIcon
      className={ clsx(classes.icon, extraClasses.icon) }
      icon={ icons[icon] }
    />
  </Fab>
);

export default withClasses(SocialIcon);
