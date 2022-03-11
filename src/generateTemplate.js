const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');


// function generateCard(promptData) {
// // destructure team mates prompt data aka teamMatesArr 
//     const [ manager, engineer, intern] = promptData;
    
// // check if data reaches variable properly 
//     // console.log(manager);
//     // console.log(engineer)
//     // console.log(intern)

// // generate cards using array data 
//     return   promptData.forEach(employee => {
//         switch(employee.getRole()) {
//             case 'Manager':
//                 function generateMan(){
//                     return `  
//                     <div class="col4"></div>
//                     <div class="card col-4 p-0">
//                         <div class="card-header bg-primary text-white fs-4">
//                             ${manager.name} </br>
//                             ${manager.getRole()}
//                         </div>
//                         <ul class="list-group list-group-flush text-center">
//                             <li class="list-group-item">${manager.id}</li>
//                             <li class="list-group-item">${manager.email}</li>
//                             <li class="list-group-item">${manager.officeNumber}</li>
//                         </ul>
//                     </div>
//                     <div class="col4"></div>
//                     `;
//                 };
//                 generateMan();
//                 break;
//             case 'Engineer': 
//                 function generateEng(){  
//                     return `  
//                     <div class="card col-4 p-0">
//                         <div class="card-header bg-primary text-white fs-4">
//                             ${engineer.name} </br>
//                             ${engineer.getRole()}
//                         </div>
//                         <ul class="list-group list-group-flush text-center">
//                             <li class="list-group-item">${engineer.id}</li>
//                             <li class="list-group-item">${engineer.email}</li>
//                             <li class="list-group-item">${engineer.github}</li>
//                         </ul>
//                     </div>
//                     `;
//                 };
//                 generateEng();
//                 break;
//             case 'Intern':
//                 function generateInt(){
//                     return `
//                     <div class="card col-4 p-0">
//                         <div class="card-header bg-primary text-white fs-4">
//                             ${intern.name} </br>
//                             ${intern.getRole()}
//                         </div>
//                         <ul class="list-group list-group-flush text-center">
//                             <li class="list-group-item">${intern.id}</li>
//                             <li class="list-group-item">${intern.email}</li>
//                             <li class="list-group-item">${intern.school}</li>
//                         </ul>
//                     </div>
//                     `;
//                 };
//                 generateInt();
//                 break;
//         }
//     })
// };


function generateHTML(promptData) {
    const [ manager, engineer, intern] = promptData;
    console.log(manager);
    console.log(engineer)
    console.log(intern)

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
    <h1 class="bg-danger text-light mt-5 text-center">My Team</h1>
        <div class="container">
            <div class="row">
            ${generateMan(manager)}
            ${generateEng(engineer)}
            ${generateInt(intern)}
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

function generateEng(engineer){  
    return `  
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
};

function generateInt(intern){
    return `
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
};



module.exports = generateHTML;
