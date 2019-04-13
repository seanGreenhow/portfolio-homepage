const path = require('path');
const webpack = require("webpack")
const nodeExternals = require('webpack-node-externals');

module.exports = (env, argv) => {
  let plugins = []
  if (argv.mode == "production") plugins.push(new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production')
  }))

  return ({
    entry: [
      './srv'
    ],
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'server.js',
      library: 'app',
      libraryTarget: 'commonjs2'
    },
    target: 'node',
    externals: [nodeExternals()],
    watchOptions: {
      aggregateTimeout: 500,
      ignored: [/build/, /node_modules/]
    },
    plugins,
    module: {
      rules: [{
        test: /\.jsx?$/,
        use: [
          'babel-loader'
        ],
        exclude: '/node_modules/'
      },
      {
        test: /\.tsx?$/,
        use: [
          'babel-loader',
          'ts-loader'
        ],
        exclude: '/node_modules/'
      },
      {
        test: /\.(s?css|ttf|otf|eot|woff2?|html|ico|png|jpe?g)$/,
        use: ["null-loader"]
      }
      ]
    },
    resolve: {
      extensions: ['.ts', '.js', '.tsx', '.jsx', '.json']
    }
  })
}