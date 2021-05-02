const path = require('path')
const webpack = require('webpack')
const dotenv = require('dotenv').config({
  path: path.join(__dirname, '.env'),
})
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

const isDevMode = process.env.NODE_ENV !== 'production'

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].[hash:8].bundle.js',
    path: path.resolve(__dirname, 'build'),
    clean: true,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: 'source-map',
  optimization: optimization(),
  devServer: {
    port: 9000,
    hot: isDevMode,
    open: true,
  },
  target: 'web',
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        use: jsLoaders(),
      },
      {
        test: /\.css$/,
        use: cssLoaders(),
      },
      {
        test: /\.(png|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'img/[name].[ext]',
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv.parsed),
    }),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      inject: 'body',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash:8].bundle.css',
    }),
    new CopyPlugin({
      patterns: ['public/favicon.png'],
    }),
  ],
}

function optimization() {
  const config = {}

  if (!isDevMode) {
    config.minimize = true
    config.minimizer = [new TerserPlugin(), new CssMinimizerPlugin()]
  }

  return config
}

function jsLoaders() {
  return [
    {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/env', '@babel/react'],
      },
    },
  ]
}

function cssLoaders() {
  const cssInjector = isDevMode
    ? 'style-loader'
    : {
        loader: MiniCssExtractPlugin.loader,
        options: {
          hmr: isDevMode,
          reloadAll: true,
        },
      }

  return [
    cssInjector,
    'css-loader',
    {
      loader: 'postcss-loader',
      options: {
        postcssOptions: {
          plugins: ['autoprefixer'],
        },
      },
    },
  ]
}
