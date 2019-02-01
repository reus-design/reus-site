module.exports = {
  siteMetadata: {
    title: `Reus Design`,
    description: `UI Library for React`,
    author: `@muhrusdi`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-mdx',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `components`,
        path: `${__dirname}/src/data/mdx`,
      },
    },
    `gatsby-transformer-sharp`,
    'gatsby-transformer-remark',
    'gatsby-plugin-remove-trailing-slashes',
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `reus-design`,
        short_name: `reus`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/reus-favicon.png`,
      },
    },
    // 'gatsby-plugin-offline',
  ],
}
