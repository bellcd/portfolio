/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

// TODO: how to handle embedded links in these?
// TODO: better name for the apps key ...
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'data',
        path: `${__dirname}/src/data`,
        ignore: [`**/\.*`]
      }
    },
    'gatsby-transformer-json'
  ],
  siteMetadata: {
    title: `Christian Bell's Portfolio`,
    userData: {
      about: {
        summary: `Percussionist >>> Marketer >>> Web Developer`,
        line1: `I have a unique background (certainly unique for a web developer!). I bring that background along with all the hard and soft skills I’ve learned along the way to each and every new project I’m involved with.`,
        line2: `It’s better if the project makes a real, positive impact on someone's life. Even better if it’s a big impact. If you have a real, big, positive impact project on lots of people’s lives ... well, congratulations! You have a unicorn project, and I’d love to help.`
      }
    }
  }
};