module.exports = {
  siteMetadata: {
    title: `BBarbour`,
    description: `Brian is a self taught Front End Developer that creates fast and responsive modern sites using Javascript.`,
    author: `Brian Barbour`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-yaml`,
      options: {
        typeName: 'info'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./content/data/`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: []
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/articles`,
        name: 'articles'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/projects`,
        name: 'projects'
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        maxWidth: 800,
        quality: 100,
        tracedSVG: true
      }
    }
  ]
}
