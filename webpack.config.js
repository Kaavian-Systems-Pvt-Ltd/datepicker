module.exports = {

  devtool: "",
  entry: [
      'webpack-hot-middleware/client',
      path.join(path.resolve(__dirname), 'client', 'client.js')
  ],
  output: {
      path: path.join(path.resolve(__dirname), 'public', 'js'),
      filename: 'bundle.js',
      publicPath: '/js/'
  },
  module: {
      loaders: [
      {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
          cacheDirectory: 'babel_cache',
        presets: debug ? ['es2015', 'react'] :  ['react', 'es2015']
      }
      },
    {
      test: /\.css$/,
      exclude: /node_modules/,
      loader: 'style-loader!css-loader',
    }, {
      test: /\.css$/,
      include: /node_modules/,
      loaders: ['style-loader', 'css-loader'],
    }     
      ]
  },
}