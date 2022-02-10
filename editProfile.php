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
$userId = $details["userId"];
$bio = $details["bio"];

?>
<!doctype html>
<html lang="en">
<head>
    <link rel="stylesheet" href="CSS/edit.css">
    <link rel="shortcut icon" href="img/FavStar.png">
    <title>Star Game Tracker</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet">
    <meta content="width=device-width, initial-scale=1" name="viewport" />
</head>
<body>
<div class="pageContainer">

    <header>
        <div class="linkContainer"><a href="index.php">Home</a> <a href="profile.php?id=<?php echo $userId ?>">Profile</a> <a href='index.php?logout'>Logout</a> <a href="about.php">About</a></div>
    </header>

    <div class="titleContainer">
        <h1>Startracker</h1>
        <p style="margin: 15px 0 30px 0; text-align: center">Profile</p>
    </div>

    <div class="mainBody">
    <div id="bioBox">
<form id="changeBio" action='includes/inc.changeDetails.php' method='POST'>
    <p>You can input a new bio here for your profile<br>
    afterwards click the change bio button!</p>
    <div>
        new Bio : <input type='text' name='changedBio' value='' required>
    </div>
   <input type="hidden" name="hiddenId" value="<?php echo $userId ?>">
    <input id="creationButton" type='submit' name='changeBio' value='change Bio'>

</form>
</div>

<br>
    <div id="pfpBox">
<p>You can only submit jpg, jpeg, png and gif files<br>
make sure there aren't any spaces in the file name<br>
Instead of space use either - or _<br>
submitting is done by inputting a valid image/gif file<br>
and then clicking on the change pfp button</p>

    <form id="changePFP" action='includes/inc.changeDetails.php' method='POST' enctype="multipart/form-data">

        <div>
            <input style="margin: 15px 0 0 25%" type='file' name='changedPFP' value='' required>
        </div>
        <input type="hidden" name="hiddenId" value="<?php echo $userId ?>">
        <input id="creationButton" type='submit' name='changePFP' value='change PFP'>

    </form>
    </div>

        <div id="nickBox">
            <form id="changeNickname" action='includes/inc.changeDetails.php' method='POST'>
                <p>You can input a new nickname here for your account<br>
                    afterwards click the change nickname button!</p>
                <div>
                    new Nickname : <input type='text' name='changedName' value='' required>
                </div>
                <input type="hidden" name="hiddenId" value="<?php echo $userId ?>">
                <input id="creationButton" type='submit' name='changeNickname' value='change Nickname'>

            </form>
        </div>

        <div id="genderBox">
            <form id="changeGender" action='includes/inc.changeDetails.php' method='POST'>
                <p>You can select a different gender here for your profile<br>
                    afterwards click the change gender button!</p>
                <label>Gender</label> : <select style="float: right; width: 65%; margin-right: 10px" name="gender[]" multiple="multiple" required>
                    <option value="male" >Male</option>
                    <option value="female">Female</option>
                    <option value="secret">keep secret</option>
                </select>
                <input type="hidden" name="hiddenId" value="<?php echo $userId ?>">
                <input id="creationButton" type='submit' name='changeGender' value='change Gender'>

            </form>
        </div>

    </div>
</div>
</body>
</html>