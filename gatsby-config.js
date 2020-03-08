module.exports = {
  siteMetadata: {
    title: `covidlive.it`,
    description: `covidlive.it`,
    author: `@giacomo.alonzi`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-flow`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@Src": "src",
          "@Components": "src/components",
          "@Layouts": "src/layouts",
          "@Pages": "src/pages",
          "@Assets": "src/assets",
          "@Services": "content/services",
          "@Types": "content/types",
          "@Contexts": "content/contexts",
          "@Reducers": "content/reducers",
          "@Actions": "content/actions",
        },
        extensions: [
          "js",
        ],
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
