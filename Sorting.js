const Array = [{
    title: 'zoom',
    body: ' im at work right now'
},{
title: 'xhealth',
body: ' everyone need health insurance'

},{
 title: 'BFood',
 body: 'Im going to eat some good food today'

},{
    title: ' Asport',
    body: ' i love footbal arsenal , aigle of Mali'
}]


const  NewArraySorted = Array.sort(( a, b) =>{
    if (a.title.toLowerCase() < b.title.toLowerCase()){
        return -1;

    }
      if (b.title.toLowerCase()< a.title.toLowerCase()){
        return 1;
    }
    else{
        return 0;
    }
});
console.log(NewArraySorted)


console.log('///////////////////')
console.log('///////////////////')

console.log('//////////////////')


/// challenges exercice

const tasks =[{
    title: 'Homework',
    completed: true 
    },
{
    title: 'exrcice',
    completed:false
},
{
    title:'shopping',
    completed: true

},
{
    title: 'cleaning',
    completed: false

}]

const SortingTaskCompleted = tasks.sort((a,b)=>{

    if (!(a.completed ) || (b.completed)){
        return -1;
    }
    else if((a.completed)||(b.completed)){
        return 1
    }
})

console.log(' soting completed task: ',SortingTaskCompleted)