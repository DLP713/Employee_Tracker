require('dotenv').config()
const inquirer = require('inquirer');
const cTable = require('console.table');
const { clearLine } = require('inquirer/lib/utils/readline');

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + connection.threadId);
});

// Run app
function startApp() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'What would you like to do?',
            name: 'options',
            choices: [
                'View',
                'Add',
                'Update',
                'Delete'
            ]
        }
    ]).then((val) => {
        switch (val.options) {
            case 'View':
                viewOptions();
            break;

            case 'Add':
                addOptions();
            break;

            case 'Update':
                updateOptions();
            break;

            case 'Delete':
                deleteOptions();
            break;
        }
    })
};

// view options
function viewOptions() {
    inquirer.prompt ([
        {
            type: 'list',
            message: 'Select an option:',
            name: 'options',
            choices: [
                'View departments',
                'View roles',
                'View employees',
                'View employees by manager',
                'View the total utilized budget of a department'
            ]
        }
    ]).then((val) => {
        switch (val.options) {
            case 'View departments':
                viewDepartments();
            break;

            case 'View roles':
                viewRoles();
            break;

            case 'View employees':
                viewEmployees();
            break;

            case 'View employees by manager':
                viewEmployeebyManager();
            break;

            case 'View the total utilized budget of a department':
                viewBudget();
            break;
        }
    })
};

// add options
function addOptions() {
    inquirer.prompt ([
        {
            type: 'list',
            message: 'Select an option:',
            name: 'options',
            choices: [
                'Add department',
                'Add role',
                'Add employee',
            ]
        }
    ]).then((val) => {
        switch (val.options) {
            case 'Add department':
                addDepartment();
            break;

            case 'Add role':
                addRole();
            break;

            case 'Add employee':
                addEmployee();
            break;
        }
    })
};

// update functions
function updateOptions() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'Select an option:',
            name: 'options',
            choices: [
                'Update employee roles',
                'Update employee managers',
            ]
        }
    ]).then((val) => {
        switch (val.options) {
            case 'Update employee roles':
                updateEmployeeRoles();
            break;

            case 'Update employee managers':
                upddateEmployeeManagers();
            break;
        }
    })
};

// delete options
function deleteOptions() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'Select an option:',
            name: 'options',
            choices: [
                'Delete departments',
                'Delete roles',
                'Delete employees'
            ]
        }
    ]).then((val) => {
        switch (val.options) {
            case 'Delete departments':
                deleteDepartment();
            break;

            case 'Delete roles':
                deleteRoles();
            break;

            case 'Delete employees':
                deleteEmployees();
            break;
        }
    })
};

// begin user functions
// view departments
function viewEmployees () {
    
};