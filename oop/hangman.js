// create a construtor function for the hangman game
// setup two attributes. One for the words itself. Another for the number of guess allowed
// Create two instances of it and print bith to the console


const Hangman = function (WordsSChoice, Number_0f_Attempt) {

    this.WordsSChoice = WordsSChoice ;
    this.Number_0f_Attempt = Number_0f_Attempt ;


}

const game1 = new Hangman('california', 5)
const game2= new Hangman('bamako', 4) 

console.log(game1)
console.log(game2)