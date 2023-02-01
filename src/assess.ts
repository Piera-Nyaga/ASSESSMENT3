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


let form = document.querySelector('.form')! as HTMLFormElement;
let incomedisp = document.querySelector('#incomeTr')!;
let expensedisp = document.querySelector('#expenseTr')!;
let balanceTracker = document.querySelector('.balance')!;
let incomeType=document.getElementById('incometype')! as HTMLInputElement;
// let takeIncome = document.getElementById('income')! as HTMLOptionElement;
// let takeExpense = document.getElementById('expense')!as HTMLOptionElement;
let Amount= document.getElementById('amount')! as HTMLFormElement;
let submit= document.getElementById('sub')! as HTMLButtonElement
//interface for all records

// interface records {
//     income?: [];
//     expense?: [];
// }

//class and interface for income

interface income {
    amountInc: number;
}

class Income implements income{
    amountInc: number;
    constructor(date: string, amountInc: number) {
        this.amountInc= amountInc;

    }

}

// class and interface for expenses

interface expense{
    amountExp: number;
}
    

class Expense implements expense {
    amountExp: number;
    constructor(amountExp: number) {
        this.amountExp = amountExp;

    }

} 

//class and interface for the balances

// interface details {
//      balance: number;
// }

class Details {
    // date: string;
    // name: string;
    // amountInc: number;
    private balance: number=0;
    // expenses: Expense[] = [];

    // constructor(date: string, amountInc: number, name: string) {
    //     this.date = date;
    //     this.name= name;
    //     this.amountInc= amountInc;

    // }
    // get the balance income- expenses
    
    getBalance(amountInc:number, amountExp:number) {
        this.balance = amountInc - amountExp
        return this.balance;
    }

}

const Consumed : Expense[]=[];

const Earned: Income[]=[];

function showExpense(){
    

    if (incomeType.value=='expense') {
        const totalExpense= Amount.value;
    let theExpense: Expense= totalExpense
    Consumed.push(theExpense);
    let numConsumed = Consumed.map(Number)

    const consumed= numConsumed.reduce((a, b) =>{ 
        return a+b   },0 )

    console.log(consumed)
    console.log(expensedisp)
    
    expensedisp.innerHTML='';

    let html=`
    <h2> EXPENSES </h2>
     <p> $ ${consumed} </p>
    
    `
    expensedisp.innerHTML += html;

        
    } else{
        console.log("HELLO")
    }
    
}


submit.addEventListener('click', e =>{
    e.preventDefault()
    showExpense()
})                                                        
// const showExpense = (expense: Expense) => {
//     let theexpense: string = `
//     <h3> ${expense.name}</h3>
//     <div class="expense-value">
//         <p>\$ ${expense.amountExp}</p>
//     </div>
//     <div class="date">
//         <p>${expense.date}</p>
//     </div>`
//     return theexpense
// }

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     let amountInc = form.income.value;
//     let expenseittem = form.category.value;
//     let amount = form.amount.value;
//     let date = form.date.value;
    
//     console.log(date, amountInc, amount, expenseittem);
//     let dets = new Details(date, amount, amountInc);
//     let expense = new Expense(date, amount, expenseittem);
//     dets.expenses.push(expense);

//     balanceTracker.innerHTML = `
//     <h1>Income</h1>
//         <div class="income-item">
//                 <h3>Salary</h3>
//                 <p>\$ ${dets.amountInc}</p>
//     </div>`
//     let tracker: string = ` <h1>expence tracker</h1>
//     <h2>Balance </h2>
//         <p>${dets.getBalance()}</p>
//         <br>
//         ${dets.expenses.map(expense => showExpense(expense)).join('')}
//     `


//     balanceTracker.insertAdjacentHTML('afterbegin', tracker);
//     dets.expenses.forEach(expense => {
//     expensedisp.innerHTML = `
//     <h1>expense</h1>
//     <div class="expense-item">
//         <h3>${expense.name}</h3>
//         <p>$ ${expense.amountExp}</p>
//     </div>`
//     })

// })






