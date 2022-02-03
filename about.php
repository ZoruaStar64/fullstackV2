<?php
session_start();

require_once('creds.php');
require_once('functions.php');
/*setcookie("userCookie", $profilePicture, $userId, $userName, time(), "/~/");*/

$details = userCreds();
$profilePicture = $details["profilePicture"];
$userName = $details["userName"];
$userId = $_SESSION['user']['userId'];
if ($userId ==! 0) {
    $showloggedin = true;
}

if (isset($_GET["logout"])) {
    $_SESSION = array();
    $details = array();
    $profilePicture = "img/notLoggedIn.png";
    $userName = "Not logged in";
    $userId = 0;
    $bio = "";
    session_destroy();
    $showloggedin = false;
}

?>
<!doctype html>
<html lang="en">
<head>
    <link rel="stylesheet" href="CSS/home.css">
    <link rel="shortcut icon" href="img/FavStar.png">
    <title>Star Game Tracker</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet">
</head>
<body>
<div class="pageContainer">
    <header>
        <div class="linkContainer"><a href="index.php">Home</a></div>
    </header>
    <div class="mainBody">
        <h1>Startracker</h1>
        <p style="margin: 15px 0 20px 0">About</p>
        <p>What was the reason to build this project?
            <br>
            This website was made for a fullstack project as a school assignment,<br> which uses all coding languages i've learned up until now.
            <br><br>
            Which languages does this website use?
            <br><br>
            &#9734; HTML &#9734;<br>
            &#9734; CSS &#9734;<br>
            &#9734; Javascript &#9734;<br>
            &#9734; PHP &#9734;<br>
            &#9734; Mysql &#9734;<br><br>

            What have i learned? <br><br>

            Making a login/register system in php/mysql.<br>
            Hashing / salting passwords.<br>
            Using Figma / Adobe XD.<br>
            Making a favorite system and storing this to a userprofile.<br>
            Filtering items in a database.<br>
            Sketch and design before building.

        </p>
    </div>
    <footer>
        <p style="margin: 15px 0 0 15px; position: relative">&copy; 2022 SB-DEV</p>
    </footer>
</div>
</body>
</html>
