module.exports = function(){
  return {
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel?optional[]=runtime'
        }
      ]
    }
  }
};
