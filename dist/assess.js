"use strict";
// //QUESTION THREE
// class vehicle {
//     brand: string;
//     private constructor(Brand: string) {
//         this.brand = Brand
//     }
//     // get Brand() {
//     //     return this.brand;
//     // }
// }
// const car = new (vehicle as any)("Mercedes Benz") as vehicle;
// console.log(car);
// QUESTION TWO
// function Compare(str1: string, str2: string) {
//     if (str1.length !== str2.length) {
//         return false
//     }
//     return str1.toLowerCase().split("").sort().join("") === str2.toLowerCase().split("").sort().join("")
// }
// console.log(Compare("Listen", "Silent")) //true
// console.log(Compare("Mary", "arms")) //false
// QUESTION ONE
let form = document.querySelector('.form');
let incomedisp = document.querySelector('#incomeTr');
let expensedisp = document.querySelector('#expenseTr');
let balanceTracker = document.querySelector('.balance');
let incomeType = document.getElementById('incometype');
let Amount = document.getElementById('amount');
let submit = document.getElementById('sub');
class Income {
    constructor(date, amountInc) {
        this.amountInc = amountInc;
    }
}
class Expense {
    constructor(amountExp) {
        this.amountExp = amountExp;
    }
}
//class and interface for the balances
// interface details {
//      balance: number;
// }
class Details {
    constructor() {
        this.balance = 0;
    }
    getBalance(amountInc, amountExp) {
        this.balance = amountInc - amountExp;
        return this.balance;
    }
}
const Consumed = [];
const Earned = [];
submit.addEventListener('click', e => {
    e.preventDefault();
    showExpense();
    function showExpense() {
        if (incomeType.value == 'expense') {
            const totalExpense = Amount.value;
            let theExpense = totalExpense;
            Consumed.push(theExpense);
            let numConsumed = Consumed.map(Number);
            const consumed = numConsumed.reduce((a, b) => {
                return a + b;
            }, 0);
            // console.log(consumed)
            // console.log(expensedisp)
            expensedisp.innerHTML = '';
            let html = `
    <h2> Expenses </h2>
     <p> $ ${consumed} </p>
    
    `;
            expensedisp.innerHTML += html;
        }
        else {
            const totalIncome = Amount.value;
            let theIncome = totalIncome;
            Earned.push(theIncome);
            let numEarned = Earned.map(Number);
            const earned = numEarned.reduce((a, b) => {
                return a + b;
            }, 0);
            incomedisp.innerHTML = '';
            let html = `
    <h2> Income </h2>
     <p> $ ${earned} </p>
    
    `;
            incomedisp.innerHTML += html;
        }
    }
});
