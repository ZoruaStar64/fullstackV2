<?php
session_start();
require_once('creds.php');

$showloggedin = false;
$profilePicture = "img/notLoggedIn.png";
$userName = "Not logged in";
$userId = 0;

require_once('functions.php');

$details = userCreds();
$profilePicture = $details["profilePicture"];
$userName = $details["userName"];
$bio = $details["bio"];
/*echo $userName;
echo $profilePicture;
echo $bio;*/
?>

<!doctype html>
<html lang="en">
<head>
    <link rel="stylesheet" href="CSS/profile.css">
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
        <div><a href='mainMenu.php'><figure><img class="linkButtons" src='img/MainMenuButton.png' alt='main menu button'></figure></a></div>
        <div><a href='index.php?logout'><figure><img class="linkButtons" src='img/LogoutButton.png' alt='Logout button'></figure></a></div>
    </div>
</div>
<div class="pageContainer">

    <div class="profileContainer">

        <div class="userContainer">
            <div id="profilePictureContainer">
            <img style="" id="profilePicture" src="<?php echo $profilePicture ?>" width="100px" height="100px" alt="Profile Picture">
        </div>
            <img src="img/EmptyBlock.png" style=" margin: 2.5% 0 0 10px" >
            <p id="name" ><?php echo $userName ?></p>
        </div>

        <div class="bioContainer">
            <p style="text-align: center"><?php echo $bio; ?></p>
        </div>


        <a href="editProfile.php"><div class="editProfile">Edit Bio</div></a>


        <div class="gameContainer">
            <?php
            loadFavoritedGames($link);
            ?>
<!--            <img id="gameOrder" src="img/emptyTracker.png">
            <img id="gameOrder" src="img/emptyTracker.png">
            <img id="gameOrder" src="img/emptyTracker.png">
            <img id="gameOrder" src="img/emptyTracker.png">
            <img id="gameOrder" src="img/emptyTracker.png">-->
            <a href="#" style="float: right; margin-right: 10px">See more</a>
        </div>
    </div>

</div>
<script src="JS/profile.js"></script>
</body>
</html>
