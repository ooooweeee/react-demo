module.exports = {
  module: {
    rules: [
      {
        test: /\.m?jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(c|le)ss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'less-loader']
      }
    ]
  }
};
