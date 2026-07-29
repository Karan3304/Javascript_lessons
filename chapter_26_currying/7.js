// Currying: build a URL piece by piece, one part at a time
function buildURL(protocol) {
  return function(domain) {
    return function(path) {
      return `${protocol}://${domain}/${path}`;
    };
  };
}

console.log(buildURL("https")("example.com")("about")); 
// https://example.com/about


// Partial application: fix the domain, reuse it for many paths
function buildURLx(domain) {
  return function(protocol, path) {
    return `${protocol}://${domain}/${path}`;
  };
}

const myDomain = buildURLx("example.com"); // domain locked in
console.log(myDomain("https", "about"));   // https://example.com/about
console.log(myDomain("https", "contact")); // https://example.com/contact