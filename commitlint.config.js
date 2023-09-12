/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  extends: '@commitlint/config-conventional',
  rules: {
    feat: 'error',
    'scope-empty': 'warn',
    'footer-patterns': ['[BREAKING]']
  }
}

// export commit
