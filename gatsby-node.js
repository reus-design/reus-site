const path = require('path')

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