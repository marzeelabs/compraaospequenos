import React from 'react';

import Img from 'gatsby-image';

import SocialIcon from 'Components/SocialIcon';

import useStyles from 'Styles/components/articles/article';

export default ({ article }) => {
  const classes = useStyles();

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
            link="#"
            title="Share on Facebook"
          />
        </li>
        <li className={ classes.socialItem }>
          <SocialIcon
            extraClasses={ { link: classes.socialLink } }
            icon="faTwitter"
            link="#"
            title="Share on Twitter"
          />
        </li>
        <li className={ classes.socialItem }>
          <SocialIcon
            extraClasses={ { link: classes.socialLink } }
            icon="faInstagram"
            link="#"
            title="Share on Instagram"
          />
        </li>
      </ul>
    </div>
  );
};
