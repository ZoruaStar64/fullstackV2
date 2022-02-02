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
echo "Change your Bio with this textbox here!";

?>

<form id="changeBio" action='<?php  echo htmlspecialchars($_SERVER['profile.php']); ?>' method='POST'>

    <div>
        new Bio : <input type='text' name='changedBio' value='' required>
    </div>
   <input type="hidden" name="hiddenId" value="<?php echo $userId ?>">
    <input id="creationButton" type='submit' name='changeBio' value='change Bio'>

</form>

<br>
<p>You can only submit jpg, jpeg, png and gif files<br>
make sure there aren't any spaces in the file name<br>
Instead of space use either - or _</p>

<form id="changePFP" action='includes/inc.changeBio.php' method='POST' enctype="multipart/form-data">

    <div>
       click the button below and input either a jpg or png file! <br>
        to change your Profile Picture! <br>
        <input type='file' name='changedPFP' value='' required>
    </div>
    <input type="hidden" name="hiddenId" value="<?php echo $userId ?>">
    <input id="creationButton" type='submit' name='changePFP' value='change PFP'>

</form>