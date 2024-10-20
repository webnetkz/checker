<?php

namespace App;

use App\Libs\Db;
use PDO;

require_once 'app/libs/Db.php';

class Phone {

    protected $db;
    protected $phone;

    public function __construct($phone) {
        $this->db = new Db();
        $this->phone = $phone;
    }

    public function createTableOfComments() {
        $this->db->query("CREATE TABLE IF NOT EXISTS `$this->phone` (
            id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            comment VARCHAR(700) NOT NULL,
            rate BOOLEAN DEFAULT 0,
            ip VARCHAR(25) NOT NULL,
            create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            update_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            last_request_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )");
    }


    public function createNewPhone() {
      $this->db->squery(
          "INSERT IGNORE INTO phone_numbers(phone_number, ip, request_count, messages_count, likes, dislikes, last_request_at) VALUES (:phone, :ip, 1, 0, 0, 0, NOW())",
          ['phone' => $this->phone, 'ip' => $_SERVER['REMOTE_ADDR']]
      );
    }

    public function checkPhone() {
        $this->db->query("UPDATE `phone_numbers` SET `request_count` = `request_count` + 1 WHERE `phone_number` = '$this->phone'");
        return $this->db->select("SELECT * FROM `phone_numbers` WHERE `phone_number`='$this->phone'");
    }
}
