module.exports = {
  extends: [
    '@nuxtjs/eslint-config-typescript'
  ],
  rules: {
    'import/prefer-default-export': 'off', // Prefer named exports where possible
    'vue/multi-word-component-names': 'off' // Single word components are fine
  },
  env: {
    browser: true,
    node: true
  }
}
