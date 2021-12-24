/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

CREATE TABLE `admin` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(100) DEFAULT NULL,
  `lastName` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `token` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `admin_center` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(100) DEFAULT NULL,
  `lastName` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `token` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `chef_rayon` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(100) DEFAULT NULL,
  `lastName` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `id_admin_center` int DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `rayon` varchar(100) DEFAULT NULL,
  `token` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_admin_center` (`id_admin_center`),
  CONSTRAINT `chef_rayon_ibfk_1` FOREIGN KEY (`id_admin_center`) REFERENCES `admin_center` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(100) DEFAULT NULL,
  `id_rayon` int DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `price` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_rayon` (`id_rayon`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`id_rayon`) REFERENCES `rayon` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `promotions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `promotion` varchar(100) DEFAULT NULL,
  `id_admin_center` int DEFAULT NULL,
  `id_product` int DEFAULT NULL,
  `id_rayon` int DEFAULT NULL,
  `date_promotion` varchar(100) DEFAULT NULL,
  `status` varchar(10) DEFAULT 'false',
  PRIMARY KEY (`id`),
  KEY `id_rayon` (`id_rayon`),
  KEY `id_product` (`id_product`),
  KEY `id_admin_center` (`id_admin_center`),
  CONSTRAINT `promotions_ibfk_1` FOREIGN KEY (`id_rayon`) REFERENCES `rayon` (`id`) ON DELETE CASCADE,
  CONSTRAINT `promotions_ibfk_2` FOREIGN KEY (`id_product`) REFERENCES `products` (`id`) ON DELETE CASCADE,
  CONSTRAINT `promotions_ibfk_3` FOREIGN KEY (`id_admin_center`) REFERENCES `admin_center` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `rayon` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(100) DEFAULT NULL,
  `id_chef_rayon` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_chef_rayon` (`id_chef_rayon`),
  CONSTRAINT `rayon_ibfk_1` FOREIGN KEY (`id_chef_rayon`) REFERENCES `chef_rayon` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `admin` (`id`, `firstName`, `lastName`, `email`, `password`, `token`) VALUES
(1, ' redone', 'ehehe', 'red@gmail.com', '1234', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjQwMjU1NDU2LCJleHAiOjE2NDAyNjI2NTZ9.s0QctVMNJmaYvBIrU8VYunyFWma_TqVwHpxMxKhCCPM');


INSERT INTO `admin_center` (`id`, `firstName`, `lastName`, `email`, `password`, `token`) VALUES
(2, 'admincenter', 'redone', 'admincen43443ter12@gmail.com', '1234', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjQwMjE0NDYyLCJleHAiOjE2NDAyMjE2NjJ9.QciAwhKhJWqpH8d44N7_J4MgSv7s7kvSIYVoKvxYDJU');


INSERT INTO `chef_rayon` (`id`, `firstName`, `lastName`, `email`, `id_admin_center`, `password`, `rayon`, `token`) VALUES
(4, 'simo', 'chefRayonLastName', 'simochefrayon@gmail.com', 2, '1234', 'electronic', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNjQwMjA3ODM0LCJleHAiOjE2NDAyMTUwMzR9.Sooi_LoFWU5T0mU0Qc28iBltsHveK9pmAlxzfwWHaLs');


INSERT INTO `products` (`id`, `nom`, `id_rayon`, `quantity`, `price`) VALUES
(1, 'bimo', 1, 50, '1');


INSERT INTO `promotions` (`id`, `promotion`, `id_admin_center`, `id_product`, `id_rayon`, `date_promotion`, `status`) VALUES
(2, '50%', 2, 1, NULL, '22-12-2021', 'Processed');
INSERT INTO `promotions` (`id`, `promotion`, `id_admin_center`, `id_product`, `id_rayon`, `date_promotion`, `status`) VALUES
(3, '50%', 2, 1, NULL, '22-12-2021', 'Processed');
INSERT INTO `promotions` (`id`, `promotion`, `id_admin_center`, `id_product`, `id_rayon`, `date_promotion`, `status`) VALUES
(4, '50%', 2, 1, 1, '22-12-2021', 'Processed');

INSERT INTO `rayon` (`id`, `nom`, `id_chef_rayon`) VALUES
(1, 'electronic', 4);



/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;