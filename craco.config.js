const CracoAlias = require('craco-alias');

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        tsConfigPath: 'tsconfig.paths.json',
      },
    },
  ],
  babel: {
    presets: [['@babel/preset-react', { runtime: 'automatic', importSource: '@emotion/react' }]],
    plugins: [
      require.resolve('babel-plugin-twin'),
      require.resolve('babel-plugin-macros'),
      require.resolve('@emotion/babel-plugin'),
    ],
  },
};
