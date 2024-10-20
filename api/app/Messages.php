<?php

namespace App;

use App\Libs\Db;

require_once 'app/libs/Db.php';


class Messages {

    protected $db;
    protected $phone;


    public function __construct($phone) {
        $this->db = new Db();
        $this->phone = $phone;
    }

    public function getAllMessages() {
      return $this->db->selectAll("SELECT * 
                                   FROM `messages` 
                                   WHERE `phone_number` = '$this->phone'
                                   ORDER BY `id` DESC");
    }
  

    public function createNewMessage($message, $rate) {
      $result = $this->db->squery(
          "INSERT INTO `messages` (`message`, `ip`, `rate`, `phone_number`) VALUES (:messages, :ip, :rate, :phone)",
          [
              'messages' => $message,
              'ip' => $_SERVER['REMOTE_ADDR'],
              'rate' => $rate,
              'phone' => $this->phone
          ]
      );
  
      if ($result) {
        $like = 0; 
        $dislike = 0;
        $rate ? $like = 1 : $dislike = 1;
    
        $this->db->squery(
            "UPDATE `phone_numbers` SET messages_count = messages_count + 1, likes = likes + $like, dislikes = dislikes + $dislike WHERE `phone_number` = '$this->phone'"
        );
      }
      
      return $result;
  }    
}
