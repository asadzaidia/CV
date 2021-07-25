const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              hack: `true; @import "./src/styles/theme.less";`,
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
