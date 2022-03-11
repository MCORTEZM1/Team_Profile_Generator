const engineerPrompt = [
    {
        type: 'input',
        name: 'name',
        message: `Please enter engineer's name:`
    },
    {
        type: 'input',
        name: 'id',
        message: `Please enter engineer's employee ID #:`
    },
    {
        type: 'input',
        name: 'email',
        message: `Please enter engineer's email address:`,
    
    },
    {
        type: 'input',
        name: 'github',
        message: `Please enter engineer's GitHub username:`,
    }
];

module.exports = engineerPrompt;