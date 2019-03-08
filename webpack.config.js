const path = require("path");

module.exports = {
	entry: {
		app: "./src/main.js"
	},
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist")
	},
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		compress: true,
		port: 8080
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: "babel-loader",
				exclude: "/node_modules/"
			}
		]
	}
};