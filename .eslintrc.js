module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["next/core-web-vitals"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    quotes: ["error", "double"],
    "jsx-quotes": ["error", "prefer-double"],
    "eol-last": "off",
    "lines-around-directive": "off",
    "no-trailing-spaces": "warn",
    "react/jsx-curly-brace-presence": "off",
    "react/button-has-type": "off",
  },
};
