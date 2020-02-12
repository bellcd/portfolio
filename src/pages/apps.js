import React from 'react';
import Layout from '../components/layout';
import Card from '../components/card';
import { graphql } from 'gatsby';

export default ({ data }) => {
  const { apps } = data.allDataJson.edges[0].node;

  const grid = apps.map((card, i) => {
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

export const query = graphql`
  query MyQuery {
    allDataJson {
      edges {
        node {
          apps {
            title
            description
            externalUrl
            imagePath
            altTagText
          }
        }
      }
    }
  }
`;


// // TODO: quite WET ...
// export const query = graphql`
//   query {
//     site {
//       siteMetadata {
//         userData {
//           apps {
//             flexAndTransition {
//               title,
//               description,
//               externalUrl,
//               imagePath,
//               altTagText,
//             },
//             robinHoodStockDetailPageClone {
//               title,
//               description,
//               externalUrl,
//               imagePath,
//               altTagText,
//             },
//             faceDetection {
//               title,
//               description,
//               externalUrl,
//               imagePath,
//               altTagText,
//             },
//             ticTacToe {
//               title,
//               description,
//               externalUrl,
//               imagePath,
//               altTagText,
//             },
//             whatShouldIEat {
//               title,
//               description,
//               externalUrl,
//               imagePath,
//               altTagText,
//             },
//             javaScriptCalculator {
//               title,
//               description,
//               externalUrl,
//               imagePath,
//               altTagText,
//             },
//             randomUserGenerator {
//               title,
//               description,
//               externalUrl,
//               imagePath,
//               altTagText,
//             },
//             spicesImageMap {
//               title,
//               description,
//               externalUrl,
//               imagePath,
//               altTagText,
//             },
//             gradientBackgroundGenerator {
//               title,
//               description,
//               externalUrl,
//               imagePath,
//               altTagText,
//             },
//             theOtisBuilding {
//               title,
//               description,
//               externalUrl,
//               imagePath,
//               altTagText,
//             }
//           }
//         }
//       }
//     }
//   }
// `;