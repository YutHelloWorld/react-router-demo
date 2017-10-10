module.exports = {
  entry: './portal.js',
  output: {
    filename: 'bundle.js',
  },
  module: {
    rules: [
      { test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                'env',
                'react'
              ],
              plugins: [
                'transform-object-rest-spread',
                'transform-class-properties'
              ]
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 8192,
        },
      },
      {
        test: /\.css$/,
        use: [{
          loader: 'style-loader' // 将 JS 字符串生成为 style 节点
        }, {
          loader: 'css-loader' // 将 CSS 转化成 CommonJS 模块
        }]
      }
    ]
  }
}
