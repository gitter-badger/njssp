/*
 * License

 * This software is distributed under MIT License

 Copyright (c) 2015 DevWurm

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 */

/*
 * Module dependencies
 */
var PageInterpreter = require("../../lib/interpreters/PageInterpreter");
var assert = require('assert');

/**
 * Suite for testing the PageInterpreter class
 */
suite("PageInterpreter", function() {

    /**
     * Suite for testing if the error, when calling the interpreter with a wrong file path, is thrown correctly
     */
    suite("Error behavior", function() {
        test("Error when giving a wrong file path to PageInterpreter.interpretFile", function(done) {
            var testedPageInterpreter = new PageInterpreter();

            assert.throws(
                function() {
                    testedPageInterpreter.interpretFile("../resources/nonPresentFile.njssp", function(data) {
                        done();
                    });
                },
                function(err) {
                    if ( (err instanceof Error) && (err.errno === "ENOENT") ) {
                        return true;
                    }
                }
            );
        });
    });

    /**
     * Suite for testing the interpretation functions of the PageInterpreter class
     */
    suite("Interpretation", function() {

        /**
         * Test of interpreting a String
         */
        test("String interpretation", function (done) {
            var string = "<html><head></head><body><|Snippet.out('Testtext')|></body></html>";

            var testedPageInterpreter = new PageInterpreter();

            testedPageInterpreter.interpret(string, function (result) {
                assert.equal(result, "<html><head></head><body>Testtext</body></html>");
                done();
            });
        });

        /**
         * Test of interpreting a file
         */
        test("File interpretation", function (done) {
            var filePath = "test/resources/testFile.njssp";

            var testedPageInterpreter = new PageInterpreter();

            testedPageInterpreter.interpretFile(filePath, function (result) {
                assert.equal(result, "<html><head></head><body>Testtext</body></html>");
                done();
            });
        });

    });
});