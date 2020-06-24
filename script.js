document.querySelector("#update_income").addEventListener("click",updateBudget);
document.querySelector("#add_expense").addEventListener("click",addExpense);

//assign variables to html elements
let monthlyBudget=document.querySelector("#monthly_budget");
let incomeInput=document.querySelector("#income_input");
let remainingBalance=document.querySelector("#remaining_balance");
let amountInput=document.querySelector("#amount_input");
let nameInput=document.querySelector("#name_input");
let expenseList=document.querySelector("#expense_list");
let totalExpenses=document.querySelector("#total_expenses");

//assign variables that we'll need to have in the calculation
let monthlyIncome=0;
let expenses=[];
let expenseTotal=0;
let balance=0;

function updateBudget(event){
    event.preventDefault();
    monthlyIncome=incomeInput.value;
    monthlyBudget.innerText="$" + monthlyIncome;
    incomeInput.value=""; 
    updateBalance();
}

function updateBalance(){
    balance = monthlyIncome-expenseTotal;
    remainingBalance.innerText="$"+balance;
    if(balance<0){
        remainingBalance.classList.remove("green");
        remainingBalance.classList.add("red");
    }else{
        remainingBalance.classList.remove("red");
        remainingBalance.classList.add("green");
    }
}

function addExpense(event){
    event.preventDefault();
    let expense={
        expenseName: nameInput.value,
        expenseAmount: amountInput.value
    };
    let newExpense=document.createElement("p");
    newExpense.innerText=expense.expenseName+": $"+expense.expenseAmount;
    expenseList.appendChild(newExpense);
    expenseAmount=parseInt(amountInput.value);
    expenses.push(expenseAmount);//adds to bottom of array
    nameInput.value="";
    amountInput.value="";
    updateExpenseTotal();
}

function updateExpenseTotal(){
    expenseTotal=0;
    for(let i=0; i < expenses.length; i++) {
        expenseTotal+=expenses[i]; // expenseTotal= expenseTotal+expense[i]
    }
    totalExpenses.innerText="$"+expenseTotal;
    updateBalance();
}