import React from 'react';

import { graphql } from 'gatsby';

import SEO from 'Components/SEO';
import PageWrapper from 'Layouts/PageWrapper';
import Articles from 'Components/Articles/Articles';

export default ({ data, location }) => {
  const { edges: articles } = data.allMarkdownRemark;

  return (
    <PageWrapper>
      <SEO title="Articles" location={ location } />
      <Articles articles={ articles } />
    </PageWrapper>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: {
        frontmatter: {
          templateKey: {eq: "article"},
        },
      },
      sort: {
        fields: frontmatter___date,
        order: DESC
      }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            tags
            formattedDate: date(formatString: "DD/MM/YYYY")
            image {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`;
