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

var SnippetType = require('./SnippetType');

/**
 * Model class for holding data of a Snippet
 * @param value {String} Snippet value as String
 * @param value {SnippetType} The type of the snippet (DYNAMIC or STATIC)
 */
var snippet = function (value, type) {

    if (value === undefined) {
        throw new TypeError("Snippet value needs to be defined", 1);
    }

    if (type === undefined) {
        throw new TypeError("Snippet type needs to be defined", 2);
    }

    if (!((typeof value) === "string")) {
        throw new TypeError("Snippet value expects a String", 3);
    }

    if (SnippetType.enums.indexOf(type) === -1) {
        throw new TypeError("Snippet type expects a SnippetType", 4);
    }

    /**
     * Property which contains the Snippet value
     * @type {String}
     * @private
     */
    var value = value;

    /**
     * Property which contains the Snippet type
     * @type {SnippetType}
     * @private
     */
    var type = type;

    this.getValue = function () {
        return value;
    }

    this.getType = function() {
        return type;
    }
}

/*
 * Expositions
 */

module.exports = snippet; //Expose Snippet