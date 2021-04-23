const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

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
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      inject: 'body',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash:8].bundle.css',
      chunkFilename: '[id].[hash:8].css',
      ignoreOrder: false,
    }),
  ],
}

function jsLoaders() {
  return [
    {
      loader: 'babel-loader',
    },
  ]
}

function cssLoaders() {
  return [
    isDevMode ? 'style-loader' : MiniCssExtractPlugin.loader,
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
