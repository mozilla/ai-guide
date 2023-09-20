# Mozilla AI GUIDE

## Getting Started

This project is a Static webpage with HTML, CSS and JS. We use [Webpack](https://webpack.js.org/) to bundle everything to the `dist/` folder. This project also uses [Nunjucks Templates](https://mozilla.github.io/nunjucks/) to enable the use of templating in this project. To convert Nunjucks templates to HTML, we use the [html-bundler-webpack-plugin](https://github.com/webdiscus/html-bundler-webpack-plugin).

## Installation
These instruction assume you have NodeJS installed.

To build AI Guide from source and run the site locally, you can
clone the repo from GitHub:

```
npm install
```

Running `npm install` will install the NPM dependencies.

## Make it run

Build the site and start the web server with:

```
npm start
```

That will run the webpack dev server.

View the site at http://localhost:8000/

## Build static HTML files

```
npm run build
```

The Webpack will output all HTML files to a folder called `dist`.

## AI Guide-specific instructions
The AI Guide is hosted in this repo, and uses a slightly different Markdown-flavored templating system, but the same `npm` steps above. It also uses Tailwind for CSS and doesn't use Protocol.

Content for the guide is generated from Markdown files in `templates/ai/content` using scripts in `tools/`.
To generate fresh content:
`tools/build_ai_guide.sh`

Note that pages in `/pages/ai/content` should always be generated using the script above.

To run the server:
`tools/build_ai_guide.sh`
`npx tailwindcss -w` 
`npm run start`

Go to `/index.html`

## Folder Hierarchy  

All Nunjucks files are either located in the `templates/` folder or the `pages/` folder.
The `templates/` folder contains base templates that can be `extended`, or partials, which can be `included` in the files in the `pages/` folder.

The `pages/` folder contains the Nunjucks files which will be compiled to HTML and used on the MIECO site.


## Deploy

Branches in the pull request queue will be given a demo server by Netlify. The bot will comment on the PR with the link.

The `main` branch is automatically deployed to the staging server https://mozilla-ai-guide.netlify.app/

To deploy to production push the main branch to the production branch.

```
git push origin main:prod
```
