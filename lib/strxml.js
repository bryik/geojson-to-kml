// Source: https://github.com/mapbox/strxml

/**
 * @param {array} _ an array of attributes
 * @returns {string}
 */
export function attr(_) {
  return _ && _.length
    ? " " +
        _.map(function(a) {
          return a[0] + '="' + a[1] + '"';
        }).join(" ")
    : "";
}

/**
 * @param {string} el element name
 * @param {array} attributes array of pairs
 * @returns {string}
 */
export function tagClose(el, attributes) {
  return "<" + el + attr(attributes) + "/>";
}

/**
 * @param {string} el element name
 * @param {string} contents innerXML
 * @param {array} attributes array of pairs
 * @returns {string}
 */
export function tag(el, contents, attributes) {
  return "<" + el + attr(attributes) + ">" + contents + "</" + el + ">";
}

/**
 * @param {string} _ a string of attribute
 * @returns {string}
 */
export function encode(_) {
  return (_ === null ? "" : _.toString())
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
