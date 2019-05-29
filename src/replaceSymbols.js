import replaceValueSymbols from "./replaceValueSymbols.js";

const replaceSymbols = (css, replacements) => {
  css.walk(node => {
    if (node.type === "decl" && node.value) {
      node.value = replaceValueSymbols(node.value, replacements);
    } else if (node.type === "rule" && node.selector) {
      node.selector = replaceValueSymbols(node.selector, replacements);
    } else if (
      node.type === "atrule" &&
      node.params &&
      ["media", "supports"].includes(node.name.toLowerCase())
    ) {
      node.params = replaceValueSymbols(node.params, replacements);
    }
  });
};

export default replaceSymbols;
