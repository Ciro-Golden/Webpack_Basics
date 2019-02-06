const path = require("path");

module.exports = {
  mode: "development",
  //   entry: "./src/client.js"  >>> Single
  // entry: ["./src/client.js", "./src/server.js"] >>> Multiple
  entry: {
    client: "./src/client.js",
    server: "./src/server.js"
  },
  output: {
    // The "path" propert is used to specify the location
    // where our bundle files are output. By default, it
    // is path.join(__dirname, "dist")
    path: path.join(__dirname, "build"),
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|webp|svg)$/,
        loader: "file-loader",
        options: {
          outputPath: "images/"
        }
      }
    ]
  }
};
