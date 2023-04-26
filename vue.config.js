module.exports = {
  publicPath: '/newjeans/',
  outputDir: 'dist',
  assetsDir: 'static',
  indexPath: 'index.html',
  filenameHashing: true,
  devServer: {
    historyApiFallback: {
      rewrites: [
        { from: /^\/newjeanst/, to: '/newjeans/index.html' },
        { from: /./, to: '/newjeans/index.html' },
      ],
    },
  },
};
