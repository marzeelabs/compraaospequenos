import React from 'react';

import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

import SocialIcon from 'Components/SocialIcon';

import useStyles from 'Styles/components/articles/article';

export default ({ article, location }) => {
  const classes = useStyles();

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteUrl
          }
        }
      }
    `,
  );

  const title = encodeURIComponent(article.frontmatter.title);
  const url = encodeURIComponent(`${site.siteMetadata.siteUrl}${location.pathname}`);

  const urls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?t=${title}&u=${url}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&title=${title}&url=${url}`,
    twitter: `https://twitter.com/intent/tweet?text=${title}%20${url}`,
  };

  return (
    <div className={ classes.wrapper }>
      <h1 className={ classes.title }>{ article.frontmatter.title }</h1>
      <h2 className={ classes.date }>{ article.frontmatter.formattedDate }</h2>

      <Img className={ classes.hero } fluid={ article.frontmatter.image.childImageSharp.fluid } />

      { /* eslint-disable-next-line react/no-danger */ }
      <div className={ classes.copy } dangerouslySetInnerHTML={ { __html: article.html } } />
      <div className={ classes.tags }>
        <ul className={ classes.tagsList }>
          { article.frontmatter.tags.map(tag => (
            <li className={ classes.tag } key={ tag }>{ tag }</li>
          )) }
        </ul>
      </div>

      <h3 className={ classes.socialTitle }>Partilhe</h3>
      <ul className={ classes.socialList }>
        <li className={ classes.socialItem }>
          <SocialIcon
            extraClasses={ { link: classes.socialLink } }
            icon="faFacebookF"
            link={ urls.facebook }
            title="Partilhar no Facebook"
          />
        </li>

        <li className={ classes.socialItem }>
          <SocialIcon
            extraClasses={ { link: classes.socialLink } }
            icon="faLinkedinIn"
            link={ urls.linkedin }
            title="Partilhar no LinkedIn"
          />
        </li>

        <li className={ classes.socialItem }>
          <SocialIcon
            extraClasses={ { link: classes.socialLink } }
            icon="faTwitter"
            link={ urls.twitter }
            title="Partilhar no Twitter"
          />
        </li>
      </ul>
    </div>
  );
};
