-- Table structure for table `messages`

CREATE TABLE `messages` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `phone_number` varchar(20) NOT NULL,
  `message` text,
  `ip` varchar(45) NOT NULL,
  `rate` tinyint(1) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `phone_number_id` (`phone_number`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- Table structure for table `phone_numbers`

CREATE TABLE `phone_numbers` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `phone_number` bigint unsigned NOT NULL,
  `ip` varchar(45) NOT NULL,
  `request_count` int unsigned NOT NULL DEFAULT '1',
  `messages_count` int unsigned NOT NULL DEFAULT '0',
  `likes` int unsigned NOT NULL DEFAULT '0',
  `dislikes` int unsigned NOT NULL DEFAULT '0',
  `last_request_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `phone_number` (`phone_number`),
  UNIQUE KEY `phone_number_2` (`phone_number`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
