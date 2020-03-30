import React from 'react';
import { node, shape, string } from 'prop-types';
import clsx from 'clsx';

import Container from '@material-ui/core/Container';

import useStyles from 'Styles/layouts/section';

const Section = ({
  className,
  children,
  extraClasses,
  WrapperComponent,
}) => {
  const classes = useStyles();

  return (
    <WrapperComponent className={ clsx(classes.root, extraClasses.root, className) }>
      <Container className={ clsx(classes.container, extraClasses.container) }>
        { children }
      </Container>
    </WrapperComponent>
  );
};

Section.propTypes = {
  className: string,
  extraClasses: shape({}),
  WrapperComponent: node,
};

Section.defaultProps = {
  className: '',
  extraClasses: {},
  WrapperComponent: 'section',
};

export default Section;
