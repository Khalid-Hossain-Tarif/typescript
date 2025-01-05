"use strict";
let age = 30;
let msg = 'Tarif';
let numbers = [1, 2, 3, 4];
let fruits = ['Banana', 'Jackfruits', 8, 3];
let user = [1, 'Khalid'];
user.push(33);
console.log(user);
let mySize = 3;
console.log(mySize);
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022) {
        return income * 1.2;
    }
    return income * 1.3;
}
calculateTax(10000);
let employee = {
    id: 1,
    phone: '01777531675',
    email: 'khalid3063454545@gmail.com',
    retire: (date) => {
        console.log(date);
    }
};
employee.name = 'Khalid';
console.log(employee);
//# sourceMappingURL=index.js.map