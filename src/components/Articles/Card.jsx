import React from 'react';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import Img from 'gatsby-image';
import { Link } from 'gatsby';

import useStyles from 'Styles/components/articles/card';

const ArticleCard = ({ data }) => {
  const classes = useStyles();

  return (
    <Card
      className={ classes.root }
      elevation={ 0 }
    >
      <Link to={ data.fields.slug }>
        <Img
          className={ classes.media }
          fluid={ data.frontmatter.image.childImageSharp.fluid }
        />
      </Link>

      <CardContent>
        <Typography
          className={ classes.tag }
          component={ Link }
          to={ data.fields.slug }
        >
          { data.frontmatter.tags.join(', ') }
        </Typography>

        <Typography
          className={ classes.title }
          component={ Link }
          to={ data.fields.slug }
        >
          { data.frontmatter.title }
        </Typography>

        <Typography
          className={ classes.date }
          component={ Link }
          to={ data.fields.slug }
        >
          { data.frontmatter.formattedDate }
        </Typography>

        <Typography
          className={ classes.excerpt }
          component={ Link }
          to={ data.fields.slug }
        >
          { data.excerpt }
        </Typography>
      </CardContent>

      <CardActions className={ classes.actions }>
        <Link to={ data.fields.slug } className={ classes.link }>
          Ler mais
        </Link>
      </CardActions>
    </Card>
  );
};

export default ArticleCard;
