const generatePage = function (teamProfile) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Team Profile Generator</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css">
</head>
<body>
  <div>
    <div>
      <h1>My Team</h1>
    </div>
  </div>
  <div>
    <div>
      ${teamProfile}
    </div>
  <div>
<script src="https://kit.fontawesome.com/257de25400.js" crossorigin="anonymous"></script> 
</body>
</html>`
}

const generateProfile = function (array) {
  let roleIcon;
  let roleInfo;
  if (array.title === "manager") {
    roleIcon = `<i class="fas fa-mug-hot"></i>`
    roleInfo = `Office Number: ${array.officeNumber}`
} else if (array.title === "engineer") {
    roleIcon = `<i class="fas fa-glasses"></i>`
    roleInfo = `GitHub Username: <a href="https://github.com/${array.github}" target="_blank">${array.github}</a>`
} else if (array.title === "intern") {
    roleIcon = `<i class="fas fa-user-graduate"></i>`
    roleInfo = `School: ${array.school}`
}

return `
<div>
  <div>
    <div>
      <h2>
        ${array.name}
      </h2>
      <h2>
        ${roleIcon} ${array.title}
      </h2>
    </div>
    <div>
      <ul>
        <li> 
        Employee ID: ${array.id}
        </li>
        <li> Email: <a href="mailto:${array.email}">${array.email}</a>
        </li>
        <li>${roleInfo}
        </li>
      </ul>
    </div>
  </div>
</div>`
}

exports.generatePage = generatePage
exports.generateProfile =generateProfile