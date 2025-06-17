module.exports = {
  root: true,
  extends: ['@react-native', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react-native/no-inline-styles': 'warn',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
