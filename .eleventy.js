// File: .eleventy.js

module.exports = function(eleventyConfig) {
  // Perintahkan Eleventy untuk mem-passthrough file CSS kita
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/img"); // Kita buat folder img untuk nanti

  return {
    dir: {
      input: "src",
      output: "docs", // Arahkan output ke folder 'docs' untuk GitHub Pages
      includes: "_includes" // Folder untuk template/layout
    },
    templateFormats: ["html", "md", "njk"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};