module.exports = {
  verbose: true,
  moduleFileExtensions: ['js', 'json', 'vue', 'png', 'jpg', 'jpeg'],
  transform: {
    '.*\\.(vue)$': 'vue-jest',
    '.*\\.(js)$': 'babel-jest',
    '.*\\.(png|jpg|jpeg)$': 'vue-file-loader',
  },
}
