//Generic classes
class KeyValuePair<K, V> {
    constructor(public key: K, public value: V) {}
}

let pair =  new KeyValuePair('1', 'Generic Classes')
let pairTwo =  new KeyValuePair<number, string>(1, 'Generic Classes 2') //can declare types like <number, string>
pair.value.concat('-')
console.log(pair)
console.log(pairTwo)


//Generic functions
class ArrayUtils {
    static wrapInArray<T>(value: T) {
        return value
    }
}

let arrays = ArrayUtils.wrapInArray(1)  
console.log(arrays)