# CLI Expense Tracker

A comprehensive command-line expense tracker application built with pure JavaScript that demonstrates core JavaScript concepts including variables, data types, control flow, functions, and console-based interactions.

## 🎯 Project Overview

This project serves as a practical implementation of JavaScript fundamentals, showcasing:

- **Variables & Data Types**: Proper use of `const`, `let`, and `var`
- **Template Literals & String Methods**: Modern string manipulation techniques
- **Console Debugging**: Effective use of `console.log()`, `console.error()`, and `console.warn()`
- **Control Flow**: If/else statements, switch statements, and nested conditionals
- **Loops**: For loops, while loops, and array methods with callbacks
- **Functions**: Function declarations, arrow functions, default parameters, and rest/spread operators

## 🚀 Quick Start

### Option 1: Browser Console (Recommended for beginners)

1. Open any webpage in your browser
2. Press `F12` or right-click → "Inspect"
3. Go to the "Console" tab
4. Copy and paste the entire `expense-tracker.js` code
5. Press Enter to run
6. Use the functions interactively

### Option 2: Node.js

1. Install Node.js from [nodejs.org](https://nodejs.org/)
2. Save the `expense-tracker.js` file to your computer
3. Open terminal/command prompt
4. Navigate to the file directory
5. Run: `node expense-tracker.js`

## 📋 Available Functions

### Core Functions

| Function | Description | Example |
|----------|-------------|---------|
| `addExpense(amount, category, description)` | Add a new expense | `addExpense(25.50, "food", "Lunch")` |
| `viewAllExpenses()` | Display all expenses | `viewAllExpenses()` |
| `viewByCategory(category)` | Show expenses by category | `viewByCategory("food")` |
| `calculateTotal(category)` | Calculate total expenses | `calculateTotal("food")` |
| `removeExpense(id)` | Remove expense by ID | `removeExpense(1)` |
| `generateReport()` | Generate detailed report | `generateReport()` |

### Utility Functions

| Function | Description | Example |
|----------|-------------|---------|
| `filterExpenses(criteria)` | Filter expenses by criteria | `filterExpenses({category: "food", minAmount: 10})` |
| `editExpense(id, updates)` | Edit existing expense | `editExpense(1, {amount: 30, description: "Updated"})` |
| `formatCurrency(amount)` | Format amount as currency | `formatCurrency(25.50)` |

### Demonstration Functions

| Function | Description | Example |
|----------|-------------|---------|
| `demonstrateTypeCoercion()` | Show type coercion examples | `demonstrateTypeCoercion()` |
| `demonstrateVariableScoping()` | Show var/let/const differences | `demonstrateVariableScoping()` |

## 💰 Valid Categories

- `food`
- `transport`
- `entertainment`
- `utilities`
- `shopping`
- `health`
- `education`

## 📝 Usage Examples

### Basic Usage

```javascript
// Initialize the tracker
// (automatically done when script loads)

// Add some expenses
addExpense(25.50, "food", "Lunch at restaurant");
addExpense(45.00, "transport", "Gas for car");
addExpense(12.99, "entertainment", "Movie ticket");

// View all expenses
viewAllExpenses();

// Calculate total
calculateTotal();

// View by category
viewByCategory("food");

// Generate report
generateReport();
```

### Advanced Usage

```javascript
// Test type coercion
addExpense("15.50", "entertainment", "String amount test");

// Filter expenses
const filtered = filterExpenses({category: "food", minAmount: 10});

// Edit an expense
editExpense(1, {amount: 30, description: "Updated lunch"});

// Remove an expense
removeExpense(2);

// Demonstrate JavaScript concepts
demonstrateTypeCoercion();
demonstrateVariableScoping();
```

## 🎓 JavaScript Concepts Demonstrated

### 1. Variables & Data Types

```javascript
// const for constants
const EXPENSE_CATEGORIES = ['food', 'transport', 'entertainment'];

// let for dynamic values
let expenses = [];
let nextId = 1;

// var demonstration (function-scoped)
var globalConfig = { maxExpenseAmount: 10000 };
```

### 2. Template Literals & String Methods

```javascript
// Template literals
const formatExpenseDisplay = (expense) => {
    return `ID: ${expense.id} | $${expense.amount} | ${expense.category}`;
};

// String methods
const sanitizeInput = (input) => {
    return input.trim().toLowerCase();
};
```

### 3. Console Debugging

```javascript
const showSuccess = (message) => {
    console.log(`✅ ${message}`);
};

const showError = (message) => {
    console.error(`❌ Error: ${message}`);
};

const showWarning = (message) => {
    console.warn(`⚠️  Warning: ${message}`);
};
```

### 4. Control Flow

```javascript
// If/else statements
const validateInput = (input, type) => {
    if (type === 'amount') {
        const amount = parseFloat(input);
        if (isNaN(amount) || amount <= 0) {
            return { isValid: false, message: 'Amount must be positive' };
        }
        return { isValid: true, value: amount };
    }
    // ... more conditions
};

// Switch statement
const handleMenuChoice = (choice) => {
    switch (choice) {
        case '1': addExpenseFromUser(); break;
        case '2': viewAllExpenses(); break;
        // ... more cases
    }
};
```

### 5. Loops

```javascript
// For loop
const displayExpenses = (expenseList) => {
    for (let i = 0; i < expenseList.length; i++) {
        console.log(formatExpenseDisplay(expenseList[i]));
    }
};

// While loop
const startExpenseTracker = () => {
    while (isRunning) {
        showMenu();
        // handle user input
    }
};

// Array methods with callbacks
const calculateTotal = (category = null) => {
    let relevantExpenses = expenses;
    
    if (category) {
        relevantExpenses = expenses.filter(expense => 
            expense.category.toLowerCase() === category.toLowerCase()
        );
    }
    
    const total = relevantExpenses.reduce((sum, expense) => sum + expense.amount, 0);
    return { total, count: relevantExpenses.length };
};
```

### 6. Functions

```javascript
// Function declarations
function showMenu() {
    console.log('=== EXPENSE TRACKER ===');
    console.log('1. Add Expense');
    // ... more options
}

// Arrow functions
const addExpense = (amount, category, description = "") => {
    // implementation
};

// Default parameters and rest/spread operators
const editExpense = (id, ...updates) => {
    const updatedExpense = { ...expenses[expenseIndex] };
    // process updates
};
```

## 🔧 Error Handling

The application includes comprehensive error handling:

- **Input Validation**: Validates amounts, categories, and descriptions
- **Type Coercion**: Handles string-to-number conversions gracefully
- **User Feedback**: Clear success, error, and warning messages
- **Data Integrity**: Prevents invalid data from being stored

## 📊 Sample Output

```
🚀 Expense Tracker initialized!

Available functions:
- addExpense(amount, category, description)
- viewAllExpenses()
- viewByCategory(category)
- calculateTotal(category)
- removeExpense(id)
- generateReport()
- demonstrateTypeCoercion()
- demonstrateVariableScoping()

Start by adding some expenses!

> addExpense(25.50, "food", "Lunch at restaurant")
✅ Expense added successfully! ID: 1

> viewAllExpenses()
All Expenses:
ID: 1 | $25.50 | FOOD | Lunch at restaurant | 01/15/2024

Total: $25.50

> generateReport()
EXPENSE REPORT - January 2024
================================
FOOD: $25.50 (1 expense)
================================
TOTAL: $25.50 (1 expense)
AVERAGE: $25.50 per expense
```

## 🎯 Learning Objectives

This project helps students master:

1. **JavaScript Fundamentals** (40% of evaluation)
   - Proper use of variables (`const`, `let`, `var`)
   - Data types and type coercion
   - Template literals and string methods

2. **Control Flow Implementation** (35% of evaluation)
   - Effective use of conditionals (if/else, switch)
   - Loops (for, while, array methods)
   - Functions (declarations, arrow functions, parameters)

3. **Code Structure** (15% of evaluation)
   - Clean, modular code organization
   - Proper function organization
   - Comprehensive commenting

4. **Console Interface** (10% of evaluation)
   - User-friendly command-line experience
   - Clear feedback and error messages

## 🚀 Getting Started

1. **For Beginners**: Use the browser console method
2. **For Advanced Users**: Use Node.js for a more authentic CLI experience
3. **Start Simple**: Begin with basic `addExpense()` calls
4. **Explore Features**: Gradually try more advanced functions
5. **Experiment**: Test edge cases and error conditions

## 📚 Additional Resources

- [JavaScript MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Node.js Documentation](https://nodejs.org/docs/)
- [Console API Reference](https://developer.mozilla.org/en-US/docs/Web/API/Console)

## 🤝 Contributing

This is an educational project. Feel free to:
- Add new features
- Improve error handling
- Enhance the user interface
- Add more JavaScript concept demonstrations

## 📄 License

This project is created for educational purposes as part of the JavaScript Fundamentals Practice Project.

---

**Happy Coding! 🎉** 