const { buildSync, transformSync } = require("esbuild");
/**
 * @typedef {import('@11ty/eleventy/src/UserConfig')} EleventyConfig
 * @typedef {ReturnType<import('@11ty/eleventy/src/defaultConfig')>} EleventyReturnValue
 * @type {(eleventyConfig: EleventyConfig) => EleventyReturnValue}
 */
module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./*.css"); // this was autocompleted
  buildSync({
    entryPoints: ["./src/data/site.ts"],
    outdir: "./src/_data",
    bundle: false,
    loader: { ".ts": "ts" },
    format: "cjs",
  });
  return {
    dir: {
      input: ".",
      output: "_site",
      data: "./src/_data",
    },
  };
};
