import React from 'react';

import Img from 'gatsby-image';

import SocialIcon from 'Components/SocialIcon';

import useStyles from 'Styles/components/articles/article';

export default ({ article }) => {
  const classes = useStyles();

  const hasSocial = !!(article.frontmatter.facebook || article.frontmatter.twitter || article.frontmatter.instagram);

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

      { hasSocial && (
        <>
          <h3 className={ classes.socialTitle }>Partilhe</h3>
          <ul className={ classes.socialList }>
            { !!article.frontmatter.facebook && (
              <li className={ classes.socialItem }>
                <SocialIcon
                  extraClasses={ { link: classes.socialLink } }
                  icon="faFacebookF"
                  link={ article.frontmatter.facebook }
                  title="Partilhar no Facebook"
                />
              </li>
            ) }

            { !!article.frontmatter.twitter && (
              <li className={ classes.socialItem }>
                <SocialIcon
                  extraClasses={ { link: classes.socialLink } }
                  icon="faTwitter"
                  link={ article.frontmatter.twitter }
                  title="Partilhar no Twitter"
                />
              </li>
            ) }

            { !!article.frontmatter.instragram && (
              <li className={ classes.socialItem }>
                <SocialIcon
                  extraClasses={ { link: classes.socialLink } }
                  icon="faInstagram"
                  link={ article.frontmatter.instagram }
                  title="Partilhar no Instagram"
                />
              </li>
            ) }
          </ul>
        </>
      ) }
    </div>
  );
};
