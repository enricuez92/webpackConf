const dotEnv = require('dotenv-webpack')
const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const sassResourcesLoader = require('sass-resources-loader')
const extractLoader = require('extract-loader')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const glob = require('glob')
// require('postcss.config.js')

const workingPath = process.cwd()
const resourcesPath = `${workingPath}/src/resources`
const stylesPath = `${workingPath}/src/styles`
const scriptsPath = `${workingPath}/src/scripts`

console.log(process.env.NODE_ENV)

module.exports = {
  entry: {
    main: [
      'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
      './src/scripts/index.js',
      './src/styles/style.scss'
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'scripts/[name].js',
    chunkFilename: 'scripts/[id].js'
  },
  mode: 'development',
  target: 'web',
  devtool: '#source-map',
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          emitWarning: true,
          failOnError: false,
          failOnWarning: false
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        },
      },
      {
        // Loads the javacript into html template provided.
        // Entry point is set below in HtmlWebPackPlugin in Plugins 
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            //options: { minimize: true }
          }
        ]
      },
      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader'
          },
          {
            loader: 'extract-loader'
          },
          {
            loader: 'css-loader?-url'
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                require('autoprefixer')(),
                require('cssnano')({
                  preset: ['default', {
                    discardComments: {
                      removeAll: true
                    },
                    normalizeWhitespace: false
                  }]
                })
              ]
            }
          }, 
          {
            loader: 'sass-loader'
          },
          {
            loader: 'sass-resources-loader',
            options: {
              // These SCSS sources will be imported into every required SCSS file.
              // This prevents the manual importing of configuration files in every SCSS file.
              // See: https://github.com/shakacode/sass-resources-loader
              resources: `${stylesPath}/**/config.scss`
            }
          }
        ]
      },
      {
        test: /\.jpe?g$|\.ico$|\.gif$|\.png$|\.wav$|\.mp3$/,
        use:
        {
          loader: 'file-loader',
          options: {
            emitFile: true,
            name: '[name].[ext]', // <-- retain original file name
            publicPath: './resources',
            outputPath: 'resources/'
          }
        }
      },
      {
        test: /\.svg(\?.*)?$/, // This will match example.svg example.svg?param=value
        use: [
          {
            // This loader will base64 encode and inline SVGs smaller then the limit below.
            // Any other larger files won't be processed or bundled and will get their path fixed for AEM.
            loader: 'url-loader',
            options: {
              limit: 8000,
              emitFile: true,
              name: '[name].[ext]',
              publicPath: '../fonts',
              outputPath: 'fonts/'
            }
          },
          'svg-transform-loader'
        ]
      },
      {
        // Files catched by this regular expression won't be processed or bundled and will get their path fixed for AEM.
        test: /\.otf$/,
        loader: 'file-loader',
        options: {
          limit: 8000,
          emitFile: true,
          name: '[name].[ext]',
          publicPath: '../fonts',
          outputPath: 'fonts/'
        }
      },
      {
        // Files catched by this regular expression won't be processed or bundled and will get their path fixed for AEM.
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader?mimetype=application/font-woff",
            options: {
              limit: 8000,
              emitFile: true,
              name: '[name].[ext]',
              publicPath: '../fonts',
              outputPath: 'fonts/'
            }
          }
        ]
      },
      {
        // Files catched by this regular expression won't be processed or bundled and will get their path fixed for AEM.
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader?mimetype=application/font-woff",
            options: {
              limit: 8000,
              emitFile: true,
              name: '[name].[ext]',
              publicPath: '../fonts',
              outputPath: 'fonts/'
            }
          }
        ]
      },
      {
        // Files catched by this regular expression won't be processed or bundled and will get their path fixed for AEM.
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader?mimetype=application/octet-stream",
            options: {
              limit: 8000,
              emitFile: true,
              name: '[name].[ext]',
              publicPath: '../fonts',
              outputPath: 'fonts/'
            }
          }
        ]
      },
      {
        // Files catched by this regular expression won't be processed or bundled and will get their path fixed for AEM.
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              limit: 8000,
              emitFile: true,
              name: '[name].[ext]',
              publicPath: '../fonts',
              outputPath: 'fonts/'
            }
          }
        ]
      },
      {
        test: /\.kml$/,
        use: [
          {
            loader: 'file-loader?mimetype=application/vnd.google-earth.kml+xml',
            options: {
              limit: 8000,
              emitFile: true,
              name: '[name].[ext]',
              outputPath: 'kml/'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/html/index.html",
      filename: "./index.html",
      excludeChunks: ['server']
    }),
    new MiniCssExtractPlugin({
      publicPath: './',
      filename: 'styles/[name].css',
      chunkFilename: 'styles/[id].css'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new dotEnv({
      path: `${workingPath}/.env`
    })
  ],
  resolve: {
    alias: {
      '@resources': resourcesPath,
      '@global-styles': stylesPath,
      '@global-scripts': scriptsPath
    },
    extensions: [
      '.js',
      '.jsx',
      '.scss'
    ]
  },
  watch: true,
  stats: 'minimal'
}