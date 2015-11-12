var pageInterpreter = require("../../lib/interpreters/pageInterpreter");
var assert = require('assert');

suite("pageInterpreter", function() {
    suite("interpretation", function() {
        test("file interpretation", function (done) {
            var filePath = "test/resources/testFile.njssp";

            var testedPageInterpreter = new pageInterpreter();

            testedPageInterpreter.interpretFile(filePath, function (result) {
                assert.equal(result, "<html><head></head><body>Testtext</body></html>");
                done();
            });
        });

    });
});