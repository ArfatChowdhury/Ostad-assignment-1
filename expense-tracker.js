let expenses = []; //array to store expenses
let nextId = 1; //next id for new expenses

function addExpenses(amount, category){ //function to add expenses
    const newExpense  = { 
        id: nextId++,
        amount: amount,
        category: category,
    }
    expenses.push(newExpense);
    console.log(`Added #${newExpense.id}: $${amount} (${category})`);
}
function viewExpenses(){ //function to view expenses
    for(let i = 0; i<expenses.length; i++){
        console.log(`#${expenses[i].id} | $${expenses[i].amount} | ${expenses[i].category.toUpperCase()}`);
}}
function ViewByCategory(category){ //function to view expenses by category
for(let i = 0 ; i<expenses.length; i++){
    if(expenses[i].category === category){
        console.log(`#${expenses[i].id} | $${expenses[i].amount} | ${expenses[i].category.toUpperCase()}`);
    }
}
}
function CalculateTotal(){ //function to calculate total expenses
    let  total = 0;
    for(let i = 0; i<expenses.length; i++){
        total += expenses[i].amount;
    }
    return total;
    // console.log(`Total: $${total}`);
}
function RemoveExpense(id){ //function to remove expenses
for(let i = 0; i<expenses.length; i++){
    if(expenses[i].id === id){
        expenses.splice(i,1)
        console.log(`Removed #${id}`);
viewExpenses();
        return;
    }
}
console.log(`Expense #${id} not found`);
}
function GenerateReport(){ //function to generate report
    console.log("Expense Report");
    console.log("==================");
    viewExpenses();
    console.log(`Total: $${CalculateTotal()}`);
    console.log("==================");
    console.log("Expense Report");
    console.log("==================");
}
function showMenu(){ //function to show menus
    console.log(`1. addExpenses(amount, category)
        2. viewExpenses()
        3. ViewByCategory(category)
        4. CalculateTotal()
        5. RemoveExpense(id)
        6. GenerateReport()
        7. Exit`);
}

showMenu();


// addExpenses(100, "food");
// addExpenses(200, "transport");
// addExpenses(300, "entertainment");





