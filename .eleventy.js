// File: .eleventy.js (Dengan filter tanggal yang sudah diperbaiki)
const { pathPrefix } = require("./src/_data/metadata.json");

module.exports = function(eleventyConfig) {
  // Perintahkan Eleventy untuk mem-passthrough file CSS & img
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/img");

  // Filter kustom untuk URL Encode
  eleventyConfig.addFilter("url_encode", function(str) {
    return encodeURIComponent(str);
  });

  // Filter Tanggal ke ISO (VERSI BARU YANG LEBIH BAIK)
  eleventyConfig.addFilter("dateStringToISO", function(dateString) {
    if (!dateString) return '';
    const parts = dateString.split(" ");
    if (parts.length !== 3) return dateString;

    const day = parts[0].padStart(2, '0');
    const monthNames = {
      "Januari": "01", "Februari": "02", "Maret": "03", 
      "April": "04", "Mei": "05", "Juni": "06", 
      "Juli": "07", "Agustus": "08", "September": "09", 
      "Oktober": "10", "November": "11", "Desember": "12"
    };
    const month = monthNames[parts[1]];
    const year = parts[2];

    if (!month) return dateString;

    // Mengembalikan format YYYY-MM-DD
    return `${year}-${month}-${day}`;
  });

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