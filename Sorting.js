const Array = [{
    title: 'work',
    body: ' im at work right now'
},{
title: 'health',
body: ' everyone need health insurance'

},{
 title: 'Food',
 body: 'Im going to eat some good food today'

},{
    title: ' sport',
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