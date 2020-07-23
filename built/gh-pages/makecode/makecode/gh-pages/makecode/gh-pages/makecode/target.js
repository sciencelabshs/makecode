var pxtTargetBundle = {
  "id": "buildbeemakecode",
  "name": "buildbeemakecode",
  "title": "BuildBee | MakeCode",
  "corepkg": "core",
  "cloud": {
    "workspace": false,
    "packages": true
  },
  "bundleddirs": [
    "libs/core"
  ],
  "runtime": {
    "mathBlocks": true,
    "loopsBlocks": true,
    "logicBlocks": true,
    "variablesBlocks": true,
    "textBlocks": false,
    "functionBlocks": false,
    "listsBlocks": false,
    "onStartUnDeletable": true
  },
  "blockColors": {
    "loops": "#20BF6B",
    "logic": "#45AAF2",
    "math": "#A55EEA",
    "variables": "#EC3B59",
    "text": "#F5D547",
    "arrays": "#FF8F08",
    "functions": "#1446A0"
  },
  "simulator": {
    "autoRun": true,
    "aspectRatio": 4
  },
  "appTheme": {
    "logoUrl": "https://github.com/Microsoft/pxt-sample",
    "homeUrl": "/makecode/",
    "privacyUrl": "https://go.microsoft.com/fwlink/?LinkId=521839",
    "termsOfUseUrl": "https://go.microsoft.com/fwlink/?LinkID=206977",
    "betaUrl": "https://makecode.com/",
    "docMenu": [
      {
        "name": "About",
        "path": "/makecode/docs/about"
      },
      {
        "name": "Docs",
        "path": "/makecode/docs/docs"
      }
    ],
    "coloredToolbox": true,
    "monacoToolbox": true,
    "invertedMenu": true,
    "showHomeScreen": true,
    "homeScreenHero": "docs/static/hero.svg",
    "blocklyOptions": {
      "grid": {
        "spacing": 20,
        "length": 100,
        "colour": "rgba(107, 79, 118, 0.10)",
        "snap": true
      }
    },
    "unsupportedBrowsers": [
      {
        "id": "ie"
      }
    ],
    "simAnimationEnter": "fly right in",
    "simAnimationExit": "fly right out",
    "scriptManager": true,
    "debugger": false,
    "print": true,
    "highContrast": true,
    "greenScreen": true,
    "monacoColors": {
      "editor.background": "#fcfcfc"
    },
    "TOC": [
      {
        "name": "About",
        "subitems": [],
        "path": "/about"
      },
      {
        "name": "FAQ",
        "subitems": [],
        "path": "/faq"
      },
      {
        "name": "Projects",
        "subitems": [],
        "path": "/projects"
      },
      {
        "name": "Blocks",
        "subitems": [
          {
            "name": "On Start",
            "subitems": [],
            "path": "/blocks/on-start"
          },
          {
            "name": "Loops",
            "subitems": [
              {
                "name": "repeat",
                "subitems": [],
                "path": "/blocks/loops/repeat"
              },
              {
                "name": "for",
                "subitems": [],
                "path": "/blocks/loops/for"
              },
              {
                "name": "while",
                "subitems": [],
                "path": "/blocks/loops/while"
              },
              {
                "name": "for of",
                "subitems": [],
                "path": "/blocks/loops/for-of"
              }
            ],
            "path": "/blocks/loops"
          },
          {
            "name": "Logic",
            "subitems": [
              {
                "name": "if",
                "subitems": [],
                "path": "/blocks/logic/if"
              },
              {
                "name": "Boolean",
                "subitems": [],
                "path": "/blocks/logic/boolean"
              }
            ],
            "path": "/blocks/logic"
          },
          {
            "name": "Variables",
            "subitems": [
              {
                "name": "assign",
                "subitems": [],
                "path": "/blocks/variables/assign"
              },
              {
                "name": "change var",
                "subitems": [],
                "path": "/blocks/variables/change"
              },
              {
                "name": "var",
                "subitems": [],
                "path": "/blocks/variables/var"
              }
            ],
            "path": "/blocks/variables"
          },
          {
            "name": "Math",
            "subitems": [],
            "path": "/blocks/math"
          },
          {
            "name": "JavaScript blocks",
            "subitems": [],
            "path": "/blocks/javascript-blocks"
          },
          {
            "name": "Custom blocks",
            "subitems": [],
            "path": "/blocks/custom"
          }
        ],
        "path": "/blocks"
      },
      {
        "name": "JavaScript",
        "subitems": [
          {
            "name": "Calling",
            "subitems": [],
            "path": "/javascript/call"
          },
          {
            "name": "Sequencing",
            "subitems": [],
            "path": "/javascript/sequence"
          },
          {
            "name": "Variables",
            "subitems": [],
            "path": "/javascript/variables"
          },
          {
            "name": "Operators",
            "subitems": [],
            "path": "/javascript/operators"
          },
          {
            "name": "Statements",
            "subitems": [],
            "path": "/javascript/statements"
          },
          {
            "name": "Functions",
            "subitems": [],
            "path": "/javascript/functions"
          },
          {
            "name": "Types",
            "subitems": [],
            "path": "/javascript/types"
          },
          {
            "name": "Classes",
            "subitems": [],
            "path": "/javascript/classes"
          },
          {
            "name": "Interfaces",
            "subitems": [],
            "path": "/javascript/interfaces"
          },
          {
            "name": "Generics",
            "subitems": [],
            "path": "/javascript/generics"
          }
        ],
        "path": "/javascript"
      },
      {
        "name": "Types",
        "subitems": [
          {
            "name": "Number",
            "subitems": [],
            "path": "/types/number"
          },
          {
            "name": "String",
            "subitems": [],
            "path": "/types/string"
          },
          {
            "name": "Boolean",
            "subitems": [],
            "path": "/types/boolean"
          },
          {
            "name": "Array",
            "subitems": [],
            "path": "/types/array"
          },
          {
            "name": "Function",
            "subitems": [],
            "path": "/types/function"
          }
        ],
        "path": "/types"
      },
      {
        "name": "",
        "subitems": [
          {
            "name": "About",
            "subitems": [],
            "path": "/about"
          },
          {
            "name": "Support",
            "subitems": [],
            "path": "/support"
          },
          {
            "name": "Translate",
            "subitems": [],
            "path": "/translate"
          },
          {
            "name": "Sharing projects",
            "subitems": [],
            "path": "/share"
          },
          {
            "name": "Offline support",
            "subitems": [],
            "path": "/offline"
          },
          {
            "name": "Save",
            "subitems": [],
            "path": "/save"
          }
        ]
      },
      {
        "name": "",
        "subitems": [
          {
            "name": "Command Line Interface",
            "subitems": [],
            "path": "/cli"
          },
          {
            "name": "Visual Studio Code support",
            "subitems": [],
            "path": "/code"
          },
          {
            "name": "Blocks Embed",
            "subitems": [],
            "path": "/blocks-embed"
          }
        ]
      }
    ],
    "embedUrl": "http://microsoft.github.io/pxt-sample/",
    "id": "buildbeemakecode",
    "title": "BuildBee | MakeCode",
    "name": "buildbeemakecode",
    "htmlDocIncludes": {}
  },
  "versions": {
    "target": "2.0.3",
    "pxt": "5.6.4"
  },
  "blocksprj": {
    "id": "blocksprj",
    "config": {
      "name": "{0}",
      "dependencies": {
        "core": "*"
      },
      "description": "",
      "files": [
        "main.blocks",
        "main.ts",
        "README.md"
      ],
      "additionalFilePaths": []
    },
    "files": {
      "README.md": " ",
      "main.blocks": "<xml xmlns=\"http://www.w3.org/1999/xhtml\">\n <block type=\"pxt-on-start\" x=\"0\" y=\"0\"></block>\n</xml>",
      "main.ts": " "
    }
  },
  "tsprj": {
    "id": "tsprj",
    "config": {
      "name": "{0}",
      "dependencies": {
        "core": "*"
      },
      "description": "",
      "files": [
        "main.ts",
        "README.md"
      ],
      "additionalFilePaths": []
    },
    "files": {
      "README.md": " ",
      "main.ts": " "
    }
  },
  "bundledpkgs": {
    "core": {
      "README.md": "# basic\n\nAdd your docs here...",
      "enums.d.ts": "declare const enum Direction {\n    //% block=left\n    Left,\n    //% block=right\n    Right\n}\n\ndeclare const enum Hop {\n    //% block=short\n    Short,\n    //% block=long\n    Long,\n    //% block=silly\n    Silly,\n    //% block=wow\n    Incredible,\n    //% block=\"to the moon!\"\n    Astronomical\n}\n\n\n",
      "ns.ts": "/**\n * Basic functionalities.\n */\n//% color=#00BCD4 weight=100\nnamespace turtle {\n\n}\n\n//% color=#D4BC00 weight=95\nnamespace hare {\n\n}\n\n/**\n * Control flow\n */\n//% color=#FF5722 weight=90\nnamespace control {\n\n}\n",
      "pxt-core.d.ts": "/// <reference no-default-lib=\"true\"/>\n\ninterface Array<T> {\n    /**\n      * Get or set the length of an array. This number is one more than the index of the last element the array.\n      */\n    //% shim=Array_::length weight=84\n    //% blockId=\"lists_length\" block=\"length of %VALUE\" blockBuiltin=true blockNamespace=\"arrays\"\n    length: number;\n\n    /**\n      * Append a new element to an array.\n      * @param items New elements of the Array.\n      */\n    //% help=arrays/push\n    //% shim=Array_::push weight=50\n    //% blockId=\"array_push\" block=\"%list| add value %value| to end\" blockNamespace=\"arrays\"\n    push(item: T): void;\n\n    /**\n      * Concatenates the values with another array.\n      * @param arr The other array that is being concatenated with\n      */\n    //% helper=arrayConcat weight=40\n    concat(arr: T[]): T[];\n\n    /**\n      * Remove the last element from an array and return it.\n      */\n    //% help=arrays/pop\n    //% shim=Array_::pop weight=45\n    //% blockId=\"array_pop\" block=\"get and remove last value from %list\" blockNamespace=\"arrays\"\n    //% blockGap=64\n    pop(): T;\n\n    /**\n      * Reverse the elements in an array. The first array element becomes the last, and the last array element becomes the first.\n      */\n    //% help=arrays/reverse\n    //% helper=arrayReverse weight=10\n    //% blockId=\"array_reverse\" block=\"reverse %list\" blockNamespace=\"arrays\"\n    reverse(): void;\n\n    /**\n      * Remove the first element from an array and return it. This method changes the length of the array.\n      */\n    //% help=arrays/shift\n    //% helper=arrayShift weight=30\n    //% blockId=\"array_shift\" block=\"get and remove first value from %list\" blockNamespace=\"arrays\"\n    shift(): T;\n\n    /**\n      * Add one element to the beginning of an array and return the new length of the array.\n      * @param element to insert at the start of the Array.\n      */\n    //% help=arrays/unshift\n    //% helper=arrayUnshift weight=25\n    //% blockId=\"array_unshift\" block=\"%list| insert %value| at beginning\" blockNamespace=\"arrays\"\n    //unshift(...values:T[]): number; //rest is not supported in our compiler yet.\n    unshift(value: T): number;\n\n    /**\n      * Return a section of an array.\n      * @param start The beginning of the specified portion of the array. eg: 0\n      * @param end The end of the specified portion of the array. eg: 0\n      */\n    //% help=arrays/slice\n    //% helper=arraySlice weight=41 blockNamespace=\"arrays\"\n    slice(start?: number, end?: number): T[];\n\n    /**\n      * Remove elements from an array.\n      * @param start The zero-based location in the array from which to start removing elements. eg: 0\n      * @param deleteCount The number of elements to remove. eg: 0\n      */\n    //% helper=arraySplice weight=40\n    splice(start: number, deleteCount: number): void;\n\n    /**\n      * joins all elements of an array into a string and returns this string.\n      * @param sep the string separator\n      */\n    //% helper=arrayJoin weight=40\n    join(sep: string): string;\n    \n    /**\n      * Tests whether at least one element in the array passes the test implemented by the provided function.\n      * @param callbackfn A function that accepts up to two arguments. The some method calls the callbackfn function one time for each element in the array.\n      */\n    //% helper=arraySome weight=40\n    some(callbackfn: (value: T, index: number) => boolean): boolean;\n\n    /**\n      * Tests whether all elements in the array pass the test implemented by the provided function.\n      * @param callbackfn A function that accepts up to two arguments. The every method calls the callbackfn function one time for each element in the array.\n      */\n    //% helper=arrayEvery weight=40\n    every(callbackfn: (value: T, index: number) => boolean): boolean;\n    \n    /**\n      * Sort the elements of an array in place and returns the array. The sort is not necessarily stable.\n      * @param specifies a function that defines the sort order. If omitted, the array is sorted according to the prmitive type\n      */\n    //% helper=arraySort weight=40\n    sort(callbackfn?: (value1: T, value2: T) => number): T[];\n\n    /**\n      * Call a defined callback function on each element of an array, and return an array containing the results.\n      * @param callbackfn A function that accepts up to two arguments. The map method calls the callbackfn function one time for each element in the array.\n      */\n    //% helper=arrayMap weight=40\n    map<U>(callbackfn: (value: T, index: number) => U): U[];\n\n    /**\n      * Call a defined callback function on each element of an array.\n      * @param callbackfn A function that accepts up to two arguments. The forEach method calls the callbackfn function one time for each element in the array.\n      */\n    //% helper=arrayForEach weight=40\n    forEach(callbackfn: (value: T, index: number) => void): void;\n    \n    /**\n      * Return the elements of an array that meet the condition specified in a callback function.\n      * @param callbackfn A function that accepts up to two arguments. The filter method calls the callbackfn function one time for each element in the array.\n      */\n    //% helper=arrayFilter weight=40\n    filter(callbackfn: (value: T, index: number) => boolean): T[];\n\n    /**\n      * Fills all the elements of an array from a start index to an end index with a static value. The end index is not included.\n      */\n    //% helper=arrayFill weight=39\n    fill(value: T, start?: number, end?: number): T[];\n    \n    /**\n     * Returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.\n     * @param callbackfn \n     */\n    //% helper=arrayFind weight=40\n    find(callbackfn: (value: T, index: number) => boolean): T;\n\n    /**\n      * Call the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.\n      * @param callbackfn A function that accepts up to three arguments. The reduce method calls the callbackfn function one time for each element in the array.\n      * @param initialValue Initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.\n      */\n    //% helper=arrayReduce weight=40\n    reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number) => U, initialValue: U): U;\n\n\n    /** Remove the first occurence of an object. Returns true if removed. */\n    //% shim=Array_::removeElement weight=48\n    removeElement(element: T): boolean;\n\n    /** Remove the element at a certain index. */\n    //% help=arrays/remove-at\n    //% shim=Array_::removeAt weight=15\n    //% blockId=\"array_removeat\" block=\"%list| remove value at %index\" blockNamespace=\"arrays\"\n    removeAt(index: number): T;\n\n    /**\n     * Insert the value at a particular index, increases length by 1\n     * @param index the zero-based position in the list to insert the value, eg: 0\n     * @param the value to insert, eg: 0\n     */\n    //% help=arrays/insert-at\n    //% shim=Array_::insertAt weight=20\n    //% blockId=\"array_insertAt\" block=\"%list| insert at %index| value %value\" blockNamespace=\"arrays\"\n    insertAt(index: number, value: T): void;\n\n    /**\n      * Return the index of the first occurrence of a value in an array.\n      * @param item The value to locate in the array.\n      * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.\n      */\n    //% help=arrays/index-of\n    //% shim=Array_::indexOf weight=40\n    //% blockId=\"array_indexof\" block=\"%list| find index of %value\" blockNamespace=\"arrays\"\n    indexOf(item: T, fromIndex?: number): number;\n\n    /**\n     * Get the value at a particular index\n     * @param index the zero-based position in the list of the item, eg: 0\n     */\n    //% help=arrays/get\n    //% shim=Array_::getAt weight=85\n    get(index: number): T;\n\n    /**\n     * Store a value at a particular index\n     * @param index the zero-based position in the list to store the value, eg: 0\n     * @param the value to insert, eg: 0\n     */\n    //% help=arrays/set\n    //% shim=Array_::setAt weight=84\n    set(index: number, value: T): void;\n\n    [n: number]: T;\n}\n\ndeclare interface String {\n    // This block is currently disabled in favor of the built-in Blockly \"Create text with\" block, which compiles to \"\" + \"\"\n    // Add % sign back to the block annotation to re-enable\n    /**\n     * Returns a string that contains the concatenation of two or more strings.\n     * @param other The string to append to the end of the string.\n     */\n    //% shim=String_::concat weight=49\n    //% blockId=\"string_concat\" blockNamespace=\"text\"\n    // block=\"join %list=text|%other\"\n    concat(other: string): string;\n\n    /**\n     * Return the character at the specified index.\n     * @param index The zero-based index of the desired character.\n     */\n    //% shim=String_::charAt weight=48\n    //% help=text/char-at\n    //% blockId=\"string_get\" block=\"char from %this=text|at %pos\" blockNamespace=\"text\"\n    charAt(index: number): string;\n\n    /** Returns the length of a String object. */\n    //% property shim=String_::length weight=47\n    //% blockId=\"text_length\" block=\"length of %VALUE\" blockBuiltin=true blockNamespace=\"text\"\n    length: number;\n\n    /**\n     * Return the Unicode value of the character at the specified location.\n     * @param index The zero-based index of the desired character. If there is no character at the specified index, NaN is returned.\n     */\n    //% shim=String_::charCodeAt\n    charCodeAt(index: number): number;\n\n    /**\n     * See how the order of characters in two strings is different (in ASCII encoding).\n     * @param that String to compare to target string\n     */\n    //% shim=String_::compare\n    //% help=text/compare\n    //% blockId=\"string_compare\" block=\"compare %this=text| to %that\" blockNamespace=\"text\"\n    compare(that: string): number;\n\n    /**\n     * Return a substring of the current string.\n     * @param start first character index; can be negative from counting from the end, eg:0\n     * @param length number of characters to extract\n     */\n    //% shim=String_::substr length.defl=10\n    //% help=text/substr\n    //% blockId=\"string_substr\" block=\"substring of %this=text|from %start|of length %length\" blockNamespace=\"text\"\n    substr(start: number, length?: number): string;\n\n    /**\n     * Return a substring of the current string.\n     * @param start first character index; can be negative from counting from the end, eg:0\n     * @param end one-past-last character index\n     */\n    //% helper=stringSlice\n    slice(start: number, end?: number): string;\n\n    // This block is currently disabled, as it does not compile in some targets\n    // Add % sign back to the block annotation to re-enable\n    /** Returns a value indicating if the string is empty */\n    //% shim=String_::isEmpty\n    //% blockId=\"string_isempty\" blockNamespace=\"text\"\n    // block=\"%this=text| is empty\"\n    isEmpty(): boolean;\n\n    /**\n     * Returns the position of the first occurrence of a specified value in a string.\n     * @param searchValue the text to find\n     * @param start optional start index for the search\n     */\n    //% shim=String_::indexOf\n    //% help=text/index-of\n    //% blockId=\"string_indexof\" blockNamespace=\"text\"\n    indexOf(searchValue: string, start?: number): number;\n\n    /**\n     * Determines whether a string contains the characters of a specified string.\n     * @param searchValue the text to find\n     * @param start optional start index for the search\n     */\n    //% shim=String_::includes\n    //% help=text/includes\n    //% blockId=\"string_includes\" blockNamespace=\"text\"\n    includes(searchValue: string, start?: number): boolean;\n\n    /**\n     * Splits the string according to the separators\n     * @param separator \n     * @param limit \n     */\n    //% helper=stringSplit\n    //% help=text/split\n    //% blockId=\"string_split\" blockNamespace=\"text\"\n    split(separator?: string, limit?: number): string[];\n\n    [index: number]: string;\n}\n\n/**\n  * Convert a string to a number.\n  * @param s A string to convert into a number. eg: 123\n  */\n//% shim=String_::toNumber\n//% help=text/parse-float\n//% blockId=\"string_parsefloat\" block=\"parse to number %text\" blockNamespace=\"text\"\n//% text.defl=\"123\"\ndeclare function parseFloat(text: string): number;\n\ninterface Object { }\ninterface Function { }\ninterface IArguments { }\ninterface RegExp { }\ntype TemplateStringsArray = Array<string>;\n\ntype uint8 = number;\ntype uint16 = number;\ntype uint32 = number;\ntype int8 = number;\ntype int16 = number;\ntype int32 = number;\n\n\ndeclare interface Boolean {\n    /**\n     * Returns a string representation of an object.\n     */\n    //% shim=numops::toString\n    toString(): string;\n}\n\n/**\n * Combine, split, and search text strings.\n*/\n//% blockNamespace=\"Text\"\ndeclare namespace String {\n\n    /**\n     * Make a string from the given ASCII character code.\n     */\n    //% help=math/from-char-code\n    //% shim=String_::fromCharCode\n    //% weight=0\n    //% blockNamespace=\"Text\" blockId=\"stringFromCharCode\" block=\"text from char code %code\" weight=1\n    function fromCharCode(code: number): string;\n}\n\ndeclare interface Number {\n    /**\n     * Returns a string representation of a number.\n     */\n    //% shim=numops::toString\n    toString(): string;\n}\n\n/**\n * Add, remove, and replace items in lists.\n*/\n//% blockNamespace=\"Arrays\"\ndeclare namespace Array {\n    /**\n     * Check if a given object is an array.\n     */\n    //% shim=Array_::isArray\n    function isArray(obj: any): boolean;\n}\n\ndeclare namespace Object {\n    /**\n     * Return the field names in an object.\n     */\n    //% shim=pxtrt::keysOf\n    function keys(obj: any): string[];\n}\n\n/**\n * More complex operations with numbers.\n*/\ndeclare namespace Math {\n    /**\n     * Returns the value of a base expression taken to a specified power.\n     * @param x The base value of the expression.\n     * @param y The exponent value of the expression.\n     */\n    //% shim=Math_::pow\n    function pow(x: number, y: number): number;\n\n    /**\n     * Returns a pseudorandom number between 0 and 1.\n     */\n    //% shim=Math_::random\n    //% help=math/random\n    function random(): number;\n\n    /**\n     * Returns a pseudorandom number between min and max included.\n     * If both numbers are integral, the result is integral.\n     * @param min the lower inclusive bound, eg: 0\n     * @param max the upper inclusive bound, eg: 10\n     */\n    //% blockId=\"device_random\" block=\"pick random %min|to %limit\"\n    //% help=math/random-range\n    //% shim=Math_::randomRange\n    function randomRange(min: number, max: number): number;\n\n    /**\n     * Returns the natural logarithm (base e) of a number.\n     * @param x A number\n     */\n    //% shim=Math_::log\n    function log(x: number): number;\n\n    /**\n     * Returns returns ``e^x``.\n     * @param x A number\n     */\n    //% shim=Math_::exp\n    function exp(x: number): number;\n\n    /**\n     * Returns the sine of a number.\n     * @param x An angle in radians\n     */\n    //% shim=Math_::sin\n    function sin(x: number): number;\n\n    /**\n     * Returns the cosine of a number.\n     * @param x An angle in radians\n     */\n    //% shim=Math_::cos\n    function cos(x: number): number;\n\n    /**\n     * Returns the tangent of a number.\n     * @param x An angle in radians\n     */\n    //% shim=Math_::tan\n    function tan(x: number): number;\n\n    /**\n     * Returns the arcsine (in radians) of a number\n     * @param x A number\n     */\n    //% shim=Math_::asin\n    function asin(x: number): number;\n\n    /**\n     * Returns the arccosine (in radians) of a number\n     * @param x A number\n     */\n    //% shim=Math_::acos\n    function acos(x: number): number;\n\n    /**\n     * Returns the arctangent (in radians) of a number\n     * @param x A number\n     */\n    //% shim=Math_::atan\n    function atan(x: number): number;\n\n    /**\n     * Returns the arctangent of the quotient of its arguments.\n     * @param y A number\n     * @param x A number\n     */\n    //% shim=Math_::atan2\n    function atan2(y: number, x: number): number;\n\n    /**\n     * Returns the square root of a number.\n     * @param x A numeric expression.\n     */\n    //% shim=Math_::sqrt\n    function sqrt(x: number): number;\n\n    /**\n     * Returns the smallest number greater than or equal to its numeric argument.\n     * @param x A numeric expression.\n     */\n    //% shim=Math_::ceil\n    function ceil(x: number): number;\n\n    /**\n      * Returns the greatest number less than or equal to its numeric argument.\n      * @param x A numeric expression.\n      */\n    //% shim=Math_::floor\n    function floor(x: number): number;\n\n    /**\n      * Returns the number with the decimal part truncated.\n      * @param x A numeric expression.\n      */\n    //% shim=Math_::trunc\n    function trunc(x: number): number;\n\n    /**\n      * Returns a supplied numeric expression rounded to the nearest number.\n      * @param x The value to be rounded to the nearest number.\n      */\n    //% shim=Math_::round\n    function round(x: number): number;\n\n    /**\n     * Returns the value of integer signed 32 bit multiplication of two numbers.\n     * @param x The first number\n     * @param y The second number\n     */\n    //% shim=Math_::imul\n    function imul(x: number, y: number): number;\n\n    /**\n     * Returns the value of integer signed 32 bit division of two numbers.\n     * @param x The first number\n     * @param y The second number\n     */\n    //% shim=Math_::idiv\n    function idiv(x: number, y: number): number;\n}\n",
      "pxt-helpers.ts": "type Action = () => void;\n\n\n/**\n  * Convert a string to an integer.\n  * @param s A string to convert into an integral number. eg: 123\n  */\n//% help=text/parse-int\n//% blockId=\"string_parseint\" block=\"parse to integer %text\" blockNamespace=\"text\"\n//% text.defl=\"123\"\n//% blockHidden=1\nfunction parseInt(text: string): number {\n    return parseFloat(text) >> 0;\n}\n\nnamespace helpers {\n    export function arrayFill<T>(O: T[], value: T, start?: number, end?: number) {\n        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill\n        // Steps 3-5.\n        const len = O.length >>> 0;\n\n        // Steps 6-7.\n        const relativeStart = start === undefined ? 0 : start >> 0;\n\n        // Step 8.\n        let k = relativeStart < 0 ?\n            Math.max(len + relativeStart, 0) :\n            Math.min(relativeStart, len);\n\n        // Steps 9-10.\n        const relativeEnd = end === undefined ? len : end >> 0;\n\n        // Step 11.\n        const final = relativeEnd < 0 ?\n            Math.max(len + relativeEnd, 0) :\n            Math.min(relativeEnd, len);\n\n        // Step 12.\n        while (k < final) {\n            O[k] = value;\n            k++;\n        }\n\n        // Step 13.\n        return O;\n    }\n\n    export function arraySplice<T>(arr: T[], start: number, len: number) {\n        if (start < 0) {\n            return;\n        }\n        for (let i = 0; i < len; ++i) {\n            arr.removeAt(start)\n        }\n    }\n\n    export function arrayReverse<T>(arr: T[]): void {\n        let len = arr.length;\n        for (let i = 0; i < len / 2; i++) {\n            swap(arr, i, len - i - 1);\n        }\n    }\n\n    export function arrayShift<T>(arr: T[]): T {\n        return arr.removeAt(0);\n    }\n\n    export function arrayJoin<T>(arr: T[], sep: string): string {\n        let r = \"\";\n        let len = arr.length // caching this seems to match V8\n        for (let i = 0; i < len; ++i) {\n            if (i > 0 && sep)\n                r += sep;\n            r += arr[i] || \"\";\n        }\n        return r;\n    }\n\n    /*TODO: Enable this multiple value unshift, after rest is enabled in our compiler.\n        export function arrayUnshift<T>(arr: T[], ...values: T[]) : number {\n            for(let i = values.length; i > 0; --i) {\n                arr.insertAt(0, values[i - 1]);\n            }\n            return arr.length;\n        }\n    */\n    export function arrayUnshift<T>(arr: T[], value: T): number {\n        arr.insertAt(0, value);\n        return arr.length;\n    }\n\n    function swap<T>(arr: T[], i: number, j: number): void {\n        let temp: T = arr[i];\n        arr[i] = arr[j];\n        arr[j] = temp;\n    }\n\n    function sortHelper<T>(arr: T[], callbackfn?: (value1: T, value2: T) => number): T[] {\n        if (arr.length <= 0 || !callbackfn) {\n            return arr;\n        }\n        let len = arr.length;\n        // simple selection sort.\n        for (let i = 0; i < len - 1; ++i) {\n            for (let j = i + 1; j < len; ++j) {\n                if (callbackfn(arr[i], arr[j]) > 0) {\n                    swap(arr, i, j);\n                }\n            }\n        }\n        return arr;\n    }\n\n    export function arraySort<T>(arr: T[], callbackfn?: (value1: T, value2: T) => number): T[] {\n        if (!callbackfn) {\n            //TODO: support native strings and number sorting\n            /* callbackfn = function (value1: string, value2: string) : number {\n                return value1.compare(value2);\n                }*/\n        }\n        return sortHelper(arr, callbackfn);\n    }\n\n    export function arrayMap<T, U>(arr: T[], callbackfn: (value: T, index: number) => U): U[] {\n        let res: U[] = []\n        let len = arr.length // caching this seems to match V8\n        for (let i = 0; i < len; ++i) {\n            res.push(callbackfn(arr[i], i))\n        }\n        return res\n    }\n\n    export function arraySome<T>(arr: T[], callbackfn: (value: T, index: number) => boolean): boolean {\n        let len = arr.length // caching this seems to match V8\n        for (let i = 0; i < len; ++i)\n            if (callbackfn(arr[i], i))\n                return true;\n        return false;\n    }\n\n    export function arrayEvery<T>(arr: T[], callbackfn: (value: T, index: number) => boolean): boolean {\n        let len = arr.length // caching this seems to match V8\n        for (let i = 0; i < len; ++i)\n            if (!callbackfn(arr[i], i))\n                return false;\n        return true;\n    }\n\n    export function arrayForEach<T>(arr: T[], callbackfn: (value: T, index: number) => void): void {\n        let len = arr.length // caching this seems to match V8\n        for (let i = 0; i < len; ++i) {\n            callbackfn(arr[i], i);\n        }\n    }\n\n    export function arrayFilter<T>(arr: T[], callbackfn: (value: T, index: number) => boolean): T[] {\n        let res: T[] = []\n        let len = arr.length\n        for (let i = 0; i < len; ++i) {\n            let v = arr[i] // need to cache\n            if (callbackfn(v, i)) res.push(v)\n        }\n        return res\n    }\n\n    export function arrayFind<T>(arr: T[], callbackfn: (value: T, index: number) => boolean): T {\n        let len = arr.length\n        for (let i = 0; i < len; ++i) {\n            let v = arr[i] // need to cache\n            if (callbackfn(v, i)) return v;\n        }\n        return undefined;\n    }\n\n    export function arrayReduce<T, U>(arr: T[], callbackfn: (previousValue: U, currentValue: T, currentIndex: number) => U, initialValue: U): U {\n        let len = arr.length\n        for (let i = 0; i < len; ++i) {\n            initialValue = callbackfn(initialValue, arr[i], i)\n        }\n        return initialValue\n    }\n\n    export function arrayConcat<T>(arr: T[], otherArr: T[]): T[] {\n        let out: T[] = [];\n        for (let value of arr) {\n            out.push(value);\n        }\n        for (let value of otherArr) {\n            out.push(value);\n        }\n        return out;\n    }\n\n    export function arraySlice<T>(arr: T[], start?: number, end?: number): T[] {\n        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice\n        const res: T[] = [];\n        const len = arr.length;\n\n        if (start === undefined)\n            start = 0;\n        else if (start < 0)\n            start = Math.max(len + start, 0);\n\n        if (start > len)\n            return res;\n\n        if (end === undefined)\n            end = len;\n        else if (end < 0)\n            end = len + end;\n\n        if (end > len)\n            end = len;\n\n        for (let i = start; i < end; ++i) {\n            res.push(arr[i]);\n        }\n        return res;\n    }\n\n    export function stringSlice(s: string, start: number, end?: number): string {\n        const len = s.length;\n\n        if (start < 0) {\n            start = Math.max(len + start, 0);\n        }\n\n        if (end == null) {\n            end = len;\n        }\n\n        if (end < 0) {\n            end = len + end;\n        }\n\n        return s.substr(start, end - start);\n    }\n\n    export function stringSplit(S: string, separator?: string, limit?: number): string[] {\n        // https://www.ecma-international.org/ecma-262/6.0/#sec-string.prototype.split\n        const A: string[] = [];\n        let lim = 0;\n        if (limit === undefined)\n            lim = (1 << 29) - 1; // spec says 1 << 53, leaving it at 29 for constant folding\n        else if (limit < 0)\n            lim = 0;\n        else\n            lim = limit | 0;\n        const s = S.length;\n        let p = 0;\n        const R = separator;\n        if (lim == 0)\n            return A;\n        if (separator === undefined) {\n            A[0] = S;\n            return A;\n        }\n        if (s == 0) {\n            let z = splitMatch(S, 0, R);\n            if (z > -1) return A;\n            A[0] = S;\n            return A;\n        }\n        let T: string;\n        let q = p;\n        while (q != s) {\n            let e = splitMatch(S, q, R);\n            if (e < 0) q++;\n            else {\n                if (e == p) q++;\n                else {\n                    T = stringSlice(S, p, q);\n                    A.push(T);\n                    if (A.length == lim) return A;\n                    p = e;\n                    q = p;\n                }\n            }\n        }\n        T = stringSlice(S, p, q);\n        A.push(T);\n        return A;\n    }\n\n    function splitMatch(S: string, q: number, R: string): number {\n        const r = R.length;\n        const s = S.length;\n        if (q + r > s) return -1;\n        for (let i = 0; i < r; ++i) {\n            if (S[q + i] != R[i])\n                return -1;\n        }\n        return q + r;\n    }\n}\n\nnamespace Math {\n    export function clamp(min: number, max: number, value: number): number {\n        return Math.min(max, Math.max(min, value));\n    }\n\n    /**\n      * Returns the absolute value of a number (the value without regard to whether it is positive or negative).\n      * For example, the absolute value of -5 is the same as the absolute value of 5.\n      * @param x A numeric expression for which the absolute value is needed.\n      */\n    export function abs(x: number): number {\n        return x < 0 ? -x : x;\n    }\n\n    /**\n      * Returns the sign of the x, indicating whether x is positive, negative or zero.\n      * @param x The numeric expression to test\n      */\n    export function sign(x: number): number {\n        if (x == 0) return 0;\n        if (x > 0) return 1;\n        return -1;\n    }\n\n    /**\n      * Returns the larger of two supplied numeric expressions.\n      */\n    export function max(a: number, b: number): number {\n        if (a >= b) return a;\n        return b;\n    }\n\n    /**\n      * Returns the smaller of two supplied numeric expressions.\n      */\n    export function min(a: number, b: number): number {\n        if (a <= b) return a;\n        return b;\n    }\n\n    /**\n     * Rounds ``x`` to a number with the given number of ``digits``\n     * @param x the number to round\n     * @param digits the number of resulting digits\n     */\n    //%\n    export function roundWithPrecision(x: number, digits: number): number {\n        digits = digits | 0;\n        // invalid digits input\n        if (digits <= 0) return Math.round(x);\n        if (x == 0) return 0;\n        let r = 0;\n        do {\n            const d = Math.pow(10, digits);\n            r = Math.round(x * d) / d;\n            digits++;\n        } while (r == 0 && digits < 21);\n        return r;\n    }\n}\n\n\n//% blockHidden=1\nnamespace __internal {\n    /**\n     * A shim to render a boolean as a down/up toggle\n     */\n    //% shim=TD_ID blockHidden=1\n    //% blockId=toggleDownUp block=\"%down\"\n    //% down.fieldEditor=toggledownup\n    //% down.fieldOptions.decompileLiterals=true\n    export function __downUp(down: boolean): boolean {\n        return down;\n    }\n\n    /**\n     * A shim to render a boolean as a up/down toggle\n     */\n    //% shim=TD_ID blockHidden=1\n    //% blockId=toggleUpDown block=\"%up\"\n    //% up.fieldEditor=toggleupdown\n    //% up.fieldOptions.decompileLiterals=true\n    export function __upDown(up: boolean): boolean {\n        return up;\n    }\n\n    /**\n     * A shim to render a boolean as a high/low toggle\n     */\n    //% shim=TD_ID blockHidden=1\n    //% blockId=toggleHighLow block=\"%high\"\n    //% high.fieldEditor=togglehighlow\n    //% high.fieldOptions.decompileLiterals=true\n    export function __highLow(high: boolean): boolean {\n        return high;\n    }\n\n    /**\n     * A shim to render a boolean as a on/off toggle\n     */\n    //% shim=TD_ID blockHidden=1\n    //% blockId=toggleOnOff block=\"%on\"\n    //% on.fieldEditor=toggleonoff\n    //% on.fieldOptions.decompileLiterals=true\n    export function __onOff(on: boolean): boolean {\n        return on;\n    }\n\n    /**\n     * A shim to render a boolean as a yes/no toggle\n     */\n    //% shim=TD_ID blockHidden=1\n    //% blockId=toggleYesNo block=\"%yes\"\n    //% yes.fieldEditor=toggleyesno\n    //% yes.fieldOptions.decompileLiterals=true\n    export function __yesNo(yes: boolean): boolean {\n        return yes;\n    }\n\n    /**\n     * A shim to render a boolean as a win/lose toggle\n     */\n    //% shim=TD_ID blockHidden=1\n    //% blockId=toggleWinLose block=\"%win\"\n    //% win.fieldEditor=togglewinlose\n    //% win.fieldOptions.decompileLiterals=true\n    export function __winLose(win: boolean): boolean {\n        return win;\n    }\n\n    /**\n     * Get the color wheel field editor\n     * @param color color, eg: #ff0000\n     */\n    //% blockId=colorNumberPicker block=\"%value\"\n    //% blockHidden=true\n    //% shim=TD_ID colorSecondary=\"#FFFFFF\"\n    //% value.fieldEditor=\"colornumber\" value.fieldOptions.decompileLiterals=true\n    //% value.defl='#ff0000'\n    //% value.fieldOptions.colours='[\"#ff0000\",\"#ff8000\",\"#ffff00\",\"#ff9da5\",\"#00ff00\",\"#b09eff\",\"#00ffff\",\"#007fff\",\"#65471f\",\"#0000ff\",\"#7f00ff\",\"#ff0080\",\"#ff00ff\",\"#ffffff\",\"#999999\",\"#000000\"]'\n    //% value.fieldOptions.columns=4 value.fieldOptions.className='rgbColorPicker'\n    export function __colorNumberPicker(value: number) {\n        return value;\n    }\n\n    /**\n     * Get the color wheel field editor\n     * @param value value between 0 to 255 to get a color value, eg: 10\n     */\n    //% blockId=colorWheelPicker block=\"%value\"\n    //% blockHidden=true\n    //% shim=TD_ID colorSecondary=\"#FFFFFF\"\n    //% value.fieldEditor=\"colorwheel\" value.fieldOptions.decompileLiterals=true\n    //% value.fieldOptions.sliderWidth='200'\n    //% value.fieldOptions.min=0 value.fieldOptions.max=255\n    export function __colorWheelPicker(value: number) {\n        return value;\n    }\n\n    /**\n    * Get the color wheel field editor using HSV values\n    * @param value value between 0 to 255 to get a color value, eg: 10\n    */\n    //% blockId=colorWheelHsvPicker block=\"%value\"\n    //% blockHidden=true\n    //% shim=TD_ID colorSecondary=\"#FFFFFF\"\n    //% value.fieldEditor=\"colorwheel\" value.fieldOptions.decompileLiterals=true\n    //% value.fieldOptions.sliderWidth='200'\n    //% value.fieldOptions.min=0 value.fieldOptions.max=255\n    //% value.fieldOptions.channel=hsvfast\n    export function __colorWheelHsvPicker(value: number) {\n        return value;\n    }\n\n    /**\n     * A speed picker\n     * @param speed the speed, eg: 50\n     */\n    //% blockId=speedPicker block=\"%speed\" shim=TD_ID\n    //% speed.fieldEditor=\"speed\" colorSecondary=\"#FFFFFF\"\n    //% weight=0 blockHidden=1 speed.fieldOptions.decompileLiterals=1\n    export function __speedPicker(speed: number): number {\n        return speed;\n    }\n\n    /**\n     * A turn ratio picker\n     * @param turnratio the turn ratio, eg: 0\n     */\n    //% blockId=turnRatioPicker block=\"%turnratio\" shim=TD_ID\n    //% turnratio.fieldEditor=\"turnratio\" colorSecondary=\"#FFFFFF\"\n    //% weight=0 blockHidden=1 turnRatio.fieldOptions.decompileLiterals=1\n    export function __turnRatioPicker(turnratio: number): number {\n        return turnratio;\n    }\n\n    /**\n     * A field editor that displays a protractor\n     */\n    //% blockId=protractorPicker block=\"%angle\"\n    //% shim=TD_ID\n    //% angle.fieldEditor=protractor\n    //% angle.fieldOptions.decompileLiterals=1    \n    //% colorSecondary=\"#FFFFFF\"\n    //% blockHidden=1\n    export function __protractor(angle: number) {\n        return angle;\n    }\n\n    /**\n      * Get the time field editor\n      * @param ms time duration in milliseconds, eg: 500, 1000\n      */\n    //% blockId=timePicker block=\"%ms\"\n    //% blockHidden=true shim=TD_ID\n    //% colorSecondary=\"#FFFFFF\"\n    //% ms.fieldEditor=\"numberdropdown\" ms.fieldOptions.decompileLiterals=true\n    //% ms.fieldOptions.data='[[\"100 ms\", 100], [\"200 ms\", 200], [\"500 ms\", 500], [\"1 second\", 1000], [\"2 seconds\", 2000]]'\n    export function __timePicker(ms: number): number {\n        return ms;\n    }\n}",
      "pxt.json": "{\n    \"name\": \"core\",\n    \"description\": \"A target sample for PXT\",\n    \"files\": [\n        \"README.md\",\n        \"pxt-core.d.ts\",\n        \"pxt-helpers.ts\",\n        \"enums.d.ts\",\n        \"sims.d.ts\",\n        \"ns.ts\"\n    ],\n    \"testFiles\": [\n        \"test.ts\"\n    ],\n    \"public\": true,\n    \"dependencies\": {},\n    \"targetVersions\": {\n        \"target\": \"2.0.3\"\n    }\n}",
      "sims.d.ts": "// Auto-generated from simulator. Do not edit.\ndeclare namespace shapes {\n    //% block=\"cube width $width|depth $depth|height $height\"\n    //% inlineInputMode=inline\n    //% width.defl=10\n    //% depth.defl=10\n    //% height.defl=10\n    //% shim=shapes::cube\n    function cube(width: number, depth: number, height: number): void;\n\n    //% block=\"sphere width $width|depth $depth|height $height\"\n    //% inlineInputMode=inline\n    //% width.defl=10\n    //% depth.defl=10\n    //% height.defl=10\n    //% shim=shapes::sphere\n    function sphere(width: number, depth: number, height: number): void;\n\n    //% block=\"cylinder radius $radius|height $height\"\n    //% inlineInputMode=inline\n    //% radius.defl=10\n    //% height.defl=10\n    //% shim=shapes::cylinder\n    function cylinder(radius: number, height: number): void;\n\n    //% block=\"donut thickness $thickness|radius $radius\"\n    //% inlineInputMode=inline\n    //% thickess.defl=20\n    //% radius.defl=100\n    //% shim=shapes::donut\n    function donut(thickness: number, radius: number): void;\n\n    //% block=\"cone radius $radius|height $height\"\n    //% inlineInputMode=inline\n    //% radius.defl=10\n    //% height.defl=10\n    //% shim=shapes::cone\n    function cone(radius: number, height: number): void;\n\n}\ndeclare namespace operators {\n    //% blockId=add_shapes block=\"add shapes\" \n    //% topblock=false\n    //% handlerStatement=true\n    //% shim=operators::addShapes\n    function addShapes(body: () => void): void;\n\n    //% blockId=subtract_shapes block=\"subtract shapes\" \n    //% topblock=false\n    //% handlerStatement=true\n    //% shim=operators::subtractShapesAsync promise\n    function subtractShapes(body: () => void): void;\n\n    //% blockId=intersect_shapes block=\"intersect shapes\" \n    //% topblock=false\n    //% handlerStatement=true\n    //% shim=operators::intersectShapesAsync promise\n    function intersectShapes(body: () => void): void;\n\n    //% blockId=move_shapes block=\"move shapes across x: $x| over y: $y | up z: $z\" \n    //% topblock=false\n    //% handlerStatement=true\n    //% shim=operators::moveShapesAsync promise\n    function moveShapes(x: number, y: number, z: number, body: () => void): void;\n\n    //% blockId=rotate_shapes block=\"rotate shapes x: $x|  y: $y | z: $z\" \n    //% topblock=false\n    //% handlerStatement=true\n    //% shim=operators::rotateShapesAsync promise\n    function rotateShapes(x: number, y: number, z: number, body: () => void): void;\n\n}\n\n// Auto-generated. Do not edit. Really.\n",
      "test.ts": ""
    }
  },
  "compile": {
    "isNative": false,
    "hasHex": false,
    "switches": {},
    "jsRefCounting": false,
    "vtableShift": 2,
    "noSourceInFlash": true,
    "utf8": true
  }
}