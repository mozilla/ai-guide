var nunjucks = require('nunjucks'),
    markdown = require('nunjucks-markdown'),
    marked = require('marked');

var env = nunjucks.configure('templates');

// The second argument can be any function that renders markdown
markdown.register(env, marked);