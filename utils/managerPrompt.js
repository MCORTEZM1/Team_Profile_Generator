const managerPrompt = [
    {
        type: 'input',
        name: 'name',
        message: `Please enter the team manager's name:`
    },
    {
        type: 'input',
        name: 'id',
        message: `Please enter team manager's employee ID #:`
    },
    {
        type: 'input',
        name: 'email',
        message: `Please enter team manager's email address:`,
    
    },
    {
        type: 'input',
        name: 'office',
        message: `Please enter team manager's office number:`,
    
    },
];

module.exports = managerPrompt;