<?php
session_start();
require_once('functions.php');
?>

<!doctype html>
<html lang="en">
<head>
    <link rel="stylesheet" href="CSS/mainMenu.css">
    <link rel="shortcut icon" href="img/ColoredStar.png">
    <title>Star Game Tracker</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Saira+Stencil+One&display=swap" rel="stylesheet">
</head>
<body>

<div id="navbar">
    <div class="Shine">
        <div><a href='index.php'><figure><img class="linkButtons" src='img/HomeButton.png' alt='Home button'></figure></a></div>
        <div><a href='profile.php'><figure><img class="linkButtons" src='img/ProfileButton.png' alt='main menu button'></figure></a></div>
        <div><a href='index.php?logout'><figure><img class="linkButtons" src='img/LogoutButton.png' alt='Logout button'></figure></a></div>
    </div>
</div>

<div class="pageContainer">

    <div id="row1">
    <?php
    loadGames($link);
    ?>
    </div>

</div>



</body>
</html>
