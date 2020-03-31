import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Img from 'gatsby-image';

import useStyles from 'Styles/layouts/sectionBackground';

const SectionBackground = ({ image }) => {
  const classes = useStyles();

  const images = useStaticQuery(graphql`
    query {
      homeBg: file(relativePath: { eq: "bg_3.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 2250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      shopsBg: file(relativePath: { eq: "bg_1.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 2250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      registerBg: file(relativePath: { eq: "bg_2.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 2250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Img
      className={ classes.background }
      fluid={ images[image].childImageSharp.fluid }
      style={ { position: 'absolute' } }
    />
  );
};

export default SectionBackground;
