/* eslint-disable react/no-danger */
import React from 'react';
import { graphql } from 'gatsby';

import Article from 'Components/Articles/Article';
import PageWrapper from 'Layouts/PageWrapper';
import SEO from 'Components/SEO';

export default ({ data, location }) => {
  const { markdownRemark: article } = data;

  return (
    <PageWrapper>
      <SEO
        description={ article.excerpt }
        image={ article.frontmatter.image.childImageSharp.fixed.src }
        location={ location }
        title={ article.frontmatter.title }
      />
      <Article
        article={ article }
        location={ location }
      />
    </PageWrapper>
  );
};

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      excerpt
      frontmatter {
        title
        formattedDate: date(formatString: "DD/MM/YYYY")
        tags
        image {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
            fixed(height: 630, width: 1200) {
              src
            }
          }
        }
      }
    }
  }
`;
