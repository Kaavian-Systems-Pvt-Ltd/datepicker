module.export = {
module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }
      },
    ]
  },
  "module": {
    "rules": [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
     
    ]
    }
    
  }
  
