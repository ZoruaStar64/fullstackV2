<?php
session_start();

require_once('creds.php');
require_once('functions.php');
/*setcookie("userCookie", $profilePicture, $userId, $userName, time(), "/~/");*/

$creationMessage = $errorDetails['creationErr'];
$emailErr = $errorDetails['emailErr'];
$passwordErr = $errorDetails['passwordErr'];
$nicknameErr = $errorDetails['nicknameErr'];
$genderErr = $errorDetails['genderErr'];
$errCode = $errorDetails['errCode'];
if ($errCode === 1) {
    $errorClass = "errorBoxVisible";
}

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
    <meta content="width=device-width, initial-scale=1" name="viewport" />
</head>
<body>
<div class="pageContainer">
    <p id="futureUpdateButton">Future Updates</p>
    <div id="futureUpdatesContainer" style="display: none">
        <p id="closeBox3">&times;</p>
        <p> 1: Luigi's mansion 1 Tracking map.<br>
            2: Luigi's mansion 2 Tracking map.<br>
            3: Fully fix the stars being weird while scrolling.<br>
            4: Adding a reset password button which will send an e-mail.<br>
            5: fix the future updates button not working upon logging in<br>
            6: Adding support for screens above 1440px (until 1920x1080)</p>
    </div>
    <div class="errorBox <?php echo $errorClass ?>" >
        <?php
        echo $creationMessage;
        echo $emailErr;
        echo $passwordErr;
        echo $nicknameErr;
        echo $genderErr;
        ?>
    </div>
<?php

if ($showloggedin == false) {

    ?>
    <header>
    <div class="linkContainer"><a href="index.php">Home</a> <p id="loginButton">Login</p> <p id="registerButton">Register</p> <a href="about.php">About</a></div>
    </header>

    <div class="mainBody">

    <h1>Startracker</h1>
    <p style="margin: 15px 0 30px 0; text-align: center">Welcome</p>
        <p>Welcome to the Startracker website!<br><br>
        You can use this website to keep track of various games' progress that i plan to implement!<br>
        Currently the only game available is Terraria,<br>
        in which you can see the recipes on how to craft the more difficult items.<br><br>
        You will unfortunately need to make an account to access the rest of the website.<br>
        This is so checked items can stay tracked within the database.<br><br>
        Other than that i hope you will enjoy the website and that it's helpfull!</p>
</div>
    <footer>
        <p style="margin: 15px 0 0 15px; position: relative">&copy; 2022 SB-DEV</p>
    </footer>
    <?php
}
if ($showloggedin == true) {
    $details = userCreds();

    ?>
    <header>
    <div class="linkContainer"><a href="index.php">Home</a> <a href="profile.php?id=<?php echo $userId ?>">Profile</a> <a href='?logout'>Logout</a> <a href="about.php">About</a></div>
    </header>
    <div class="mainBody">
        <h1>Startracker</h1>
        <p style="margin: 15px 0 30px 0; text-align: center">Select game</p>
    </div>
    <div class="mainBodyLoggedIn">

        <div class="Favorites">
            <div class="favoriteLabel"><p class="labelText">Favorites</p></div>
        <?php loadFavoritedGames2($link); ?>
        </div>

        <div class="Divider"></div>


        <div class="Games">
            <div class="gameLabel"><p class="labelText gameLabelFix">Games</p></div>
        <?php loadGames($link); ?>
        </div>
    </div>
    <footer>
        <p style="margin: 15px 0 0 15px; position: relative">&copy; 2022 SB-DEV</p>
    </footer>
    <!--<div><a href='mainMenu.php'><figure><img src='img/MainMenuButton.png' alt='main menu button'></figure></a></div>
    <div><a href='profile.php?id=<?php /*echo $userId */?>'><figure><img src='img/ProfileButton.png' alt='Profile button'></figure></a></div>
        <div><a href='?logout'><figure><img src='img/LogoutButton.png' alt='Logout button'></figure></a></div>-->
    <?php
}

?>

<div id="modalBoxR" style="display: none;">

    <p id="closeBox1">&times;</p>
    <form id="registerForm" action='<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>' method='POST'>
        <div class="inputContainer">
            <label>Email</label> : <input type='email' name='emailReg' value='' required>
        </div>

        <div class="inputContainer">
            <label>Password</label> : <input type='text' name='passwordReg' value='' required>
        </div>

        <div class="inputContainer">
            <label>Nickname</label> : <input type='text' name='nickname' value='' required>
        </div>

        <div class="inputContainer">
            <label>Gender</label> : <select style="float: right; width: 65%; margin-right: 10px" name="gender[]" multiple="multiple" required>
                <option value="male" >Male</option>
                <option value="female">Female</option>
                <option value="secret">keep secret</option>
            </select>
        </div>

        <input id="creationButton" type='submit' name='createAcc' value='Create Account'>

    </form>
</div>

<div id="modalBoxL" style="display: none;">
    <p id="closeBox2">&times;</p>
    <form id="loginForm" action='<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>' method='POST'>

        <div class="inputContainer">
            <label>Email</label> : <input type='text' name='emailLogin' value=''>
        </div>

        <div class="inputContainer">
            <label>Password</label> : <input id="passTextbox" type='password' name='passwordLogin' value=''>
            <div id="viewPassCircle" onclick="showPassword()"></div>
        </div>

        <input id="ActualLoginButton" type='submit' name='login' value='Login'>
    </form>
</div>
    <?php


    ?>

<script src="JS/home.js"></script>
    <script src="JS/stars.js"></script>
</div>
</body>
</html>