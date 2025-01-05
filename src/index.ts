let age: number = 30;
let msg: string = 'Tarif';

// function render(document) { //document has no type. So, compiler will guess document is implicitly a any type
//     console.log(document); 
// }


//Arrays
let numbers: number[] = [1, 2, 3, 4] //right 
let fruits: any[] = ['Banana', 'Jackfruits', 8, 3] //right
// let players: string[] = ['Ronaldo', 'Ronaldinho', 'Neymar', 7] //error: can't use 7, because this number type array


//Tuples: specific type for every array element. Not good for large arrays.
let user: [number, string] = [1, 'Khalid']
user.push(33) //TS accept to push a new element without type in tuples. This may will solve later
console.log(user)


//Enums: Should be PascalCase
const enum Size { Small = 1, Medium = 3, Large = 5 } //**enum with const gives an optimized performance during compiler.
let mySize: Size = Size.Medium
console.log(mySize)

// enum Size { Small = 1, Medium = 3, Large = 5 }
// console.log(Size )


// Function
function calculateTax(income: number, taxYear = 2022): number { //declare return type for best practice
    if(taxYear < 2022) {
        return income * 1.2;
    }
    return income * 1.3
}

calculateTax(10000)


//Objects
let employee: {
    id: number,
    phone: string,
    email?: string,
    name?: string,
    msg?: string,
    retire: (date: Date) => void
} = {
    id: 1,
    phone: '01777531675',
    email: 'khalid3063454545@gmail.com',
    retire: (date: Date) => {
        console.log(date)
    }
}
employee.name ='Khalid'
console.log(employee)


//Type Aliases
type Player = {
    id: number,
    phone: string,
    email?: string,
    name?: string,
    msg?: string,
    retire: (date: Date) => void
}

let player: Player = {
    id: 1,
    phone: '01777531675',
    email: 'khalid3063454545@gmail.com',
    retire: (date: Date) => {
        console.log(date)
    }
}
player.name ='Khalid'
console.log(player)


//Union Types
function kgToLbs(weight: number | string): number {
    if(typeof weight === 'number') {
        return weight * 2.2
    } else {
        return parseInt(weight) * 2.2
    }
}

kgToLbs(10)
kgToLbs('10kg')


//Intersection Types
type Draggable = {
    drag: () => void
}

type Resizable = {
    resize: () => void
}

type UiWidget = Draggable & Resizable

let textBox: UiWidget = {
    drag: () => {},
    resize: () => {}
}


//Literal Types (exact, specific)
let costOne: 50 = 50
// let costTwo: 100 = 50 //Type '50' is not assignable to type '100'

type Quantity = 50 | 100
let quantity: Quantity = 100

type Metric = 'cm' | 'inch'
let metric: Metric = 'cm'


//Nullable Types
function greet(name: string | null | undefined) {
    if(name) { //check name for avoid error when name is null, undefined
        console.log(name.toUpperCase());
    } else {
        console.log('Great!');
    }
}

greet(undefined)