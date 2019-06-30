module.exports = {
  siteMetadata: {
    title: `Brian Barbour`,
    description: `Brian is a Fullstack Developer that creates fast and responsive modern sites using Javascript.`,
    author: `Brian Barbour`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-transformer-yaml`,
      options: {
        typeName: 'projects'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./content/data/`
      }
    },
    {
      resolve: 'gatsby-source-dev',
      options: {
        username: 'steelvoltage'
      }
    }
  ]
}
