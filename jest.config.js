module.exports = {
  preset: '@nuxt/test-utils',
  collectCoverageFrom: [
    '<rootDir>/module.js',
    '<rootDir>/components/lib/**/*.vue',
    '<rootDir>/plugins/**/*.js',
    '<rootDir>/store/**/*.js',
  ],

}
