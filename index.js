const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const managerPrompt = require('./utils/managerPrompt');
const menuPrompt = require('./utils/menuPrompt')
const engineerPrompt = require('./utils/engineerPrompt');
const internPrompt = require('./utils/internPrompt');
const generateHTML = require("./src/generateTemplate"); 
const writeFile = require('./utils/generate-site');
const teamMatesArr = [];


const promptManager = () => {
    return inquirer.prompt(managerPrompt)
    .then(managerData => {
        // destructure manager data to be input values
        const { name, id, email, office} = managerData;
        // create new manager using input values
        const manager = new Manager(name, id, email, office);
        // push to manager to teamMatesArr
        teamMatesArr.push(manager);

     //   return manager;
    })
};

const promptTeam = () => {
    return inquirer.prompt(menuPrompt)
    .then(({ which }) => {
        // console.log(which)
        if (which === 'Engineer') {
            return inquirer.prompt(engineerPrompt)
            .then(engineerData => {
                const { name, id, email, github} = engineerData
                const engineer = new Engineer(name, id, email, github)

                teamMatesArr.push(engineer);

              //  return engineer;
            })
            // .then(engineer => {
            //     return generateCardObj.engineerCard(engineer);
            // })
            .then(promptTeam)
        }
        else if (which === 'Intern') {
            return inquirer.prompt(internPrompt)
            .then(internData => {
                const { name, id, email, school} = internData;
                const intern = new Intern(name, id, email, school);

                teamMatesArr.push(intern);
              //  return intern;
            })
            // .then(intern => {
            //     return generateCardObj.internCard(intern);
            // })
            .then(promptTeam)
        }
        else if ( which === 'Finalize' ) {
            return teamMatesArr;
        }
    })
};

promptManager()
    .then(promptTeam)
    .then(promptData => {
       return generateHTML(promptData);
    })
    .then(HTMLtemplate => {
        return writeFile(HTMLtemplate);
    })
    .catch(err => console.log(err))

    