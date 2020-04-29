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
      <Img
        className={ classes.media }
        fluid={ data.frontmatter.image.childImageSharp.fluid }
      />

      <CardContent>
        <Typography className={ classes.tag } component="p">
          { ` ${data.frontmatter.tags}` }
        </Typography>
        <Typography className={ classes.title } component="h2">
          { data.frontmatter.title }
        </Typography>
        <Typography className={ classes.date } component="p">
          { data.frontmatter.formattedDate }
        </Typography>

        <Typography className={ classes.excerpt } component="p">
          { data.excerpt }
        </Typography>
      </CardContent>

      <CardActions className={ classes.actions }>
        <Link to={ data.fields.slug } className={ classes.link }>
          Read More
        </Link>
      </CardActions>
    </Card>
  );
};

export default ArticleCard;
