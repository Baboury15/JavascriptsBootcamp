 // prototypes 

const person = function(firstname, lastName, country ){
    this.firstName = firstname;
    this.lastName = lastName;
    this.country =country;
}
person.prototype.getBio = function() {

return `${this.firstName} ${this.lastName} is form ${this.country}`
}
person.prototype.setName = function(fullName){

    const name = fullName.split(' ')
    this.firstName =name[0];
    this.lastName = name[1];
}



const me = new person('Ibrahim','Bocoum', 'Mali') 
me.setName('Amadou Bocoum  Mali')
const me1 = new person('malick', 'Bocoum', 'Mali')
console.log(me.getBio())  
console.log(me1.getBio()) 
