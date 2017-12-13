const path = require('path')

module.exports = {
  entry: './src/modules/moduleHandler.js',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: [
          /node_modules/,
          /angular-electron/
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: 'moduleHandler.js',
    path: path.resolve(__dirname, '')
  },
  //workaround
  //suppress can't resolve fs error
  //https://github.com/josephsavona/valuable/issues/9#issuecomment-257203966
  target: 'node'
};