module.exports = {
  runtimeCompiler: true,
  transpileDependencies: ["vuetify"],
  devServer: {
    overlay: {
      warnings: false,
      errors: false,
    },
  },
  lintOnSave: false,
  configureWebpack: {
    devtool: "source-map",
    watchOptions: {
      poll: 5000,
      aggregateTimeout: 1000,
    },
  },
};
