const balanceEl = document.getElementById("balance");
const incomeAmountEl = document.getElementById("income-amount");
const expenseAmountEl = document.getElementById("expense-amount");
const transactionListEl = document.getElementById("transaction-list");
const transactionFormEl = document.getElementById("transaction-form");
const descriptionEl = document.getElementById("description");
const amountEl = document.getElementById("amount");

let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

transactionFormEl.addEventListener("submit", addTransaction) 

function addTransaction (e) {
    e.preventDefault();

    //get form values
    const description = descriptionEl.value.trim( );
    const amount = parseFloat(amountEl.value);

    console.log(typeof amount);

    transactions.push({
        id:  Date.now,
        descriptions:description,
        amount: amount
    })

    localStorage.setItem("transactions", JSON.stringify(transactions))

    updateTransactionList()
    updateSummary()

    transactionFormEl.reset()
}

function updateTransactionList() {
    transactionListEl.innerHTML = ""

    const sortedTransactions = [...transactions].reverse()

    sortedTransactions.forEach((transactions) => {
        createTransactionElement(transaction)
    })
}

