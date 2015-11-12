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
var Enum = require('enum');

/**
 * Enum that contains the different Snippet Types
 * DYNAMIC (1): nodejs code snippets which get executed before they are passed to the page output
 * STATIC (2): HTML, CSS, JS, etc. snippets which are passed to the page output unmodified
 */
var SnippetType = new Enum(['DYNAMIC', 'STATIC'],{ freez: true });


/*
 * Expositions
 */

module.exports = SnippetType; //Expose SnippetType