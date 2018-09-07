var assert = require('assert');
var isSameDomain = require('../lib/url-utils').isSameDomain;

describe('isSameDomain()', function() {
    var links = [
        "http://example.com/",
        "http://example.com/",
        "http://example.com/hello",
        "https://example.com/hello",
        "http://microsoft.org/",
        ""
    ];

    it('should equate URLs with same domain', function() {
        assert.ok(isSameDomain(links[0], links[0]), "Same URL matches");
        assert.ok(isSameDomain(links[0], links[1]), "Identical URL matches");
        assert.ok(isSameDomain(links[0], links[2]), "URLs from same domain match");
        assert.ok(isSameDomain(links[0], links[3]), "same domain, different protocol matches");
    });

    it("shouldn't match different domains", function() {
        assert.ok(!isSameDomain(links[0], links[4]), "different domains");
    });
});
