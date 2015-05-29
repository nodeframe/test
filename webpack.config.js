module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.jade$/, loader: "jade" },
            { test: /\.less$/, loader: "style!css!less" },
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    resolve:{
        alias:{
            'angular':'bower_components/angular/angular.min.js'
        }
    }
};