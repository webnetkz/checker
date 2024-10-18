<?php

namespace App;

use App\Libs\Db;

require_once 'app/libs/Db.php';


class Comments {

    protected $db;
    protected $phone;
    private $phone_comments;


    public function __construct($phone) {
        $this->db = new Db();
        $this->phone = $phone;
        $this->phone_comments = $this->phone.'_comments';
    }

    public function getAllComments() {
        return $this->db->selectAll("SELECT id, `comment`, rate, create_date FROM `$this->phone_comments` ORDER BY id DESC");
    }

    public function createNewComment($comment, $rate) {
        $this->db->squery(
            "INSERT IGNORE INTO `$this->phone_comments`(comment, ip, rate) VALUES (:comment, :ip, :rate)",
            ['comment' => $comment, 'ip' => $_SERVER['REMOTE_ADDR'], 'rate' => $rate]
        );

        $like = 0; $dislike = 0;
        $rate ? $like = 1 : $dislike = 1;

        $this->db->query(
            "UPDATE `phone_numbers` SET messages_count = messages_count + 1, likes = likes + $like, dislikes = dislikes + $dislike WHERE `phone_number` = '$this->phone'"
        );
    }
}
