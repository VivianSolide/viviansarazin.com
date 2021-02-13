module.exports = {
  verbose: true,
  moduleFileExtensions: ['js', 'json', 'vue', 'png'],
  transform: {
    // process `*.vue` files with `vue-jest`
    '.*\\.(vue)$': 'vue-jest',
    '.*\\.(js)$': 'babel-jest',
    '.*\\.(png)$': 'vue-file-loader',
  },
}
