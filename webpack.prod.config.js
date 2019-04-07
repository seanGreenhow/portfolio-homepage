const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack")

module.exports = (env, argv) => {
  console.log(argv.mode)
  return ({
    entry: [
      '@babel/polyfill',
      './src'
    ],
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js',
    },
    watchOptions: {
      aggregateTimeout: 500,
      ignored: [/build/, /node_modules/]
    },
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
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          //"style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          //"style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
        ]
      },
      {
        test: /\.(ttf|otf|eot|woff|woff2)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/'
          }
        }]
      },
      {
        test: /\.(html|ico)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: '/'
          }
        }]
      },
      {
        test: /\.(png|jpg|jpeg)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'img/'
          }
        }]
      }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: "bundle.css",
        chunkFilename: "[id].css"
      }),
      argv.mode == "production" ? new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
      }) : false
    ],
    resolve: {
      extensions: ['.ts', '.js', '.tsx', '.jsx', '.json']
    },
    devtool: "source-map"
  })
}