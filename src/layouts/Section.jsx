import React from 'react';
import { node, shape, string } from 'prop-types';
import clsx from 'clsx';

import Container from '@material-ui/core/Container';

import useStyles from 'Styles/layouts/section';

const Section = ({
  children,
  extraClasses,
  innerContainerClassName,
  outerContainerClassName,
  WrapperComponent,
}) => {
  const classes = useStyles();

  return (
    <WrapperComponent className={ clsx(classes.root, extraClasses.root, outerContainerClassName) }>
      <Container
        className={ clsx(classes.container, extraClasses.container, innerContainerClassName) }
      >
        { children }
      </Container>
    </WrapperComponent>
  );
};

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

export default Section;
