<?php
session_start();
require_once('creds.php');
require_once('functions.php');
$userId = $_SESSION['user']['userId'];

print_r($userId);
if ($userId ==! 1) {
    header("Location: index.php");
}

?>
<form id="createGame" action='includes/inc.createGame.php' method='POST' enctype="multipart/form-data">

    <div>
        Game name : <input type='text' name='gameName' value='' required>
        <br>
        Game cover (Image): <input type="file" name="gameCover" value="" required>
        <br>
        Page link: <input type="text" name="pageLink" value="" required>
    </div>
    <input id="gameCreationButton" type='submit' name='createGame' value='Create Game'>

</form>

<form id="createItem" action='includes/inc.createItem.php' method='POST' enctype="multipart/form-data">

    <div>
        Tracker name : <input type='text' name='trackerName' value='' required>
        <br>
        Game id: <select name="gameId">
            <?php
            $query2 = "SELECT COUNT(*) as total FROM Games";
            $result2 = $link->query($query2);
            while ($arraytable2 = $result2->fetch_assoc()) {
                $gameTotal = $arraytable2['total'];
            }
            for ($i = 1; $i <= $gameTotal; $i++) {
                echo '<option value="'. $i .'">'. $i .'</option>';
            }

            ?>
        </select>
    </div>
    <input id="itemCreationButton" type='submit' name='createItem' value='Create Item'>

</form>
