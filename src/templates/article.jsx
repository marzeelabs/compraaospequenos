/* eslint-disable react/no-danger */
import React from 'react';
import { graphql } from 'gatsby';

import PageWrapper from 'Layouts/PageWrapper';
import SEO from 'Components/SEO';

export default ({ data, location }) => {
  const { markdownRemark: article } = data;

  return (
    <PageWrapper>
      <SEO title={ article.frontmatter.title } location={ location } />
      <div>
        <h1>{ article.frontmatter.title }</h1>
        <h2>{ article.frontmatter.formattedDate }</h2>
        <div>
          Posted in:
          <ul>
            { article.frontmatter.tags.map(tag => (
              <li key={ tag }>{ tag }</li>
            )) }
          </ul>
        </div>
        <div dangerouslySetInnerHTML={ { __html: article.html } } />
      </div>
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
      }
    }
  }
`;
