const Image = require("@11ty/eleventy-img");

module.exports = function(eleventyConfig) {
  eleventyConfig.addJavaScriptFunction("myImage", function(src, alt, options) {
    // returns Promise
    return Image(src, options);
  });
};

module.exports = function(eleventyConfig) {
    // This will copy these folders to the output without modifying them at all
    eleventyConfig.addPassthroughCopy("assets");
  }