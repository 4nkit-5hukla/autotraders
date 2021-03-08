module.exports = {
  siteMetadata: {
    title: `autoTRADER.ca`,
    description: `autoTRADER explores 2021 Toyota Sienna. See how it makes us #VanProud.`,
    author: `@AutoTrader`,
    siteUrl: `https://autotrader.ca/`,
  },
  pathPrefix: `/brandcampaign/toyota/sienna/en/`,
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-plugin-create-page-html`,
    /*
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-PQNJRK",
        includeInDevelopment: true,
      },
    },
    */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/article`,
        name: `article`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaultQuality: 90,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require('sass'),
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     //trackingId: `ADD YOUR TRACKING ID HERE`,
    //   },
    // },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `AutoTrader`,
        short_name: `AutoTrader`,
        start_url: `/`,
        background_color: `#e7f0f9`,
        theme_color: `#d7000c`,
        display: `standalone`,
        icon: `content/assets/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-netlify-cms`,
  ],
}
