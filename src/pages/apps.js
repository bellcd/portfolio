import React from 'react';
import Layout from '../components/layout';
// import Header from '../components/header';
import Card from '../components/card';

import { graphql } from 'gatsby';

export default ({ data }) => {
  const arr = [];
  const appData = data.site.siteMetadata.userData.apps
  for (let key in appData) {
    arr.push(appData[key]);
  }

  const grid = arr.map((card, i) => {
    return <Card key={i} card={card}></Card>;
  });
  return (
    <Layout>
      <div id="apps">
        <div className="apps-grid">
          {grid}
        </div>
      </div>
    </Layout>
  );
}

// TODO: quite WET ...
export const query = graphql`
  query {
    site {
      siteMetadata {
        userData {
          apps {
            flexAndTransition {
              title,
              description,
              externalUrl,
              imagePath,
              altTagText,
            },
            robinHoodStockDetailPageClone {
              title,
              description,
              externalUrl,
              imagePath,
              altTagText,
            },
            faceDetection {
              title,
              description,
              externalUrl,
              imagePath,
              altTagText,
            },
            ticTacToe {
              title,
              description,
              externalUrl,
              imagePath,
              altTagText,
            },
            whatShouldIEat {
              title,
              description,
              externalUrl,
              imagePath,
              altTagText,
            },
            javaScriptCalculator {
              title,
              description,
              externalUrl,
              imagePath,
              altTagText,
            },
            randomUserGenerator {
              title,
              description,
              externalUrl,
              imagePath,
              altTagText,
            },
            spicesImageMap {
              title,
              description,
              externalUrl,
              imagePath,
              altTagText,
            },
            gradientBackgroundGenerator {
              title,
              description,
              externalUrl,
              imagePath,
              altTagText,
            },
            theOtisBuilding {
              title,
              description,
              externalUrl,
              imagePath,
              altTagText,
            }
          }
        }
      }
    }
  }
`;