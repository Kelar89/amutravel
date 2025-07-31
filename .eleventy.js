// File: .eleventy.js (Versi baru)
const { pathPrefix } = require("./src/_data/metadata.json");

module.exports = function(eleventyConfig) {
  // Perintahkan Eleventy untuk mem-passthrough file CSS & img
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/img");

  return {
    // Set pathPrefix agar semua URL aset menjadi benar
    pathPrefix: pathPrefix,
    dir: {
      input: "src",
      output: "docs",
      includes: "_includes"
    },
    templateFormats: ["html", "md", "njk"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};