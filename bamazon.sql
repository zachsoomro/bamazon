CREATE DATABASE bamazon;
USE bamazon;
CREATE TABLE products (
  id int AUTO_INCREMENT,
  product_name varchar(30) NOT NULL,
  department_name varchar(30) NOT NULL,
  price int(30) NOT NULL,
  stock_quantity int(30) NOT NULL
  PRIMARY KEY(id)
);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("doritos", "chips", 1.00, 50),
("cheetos")("chips", 1.00, 50),
("lays", "chips", 1.00, 50),
("gatorade", "drinks", 2.00, 40),
("milk", "drink", 5.00, 20),
("water", "drink", 2.00, 80),
("hersheys", "candy", 3.00, 60),
("kitkat", "candy", 3.0, 60);
("oreo",:"candy", 3.0, 60);

select * from Products;

