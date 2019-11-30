var mysql = require("mysql");
var inquirer = require("inquirer");

// 1a)  connect to sql database
var connection = mysql.createConnection({
    host: "localhost",
    port: 1221,
    user: "root",
    password: "",
    database: "bamazon_DB"
});

// 1b)  connect to mysql server & sql database
connection.connect(function (err) {
    if (err) throw err;
    start();
});

//========================================================================


// 2) display mysql table


//========================================================================
// function that prompts user to order a product


// 3a)  1st message: ask the ID of the product they would like to buy.
function start() {
    inquirer
        .prompt({
            name: "category",
            type: "input",
            message: "Enter product ID"
        })
        .then(function (answer) {
            // 3b) based on their answer, fetch that product

        });
}

// 3c)  2nd message: Ask how many units of the product they would like to buy

// 3d)  Once the customer has placed the order, your application should check if your 
//      store has enough of the product to meet the customer's request.

// 3d2) If not, the app should log a phrase like 'Insufficient quantity!', 
//      and then prevent the order from going through.

// 3e) If store has enough of the product, fulfill the customer's order
//          This means updating the SQL database to reflect the remaining quantity.
//          Once the update goes through, show the customer the total cost of their purchase.



