module.exports = {
    extends: 'next/core-web-vitals',
    rules: {
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'react/no-unescaped-entities': 'off',
      '@next/next/no-img-element': 'warn', // zmena z 'error' na 'warn'
      'jsx-a11y/alt-text': 'warn' // zmena z 'error' na 'warn'
    }
  }