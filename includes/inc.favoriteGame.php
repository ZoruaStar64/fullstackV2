<?php
session_start();
include_once("../creds.php");

global $link;

function favOrUnFavGame1($link, $gameId, $userId) {

    $query = "SELECT favorited FROM Favorites WHERE Games_idGame='$gameId' AND Users_userId='$userId'";
    $result = $link->query($query);
    while ($arraytable = $result->fetch_assoc()) {
        $currentFav = $arraytable['favorited'];
    }

    if ($currentFav == 0) {
        $updatedFav = 1;
    }
    else if ($currentFav == 1) {
        $updatedFav = 0;
    }

    $updateFav = "UPDATE u3651p69583_tracker.Favorites SET favorited='$updatedFav' WHERE Games_idGame='$gameId' AND Users_userId='$userId'";
    $stmt1 = $link->prepare($updateFav);
    $stmt1->bind_param("i", $updatedFav);
    if (!$stmt1) {
        die("mysqli error: " . mysqli_error($link));
    } else {
        mysqli_stmt_execute($stmt1);

        mysqli_stmt_close($stmt1);
        header("Location: ../mainMenu.php");
    }

}
function favOrUnFavGame2($link, $gameId, $userId) {

    $query = "SELECT favorited FROM Favorites WHERE Games_idGame='$gameId' AND Users_userId='$userId'";
    $result = $link->query($query);
    while ($arraytable = $result->fetch_assoc()) {
        $currentFav = $arraytable['favorited'];
    }

    if ($currentFav == 0) {
        $updatedFav = 1;
    }
    else if ($currentFav == 1) {
        $updatedFav = 0;
    }

    $updateFav = "UPDATE u3651p69583_tracker.Favorites SET favorited='$updatedFav' WHERE Games_idGame='$gameId' AND Users_userId='$userId'";
    $stmt1 = $link->prepare($updateFav);
    $stmt1->bind_param("i", $updatedFav);
    if (!$stmt1) {
        die("mysqli error: " . mysqli_error($link));
    } else {
        mysqli_stmt_execute($stmt1);

        mysqli_stmt_close($stmt1);
        header("Location: ../profile.php?id=$userId");
    }

}

?>

<!doctype html>
<html lang="en">
<head>
    <link rel="stylesheet" href="../CSS/mainMenu.css">
    <link rel="shortcut icon" href="../img/ColoredStar.png">
    <title>Star Game Tracker</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Saira+Stencil+One&display=swap" rel="stylesheet">
</head>
<body>

<?php
if (isset($_POST["favoriteGame1"])) {

    $gameId = $_POST["hiddenId1"];
    $userId = $_POST["hiddenId2"];
    favOrUnFavGame1($link, $gameId, $userId);
}
if (isset($_POST["favoriteGame2"])) {

    $gameId = $_POST["hiddenId1"];
    $userId = $_POST["hiddenId2"];
    favOrUnFavGame2($link, $gameId, $userId);
}
?>

</body>
</html>

