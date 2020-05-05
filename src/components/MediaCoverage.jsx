import React, { useEffect, useRef } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { tns } from 'tiny-slider/src/tiny-slider';

import Img from 'gatsby-image/withIEPolyfill';
import Typography from '@material-ui/core/Typography';

import featured from 'Data/featured.json';

import Section from 'Layouts/Section';

import useStyles from 'Styles/components/mediaCoverage';
import 'tiny-slider/src/tiny-slider.scss';
import './MediaCoverage.scss';

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

  const container = useRef(null);

  useEffect(() => {
    if (!container.current || !container.current.parentNode) {
      return () => {};
    }

    const slideshow = document.querySelector('.media-coverage-slider');

    if (!slideshow) {
      return () => {};
    }

    const slider = tns({
      container: slideshow,
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

    return () => {
      slider.destroy();
    };
  }, [ container ]);

  return (
    <Section extraClasses={ classes }>
      <Typography variant="h4" marked="center" className={ classes.title }>
        Onde falam de nós
      </Typography>

      <div className={ classes.sliderWrapper }>
        <div className="media-coverage-slider" ref={ container }>
          { Object.keys(featured).map(article => (
            <div key={ `${article}-wrapper` }>
              <a href={ featured[article].url } target="_blank" rel="noopener noreferrer" label={ article } className={ classes.slide } key={ `${article}-link` }>
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
