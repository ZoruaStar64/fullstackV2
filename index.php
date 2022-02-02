<?php
session_start();

require_once('creds.php');
require_once('functions.php');
/*setcookie("userCookie", $profilePicture, $userId, $userName, time(), "/~/");*/

$details = userCreds();
$profilePicture = $details["profilePicture"];
$userName = $details["userName"];

if (isset($_GET["logout"])) {
    /*session_start();*/
    $_SESSION = array();
    $details = array();
    $profilePicture = "img/notLoggedIn.png";
    $userName = "Not logged in";
    $userId = 0;
    $bio = "";
    session_destroy();
}

?>
<!doctype html>
<html lang="en">
<head>
    <link rel="stylesheet" href="CSS/home.css">
    <link rel="shortcut icon" href="img/ColoredStar.png">
    <title>Star Game Tracker</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Saira+Stencil+One&display=swap" rel="stylesheet">
</head>
<body>
<div class="pageContainer">



<?php

if ($showloggedin == false) {

    ?>  <div class="linkContainer"><p>Home</p>  <p>Login</p>  <p>Register</p>  <p>About</p></div>

    <!--<div id='registerButton'><figure><img src='img/Register.png' alt='Register button'></figure></div>
        <div id='loginButton'><figure><img src='img/LoginButton.png' alt='Login button'></figure></div>
        <div><a href='?logout'><figure><img src='img/LogoutButton.png' alt='Logout button'></figure></a></div>-->

    <?php
}
if ($showloggedin == true) {
    $details = userCreds();
    $profilePicture = $details["profilePicture"];
    $userName = $details["userName"];
    $bio = $details["bio"];

    ?>  <div class="linkContainer"><p>Home  Login  Register  About</p></div>

    <!--<div><a href='mainMenu.php'><figure><img src='img/MainMenuButton.png' alt='main menu button'></figure></a></div>
    <div><a href='profile.php?id=<?php /*echo $userId */?>'><figure><img src='img/ProfileButton.png' alt='Profile button'></figure></a></div>
        <div><a href='?logout'><figure><img src='img/LogoutButton.png' alt='Logout button'></figure></a></div>-->
    <?php
}

?>

    <form id="registerForm" style="display: none" action='<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>' method='POST'>
        <div class="inputContainer">
            <label>Email</label> &emsp;&ensp;&nbsp;: <input type='email' name='emailReg' value='' required>
        </div>

        <div class="inputContainer">
            <label>Password</label> &nbsp;: <input type='text' name='passwordReg' value='' required>
        </div>

        <div class="inputContainer">
            <label>Nickname</label> : <input type='text' name='nickname' value='' required>
        </div>

        <div class="inputContainer">
            <label>Gender</label> : <select style="width: 50%; margin-left: 12%" name="gender[]" multiple="multiple" required>
                <option value="male" >Male</option>
                <option value="female">Female</option>
                <option value="secret">keep secret</option>
            </select>
        </div>

        <input id="creationButton" type='submit' name='createAcc' value='Create Account'>

    </form>
    <br>

    <form id="loginForm" style="display: none" action='<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>' method='POST'>

        <div class="inputContainer">
            <label>Email</label>  &emsp;&ensp;&nbsp;: <input type='text' name='emailLogin' value=''>
        </div>

        <div class="inputContainer">
            <label>Password</label> &nbsp;: <input type='password' name='passwordLogin' value=''>
        </div>

        <input id="ActualLoginButton" type='submit' name='login' value='Login'>
    </form>
    <br>
    <?php


    ?>

<script src="JS/home.js"></script>
</div>
</body>
</html>