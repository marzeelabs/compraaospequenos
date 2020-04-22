import React, { useEffect } from 'react';

import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image/withIEPolyfill';
import { tns } from 'tiny-slider/src/tiny-slider';

import Typography from '@material-ui/core/Typography';

import Section from 'Layouts/Section';

import useStyles from 'Styles/components/mediaCoverage';
import 'tiny-slider/src/tiny-slider.scss';
import './MediaCoverage.scss';
import featured from '../data/featured.json';

const MediaCoverage = () => {
  const classes = useStyles();

  const data = useStaticQuery(graphql`
    query {
      publico: file(relativePath: { eq: "publico_2020-03-19.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      observador: file(relativePath: { eq: "observador_2020-03-24.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      jornalDeNegocios: file(relativePath: { eq: "negocios_2020-03-18.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      jornalEconomico: file(relativePath: { eq: "economico_2020-03-19.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      dinheiroVivo: file(relativePath: { eq: "dinheiro-vivo_2020-03-18.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  useEffect(() => {
    const containerSelector = '.media-coverage-slider';
    const container = document.querySelector(containerSelector);

    if (container) {
      tns({
        container: containerSelector,
        gutter: 20,
        controlsPosition: 'top',
        controlsText: [ '', '' ],
        navPosition: 'bottom',
        arrowKeys: true,
        loop: false,
        mouseDrag: true,
        responsive: {
          320: {
            items: 1,
          },
          768: {
            items: 2,
            slideBy: 2,
          },
          1024: {
            items: 3,
            slideBy: 3,
          },
        },
      });
    }
  }, []);

  return (
    <Section extraClasses={ classes }>
      <Typography variant="h4" marked="center" className={ classes.title }>
        Onde falam de nós
      </Typography>

      <div className={ classes.sliderWrapper }>
        <div className="media-coverage-slider">
          { Object.keys(featured).map(article => (
            <div key={ `${article}-wrapper` }>
              <a href={ featured[article].url } target="_blank" rel="noopener noreferrer" label="publico" className={ classes.slide } key={ `${article}-link` }>
                <Img fluid={ data[article].childImageSharp.fluid } className={ classes.image } objectFit="cover" />
                <Typography variant="h4" marked="center" className={ classes.subtitle }>
                  { featured[article].title }
                </Typography>
                <Typography variant="body1" className={ classes.siteName }>
                  { featured[article].siteName }
                </Typography>
              </a>
            </div>
          )) }
        </div>
      </div>
    </Section>
  );
};

export default MediaCoverage;
