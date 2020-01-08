console.log("this is javascript document")

//query and remove
const p = document.querySelector('p')
//p.remove();
console.log(p)

const paragraph = document.querySelectorAll('p');
paragraph.forEach((p)=>{
    p.textContent = "********"
})

const newPara = document.createElement('p')
newPara.textContent = 'this is a new paragraph in javascript '
document.querySelector('body').appendChild(newPara)