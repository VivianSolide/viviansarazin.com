module.exports = {
  verbose: true,
  moduleFileExtensions: ['js', 'json', 'vue'],
  transform: {
    // process `*.vue` files with `vue-jest`
    '.*\\.(vue)$': 'vue-jest',
    '.*\\.(js)$': 'babel-jest',
  },
}
