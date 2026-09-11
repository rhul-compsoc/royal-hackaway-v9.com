/* eslint-disable import/no-anonymous-default-export */
/** @type {import('prettier').Config} */
export default {
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
  semi: false,
  singleQuote: true,
  quoteProps: 'as-needed',
  trailingComma: 'all',
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'always',
  endOfLine: 'auto',
  overrides: [
    {
      files: ['*.json', '*.jsonc'],
      options: {
        printWidth: 80,
      },
    },
    {
      files: ['*.md'],
      options: {
        proseWrap: 'preserve',
      },
    },
  ],
  plugins: ['prettier-plugin-tailwindcss'],
}
