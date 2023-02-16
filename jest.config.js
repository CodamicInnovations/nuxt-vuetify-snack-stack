module.exports = {
  preset: '@nuxt/test-utils',
  collectCoverageFrom: [
    '<rootDir>/module.ts',
    '<rootDir>/components/**/*.vue',
    '<rootDir>/plugins/**/*.ts',
    '<rootDir>/store/**/*.ts',
  ],

}
