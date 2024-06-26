<?php
session_start();

if (!isset($_SESSION['cart'])) {
  $_SESSION['cart'] = [];
}

$action = isset($_GET['action']) ? $_GET['action'] : '';

switch ($action) {
  case 'fetch':
    echo json_encode($_SESSION['cart']);
    break;

  case 'add':
    $input = json_decode(file_get_contents('php://input'), true);
    $product = $input['product'];
    $found = false;
    foreach ($_SESSION['cart'] as &$item) {
      if ($item['id'] == $product['id']) {
        $item['quantity']++;
        $found = true;
        break;
      }
    }
    if (!$found) {
      $product['quantity'] = 1;
      $_SESSION['cart'][] = $product;
    }
    echo json_encode(['status' => 'success']);
    break;

  case 'remove':
    $input = json_decode(file_get_contents('php://input'), true);
    $id = $input['id'];
    foreach ($_SESSION['cart'] as $key => $item) {
      if ($item['id'] == $id) {
        unset($_SESSION['cart'][$key]);
      }
    }
    $_SESSION['cart'] = array_values($_SESSION['cart']);
    echo json_encode(['status' => 'success']);
    break;

  case 'checkout':
    $_SESSION['cart'] = [];
    echo json_encode(['status' => 'success']);
    break;

  default:
    echo json_encode(['status' => 'invalid action']);
    break;
}
