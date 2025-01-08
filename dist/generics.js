"use strict";
class KeyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
let pair = new KeyValuePair('1', 'Generic Classes');
let pairTwo = new KeyValuePair(1, 'Generic Classes 2');
pair.value.concat('-');
console.log(pair);
console.log(pairTwo);
class ArrayUtils {
    static wrapInArray(value) {
        return value;
    }
}
let arrays = ArrayUtils.wrapInArray(1);
console.log(arrays);
//# sourceMappingURL=generics.js.map