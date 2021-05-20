require('dotenv').config()
var inquirer = require('inquirer');
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

askForAdd();

function askForAdd() {
    return inquirer
        .prompt([
        {
            /* Pass your questions in here */
            type: "list",
            name: "add_question",
            message: "Which of the following would you like to create?",
            choices: ["Department", "Role", "Employee"]
        }
        ])
        .then(answers => {
            // Use user feedback for... whatever!!
            if(answers.add_question === "Department"){
                addDepartment();
            } 

        })
        .catch(error => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else went wrong
            }
        });
}

function addDepartment() {
    return inquirer 
        .prompt([
            {
                type: "input",
                name: "which_department",
                message: "What would you like to name the department?",
            }
        ])
        .then(answers => {
            const department = {name: answers.which_department};
            connection.query('INSERT INTO department SET ?', department, function(error, results, fields){
                console.log(results);
            })
        })
};