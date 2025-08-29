-- Insert 5 dummy records into the Account table for testing
INSERT INTO Account (Name, ContactName, Email, Phone, AddressLine1, AddressLine2, City, State, ZipCode, TaxID, IsActive)
VALUES
  ('Acme Corp', 'John Doe', 'john.doe@acme.com', '555-1234', '123 Main St', 'Suite 100', 'Metropolis', 'NY', '10001', '123-45-6789', 1),
  ('Beta LLC', 'Jane Smith', 'jane.smith@beta.com', '555-5678', '456 Elm St', NULL, 'Gotham', 'NJ', '07001', '987-65-4321', 1),
  ('Gamma Inc', 'Alice Johnson', 'alice.j@gamma.com', '555-8765', '789 Oak Ave', 'Apt 2B', 'Star City', 'CA', '90001', '111-22-3333', 0),
  ('Delta Partners', 'Bob Brown', 'bob.brown@delta.com', '555-4321', '321 Pine Rd', NULL, 'Central City', 'IL', '60007', '222-33-4444', 1),
  ('Epsilon Group', 'Carol White', 'carol.white@epsilon.com', '555-2468', '654 Maple Dr', 'Floor 3', 'Coast City', 'FL', '33010', '333-44-5555', 0),
  ('Futura Solutions', 'David Green', 'david.green@futura.com', '555-1357', '1010 Innovation Blvd', 'Suite 200', 'Innovation City', 'TX', '73301', '444-55-6666', 1),
  ('Helix Ventures', 'Emily Black', 'emily.black@helix.com', '555-9753', '2020 Spiral Ave', NULL, 'Helix Town', 'WA', '98001', '555-66-7777', 1),
  ('Ionix Labs', 'Frank Silver', 'frank.silver@ionix.com', '555-8642', '3030 Quantum Rd', 'Lab 4', 'Ion City', 'CO', '80014', '666-77-8888', 0),
  ('Jupiter Holdings', 'Grace Gold', 'grace.gold@jupiter.com', '555-7531', '4040 Orbit St', NULL, 'Jupiter', 'FL', '33401', '777-88-9999', 1),
  ('Kappa Systems', 'Henry Blue', 'henry.blue@kappa.com', '555-6420', '5050 Sigma Dr', 'Suite 5', 'Kappaville', 'GA', '30301', '888-99-0000', 0);
