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

  public function toPhone($str) {
    return preg_replace('/\D/', '', $str);
  }

  public function filterData($data) {
    $data = htmlspecialchars($data);
    
    return $data;
  }
}
