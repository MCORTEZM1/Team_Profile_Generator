const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');


function generateHTML(promptData) {
    console.log("promptData", promptData)
    const [manager, engineer, intern] = promptData;

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
        <script src="https://kit.fontawesome.com/7491aaa980.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="../src/style.css">
        <title>Team Profile Generator</title>
    </head>
    
    <body>
    <header class="d-flex justify-content-center bg-danger text-light p-4 mb-5 text-center fs-1">My Team</header>
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


function generateMan(manager) {
    return `  
        <div class="col-4"></div>
        <div class="card col-4 p-0">
            <div class="card-header bg-primary text-white fs-4">
                ${manager.name} </br>
            <i class="fa-solid fa-mug-hot"></i> ${manager.getRole()}
            </div>
            <ul class="list-group list-group-flush text-center">
                <li class="list-group-item">ID: ${manager.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
            </ul>
        </div>
        <div class="col-4"></div>
        `;
};

function generateEng(engineersArr) {
    const newCard = engineersArr.map(makeCard).join(" ");
    function makeCard(element, index, array) {
        const card = `  
            <div class="card col-4 p-0">
                <div class="card-header bg-primary text-white fs-4">
                    ${element.name} </br>
                <i class="fa-solid fa-glasses"></i> ${element.getRole()}
                </div>
                <ul class="list-group list-group-flush text-center">
                    <li class="list-group-item">ID: ${element.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${element.email}">${element.email}</a></li>
                    <li class="list-group-item">GItHub: <a href="https://github.com/${element.github}">${element.github}</a></li>
                </ul>
            </div>
        `;
        return card;
    };
    return newCard;
};

function generateInt(internsArr) {
    console.log("generateINT LOG: INTERN", internsArr.length);

    const newCard = internsArr.map(makeCard).join('');

    function makeCard(element, index, internsArr) {
        const card = `
            <div class="card col-4 p-0">
                <div class="card-header bg-primary text-white fs-4">
                    ${element.name} </br>
                <i class="fa-solid fa-user-graduate"></i> ${element.getRole()}
                </div>
                <ul class="list-group list-group-flush text-center">
                    <li class="list-group-item"> ID: ${element.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${element.email}">${element.email}</a></li>
                    <li class="list-group-item">School: ${element.school}</li>
                </ul>
            </div>
        `;
        return card;
    };
    return newCard;
};



module.exports = generateHTML;
