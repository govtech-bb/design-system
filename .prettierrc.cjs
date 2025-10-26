/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
module.exports = {
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  printWidth: 100,
  plugins: ['@ianvs/prettier-plugin-sort-imports'],
  importOrder: ['<BUILTIN_MODULES>', '^react(.*)', '<THIRD_PARTY_MODULES>', '^[.]'],
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
};
