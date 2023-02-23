INSERT INTO department (department_name)
VALUES 
  ('Management'),
  ('Accounting'),
  ('Quality Assurance');

INSERT INTO employee_role (title, salary, department_id)
VALUES 
  ('Director', 100000, 1),
  ('Assistant Director', 80000, 1),
  ('Assistant', 65000, 1),
  ('Accounting Lead', 70000, 2),
  ('Accountant', 50000, 2),
  ('Quality Engineer', 75000, 3),
  ('Testing Engineer', 70000, 3);
  
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
  ('Jerry', 'Garcia', 1, NULL),
  ('Bob', 'Weir', 2, 1),
  ('Ron', 'McKernan', 3, 1),
  ('Phil', 'Lesh', 4, NULL),
  ('Bill', 'Kreutzmann', 5, 2),
  ('Mickey', 'Hart', 6, NULL),
  ('Owsley', 'Stanley', 7, 3);