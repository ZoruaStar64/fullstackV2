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
<!doctype html>
<html lang="en">
<head>
    <link rel="stylesheet" href="CSS/adminPanel.css">
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
    <h2 style="margin: 15px 0 30px 0; text-align: center">Admin Panel</h2>
</div>

<div class="mainBody">

    <div id="gameCreationBox">
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
    </div>

    <div id="itemCreationBox">
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
    </div>

    <div id="bioBox">
        <form id="changeBio" action='includes/inc.changeDetailsAdmin.php' method='POST'>
            <p>You can input a new bio here for your profile<br>
                afterwards click the change bio button!</p>
            <div>
                new Bio : <input type='text' name='changedBio' value='' required>
            </div>
            <br>
            <label>User Id:</label><select name="usersId[]" required>
                <?php
                $countUsers = "SELECT COUNT(*) as total FROM Users";
                $totalUsers = $link->query($countUsers);
                while ($arraytable2 = $totalUsers->fetch_assoc()) {
                    $userTotal = $arraytable2['total'];
                }
                for ($e = 1; $e <= $userTotal; $e++) {
                    echo '<option value="'. $e .'">'. $e .'</option>';
                }

                ?>
            </select>
            <input id="creationButton" type='submit' name='changeBio' value='change Bio'>

        </form>
    </div>

    <br>
    <div id="pfpBox">
        <p>You can only submit jpg, jpeg and png files<br>
            Instead of space use either - or _ as filename<br>
            submitting is done by inputting a valid image<br>
            and then clicking on the change pfp button</p>

        <form id="changePFP" action='includes/inc.changeDetailsAdmin.php' method='POST' enctype="multipart/form-data">

            <div>
                <input class="pictureSelector" type='file' name='changedPFP' value='' required>
            </div>
            <br>
            <label>User Id:</label><select name="usersId[]" required>
                <?php
                $countUsers = "SELECT COUNT(*) as total FROM Users";
                $totalUsers = $link->query($countUsers);
                while ($arraytable2 = $totalUsers->fetch_assoc()) {
                    $userTotal = $arraytable2['total'];
                }
                for ($e = 1; $e <= $userTotal; $e++) {
                    echo '<option value="'. $e .'">'. $e .'</option>';
                }

                ?>
            </select>
            <input id="creationButton" type='submit' name='changePFP' value='change PFP'>

        </form>
    </div>

    <div id="nickBox">
        <form id="changeNickname" action='includes/inc.changeDetailsAdmin.php' method='POST'>
            <p>You can input a new nickname here for your account<br>
                afterwards click the change nickname button!</p>
            <div>
                new Nickname : <input type='text' name='changedName' value='' required>
            </div>
            <br>
            <label>User Id:</label><select name="usersId[]" required>
                <?php
                $countUsers = "SELECT COUNT(*) as total FROM Users";
                $totalUsers = $link->query($countUsers);
                while ($arraytable2 = $totalUsers->fetch_assoc()) {
                    $userTotal = $arraytable2['total'];
                }
                for ($e = 1; $e <= $userTotal; $e++) {
                    echo '<option value="'. $e .'">'. $e .'</option>';
                }

                ?>
            </select>
            <input id="creationButton" type='submit' name='changeNickname' value='change Nickname'>

        </form>
    </div>

    <div id="genderBox">
        <form id="changeGender" action='includes/inc.changeDetailsAdmin.php' method='POST'>
            <p>You can select a different gender here for your profile<br>
                afterwards click the change gender button!</p>
            <label>Gender</label> : <select style="float: right; width: 65%; margin-right: 10px" name="gender[]" multiple="multiple" required>
                <option value="male" >Male</option>
                <option value="female">Female</option>
                <option value="secret">secret</option>
            </select>
            <br>
            <label>User Id:</label><select name="usersId[]" required>
                <?php
                $countUsers = "SELECT COUNT(*) as total FROM Users";
                $totalUsers = $link->query($countUsers);
                while ($arraytable2 = $totalUsers->fetch_assoc()) {
                    $userTotal = $arraytable2['total'];
                }
                for ($e = 1; $e <= $userTotal; $e++) {
                    echo '<option value="'. $e .'">'. $e .'</option>';
                }

                ?>
            </select>
            <input id="creationButton" type='submit' name='changeGender' value='change Gender'>

        </form>
    </div>

</div>
<footer>
    <p style="margin: 15px 0 0 15px; position: relative">&copy; 2022 SB-DEV</p>
</footer>
</div>
<script src="JS/stars.js"></script>
</body>
</html>

