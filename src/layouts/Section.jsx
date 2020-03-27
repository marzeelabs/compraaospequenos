import React from 'react';
import { node, shape, string } from 'prop-types';
import clsx from 'clsx';

import Container from '@material-ui/core/Container';

import withClasses from 'Styles/layouts/section';

const Section = ({
  children,
  classes,
  extraClasses,
  innerContainerClassName,
  outerContainerClassName,
  WrapperComponent,
}) => (
  <WrapperComponent className={ clsx(classes.root, extraClasses.root, outerContainerClassName) }>
    <Container
      className={ clsx(classes.container, extraClasses.container, innerContainerClassName) }
    >
      { children }
    </Container>
  </WrapperComponent>
);

Section.propTypes = {
  extraClasses: shape({}),
  innerContainerClassName: string,
  outerContainerClassName: string,
  WrapperComponent: node,
};

Section.defaultProps = {
  extraClasses: {},
  innerContainerClassName: '',
  outerContainerClassName: '',
  WrapperComponent: 'section',
};

export default withClasses(Section);
