/**
 * Returns name of a moment-timezone.js timezone id.
 *
 * This function strips away the continent from the input string, replaces
 * underscores with spaces and applies capitalization.
 *
 * @param {string} id The moment-timezone.js timezone id to parse.
 * @return {string} name 
 */
function nameParse(id) {
  if (typeof id !== "string") {
    throw "Expected `id` of type string, got type " + typeof id;
  }
  var name = id
    .split("/")[1]
    .replace("_", " ")
    .replace(/\b\w/g, c => c.toUpperCase());
  return name;
}

export { nameParse };
