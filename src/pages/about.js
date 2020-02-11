import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

export default ({ data }) => {
  const {summary, line1, line2} = data.site.siteMetadata.userData.about;
  return (
    <Layout>
      <div id='about'>
        <p>{summary}</p>
        <p>{line1}</p>
        <p>{line2}</p>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        userData {
          about {
            summary,
            line1,
            line2
          }
        }
      }
    }
  }
`;