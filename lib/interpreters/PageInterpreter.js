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
var fs = require('fs');

/**
 * @callback resultCallback
 *
 * @param result    {String}    the resulting page after interpretation
 */

/**
 * Class:PageInterpreter
 * constructs an interpreter class to interpret a njssp File or String
 * @constructor
 */
var PageInterpreter = function () {

    /**
     * Asynchronously read and interpret an njssp File
     * @param filePath     {String}             the path of the file which should be interpreted
     * @param callback     {resultCallback}     the callback which is executed after interpreting the file
     */
    this.interpretFile = function (filePath, callback) {
        fs.readFile(filePath, {}, function (err, data) {
            if (err) {
                throw err;
            } else {
                this.interpret(data, callback); // pass file content to interpretation method
            }
        }.bind(this));
    }

    /**
     * Interpret an njssp page
     * @param page         {String}             the page which should be interpreted as string
     * @param callback     {resultCallback}     the callback which is executed after interpreting the file
     */
    this.interpret = function (page, callback) {
        /*TODO
        * Insert interpretation logic*/
    }
}


/*
 * Expositions
 */

module.exports = PageInterpreter; //Expose PageInterpreter

