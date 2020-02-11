import React from 'react';
import Header from '../components/header';
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
    <>
      <Header></Header>
      <div id="apps">
        <div className="apps-grid">
          {grid}
        </div>
      </div>
    </>
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