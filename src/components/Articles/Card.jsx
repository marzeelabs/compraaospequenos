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
    height: 250,
  },
});

const ArticleCard = ({ data }) => {
  const classes = useStyles();

  return (
    <Card className={ classes.root }>
      <Img className={ classes.media } fluid={ data.frontmatter.image.childImageSharp.fluid } />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          { data.frontmatter.title }
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          { data.frontmatter.formattedDate }
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Posted in:
          { ' ' }
          { data.frontmatter.tags }
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          { data.excerpt }
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={ data.fields.slug }>
          Read More
        </Link>
      </CardActions>
    </Card>
  );
};

export default ArticleCard;
