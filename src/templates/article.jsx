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
      <SEO title={ article.frontmatter.title } location={ location } />
      <Article article={ article } />
    </PageWrapper>
  );
};

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        formattedDate: date(formatString: "DD/MM/YYYY")
        tags
        image {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        facebook
        twitter
        instagram
      }
    }
  }
`;
