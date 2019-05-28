const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

const container = path => {
  const firstSplit = path.split('/')
  return firstSplit[firstSplit.length - 2]
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({
      node,
      getNode,
      basePath: `${__dirname}`
    })
    createNodeField({
      node,
      name: 'slug',
      value: `/${container(node.fileAbsolutePath)}${slug}`
    })
  }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const articleTemplate = path.resolve(`src/templates/article.js`)

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              type
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const { fields } = node
      createPage({
        path: fields.slug,
        component: articleTemplate,
        context: {
          slug: fields.slug
        }
      })
    })
  })
}
