// eslint-disable-next-line @typescript-eslint/no-var-requires
const monacoWebpackPlugin = require(`monaco-editor-webpack-plugin`);

module.exports = {
  configureWebpack: {
    // eslint-disable-next-line new-cap
    plugins: [new monacoWebpackPlugin()],
  },
};
