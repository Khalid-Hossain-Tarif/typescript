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