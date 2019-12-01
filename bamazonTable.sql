DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products(
  id INT NOT NULL AUTO_INCREMENT,
  item_id VARCHAR(100) NOT NULL,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price INT default 0,
  stock_quantity INT default 0,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('crayons','crayola_1', 2, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('markers','markers_1', 5, 6);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('pens','pens_1', 4, 8);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('pencils','pencils_1', 2, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('stapler','stapler_1', 12, 2);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('electric_sharpner','electric_sharpner_1', 25, 4);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('copy_paper','copy_paper_1', 22, 14);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('printer_ink','printer_ink_1', 55, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('computer_mouse','computer_mouse_1', 26, 7);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('keyboard','keyboard_1', 18, 8);




-- (index) │ id │ item_id │    product_name     │  department_name   │ price │ stock_quantity │
-- ├─────────┼────┼─────────┼─────────────────────┼────────────────────┼───────┼────────────────┤
-- │    0    │ 1  │ '1212'  │      'crayons'      │    'crayola_1'     │   2   │       10       │
-- │    1    │ 2  │ '1313'  │      'markers'      │    'markers_1'     │   5   │       6        │
-- │    2    │ 3  │ '1414'  │       'pens'        │      'pens_1'      │   4   │       8        │
-- │    3    │ 4  │ '1515'  │      'pencils'      │     'pencil_1'     │   2   │       25       │
-- │    4    │ 5  │ '1616'  │      'stapler'      │    'stapler_1'     │  12   │       1        │
-- │    5    │ 6  │ '1717'  │ 'electric_sharpner' │   'e_sharpner_1'   │  25   │       4        │
-- │    6    │ 7  │ '1818'  │    'copy_paper'     │   'copy_paper_1'   │  16   │       13       │
-- │    7    │ 8  │ '1919'  │    'printer_ink'    │  'printer_ink_1'   │  55   │       3        │
-- │    8    │ 9  │ '2020'  │  'computer_mouse'   │ 'computer_mouse_1' │  26   │       4        │
-- │    9    │ 10 │ '2121'  │     'keyboard'      │    'keyboard_1'    │  18   │       8 