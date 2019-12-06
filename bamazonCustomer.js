var mysql = require("mysql");
var inquirer = require("inquirer");

// 1a)  connect to sql database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "bamazon_DB"
});

// 1b)  connect to mysql server & sql database
connection.connect(function (err) {
    if (err) throw err;
    loadProducts();
});

//========================================================================


// 2) display mysql table
// display all of the items available for sale
// Include the ids, names, and prices of products for sale.
function loadProducts() {
    connection.query("SELECT * FROM products", function (err, res) {
        console.table(res);
        start(res);
    })
};

//========================================================================
// function that prompts user to order a product


// 3a)  1st message: ask the ID of the product they would like to buy.
function start(inventory) {
    inquirer
        .prompt([{
            name: "category",
            type: "input",
            message: "Enter product ID"
        }])
        .then(function (answer) {
            var input_id = parseInt(answer.category)
            // 3b) based on their answer, fetch that product
            for (var i = 0; i < inventory.length; i++) {
                if (inventory[i].item_id === input_id) {
                    var product = inventory[i]

                    inquirer
                        .prompt([{
                            name: "quantity",
                            type: "input",
                            message: "How many do you want to purchase?"
                        }])
                        .then(function (value) {
                            var quantity = parseInt(value.quantity)

                            if (quantity > product.stock_quantity) {
                                console.log("Not enough quantity!");
                                loadProducts();
                            } else {
                                makePurchase(product, quantity);
                            }
                        });
                }
            }
        });
}

function makePurchase(product, quantity) {
    connection.query("UPDATE products SET stock_quantity = stock_quantity - ? WHERE item_id = ?",
        [quantity, product.item_id],
        function (err, res) {
            console.log("Youve just purchased " + quantity + " " + product.product_name);
            loadProducts();
        })
}

// 3c)  2nd message: Ask how many units of the product they would like to buy

// 3d)  Once the customer has placed the order, your application should check if your 
//      store has enough of the product to meet the customer's request.

// 3d2) If not, the app should log a phrase like 'Insufficient quantity!', 
//      and then prevent the order from going through.

// 3e) If store has enough of the product, fulfill the customer's order
//          This means updating the SQL database to reflect the remaining quantity.
//          Once the update goes through, show the customer the total cost of their purchase.



