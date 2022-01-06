CREATE TABLE admin(
    id INT AUTO_INCREMENT,
    firstName VARCHAR(100),
	lastName VARCHAR(100),
   email VARCHAR(100),
   password VARCHAR(100),
   token VARCHAR(255),
   PRIMARY KEY(id)
);
CREATE TABLE admin_center(
    id INT AUTO_INCREMENT,
    firstName VARCHAR(100),
    lastName VARCHAR(100),
   email VARCHAR(100),
   password VARCHAR(100),
   token VARCHAR(255),
   PRIMARY KEY(id)
);
CREATE TABLE chef_rayon(
id INT AUTO_INCREMENT,
	firstName VARCHAR(100),
	lastName VARCHAR(100),
    email VARCHAR(100),
    id_admin_center int,
   password VARCHAR(100),
   rayon varchar(100),
   token VARCHAR(255),
   PRIMARY KEY(id)

);
CREATE TABLE promotions (
    id INT AUTO_INCREMENT,
   promotion VARCHAR(100),
	id_admin_center INT,
    id_product INT,
    id_rayon INT,
   date_promotion VARCHAR(100),

   status VARCHAR(10) DEFAULT 'notHandled',
   PRIMARY KEY(id)
);

CREATE TABLE rayon  (
id INT AUTO_INCREMENT,
   nom VARCHAR(100),
   id_chef_rayon INT,
   PRIMARY KEY(id)
);
CREATE TABLE products  (
id INT AUTO_INCREMENT,
   nom VARCHAR(100),
   id_rayon INT,
   quantity INT ,
   price VARCHAR(100),
   PRIMARY KEY(id)
);

ALTER TABLE chef_rayon
ADD FOREIGN KEY (id_admin_center) REFERENCES admin_center(id) ON DELETE CASCADE;

ALTER TABLE promotions
ADD FOREIGN KEY (id_product) REFERENCES products(id) ON DELETE CASCADE;

ALTER TABLE promotions
ADD FOREIGN KEY (id_rayon) REFERENCES rayon(id) ON DELETE CASCADE;

ALTER TABLE chef_rayon
ADD FOREIGN KEY (rayon) REFERENCES rayon(id) ON DELETE CASCADE;

ALTER TABLE promotions
ADD FOREIGN KEY (id_admin_center) REFERENCES admin_center(id) ON DELETE CASCADE;

ALTER TABLE rayon
ADD FOREIGN KEY (id_chef_rayon) REFERENCES chef_rayon(id) ON DELETE CASCADE;

ALTER TABLE products
ADD FOREIGN KEY (id_rayon) REFERENCES rayon(id) ON DELETE CASCADE;

SELECT * FROM admin_center