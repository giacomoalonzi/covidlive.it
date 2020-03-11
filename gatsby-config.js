module.exports = {
  siteMetadata: {
    title: `🦠COVIDLIVE`,
    description: `La situazione in Italia in tempo reale.`,
    author: `@giacomo.alonzi`,
    siteUrl: 'https://covidlive.it'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-flow`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Covidlive.it`,
        short_name: `Covidlive.it`,
        start_url: `/`,
        background_color: `#b9bfca`,
        theme_color: `#3e73dd`,
        display: `standalone`,
        icon: `src/assets/images/icon.jpg`,
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
          "@Services": "src/services",
          "@Types": "src/types",
          "@Contexts": "src/contexts",
          "@Reducers": "src/reducers",
          "@Actions": "src/actions",
          "@Core": "src/core",
        },
        extensions: ["js"],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-56138240-7",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "covidlive.it",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
