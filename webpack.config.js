module.exports = {
  entry: [
    "zone.js",
    "traceur-runtime",
    "reflect-metadata",
    "rtts_assert/rtts_assert",
    "angular2/angular2",
    "ionic/ionic",
    "./www/app/app.js" // your app entry
  ],
  output: {
    path: __dirname + "/www",
    filename: "build/js/app.bundle.js",
    //pathinfo: true // show module paths in the bundle, handy for debugging
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "awesome-typescript-loader?doTypeCheck=false&useBabel=true&useWebpackText=true",
        include: /app\//
      },
      { test: /\.ts$/, loader: "awesome-typescript-loader", include: /app\// }
    ]
  },
  resolve: {
    modulesDirectories: [
      "node_modules",
      "node_modules/ionic-framework/src/es5/common", // ionic-framework npm package (stable)
      "node_modules/ionic-framework/node_modules" // angular is a dependency of ionic

      //"node_modules/ionic2/dist/src/es5/common", // driftyco/ionic2 github repo (master)
      //"node_modules/ionic2/node_modules"
    ],
    extensions: ["", ".js", ".ts"]
  }
};
