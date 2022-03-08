function generateHTML() {
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
        <div class="container">
            <h1 class="bg-danger text-light mt-5">My Team</h1>
            ${generateMangerCard()}
        </div>
    </body>
    
    </html>`
}

function generateMangerCard(employee){
    return `  <div class="card">
    <div class="card-body">
        <h5 class="card-title">${employee.getRole()}</h5>
        <p class="card-text">Name: Alice</p>
    </div>
</div>`
}

module.exports = generateHTML; 