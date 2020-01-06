
const notess = ['notes1', 'notes2','notes3','note4','notes5']

console.log(notess)

let vic = notess.pop()

console.log(notess)

let removeItemByindex = notess.splice(0,1)

console.log(notess)

const  vegetables = ['turnips', 'mangoes', 'avocado', 'Aloco'];
console.log(vegetables);


console.log(vegetables.indexOf('mangoes'))

console.log(`the number of vegetable i have are ${vegetables.length}`)

let pos = 1;
let n = 2;

const removeIndexelement = vegetables.splice(pos, n);

console.log('these are the remaining elenement',vegetables);

console.log('this are the removed element',removeIndexelement);

console.log(vegetables.indexOf('Aloco'))

const notes = [{},{
    tittle: 'My next trip',
    body: ' I would like to go to japan '

},{
    tittle: ' My Job search ',
    body: ' i would like to find a job at IBM '

},{
    tittle: ' My future ',

    body:  ' i wants my brothers and i to get married this year inchallah'
}] 

// console.log(notes)

// const indexElemnt = notes.findIndex((note, index ) =>{
//     console.log(index,note)
//  return note.body ===' i wants my brothers and i to get married this year inchallah'

// });

// console.log(indexElemnt)

//  const todos =[{
//      text: 'order cat food',
//      completed : false

//  },{
//      text: 'Clean Kitchen',
//      completed: false

//  },{
//      text: 'Buy food',
//      completed: false

//  },{
//      text: 'Do work',
//      comleted: false


//  },{
//      text: 'Exercice',
//      comleted: false

//  },]


//  DeleteTodos =(todos, textTittle)=>{
//     const index = todos.findIndex((todos) =>{
//         return todos.text === textTittle;

//     });
//     if (index > -1 ){
//         todos.splice(index, 1)
//     }

//  }
// DeleteTodos(todos, 'Exercice')

//  console.log('-------')

//  console.log(todos)

                                    /// FILTERING AN ARRAY //////

const notes = [{},{
    title: 'My next trip',
    body: ' I would like to go to japan '

},{
    title: ' My Job search ',
    body: ' i would like to find a job at IBM '

},{
    title: ' My future ',

    body:  ' i wants my brothers and i to get married this year inchallah'
}] 


DeleteNOte = (notes , noteTittle)=>{
    return  notes.find((note, index) =>{
     return note. title.toLowerCase() === noteTittle.toLowerCase();
        
    }) 
}

const filteredNote = notes.filter(function(note, index ){
    const isTitleMatch = note.title.toLowercase().includes('wo')
    const isBodyMatch = note.body.toLowercase().includes('wo')

    return isTitleMatch || isBodyMatch
})
console.log(filteredNote)