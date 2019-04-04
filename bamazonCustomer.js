var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  port: 8889,
  user: "root",
  password: "root",
  database: "bamazon_db"
});
var inquirer = require("inquirer");
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});
function intro() {
  console.log("Bamazon");
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    console.log("id" + "product" + "department" + "price" + "amount");
    for (var i = 0; i < res.length; i++) {
      console.log(
        res[i].item_id +
          " | " +
          res[i].product_name +
          " | " +
          res[i].department_name +
          " | " +
          res[i].price +
          " | " +
          res[i].stock_quantity
      );
    }
    askCustomer();
  });
}

function askCustomer() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter name of product:\n",
        name: "product"
      },
      {
        type: "input",
        message: "What quantity would you like?\n",
        name: "amount"
      }
    ])
    .then(function(answer) {
      console.log(
        "You selected" + answer.amount + " of id:" + answer.product + "."
      );
    });
}
