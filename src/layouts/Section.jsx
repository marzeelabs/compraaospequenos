import React from 'react';
import { node, shape } from 'prop-types';
import clsx from 'clsx';

import Container from '@material-ui/core/Container';

import withClasses from 'Styles/layouts/section';

const Section = ({
  children,
  classes,
  extraClasses,
  WrapperComponent,
}) => (
  <WrapperComponent className={ clsx(classes.root, extraClasses.root) }>
    <Container className={ clsx(classes.container, extraClasses.container) }>
      { children }
    </Container>
  </WrapperComponent>
);

Section.propTypes = {
  extraClasses: shape({}),
  WrapperComponent: node,
};

Section.defaultProps = {
  extraClasses: {},
  WrapperComponent: 'section',
};

export default withClasses(Section);
