import React from 'react';

import Grid from '@material-ui/core/Grid';

import Section from 'Layouts/Section';

import useStyles from 'Styles/components/articles/articles';

import ArticleCard from './Card';

const Articles = ({ articles }) => {
  const classes = useStyles();

  return (
    <Section extraClasses={ classes }>
      <h1 className={ classes.listTitle }>Dicas e Ferramentas</h1>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        className="articles-list__wrapper"
      >
        { articles.filter(article => article.templateKey !== 'gatsbysource').map(({ node: article }) => (
          <Grid
            className={ classes.card }
            key={ `article-${article.frontmatter.title}` }
          >
            <ArticleCard data={ article } />
          </Grid>
        )) }
      </Grid>
    </Section>
  );
};

export default Articles;
