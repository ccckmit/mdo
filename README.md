<p align="center">
  <a href="https://travis-ci.org/feross/standard"><img src="https://img.shields.io/travis/feross/standard/master.svg" alt="Travis"></a>
  <a href="http://standardjs.com"><img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg" alt="Standard - JavaScript Style Guide"></a>
  <a href="https://www.npmjs.com/package/standard"><img src="https://img.shields.io/npm/dm/standard.svg" alt="npm downloads"></a>
  <a href="https://www.npmjs.com/package/standard"><img src="https://img.shields.io/npm/v/standard.svg" alt="npm version"></a>
</p>

# mdo -- Markdown Object (Parser)

## Install

```
$ npm install mdo
```

## Example

File: mdoTest.js

```
var fs = require("fs");
var M  = require("mdo");

var text  = fs.readFileSync("test.mdo", "utf8")
var obj = M.parseMdo(text);
console.log("json=%s", JSON.stringify(obj, null, 2));
```

Input: test.mdo

```
title: Markdown Object Parser
author: { id:"ccc",
  name: "Chung-Chen Chen",
  email: "ccckmit@gmail.com"
}
keywords: [ "Markdown", "Parser", "JSON", "Object", "markup"]
publish: 2017/01/10
version: 1.01

used_by: 
package  | description
---------|-------------------
bookdown | A book publishing system for markdown
rlab     | A scientific library like R+Matlab in JavaScript
```

## Run 

```
$ node mdoTest.js
json={
  "title": "Markdown Object Parser",
  "author": {
    "id": "ccc",
    "name": "Chung-Chen Chen",
    "email": "ccckmit@gmail.com"
  },
  "keywords": [
    "Markdown",
    "Parser",
    "JSON",
    "Object",
    "markup"
  ],
  "publish": "2017/01/10",
  "version": 1.01,
  "used_by": [
    {
      "package": "bookdown",
      "description": "A book publishing system for markdown"
    },
    {
      "package": "rlab",
      "description": "A scientific library like R+Matlab in JavaScript"
    }
  ]
}
```

## License

The mdo project is licensed in MIT license.

Copyright (c) 2013 mdo

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



