const React = require ('react');
const { ThemeProvider } = require('theme-ui');
const {swiss} = require('@theme-ui/presets');
const {Provider} = require("./netlifyIdentifyContext");

const newTheme = {
  ...swiss,
  sizes: { container: 1024 }
};

module.exports = ({element }) => (
  <ThemeProvider theme={newTheme}>{element}</ThemeProvider>
);