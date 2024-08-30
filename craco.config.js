module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      const svgRuleIndex = webpackConfig.module.rules.findIndex((rule) =>
        rule.test && rule.test.toString().includes('svg')
      );

      if (svgRuleIndex >= 0) {
        webpackConfig.module.rules[svgRuleIndex] = {
          test: /\.svg$/,
          use: [
            {
              loader: '@svgr/webpack',
              options: {
                svgo: false, // Disable SVGO optimizations if necessary
              },
            },
            'file-loader',
          ],
        };
      }

      return webpackConfig;
    },
  },
};
