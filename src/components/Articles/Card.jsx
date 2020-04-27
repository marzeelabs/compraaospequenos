import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import Img from 'gatsby-image';
import { Link } from 'gatsby';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  media: {
    height: 265,
  },
});

const ArticleCard = ({ data }) => {
  const classes = useStyles();

  return (
    <Card className={ classes.root }>
      <Img className={ classes.media } fluid={ data.frontmatter.image.childImageSharp.fluid } />
      <CardContent>
        <Typography className="article-card__tag" component="p">
          { ' ' }
          { data.frontmatter.tags }
        </Typography>
        <Typography className="article-card__title" component="h2">
          { data.frontmatter.title }
        </Typography>
        <Typography className="article-card__date" component="p">
          { data.frontmatter.formattedDate }
        </Typography>

        <Typography className="article-card__excerpt" component="p">
          { data.excerpt }
        </Typography>
      </CardContent>
      <CardActions className="article-card__link__wrapper">
        <Link to={ data.fields.slug } className="article-card__link">
          Read More
        </Link>
      </CardActions>
    </Card>
  );
};

export default ArticleCard;
