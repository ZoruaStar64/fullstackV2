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



function loadTerrariaItems($link) {

    $userId = $_SESSION['user']['userId'];
    $currentItem = 0;
    $query = "SELECT * FROM Trackers INNER JOIN Trackers_has_Users ON Trackers.idTrackers = Trackers_has_Users.Trackers_idTrackers WHERE Trackers_has_Users.Users_userId = '$userId'";
    $result = $link->query($query);
    while ($arraytable = $result->fetch_assoc()) {

        $trackerName = $arraytable['trackerName'];
        $trackerId = $arraytable['Trackers_idTrackers'];
        $checked = $arraytable['checked'];
        $currentItem += 1;

        if ($checked == 0) {
            $class = 'grayscale';
            /*echo "the check is 0";*/
        } elseif ($checked == 1) {
            $class = 'ungrayscale';
            /*echo "the check is 1";*/
        }

        $item = '<div style="width: 75px"><form id="checkItemT" name="checkItemT" action="includes/inc.checkItem.php" method="POST">
            <input type="hidden" value="' . $trackerId .'" name="hiddenId1">
            <input type="hidden" value="' . $userId .'" name="hiddenId2">

            <input type="image" value="" class="' . $class . '" src="terrariaImg/'. $trackerName .'.png" alt="'. $trackerName .'" name="checkItemT">
            </form><p class="recipeButton" id="tracker'. $trackerId .'">View Recipe</p></div>';

        if ($currentItem == 1) {
            echo '<div class="pageContainer1"><div class="Terraspark">
        <h1 id="terraSparkTitle">Terraspark</h1>

        <div id="itemCraftGuideBar1" class="craftGuideStyle">

        </div>
        
        <div id="createFrostspark">';
        }

        if ($currentItem > 0 && $currentItem < 4) {
            echo $item;
        }
        if ($currentItem == 4) {
            echo '</div>';

            echo '<div id="createLavaWaders">';
        }

        if ($currentItem > 3 && $currentItem < 7) {
            echo $item;
        }
        if ($currentItem == 7) {
            echo '</div>';

            echo '<div id="createTerraSpark">';
            echo $item;
            echo '</div></div></div>';

        }

        if ($currentItem == 8) {
            echo '<div class="pageContainer2">
                  <div class="Cellphone">
                  <h1 id="cellphoneTitle">Cellphone</h1>
                  <div id="itemCraftGuideBar2" class="craftGuideStyle">

            </div>
            <div id="createGPS">';
        }
        if ($currentItem > 7 && $currentItem < 11) {
            echo $item;
        }
        if ($currentItem == 11) {
            echo '</div><div id="createREK3K">';
            echo $item;
            echo '</div>';
        }
        if ($currentItem == 12) {
            echo '<div id="createGoblinTech">';
            echo $item;
            echo '</div>';
        }
        if ($currentItem == 13) {
            echo '<div id="createFishFinder">';
            echo $item;
            echo '</div>';
        }
        if ($currentItem == 14) {
            echo '<div id="createPhone">';
        }
        if ($currentItem > 13 && $currentItem < 16) {
            echo $item;

        }
        if ($currentItem == 15) {
            echo '</div></div></div>';
        }

        if ($currentItem == 16) {
            echo '<div class="pageContainer3">
        <div class="AnkhShield">
        <h1 id="ankhShieldTitle">Ankh Shield</h1>
        <div id="itemCraftGuideBar3" class="craftGuideStyle">

        </div>

        <div id="createArmorBracing">';
            echo $item;
            echo '</div>';
        }
        if ($currentItem == 17) {
            echo '<div id="createMedicatedBandage">';
            echo $item;
            echo '</div>';
        }
        if ($currentItem == 18) {
            echo '<div id="createCounterCurse">';
            echo $item;
            echo '</div>';
        }
        if ($currentItem == 19) {
            echo '<div id="createThePlan">';
            echo $item;
            echo '</div>';
            echo '<div id="createAnkhShield">';
        }
        if ($currentItem > 19 && $currentItem < 25) {
            echo $item;
        }
        if ($currentItem == 24) {
            echo '</div></div></div>';
        }

        if ($currentItem == 25) {
            echo '<div class="pageContainer4">
        <div class="Zenith">
        <h1 id="zenithTitle">Zenith</h1>
        <div id="itemCraftGuideBar4" class="craftGuideStyle">

        </div>

        <div id="createNightsEdge">';
        }
        if ($currentItem > 24 && $currentItem < 30) {
            echo $item;
        }
        if ($currentItem == 30) {
            echo '</div><div id="createTerrablade">';
        }
        if ($currentItem > 29 && $currentItem < 36) {
            echo $item;
        }
        if ($currentItem == 36) {
            echo '</div><div id="createZenith">';
        }
        if ($currentItem > 35 && $currentItem < 46) {
            echo $item;
        }
        if ($currentItem == 45) {
            echo '</div></div></div>';
        }
    }
}

?>

<!doctype html>
<html lang="en">
<head>
    <link rel="stylesheet" href="CSS/oldterraria.css">
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
<div>
<h1>Hi! If you're on this page then you're on the wrong page<br><br><a href="terrariaChecklist.php">Go here instead!</a></h1>
</div>
    <?php loadTerrariaItems($link); ?>

<script src="JS/oldterraria.js"></script>
</body>
</html>