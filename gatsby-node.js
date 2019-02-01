const path = require('path')
const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateBabelConfig = ({ actions, stage }) => {
  actions.setBabelPreset({
    name: `@emotion/babel-preset-css-prop`,
    options: {
      sourceMap: process.env.NODE_ENV !== `production`,
      autoLabel: false
    },
  })
}

exports.onCreateWebpackConfig = ({
  stage, getConfig, rules, loaders, actions
 }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /bad-module/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
  actions.setWebpackConfig({
    resolve: {
      alias: {
        Components: path.resolve(__dirname, 'src/components/'),
        Containers: path.resolve(__dirname, 'src/containers/'),
        Contexts: path.resolve(__dirname, 'src/contexts'),
        Images: path.resolve(__dirname, 'src/images/'),
        Actions: path.resolve(__dirname, 'src/redux/actions'),
        Services: path.resolve(__dirname, 'src/services'),
        Store: path.resolve(__dirname, 'src/store.js'),
        Reducers: path.resolve(__dirname, 'src/redux/reducers'),
        Types: path.resolve(__dirname, 'src/redux/types')
      }
    }
  })
}

exports.createPages = ({graphql, actions}) => {
  const { createPage, createRedirect } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      query {
        allMdx {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
              headings {
                value
                depth
              }
            }
          }
        }
      } 
    `).then(result => {
      if (result.errors) {
        reject(result.errors)
      }
      createPage({
        path: 'docs/',
        component: path.resolve('./src/templates/docs.jsx'),
        context: {
          slug: 'docs/introduce/'
        }
      })

      result.data.allMdx.edges.forEach(({node}) => {
        const { slug } = node.fields
        createPage({
          path: slug,
          component: path.resolve('./src/templates/docs.jsx'),
          context: {
            slug
          }
        })
        resolve()
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode })
    const headings = []
    console.log(node)
    createNodeField({
      name: "slug",
      node,
      value: `docs${value}`
    });
  }
}