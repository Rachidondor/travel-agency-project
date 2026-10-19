const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
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
        test: /\.html$/,
        use: ['html-loader'] // معالجة ملفات الـ HTML وجلب الصور منها
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource', // نقل الصور وتحسين اسمها ومكانها في dist
        generator: {
          filename: './images/[name][ext]'
        }
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
      template: './src/index.html'  // هنا تم استخدام قالب الـ HTML
    }),
    new HtmlWebpackPlugin({
      filename: 'travel1.html',
      template: './src/travel1.html'  // هنا تم استخدام قالب الـ HTML
    }),
    new HtmlWebpackPlugin({
      filename: 'travel2.html',
      template: './src/travel2.html'  // هنا تم استخدام قالب الـ HTML
    }),
    new HtmlWebpackPlugin({
      filename: 'signin.html',
      template: './src/signin.html'  // هنا تم استخدام قالب الـ HTML
    }),
    new HtmlWebpackPlugin({
      filename: 'signup.html',
      template: './src/signup.html'  // هنا تم استخدام قالب الـ HTML
    }),
    new MiniCssExtractPlugin({
      filename: 'css/style.css'
    })
  ],
};