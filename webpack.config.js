const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  module: {
    
    /*loaders: [{
      test: /\.jsx$/,
      loader: 'babel'
    }, {
      test: /\.css$/, 
      loader: 'style!css'
    }],*/
    rules: [
      
        {test: /\.js$/, use: 'babel-loader'},
        {test: /\.css$/, use: [{ loader: 'style-loader' },
        {
          loader: 'css-loader',
          options: {
            modules: true,
          },
        },
        ]},
        {exclude: /node_modules/},
        
        /*test: [
          /\.js$/,
          /\.css$/,
        ],
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'style-loader',
          }
          
        ],*/
      
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
  ],
};