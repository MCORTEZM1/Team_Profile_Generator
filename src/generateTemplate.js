const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');


function generateHTML(promptData) {
    console.log("promptData", promptData)
    const [ manager, engineer, intern] = promptData;
    
    const man = manager;
    const eng = promptData.filter(employee => employee.getRole() === 'Engineer'); 
    const int = promptData.filter(employee => employee.getRole() === 'Intern');

    // console.log(manager);
    // console.log("new engineer array:", eng);
    // console.log("new intern array:", int);

    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <title>Team Profile Generator</title>
    
    </head>
    
    <body>
    <header class="d-flex justify-content-center bg-danger text-light p-4 text-center fs-1">My Team</header>
        <div class="container">
            <div class="row" id= "cards">

                ${generateMan(man)}
                ${generateEng(eng)}
                ${generateInt(int)}

            </div>
        </div>
    </body>
    
    </html>`
};


 function generateMan(manager){
    return `  
        <div class="col-4"></div>
        <div class="card col-4 p-0">
            <div class="card-header bg-primary text-white fs-4">
                ${manager.name} </br>
                ${manager.getRole()}
            </div>
            <ul class="list-group list-group-flush text-center">
                <li class="list-group-item">${manager.id}</li>
                <li class="list-group-item">${manager.email}</li>
                <li class="list-group-item">${manager.officeNumber}</li>
            </ul>
        </div>
        <div class="col-4"></div>
        `;
};

function generateEng(engineersArr){  
    // console.log("generateENG LOG: ENGINEER", engineer);
    const [engineer] = engineersArr;

    const newCard = engineersArr.map(makeCard).join(" ");

    function makeCard(element, index, array) {
        const card = `  
            <div class="card col-4 p-0">
                <div class="card-header bg-primary text-white fs-4">
                    ${engineer.name} </br>
                    ${engineer.getRole()}
                </div>
                <ul class="list-group list-group-flush text-center">
                    <li class="list-group-item">${engineer.id}</li>
                    <li class="list-group-item">${engineer.email}</li>
                    <li class="list-group-item">${engineer.github}</li>
                </ul>
            </div>
        `;
        return card;
    };

    return newCard;
};

function generateInt(internsArr){
    console.log("generateINT LOG: INTERN", internsArr.length);
    
    const newCard = internsArr.map(makeCard).join("");
    console.log("newCArD:", newCard)
    
    function makeCard(element, index, internsArr){
        index++
        for(let i = 0; i <= internsArr.length; i++) {

            const [ intern ] = internsArr;
            
            const card = `
                <div class="card col-4 p-0">
                    <div class="card-header bg-primary text-white fs-4">
                        ${intern.name} </br>
                        ${intern.getRole()}
                    </div>
                    <ul class="list-group list-group-flush text-center">
                        <li class="list-group-item">${intern.id}</li>
                        <li class="list-group-item">${intern.email}</li>
                        <li class="list-group-item">${intern.school}</li>
                    </ul>
                </div>
            `;
            return card;
        }
    };
    return newCard;
};



module.exports = generateHTML;
