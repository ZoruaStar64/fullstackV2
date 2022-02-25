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
$gender = $details["gender"];
$email = $details["email"];
?>

<!--<meta content="width=device-width, initial-scale=1" name="viewport" />-->
<!doctype html>
<html lang="en">
<head>
    <link rel="stylesheet" href="CSS/profile.css">
    <link rel="shortcut icon" href="img/FavStar.png">
    <title>Star Game Tracker</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet">
    <meta content="width=device-width, initial-scale=1" name="viewport" />
</head>
<body>

<header>
    <div class="linkContainer"><a href="index.php">Home</a> <a href="profile.php?id=<?php echo $userId ?>">Profile</a> <a href='index.php?logout'>Logout</a> <a href="about.php">About</a></div>
</header>

<div class="pageContainer">
    <div class="titleContainer">
        <h1>Startracker</h1>
        <p style="margin: 15px 0 30px 0; text-align: center">Profile</p>
    </div>

    <div class="mainBody">
        <div class="iconArea">
            <img id="profilePicture" src="<?php echo $profilePicture ?>" alt="Profile Picture">

            <a class="changeDetails" href="editProfile.php">Change Details</a>
        </div>

        <div class="detailsArea">
        <?php echo '<p>Username: '. $userName .'</p>
                    <p>Gender: '. $gender .'</p>
                    <p>E-mail: '. $email .'</p>
                    <p>Bio: '. $bio .'</p>'; ?>
        </div>
        <div class="Favorites">
            <div class="favoriteLabel"><p class="labelText">Favorites</p></div>
            <?php loadFavoritedGames1($link); ?>
        </div>
    </div>



    <footer>
        <p style="margin: 15px 0 0 15px; position: relative">&copy; 2022 SB-DEV</p>
    </footer>

</div>
<script src="JS/stars.js"></script>
</body>
</html>
