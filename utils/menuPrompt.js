const menuPrompt = [
    {
        type: 'list',
        name: 'which',
        message: `Would you like to add another team mate or finalize team build?`,
        choices: ['Engineer', 'Intern', 'Finalize']
    }
];

module.exports = menuPrompt;