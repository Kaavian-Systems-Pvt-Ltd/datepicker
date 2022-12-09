const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },

//     'plugins' : [ new CleanWebpackPlugin () ] ,
//   'resolve' : {
//     'extensions' : [ '.js' , '.jsx' ]
//   } ,
      'module' : {
      'rules' : [ {
        'test' : /\.(js|jsx)$/ ,
        'exclude' : /node_modules/ ,
        'use' : [ 'babel-loader' ]
        }, 
        { 
        'test' : /\.(css|scss)$/ ,
        'use' : [ 'style-loader' , 'css-loader' ] ,
        'include' : path.resolve (__dirname , './src')
        }
      ]
    },


    module: {
        rules: [
            { 
                test: /\.(js|jsx)$/, 
                loader: 'babel-loader', 
                exclude: /node_modules/ 
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ] 
            },
        ]
    },
    devServer: {
        contentBase: './docs'
    }
};