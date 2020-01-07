const account ={
    name:'Ibrahim Bocoum' ,
    expenses:[],
    addExpense: function (description, amount){
        this.expenses.push({
            description: description,
            amount :amount

        })

 },
 getAccountSummary:function(){
     let totalExpenses = 0

     this.expenses.forEach(function(expenses){
         totalExpenses = totalExpenses + expenses.amount

     })
 
     return `${this.name} has $${totalExpenses} in expenses`

 }
}
// expense => description , amount
// addExpense => description amount
// getAccountSummary => total up all expenses => Ibrahim Bocoum has $1250 in expenses

account.addExpense('Rent',950);
account.addExpense('coffe',2);
console.log(account.getAccountSummary());