import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

export default () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          userData {
            about {
              summary,
              line1,
              line2
            }
          }
        }
      }
    `
  );

  const {summary, line1, line2} = data.site.userData.about;
  return (
    <div id='about'>
      <p>{summary}</p>
      <p>{line1}</p>
      <p>{line2}</p>
  </div>
  );
};