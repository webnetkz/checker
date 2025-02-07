<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: *');
header('Access-Control-Allow-Headers: *');
header('Access-Control-Allow-Origin: http://localhost:8080'); // Разрешите конкретный источник
header('Access-Control-Allow-Methods: POST, GET, OPTIONS'); // Укажите допустимые методы
header('Access-Control-Allow-Headers: Content-Type'); // Укажите заголовки

header('Content-Type: application/json');

use App\Phone;
use App\Messages;

require_once './settings.php';
require_once './app/Phone.php';
require_once './app/Messages.php';

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  header('Access-Control-Allow-Origin: http://localhost:8080');
  header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
  header('Access-Control-Allow-Headers: Content-Type');
  http_response_code(204);
  exit();
}


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    
    $phone = $secure->toPhone($data['phone']);
    
    $phoneClass = new Phone($phone);
    $messagesClass = new Messages($phone);

    if ($data !== null && isset($data['action'], $data['phone']) && !empty($phone)) {

      $checkPhone = $phoneClass->checkPhone();
          
      switch($data['action']) {
            case 'search_phone':
                if ($checkPhone) {
                    $data = ['data_of_phone' => $checkPhone, 'messages' => $messagesClass->getAllMessages()];
                    $data = ['success' => true, 'data' => $data];
                } else {
                  $phoneClass->createNewPhone();
                  $data = ['success' => true, 'msg' => 'Created new phone'];
                }
            break;

            case 'create_message':        
                $message = $secure->filterData($data['message']);
                $result = $messagesClass->createNewMessage($message, $data['rate']);
        
                $data = ['msg' => 'Created message', 'result' => $result];
            break;
        }
        
        echo json_encode(['success' => true, 'data' => $data]);
    } else {
        http_response_code(400);
        echo json_encode(['success' => false, 'error' => 'Invalid JSON']);
    }
} else {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method Not Allowed']);
}
