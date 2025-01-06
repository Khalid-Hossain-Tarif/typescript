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
let player = {
    id: 1,
    phone: '01777531675',
    email: 'khalid3063454545@gmail.com',
    retire: (date) => {
        console.log(date);
    }
};
player.name = 'Khalid';
console.log(player);
function kgToLbs(weight) {
    if (typeof weight === 'number') {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
kgToLbs(10);
kgToLbs('10kg');
let textBox = {
    drag: () => { },
    resize: () => { }
};
let costOne = 50;
let quantity = 100;
let metric = 'cm';
function greet(name) {
    if (name) {
        console.log(name.toUpperCase());
    }
    else {
        console.log('Great!');
    }
}
greet(undefined);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
let log = null;
log === null || log === void 0 ? void 0 : log('a');
let speed = null;
speed = 50;
let ride = {
    speed: speed !== null && speed !== void 0 ? speed : 20
};
console.log(ride.speed);
let value;
value = 42;
value = "Hello";
value = true;
let str;
function unknownType(document) {
    if (typeof document === 'string') {
        document.toUpperCase();
    }
}
function throwError(message) {
    throw new Error(message);
}
function infiniteLoop() {
    while (true) {
        console.log("Looping forever...");
    }
}
infiniteLoop();
console.log("Looping forever...");
//# sourceMappingURL=index.js.map