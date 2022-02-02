<?php
session_start();
require_once('../creds.php');
require_once('../functions.php');
$userId = $_SESSION['user']['userId'];

if ($userId ==! 1) {
    header("Location: ../index.php");
}

$itemName = $_POST['trackerName'];
$gameId = $_POST['gameId'];

print_r($itemName);
echo '<br>';
print_r($gameId);

createItem($link, $itemName, $gameId);

echo "<br><a href='../gameCreatorArea.php'>Make another Item/Game</a> ";