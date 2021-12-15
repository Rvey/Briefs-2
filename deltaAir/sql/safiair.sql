/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

CREATE TABLE `admins` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `password` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `plans` (
  `id` int NOT NULL AUTO_INCREMENT,
  `flightCode` varchar(255) DEFAULT NULL,
  `seats` varchar(255) DEFAULT '0',
  `stopover` varchar(255) DEFAULT NULL,
  `from` varchar(255) DEFAULT NULL,
  `where` varchar(255) DEFAULT NULL,
  `departure_date` varchar(255) DEFAULT NULL,
  `arrival_date` varchar(255) DEFAULT NULL,
  `departure_time` varchar(255) DEFAULT NULL,
  `arrival_time` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `users` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `fname` varchar(255) DEFAULT NULL,
  `lname` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `seats` varchar(255) DEFAULT NULL,
  `planID` int DEFAULT NULL,
  `hotel` varchar(255) DEFAULT NULL,
  `spa` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=115 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `admins` (`id`, `password`, `email`) VALUES
(1, 'admin', 'admin@delta.com');


INSERT INTO `plans` (`id`, `flightCode`, `seats`, `stopover`, `from`, `where`, `departure_date`, `arrival_date`, `departure_time`, `arrival_time`) VALUES
(38, 'falcon', '18', 'false', 'safi', 'casablanca', '2021-12-16', '2021-12-17', '08:39', '06:38');
INSERT INTO `plans` (`id`, `flightCode`, `seats`, `stopover`, `from`, `where`, `departure_date`, `arrival_date`, `departure_time`, `arrival_time`) VALUES
(39, 'x444', '16', 'false', 'essaouira', 'casablanca', '2021-12-17', '2021-12-22', '21:00', '19:00');
INSERT INTO `plans` (`id`, `flightCode`, `seats`, `stopover`, `from`, `where`, `departure_date`, `arrival_date`, `departure_time`, `arrival_time`) VALUES
(43, 'x333', '15', 'true', 'tanger', 'marrakech', '2021-12-17', '2021-12-18', '19:29', '17:29');




/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;