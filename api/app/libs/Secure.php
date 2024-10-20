<?php

namespace App\Libs;

class Secure {


  public function __construct() {

  }


  public function fullFilterData($data = '') {
    $data = strtolower(trim($data));
    $data = preg_replace('/[^a-zA-Z0-9\-_]/', '', $data);
    $data = htmlspecialchars($data);
    
    return $data;
  }

  public function toPhone($phone) {
    $phone = preg_replace('/\D/', '', $phone);
    if (strlen($phone) >= 6 && strlen($phone) <= 20) {
        return $phone;
    }
    return null;
  }


  public function filterData($data) {
    $data = htmlspecialchars($data);
    
    return $data;
  }
}
