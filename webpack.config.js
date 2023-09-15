/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

const path = require("path");
const HtmlBundlerPlugin = require("html-bundler-webpack-plugin");
const { Marked } = require("marked");

const isDev = process.env.NODE_ENV === "development";

module.exports = {
  mode: isDev ? "development" : "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, "css"),
        use: [
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, "css"),
        use: [
          {
            loader: "css-loader",
            options: {
              import: false, // disable @import at-rules handling
            }
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: {
                  tailwindcss: {},
                  autoprefixer: {},
                },
              },
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpe?g|ico)$/,
        type: "asset/resource",
        generator: {
          filename: "img/[name].[hash:8][ext]",
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name][ext]",
        },
      },
    ],
  },
  // enable HMR with live reload
  devServer: {
    port: 8000,
    open: false,
    static: {
      directory: path.join(__dirname, "dist"),
    },
    watchFiles: {
      // live reload: watch changes in source directories
      paths: ["pages/**/*.html", "templates/**/*.html", "css/*.scss", "scripts/*.js"],
      options: {
        usePolling: true,
      },
    },
  },
  plugins: [
    new HtmlBundlerPlugin({
      entry: "pages/",
      globals: {
        env: process.env
      },
      js: {
        filename: "scripts/[name].[contenthash:8].js",
      },
      css: {
        filename: "css/[name].[contenthash:8].css",
      },
      loaderOptions: {
        root: __dirname,
        preprocessor: 'nunjucks',
        preprocessorOptions: {
          views: [
            "pages",
            "templates",
          ],
          autoescape: true, // escape dangerous characters, defaults 'true'
        },
      },
    }),
  ],
};
