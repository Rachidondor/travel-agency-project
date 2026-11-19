const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const path = require('path');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    entry: './src/index.js',
    mode: isProduction ? 'production' : 'development',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
      static: {
        directory: path.join(__dirname, 'src'),
      },
      port: 8080,
      open: true,
    },
    module: {
      rules: [
        // 1. قاعدة للتعامل مع ملفات JS كـ ES Modules
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          type: 'javascript/auto',
        },
        {
          test: /\.html$/i,
          use: 'html-loader',
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
          type: 'asset/resource', // نقل الصور وتحسين اسمها ومكانها في dist
          generator: {
            filename: './images/[name][ext]',
          },
        },
        {
          test: /\.(s[ac]ss|css)$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'], // هنا تم استخدام حزم الـ CSS
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './src/index.html', // هنا تم استخدام قالب الـ HTML
      }),
      new HtmlWebpackPlugin({
        filename: 'travel1.html',
        template: './src/travel1.html', // هنا تم استخدام قالب الـ HTML
      }),
      new HtmlWebpackPlugin({
        filename: 'travel2.html',
        template: './src/travel2.html', // هنا تم استخدام قالب الـ HTML
      }),
      new HtmlWebpackPlugin({
        filename: 'signin.html',
        template: './src/signin.html', // هنا تم استخدام قالب الـ HTML
      }),
      new HtmlWebpackPlugin({
        filename: 'signup.html',
        template: './src/signup.html', // هنا تم استخدام قالب الـ HTML
      }),
      new HtmlWebpackPlugin({
        filename: 'password.html',
        template: './src/password.html', // هنا تم استخدام قالب الـ HTML
      }),
      new MiniCssExtractPlugin({
        filename: 'css/style.css',
      }),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
      }),
    ],
    optimization: {
      minimize: isProduction,
      minimizer: [
        new CssMinimizerPlugin(),
        ...(isProduction
          ? [
              new ImageMinimizerPlugin({
                minimizer: {
                  implementation: ImageMinimizerPlugin.sharpMinify,
                  options: {
                    encodeOptions: {
                      webp: {
                        quality: 77,
                      },
                    },
                  },
                },
              }),
            ]
          : []),
      ],
    },
  };
};