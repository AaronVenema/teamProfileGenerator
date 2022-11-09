const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util')
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const html = require("./src/html.js");

const writeToFile = util.promisify(fs.writeFile);

let teamProfileArray = [];
let teamProfile = '';
async function questions() {
  return inquirer
    .prompt([
      {
        type: 'list',
        name: 'title',
        message: 'What is the new team members role?',
        choices: ['engineer', 'intern', 'manager'],
      },
      {
        type: 'input',
        name: 'name',
        message: 'Please enter the new team members name.',
      },
      {
        type: 'input',
        name: 'id',
        message: 'Please enter the new team members id.',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Please enter the new team members email.',
      }
    ])
}

function manager() {
  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'officeNumber',
        message: 'Please enter the new managers office number.',
      }
    ])
}

function engineer() {
  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'github',
        message: 'Please enter the new engineers github profile name.',
      }
    ])
}

function intern() {
  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'school',
        message: 'Please enter the new interns associated school name.',
      }
    ])
}

function addEmployee() {
  return inquirer
    .prompt([
      {
        type: 'confirm',
        name: 'add',
        message: 'Add another employee?',
      }
    ])
}

async function main() {
  let addEmp = true

  while (addEmp) {
    let data = await questions()
    let roleData = ''
    if (data.title === 'manager') {
      roleData = await manager()
      teamProfileArray.push(new Manager(data.name, data.id, data.email, roleData.officeNumber))

    } else if (data.title === 'engineer') {
      roleData = await engineer()
      teamProfileArray.push(new Engineer(data.name, data.id, data.email, roleData.github))
    } else {
      roleData = await intern()
      teamProfileArray.push(new Intern(data.name, data.id, data.email, roleData.school))
    }

    let answer = await addEmployee()

    if (!answer.add) {
      addEmp = false
    }
  }
  for (let i = 0; i < teamProfileArray.length; i++) {
    teamProfile = teamProfile + html.generateProfile(teamProfileArray[i])
  }
  let newHtml = html.generatePage(teamProfile);
  writeToFile("./dist/index.html", newHtml);
}

main()