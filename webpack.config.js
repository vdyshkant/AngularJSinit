
//////////////////
// WEBPACK
///////////

//- базовы модуль nodeJS, обеспечивающий кроссплатформенность.
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const pug = require('./webpack/pug');
const devserver = require('./webpack/devserver');

//- объект с 2мя свойствами: где исходные файлы будут лежать и где результат работы webpack;
const PATHS = {
  source: path.join(__dirname, 'source'),
  build: path.join(__dirname, 'build')
};

//-
const common = merge([
  {
    // точка входа нашего приложения:
    // точкой входа могут быть только те модули, которые не исползуются другими модулям и нашего приложения
    // entry: PATHS.source + '/index.js', // этот модуль использует модуль menu, но сам не используется никаким другим модулем.
    entry: {
      'index': PATHS.source + '/pages/index/index.js'
    },

    // описывает имена файлов и директорию - результат работы webpack
    output: {
      path: PATHS.build,
      filename: '[name].js' // [name] - в него автоматически будут подставляться имена точек входа нашего приложения.
    },
    // Здесь перечисляются плагины, которые кастомизируют процесс сборки webpack.
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        chunks: ['index'],
        template: PATHS.source + '/pages/index/index.pug'
      })
    ],
  },
  pug()
])



module.exports = function(env){
  if (env === 'production'){
    return common;
  }
  if (env === 'development'){
    return merge([
      common,
      devserver()
    ])
  }
};
