const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email); 
        this.officeNumber = officeNumber;
    }

    getRole(){
        return 'Manager'; //overriding the parent class value 
    }

    getOfficeNumber(){
        return this.officeNumber;
    }
}  

module.exports = Manager; 