const { override, fixBabelImports, addLessLoader } = require('customize-cra')

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@primary-color': '#EE3143',
      '@font-family-no-number': 'Rubik, Helvetica, Arial, sans-serif',
      '@font-family': 'Rubik, @font-family-no-number',
    },
  })
)
