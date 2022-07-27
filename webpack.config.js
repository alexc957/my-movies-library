// Generated using webpack-cli https://github.com/webpack/webpack-cli
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");
const webpack = require('webpack'); 
const fs = require('fs'); // to check if the file exists
const dotenv = require('dotenv');
const isProduction = process.env.NODE_ENV == "production";
const enviroment = process.env.NODE_ENV || "development";

const stylesHandler = "style-loader";

const config = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/"
  },
  devServer: {
    open: true,
    host: "localhost",
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
    //new webpack.DefinePlugin({ S:3})

  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: "ts-loader",
        exclude: ["/node_modules/"],
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, "css-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },
      
    

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", "..."],
  },
};

module.exports = () => {

  //const currentPath = path.join(__dirname)
  const basePath = path.join(__dirname,'.env');

  const envPath = basePath+"."+enviroment;
  const finalPath = fs.existsSync(envPath) ? envPath : basePath;
  const fileEnv = dotenv.config({path: finalPath}).parsed;

  const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
    return prev;
  }, {});

  config.plugins.push(
    new webpack.DefinePlugin(envKeys)
  )

  if (isProduction) {
    config.mode = "production";

    config.plugins.push(new WorkboxWebpackPlugin.GenerateSW());
  } else {
    config.mode = "development";
  }
  return config;
};
