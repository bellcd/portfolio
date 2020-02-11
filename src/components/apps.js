import React from 'react';
import Card from './card';

import { useStaticQuery, graphql } from 'gatsby';

export default () => {
  // TODO: quite WET ...
  const data = useStaticQuery(
    graphql`
      query {
        site {
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
    `
  );

  const arr = [];
  const appData = data.site.userData.apps
  for (let key in appData) {
    arr.push(appData[key]);
  }


  const grid = arr.map((card, i) => {
    return <Card key={i} card={card}></Card>;
  });
  return (
    <div id="apps">
      <div className="apps-grid">
        {grid}
      </div>
    </div>
  );
}