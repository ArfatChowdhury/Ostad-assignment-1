let expenses = [];
let nextId = 1;

function addExpenses(amount, category){
    const newExpense  = { 
        id: nextId++,
        amount: amount,
        category: category,
    }
    expenses.push(newExpense);
    console.log(`Added #${newExpense.id}: $${amount} (${category})`);
}
function viewExpenses(){
    for(let i = 0; i<expenses.length; i++){
        console.log(`#${expenses[i].id} | $${expenses[i].amount} | ${expenses[i].category.toUpperCase()}`);
}}
function ViewByCategory(category){
for(let i = 0 ; i<expenses.length; i++){
    if(expenses[i].category === category){
        console.log(`#${expenses[i].id} | $${expenses[i].amount} | ${expenses[i].category.toUpperCase()}`);
    }
}
}
function CalculateTotal(){
    let  total = 0;
    for(let i = 0; i<expenses.length; i++){
        total += expenses[i].amount;
    }
    return total;
    // console.log(`Total: $${total}`);
}
function RemoveExpense(id){
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
function GenerateReport(){
    console.log("Expense Report");
    console.log("==================");
    viewExpenses();
    console.log(`Total: $${CalculateTotal()}`);
    console.log("==================");
    console.log("Expense Report");
    console.log("==================");
    viewExpenses();
}
function showMenu(){
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





