const inquirer = require('inquirer');
const mysql = require('mysql2');
const consoleTable = require('console.table');
const util = require('util');

let connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'employee_db'
});

connection.query = util.promisify(connection.query);


connection.connect(function (err) {
    if (err) throw (err);
    firstAction();
});

console.table(
    '\n====== EMPLOYEE TRACKER =======\n'
)

const firstAction = async () => {
    try {
        let answer = await inquirer.prompt({
            name: 'action',
            type: 'list',
            message: 'What would you like to do?',
            choices: [
                'View Employees',
                'View Departments',
                'View Roles',
                'Add Employees',
                'Add Roles',
                'Update Employee Role',
                'Exit'
            ]
        });
        switch (answer.action) {
            case 'View Employees':
                viewEmployee();
                break

            case 'View Departments':
                viewDepartment();
                break

            case 'View Roles':
                viewRole();
                break

            case 'Add Employees':
                addEmployee();
                break

            case 'Add Departments':
                addDepartment();
                break

            case 'Update Employee Role':
                updateEmployee();
                break

            case 'Exit':
                connection.end();
                break;
        };
    } catch (err) {
        console.log(err);
        firstAction();
    };
}

const viewEmployee = async () => {
    try {
        console.log('View Employee');

        let query = 'SELECT * FROM employee';
        connection.query(query, function (err, res) {
            if (err) throw err;
            let employeeArray = [];
            res.forEach(employee => employeeArray.push(employee));
            console.table(employeeArray);
            firstAction();
        });
    } catch (err) {
        console.log(err);
        firstAction();
    };
}