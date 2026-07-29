module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("hero.webp");
  eleventyConfig.addPassthroughCopy("index.html");
  return {
    dir: {
      input: ".",
      output: "_site",
      data: "_data"
    }
  };
};
