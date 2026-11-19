import { load as loadYaml } from "js-yaml";

const MONTHS = ["January", "February", "March", "April", "May", "June", "July",
  "August", "September", "October", "November", "December"];

export default function (eleventyConfig) {
  // Content lives in src/_data/*.yaml so it can be edited in the GitHub web UI.
  eleventyConfig.addDataExtension("yaml,yml", (contents) => loadYaml(contents));

  eleventyConfig.addPassthroughCopy("src/assets/js");
  eleventyConfig.addPassthroughCopy("src/assets/img");
  eleventyConfig.addPassthroughCopy("src/data");
  eleventyConfig.addPassthroughCopy("src/CNAME");
  eleventyConfig.addPassthroughCopy({ "src/assets/img/favicon.ico": "favicon.ico" });

  // "2025-06-20" -> "June 20, 2025" (parsed as a calendar date, no timezone shift).
  eleventyConfig.addFilter("readableDate", (value) => {
    const [y, m, d] = String(value instanceof Date ? value.toISOString() : value)
      .slice(0, 10).split("-").map(Number);
    return `${MONTHS[m - 1]} ${d}, ${y}`;
  });

  // Same behaviour as Django's |linebreaksbr: escape, then newlines -> <br>.
  eleventyConfig.addFilter("linebreaksbr", (value) => {
    const escaped = String(value ?? "")
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    return escaped.trim().replace(/\r?\n/g, "<br>");
  });

  // Newest first, by a date-like field.
  eleventyConfig.addFilter("sortByDesc", (items, key) =>
    [...(items || [])].sort((a, b) => String(b[key]).localeCompare(String(a[key]))));

  eleventyConfig.addFilter("activeOnly", (items) => (items || []).filter((i) => i.active));

  eleventyConfig.watchIgnores.add("_site/assets/css/**");

  return {
    dir: { input: "src", output: "_site", includes: "_includes", data: "_data" },
    templateFormats: ["njk"],
    htmlTemplateEngine: "njk",
  };
}
