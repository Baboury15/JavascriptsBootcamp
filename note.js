
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

                    // findIndex //

deleteNote = (notes, noteTitle) =>{
    const index = notes.findIndex((note, index) =>{
    

        return note.title === noteTitle

    })
    if (index > -1){
        notes.splice(index, 1)
    }

}

deleteNote(notes, 'My future')
 console.log(deleteNote)

console.log(notes)
                        // Using find //

const findNote =(notes, noteTitle)=>{

    return notes.find((note, index) =>{
        return note.title.toLowerCase() === noteTitle.toLowerCase();

    
    })
}
 
                       // Filltering //

const filtering = notes.filter((note, index)=>{

    const istitleMatch = note.title.toLowerCase().includes('wo') 
    const isBodyMatch = note.body.toLowerCase().includes('wo')

    return istitleMatch ||isBodyMatch;
})

console.log(filtering)


const findNote = (notes, query) =>{

    return notes.filter((note ,index )=>{
        const istitleMatch = note.title.toLowerCase().incluldes(query.toLowerCase);
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase)

        return istitleMatch || isBodyMatch;
    })



}



console.log(findNote(notes,  'My future'))





const sortNotes = (notes)=>{
    notes.sort(( a,b)=>{
        if (a.title< b.title){
            return -1
        }
        else if (b.title<  a.title){
            return 1
        }
        else{
            return 0
        }

        
    })
}

sortNotes(notes)
console.log(notes)


const todos = [{
    title: 'work ',
    completed : true
},{
    title: 'Sport',
    completed: true
},{
    title: 'call',
    completed: false,

},{
    title:'music',
    completed: false,

},{
    title: ' school',
    completed: true,
}]