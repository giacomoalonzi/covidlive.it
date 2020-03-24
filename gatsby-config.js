require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}` || ".env",
})
// config
module.exports = {
  siteMetadata: {
    title: `Covid Live: la situazione in tempo reale`,
    description: `Tutti i dati aggiornati sulla diffusione di Covid-19 in Italia`,
    author: `@giacomo.alonzi`,
    siteUrl: "https://covidlive.it",
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

    `gatsby-plugin-typescript`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/data/lang`,
        languages: [`en`, `it`],
        defaultLanguage: `it`,
        redirect: false,
      },
    },
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
        },
        extensions: ["js"],
      },
    },
    // {
    //   resolve: "gatsby-plugin-zeit-now",
    //   options: {
    //     globalHeaders: {
    //       "referrer-policy": "same-origin",
    //       "feature-policy": "geolocation 'self'; microphone 'self'; camera 'self'",
    //       "expect-ct": "max-age=604800, enforce",
    //       "strict-transport-security": "max-age=31536000; includeSubDomains",
    //       "x-frame-options": "DENY",
    //       "x-xss-protection": "1; mode=block",
    //       "x-content-type-options": "nosniff",
    //       "x-download-options": "noopen",
    //     },
    //   },
    // },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: process.env.GOOGLE_ANALYTICS,
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
