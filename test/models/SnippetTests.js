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
var Snippet = require("../../lib/models/Snippet");
var SnippetType = require("../../lib/models/SnippetType")
var assert = require('assert');

/**
 * Suite for testing the Snippet class
 */
suite("Snippet", function() {

    /**
     * Suite for testing correct error behavior on construction
     */
    suite("Construction errors", function() {

        /**
         * Test for the correct error when constructing without value
         */
        test("Error on construction with undefined value", function() {
            assert.throws(
                function () {
                var testedSnippet = new Snippet();
                },
                function (err) {
                    if ( (err instanceof TypeError) && (err.message === "Snippet value needs to be defined") ) {
                        return true;
                    }
            })
        });

        /**
         * Test for the correct error when constructing without type
         */
        test("Error on construction with undefined type", function() {
            assert.throws(
                function () {
                    var testedSnippet = new Snippet("<||>");
                },
                function (err) {
                    if ( (err instanceof TypeError) && (err.message === "Snippet type needs to be defined") ) {
                        return true;
                    }
                })
        });

        /**
         * Test for the correct error when constructing with a wrong value type
         */
        test("Error on construction with wrong value type", function() {
            assert.throws(
                function () {
                    var testedSnippet = new Snippet(5, SnippetType.DYNAMIC);
                },
                function (err) {
                    if ( (err instanceof TypeError) && (err.message === "Snippet value expects a String") ) {
                        return true;
                    }
                })
        });

        /**
         * Test for the correct error when constructing with a wrong type type
         */
        test("Error on construction with wrong type type", function() {
            assert.throws(
                function () {
                    var testedSnippet = new Snippet('<| |>', 7);
                },
                function (err) {
                    if ( (err instanceof TypeError) && (err.message === "Snippet type expects a SnippetType") ) {
                        return true;
                    }
                })
        });

        /**
         * Test for correct behavior when constructing correctly
         */
        test("No errors on correct construction", function() {
            assert.doesNotThrow(function() {
                var testedSnippet = new Snippet('<| |>', SnippetType.DYNAMIC);
            });
        });
    });
});