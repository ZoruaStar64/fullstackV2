<?php
include_once('functions.php');
include_once('creds.php');

function loadMainItems($link) {
    $userId = $_SESSION['user']['userId'];
    $currentItem = 0;
    $query = "SELECT * FROM Trackers INNER JOIN Trackers_has_Users ON Trackers.idTrackers = Trackers_has_Users.Trackers_idTrackers WHERE Trackers_has_Users.Users_userId = '$userId'";
    $result = $link->query($query);
    while ($arraytable = $result->fetch_assoc()) {

        if ($arraytable['Trackers_idTrackers'] == 7 || 15 || 24 || 25) {
            $trackerName = $arraytable['trackerName'];
            $trackerId = $arraytable['Trackers_idTrackers'];
            $checked = $arraytable['checked'];

            if ($checked == 0) {
                $class = 'grayscale';
                /*echo "the check is 0";*/
            } elseif ($checked == 1) {
                $class = 'ungrayscale';
                /*echo "the check is 1";*/
            }
        }

        $item = '<div style="width: 75px"><form id="checkItemT" name="checkItemT" action="includes/inc.checkItem.php" method="POST">
            <input type="hidden" value="' . $trackerId .'" name="hiddenId1">
            <input type="hidden" value="' . $userId .'" name="hiddenId2">

            <input type="image" value="" class="' . $class . '" src="terrariaImg/'. $trackerName .'.png" alt="'. $trackerName .'" name="checkItemT">
            </form><p class="recipeButton" id="tracker'. $trackerId .'">View Recipe</p></div>';

    }
}

?>


<!doctype html>
<html lang="en">
<head>
    <link rel="stylesheet" href="CSS/terraria.css">
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

    <?php /*loadTerrariaItems($link);*/ ?>

<script src="JS/oldterraria.js"></script>
</body>
</html>
