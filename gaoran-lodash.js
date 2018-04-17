var gaoran = {
    /**
     * @param   {Array}     array      The array to process.
     * @param   {Number}    [size=1]   The length of each chunk
     * @returns {Array}                Returns the new array of chunks.
     */
    chunk: function chunk(array, size = 1) {
        var result = []
        var n = array.length
        for (var i = 0; i < n; i = i + size) {
            result.push(array.slice(i, i + size))
        }
        return result
    },


    /**
     * @param {Array} array            The array to compact.
     * @returns {Array}                Returns the new array of filtered values.
     */
    compact: function compact(array) {
        var result = []
        for (var falsey of array) {
            if (falsey) {
                result.push(falsey)
            }
        }
        return result
    },

    /**
     * @param {Array} array            The array to concatenate.
     * @param {Array} values           The values to concatenate.
     * @returns {Array}                Returns the new concatenated array.
     */
    concat: function concat(array, values) {
        if (values[0] === undefined) {
            return array
        } else {
            var result = array
            for (var even of values) {
                result.concat(even)
            }
            return result
        }
    },



    /**
     * @param {Array} array            The array to inspect.
     * @param {...Array} values           The values to exclude.
     * @returns {Array} 
     */
    difference: function difference(array, ...values) {
        var checknum = {}
        var che = []
        for (var even of values) {
            che = che.concat(even)
        }
        for (var even of che) {
            checknum[even] = true
        }
        var result = []
        for (var even of array) {
            if (checknum[even]) {
            } else {
                result.push(even)
            }
        }
        return result
    },


    /**
     * @param {Array} array            The array to inspect.
     * @param {Array} values           The values to exclude.
     * @param {Function} iteratee   The values to exclude.
     * @returns {Array} 
     */
    differenceBy: function differenceBy(array, values, iteratee) {
        var checknum = {}
        for (var even of values) {
            checknum[even[iteratee]] = true
        }
        var result = []
        for (var even of array) {
            if (isNumber(even)) {
                if (checknum[even.iteratee]) {
                } else {
                    result.push(even)
                }
            } else {
                if (checknum[even[iteratee]]) {
                } else {
                    result.push(even)
                }
            }
        }
        return result
    },



    /**
     * @param {Array} array            The array to query.
     * @param {number} [n=1]           The number of elements to drop.
     * @returns {Array}
     */
    drop: function drop(array, n = 1) {
        if (n === 0) {
            return array
        }
        return array.splice(n)
    },



    /**
     * @param {Array} array            The array to query.
     * @param {number} [n=1]           The number of elements to drop.
     * @returns {Array}
     */
    dropRight: function dropRight(array, n = 1) {
        if (n === 0) {
            return array
        }
        var m = array.length
        if (n >= m) {
            array = []
            return array
        }
        var m = array.length
        x = m - n
        array.splice(x)
        return array
    },




    /**
     * @param {Array} array            The array to fill.
     * @param {*} value                The value to fill array with.
     * @param {number} [start=0]       The start position.
     * @param {number} [end=array.length]   The end position.
     * @returns {Array}
     */
    fill: function fill(array, value, start = 0, end = array.length) {
        var n = array.length
        for (var i = 0; i < n; i++) {
            if ((start <= i) && (i < end)) {
                array[i] = value
            }
        }
        return array
    },



    // .findIndex(array, [predicate], [fromIndex=0])
    findIndex: function findIndex(array, predicate, fromIndex = 0) {

    },



    /**
     * @param {Array} array            The array to flatten.
     * @returns {Array}                Returns the new flattened array.
     */
    flatten: function flatten(array) {
        var data = []
        for (var even of array) {
            data = data.concat(even)
        }
        array = data
        return array
    },

    flattenDeep: function (array) {
        var flag = false
        var result = []
        for (var data of array) {
            if (Array.isArray(data)) {
                flag = true
            }
            result = result.concat(data)
        }
        if (flag) {
            return gaoran.flattenDeep(result)
        }
        return result
    },

    /**
     * @param {Array} array            The array to flatten.
     * @param {number} [depth=1]       The maximum recursion depth.
     * @returns {Array}                Returns the new flattened array.
     */
    flattenDepth: function flattenDepth(array, depth = 1) {
        var i = 1
        while (i <= depth) {
            var data = []
            for (var even of array) {
                data = data.concat(even)
            }
            array = data
            i++
        }
        return array
    },


    /**
     * 
     * 
     * @param {any} pairs              The key-value pairs.
     * @returns {object}               Returns the new object.
     */
    fromPairs: function fromPairs(pairs) {
        var result = {}
        for (var even of pairs) {
            result[even[0]] = even[1]
        }
        return result
    },




    /**
     * 
     * 
     * @param {Array} array            The array to query.
     * @returns {*}                    Returns the first element of array.
     */
    head: function head(array) {
        return array[0]
    },


    /**
     * 
     * 
     * @param {Array} array            The array to inspect.
     * @param {number} value           The value to search for.
     * @param {number} [fromIndex=0]   The index to search from.
     * @returns {number}               Returns the index of the matched value, else -1.
     */
    indexOf: function indexOf(array, value, fromIndex = 0) {
        var n = array.length
        for (var i = fromIndex; i < n; i++) {
            if (value === array[i]) {
                return i
            }
        }
        return -1
    },



    /**
     * @param {Array} array            The array to query.
     * @returns {*}                    Returns the slice of array.
     */
    initial: function initial(array) {
        array.pop()
        return array
    },

    /**
     * 
     * 
     * @param {any} array1 
     * @param {any} array2 
     * @returns 
     */
    intersection: function intersection(array1, array2) {
        var check = {}
        var result = []
        for (var even of array2) {
            check[even] = true
        }
        for (var even of array1) {
            if (check[even]) {
                result.push(even)
            }
        }
        return result
    },



    join: function join(array, separator = ',') {
        return array.join(separator)
    },


    last: function last(array) {
        return array[array.length - 1]
    },



    lastIndexOf: function lastIndexOf(array, value, fromIndex = array.length - 1) {
        for (var i = fromIndex; i >= 0; i--) {
            if (array[i] === value) {
                return i
            }
        }
        return -1
    },



    map: function map(collection, iteratee) {
        var result = []
        if (typeof (iteratee) === 'function') {
            for (var data in collection) {
                result.push(iteratee(collection[data], +data, collection))
            }
            return result
        } else {
            for (var data in collection) {
                result.push(collection[data][iteratee])
            }
            return result
        }
    },


    nth: function nth(array, n = 0) {
        var len = array.length
        if (n >= 0) {
            return array[n]
        } else if (i >= -len) {
            return array[len + n]
        }
    },

    pull: function pull(array, ...values) {
        var check = {}
        for (var even of values) {
            check[even] = true
        }
        var n = array.length
        var i = 0
        while (array[i] !== undefined) {
            if (check[array[i]]) {
                array.splice(i, 1)
                continue
            } else {
                i++
            }
        }
        return array
    },



    pullAll: function pullAll(array, values) {
        var check = {}
        for (var even of values) {
            check[even] = true
        }
        var n = array.length
        var i = 0
        while (array[i] !== undefined) {
            if (check[array[i]]) {
                array.splice(i, 1)
                continue
            } else {
                i++
            }
        }
        return array
    },

    reverse: function reverse(array) {
        var n = array.length
        var n2 = Math.floor(n / 2)
        var digit
        for (var i = 0; i <= n2; i++ , n--) {
            digit = array[i]
            array[i] = array[n - 1]
            array[n - 1] = digit
        }
        return array
    },


    sortedIndex: function sortedIndex(array, value) {
        var n = array.length
        var start = 0, end = n - 1

        while (1) {
            var mid = Math.floor((start + end) / 2)
            if (array[mid] === value) {
                return mid - 1
            }
            if (array[mid] < value) {
                if (array[mid + 1] > value) {
                    return mid + 1
                }
                start = mid
            }
            if (array[mid] > value) {
                if (array[mid - 1] < value) {
                    return mid
                }
                end = mid
            }
        }
    },

    sortedIndexOf: function sortedIndexOf(array, value) {
        var n = array.length
        var start = 0, end = n - 1
        while (1) {
            var mid = Math.floor((start + end) / 2)
            if (array[mid] < value) {
                if (array[mid + 1] > value) {
                    return -1
                }
                start = mid
            }
            if (array[mid] === value) {
                while (array[mid - 1] === value) {
                    mid--
                }
                return mid
            }
            if (array[mid] > value) {
                if (array[mid - 1] < value) {
                    return -1
                }
                end = mid
            }
        }
    },



    sortedLastIndex: function sortedLastIndex(array, value) {
        var n = array.length
        var start = 0, end = n - 1

        while (1) {
            var mid = Math.floor((start + end) / 2)
            if (array[mid] === value) {
                while (array[mid + 1] === value) {
                    mid++
                }
                return mid + 1
            }
            if (array[mid] < value) {
                if (array[mid + 1] > value) {
                    return mid + 1
                }
                start = mid
            }
            if (array[mid] > value) {
                if (array[mid - 1] < value) {
                    return mid
                }
                end = mid
            }
        }
    },


    sortedLastIndexBy: function sortedLastIndexBy(array, value, iteratee) {
        array = array.map(iteratee)
        value = iteratee(value)
        return sortedLastIndex(array, value)
    },




    zip: function zip(...arrays) {
        var output = []
        output.push(arrays.map(function (data) {
            return data[0]
        }))
        output.push(arrays.map(function (data) {
            return data[1]
        }))
        return output
    },


    unzip: function unzip(array) {
        var output = [], n = array[0].length
        for (var i = 0; i < n; i++) {
            output.push(array.map(function (data) {
                return data[i]
            }))
        }
        return output
    },






    tail: function tail(array) {
        return array.slice(1)
    },

    take: function (array, n = 1) {
        return array.slice(0, n)
    },


    takeRight: function takeRight(array, n = 1) {
        var i = array.length
        if (n >= i) {
            return array
        }
        return array.slice(i - n, i)
    },



    union: function union(...arrays) {
        var result = {}
        var output = []
        arrays.forEach(function (data) {
            data.forEach(
                function (x) {
                    if (result[x]) {
                        return
                    }
                    result[x] = true
                    output.push(x)
                }
            )
        })
        return output
    },

    uniq: function uniq(array) {
        var check = {}
        var output = []
        array.forEach(function (x) {
            if (check[x]) {
                return
            }
            check[x] = true
            output.push(x)
        })
        return output
    },
    // uniq:function(array) {
    //     var check = {}
    //     array.forEach(function(data) {
    //         if (check[data]) {
    //             check[data] = false
    //         }else{
    //             check[data] = true
    //         }
    //     })
    //     var output = []
    //     for (var data in check) {
    //         if (check[data]) {
    //             output.push(Number(data))
    //         }
    //     }
    //     return output
    // },



    flip: function flip(func) {
        return function (...args) {
            return func(...args.reverse())
        }
    },


    spread: function spread(func, start = 0) {
        return function (args) {
            return args.apply(null, args)
        }
    },




    once: function once(func) {
        var call = false
        var first
        return function (...args) {
            if (!call) {
                call = true
                return first = func(...args)
            } else {
                return first
            }
        }
    },


    negate: function negate(predicate) {
        return function (...args) {
            return !predicate(...args)
        }
    },



    unary: function unary(func) {
        return function (x) {
            return func(x)
        }
    },



    ary: function ary(func, n = func.length) {
        return function (...args) {
            if (args.length >= n) {
                args.length = n
                return func(...args)
            } else {
                return func(...args)
            }
        }
    },


    get: function get(object, path, defaultValue) {
        return path.reduce(function (a, b) {
            if ((a === undefined) || (a === null)) {
                return a
            }
            return a = a[b]
        }, object)
    },



    isArguments: function (value) {
        if (value === null || value === undefined) {
            return false
        }
        if (typeof (value.callee) === "function") {
            return true
        }
        return false

    },


    isArray: function (value) {
        if (Object.getPrototypeOf(value) === Array.prototype
            && Object.prototype.toString.call(value)) {
            return true
        }
        return false
    },

    isArrayBuffer: function (value) {
        return value instanceof ArrayBuffer
    },

    isArrayLike: function (value) {
        if (value === null) {
            return false
        }
        if (typeof value === 'string' || Object.prototype.toString.call(value) === "[object Array]") {
            return true
        }
        if (Object.prototype.toString.call(value) === "[object Object]") {
            if (value.length === undefined) {
                return false
            }
            if (value.length < 0 || value.length > Number.MAX_SAFE_INTEGER) {
                return false
            }
            return true
        }
        return false
    },



    isArrayLikeObject: function (value) {
        if (Object.prototype.toString.call(value) === "[object Object]" || Object.prototype.toString.call(value) === "[object Array]" || Object.prototype.toString.call(value) === "[object HTMLCollection]") {
            return true
        }
        return false
    },

    isBoolean: function (value) {
        if (typeof value === "boolean" || value instanceof Boolean) {
            return true
        }
        return false
    },


















    identity: function identity(...value) {
        return value[0]
    },



    iteratee: function iteratee(func) {
        if (typeof func === 'Object') {
            if (Array.isArray(func)) {
                return this.matchesProperty
            } else {
                return this.matches
            }
        }
        return this.property
    },


    property: function property(path) {
        if ((typeof (path) !== "String") && !Array.isArray(path)) {
            return undefined
        }
        if (typeof (path) === "String") {
            return function (obj) {
                var n = path.length
                var record, result
                for (var i = 0; i < n; i++) {
                    if (i === 0) {
                        if (path[i] === '.') {
                            continue
                        }
                    }
                    if (path[i] === '.') {
                        result = result[record]
                        record = ''
                    } else {
                        record = record + path[i]
                    }
                }
                return result
            }
        } else {
            return function (obj) {
                return path.reduce(function (a, b) {
                    return a[b]
                }, obj)
            }
        }

    },


    // 在对象情况下传给这个函数
    matches: function matches(source) {
        return function (obj) {
            if (source === undefined) {
                return undefined
            }
            if (typeof source !== "Object") {
                return false
            } else {
                if (Array.isArray(source)) {
                    return false
                } else {
                    for (var data in source) {
                        if (obj[data] === undefined) {
                            return false
                        }
                        if (!isEqual(obj[data], source[data])) {
                            return false
                        }
                    }
                    return true
                }
            }
        }
    },

    parse: function parse(josn) {
        var i = 0
        return parseval()
        function parseval() {
            if (josn[i] === '"') {
                return parseString()
            }
            if (josn[i] === 't' || josn[i] === 'f') {
                return parseBolean()
            }
            if (josn[i] === 'n') {
                return parseNull()
            }
            if (josn[i] === '{') {
                return parseObject()
            }
            if (josn[i] === '[') {
                return parseArray()
            }
            return parseNumber()
        }
        function parseBolean() {
            if (josn[i] === 't') {
                i += 4
                return true
            }
            i += 5
            return false
        }
        function parseNull() {
            i += 4
            return null
        }
        function parseNumber() {
            var result = ''
            var exp = /[0-9e\-]/i
            while (josn[i]) {
                if (exp.test(josn[i])) {
                    result += josn[i]
                    i++
                } else {
                    break
                }
            }
            return parseFloat(result)
        }
        function parseString() {
            i++
            var result = ''
            while (josn[i] !== '"') {
                result += josn[i]
                i++
            }
            i++
            return result
        }
        function parseArray() {
            var result = []
            i++
            while (josn[i] !== ']') {
                result.push(parseval())
                if (josn[i] === ']') {
                    break
                }
                i++
            }
            i++
            return result
        }
        function parseObject() {
            i++
            var key, value
            var result = {}
            while (josn[i] !== '}') {
                key = parseval()
                i++
                value = parseval()
                result[key] = value
            }
            i++
            return result
        }
    }





























}


