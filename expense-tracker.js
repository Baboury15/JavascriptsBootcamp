const account ={
    name:'Ibrahim Bocoum' ,
    expenses:[],
    income:[],
    addIncome: function(description, amount){
        this.income.push({
            description: description,
            amount: amount,

        })

    },
    addExpense: function (description, amount){
        this.expenses.push({
            description: description,
            amount :amount
})


 },
 getAccountSummary:function(){
     let firstExpenses = 0;
     let secondIcome = 0;
     let finalExpense = 0;

this.expenses.forEach(function(expenses){
         firstExpenses = firstExpenses + expenses.amount
})
     this.expenses.forEach(function(income){
         secondIcome = secondIcome + income.amount
     })
     finalExpense = firstExpenses - secondIcome 
     return `${this.name} has $${finalExpense} in expenses`

 }


}
// expense => description , amount
// addExpense => description amount
// getAccountSummary => total up all expenses => Ibrahim Bocoum has $1250 in expenses

account.addExpense('Rent',950);
account.addExpense('coffe',2);
account.addExpense('medicine',30);
account.addIncome('job', 300);

console.log(account.getAccountSummary());