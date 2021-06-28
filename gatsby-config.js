/**
 * If you are working in VS Code on Linux you might
 * run into this error:
 * "Error: ENOSPC: System limit for numb  er of file watchers reached"
 * 
 * To fix this, run following command in terminal:
 * echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
 */

module.exports = {
  siteMetadata: {
    title: `Ember Music Collective`,
    description: `Ember Music Collective is a cultural hotspot for upcoming music in Aarhus, DK`,
    author: `LasseKrarup`,
    emberDate: "4. september 12:00-24:00",
    address: "Tage Hansens Gade 2a, 9"
  },
  plugins: [
    // Metadata https://www.gatsbyjs.com/plugins/gatsby-plugin-react-helmet/
    `gatsby-plugin-react-helmet`,

    // Source plugins. the "name" option translates to
    // sourceInstanceName parameter of file nodes in GraphQL
    { // Keep images first for gatsby-remark-images support
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },

    // Transformers
    'gatsby-transformer-json',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          // Fixes relative paths in NetlifyCMS created image paths
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1536,
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              withWebp: {quality: 100},
              quality: 100
            },
          },
        ],
      },
    },

    // Sharp image plugin
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    "gatsby-plugin-image",

    // PWA manifest and Favicon stuff
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ember-music-colelctive`,
        short_name: `ember`,
        start_url: `/`,
        background_color: `#D0D8D1`,
        theme_color: `#D0D8D1`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,

    "gatsby-plugin-postcss",

    // NetlifyCMS - keep this last in the array
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        /**
         * One convention is to place your Netlify CMS customization code in a
         * `src/cms` directory.
         */
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
  ],
}
