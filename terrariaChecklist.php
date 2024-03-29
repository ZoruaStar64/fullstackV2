<?php
include_once('functions.php');
include_once('creds.php');

function loadMainItems($link) {
    $userId = $_SESSION['user']['userId'];
    $mainMaterials = '';
    $itemClass = '';
    $currentMainItem = 1;
    $currentItem = 0;
    $query = "SELECT * FROM Trackers INNER JOIN Trackers_has_Users ON Trackers.idTrackers = Trackers_has_Users.Trackers_idTrackers WHERE Trackers_has_Users.Users_userId = '$userId'";
    $result = $link->query($query);
    while ($arraytable = $result->fetch_assoc()) {

        $trackerName = $arraytable['trackerName'];
        $trackerId = $arraytable['Trackers_idTrackers'];
        $checked = $arraytable['checked'];
        $itemId = $trackerName;

        if ($checked == 0) {
            $class = 'grayscale';
            /*echo "the check is 0";*/
        } elseif ($checked == 1) {
            $class = 'ungrayscale';
            /*echo "the check is 1";*/
        }

        $mainItem = '<div id="'. $trackerName .'"><h2 class="mainItem">'. $trackerName .'</h2><form id="checkMainItemT" name="checkItemT" action="includes/inc.checkItem.php" method="POST">
            <input type="hidden" value="' . $trackerId .'" name="hiddenId1">
            <input type="hidden" value="' . $userId .'" name="hiddenId2">

            <input type="image" value="" class="' . $class . '" src="terrariaImg/'. $trackerName .'.png" alt="'. $trackerName .'" name="checkItemT">
            </form><p class="mainRecipeButton" id="tracker'. $trackerId .'">View Recipe</p><p id="mainItemTree'. $currentMainItem .'">Show crafting tree</p>';

        if ($trackerId > 0 && $trackerId < 7) {
            $itemClass = 'mainItemMatsT1';
            if ($trackerId == 4) {
                $itemId = 'Obsidian_Skull1';
            }
            $item = '<div id="'. $itemId .'" class="'. $itemClass .'"><h2 style="" class="itemTH2Center">'. $trackerName .'</h2><form style="" id="checkTItemT" name="checkItemT" action="includes/inc.checkItem.php" method="POST">
            <input type="hidden" value="' . $trackerId .'" name="hiddenId1">
            <input type="hidden" value="' . $userId .'" name="hiddenId2">

            <input type="image" value="" class="' . $class . '" src="terrariaImg/'. $trackerName .'.png" alt="'. $trackerName .'" name="checkItemT">
            </form><p class="recipeButton1" id="tracker'. $trackerId .'">View Recipe</p></div>';
            $mainMaterials .= $item;
        }

        if ($trackerId == 7) {
            echo $mainItem;
            echo '<div class="panel'. $currentMainItem .' Terraspark">
                    '. $mainMaterials .'
                   </div>
                   </div>';
            $currentMainItem++;
            $mainMaterials = '';
        }

        if ($trackerId > 7 && $trackerId < 15) {
            $itemClass = 'mainItemMatsT2';
            $formClass = 'materialFormClassT2';
            $formImageClass = '';
            if ($trackerId == 10) {
                $formImageClass = 'imageGPS';
            }
            if ($trackerId == 11) {
                $itemId = 'REK3K';
            }
            if ($trackerId == 14) {
                $formImageClass = 'imagePDA';
            }
            $item = '<div id="'. $itemId .'" class="'. $itemClass .'"><h2 style="" class="itemCH2Center">'. $trackerName .'</h2><form style="" class="'. $formClass .'" id="checkCItemT" name="checkItemT" action="includes/inc.checkItem.php" method="POST">
            <input type="hidden" value="' . $trackerId .'" name="hiddenId1">
            <input type="hidden" value="' . $userId .'" name="hiddenId2">

            <input type="image" value="" class="' . $class .' ' .$formImageClass .'" src="terrariaImg/'. $trackerName .'.png" alt="'. $trackerName .'" name="checkItemT">
            </form><p class="recipeButton2" id="tracker'. $trackerId .'">View Recipe</p></div>';
            $mainMaterials .= $item;
        }

        elseif ($trackerId == 15) {
            echo $mainItem;
            echo '<div class="panel'. $currentMainItem .' Cellphone"">
                    '. $mainMaterials .'
                   </div>
                   </div>';
            $currentMainItem++;
            $mainMaterials = '';
        }

        if ($trackerId > 15 && $trackerId < 24) {
            $itemClass = 'mainItemMatsT3';
            $formClass = 'materialFormClassT3';
            if ($trackerId == 20) {
                $itemId = 'Obsidian_Skull2';
            }
            $item = '<div id="'. $itemId .'" class="'. $itemClass .'"><h2 style="" class="itemAH2Center">'. $trackerName .'</h2><form style="" class="'. $formClass .'" id="checkAItemT" name="checkItemT" action="includes/inc.checkItem.php" method="POST">
            <input type="hidden" value="' . $trackerId .'" name="hiddenId1">
            <input type="hidden" value="' . $userId .'" name="hiddenId2">

            <input type="image" value="" class="' . $class . '" src="terrariaImg/'. $trackerName .'.png" alt="'. $trackerName .'" name="checkItemT">
            </form><p class="recipeButton3" id="tracker'. $trackerId .'">View Recipe</p></div>';
            $mainMaterials .= $item;
        }

        elseif ($trackerId == 24) {
            echo $mainItem;
            echo '<div class="panel'. $currentMainItem .' AnkhShield">
                    '. $mainMaterials .'
                   </div>
                   </div>';
            $currentMainItem++;
            $mainMaterials = '';
        }

        if ($trackerId > 24 && $trackerId < 45) {
            $formImageClass = 'materialFormClassT4';
            $itemClass = 'mainItemMatsT4';
            $item = '<div id="'. $itemId .'" class="'. $itemClass .'"><h2 style="" class="itemZH2Center">'. $trackerName .'</h2><form style="" id="checkZItemT" name="checkItemT" action="includes/inc.checkItem.php" method="POST">
            <input type="hidden" value="' . $trackerId .'" name="hiddenId1">
            <input type="hidden" value="' . $userId .'" name="hiddenId2">

            <input type="image" value="" class="' . $class . ' '. $formImageClass .'" src="terrariaImg/'. $trackerName .'.png" alt="'. $trackerName .'" name="checkItemT">
            </form><p class="recipeButton4" id="tracker'. $trackerId .'">View Recipe</p></div>';
            $mainMaterials .= $item;
        }

        elseif ($trackerId == 45) {
            echo $mainItem;
            echo '<div class="panel'. $currentMainItem .' Zenith">
                    '. $mainMaterials .'
                   </div>
                   </div>';
            $currentMainItem++;
        }
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
<div class="itemContainer">

    <?php loadMainItems($link); ?>

</div>

<div id="itemCraftGuideModal" class="craftGuideStyleModal" style="display: none">
    <p id='closeBox'>&times;</p>

</div>

<script src="JS/terraria.js"></script>
</body>
</html>
