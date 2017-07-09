var _ = require("lodash");
var fs = require("fs");
var path = require("path");

var WEBSITE_TPL = _.template(fs.readFileSync(path.resolve(__dirname, "./assets/website.html")));
var EBOOK_TPL = _.template(fs.readFileSync(path.resolve(__dirname, "./assets/ebook.html")));

module.exports = {
    hooks: {
      page: function(page) {
          console.log(page);
          return page;
      }
    }
};
