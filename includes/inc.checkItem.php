<?php
session_start();
include_once("../creds.php");

global $link;

function checkTerrariaItem($link, $trackerId, $userId) {


    $query = "SELECT checked FROM Trackers_has_Users WHERE Trackers_idTrackers='$trackerId' AND Users_userId='$userId'";
    $result = $link->query($query);
    while ($arraytable = $result->fetch_assoc()) {
        $currentCheck = $arraytable['checked'];
    }

    if ($currentCheck == 0) {
        $updatedCheck = 1;
    }
    else if ($currentCheck == 1) {
        $updatedCheck = 0;
    }

    $updateCheck = "UPDATE u3651p69583_tracker.Trackers_has_Users SET checked='$updatedCheck' WHERE Trackers_idTrackers='$trackerId' AND Users_userId='$userId'";
    $stmt1 = $link->prepare($updateCheck);
    $stmt1->bind_param("i", $updatedCheck);
    if (!$stmt1) {
        die("mysqli error: " . mysqli_error($link));
    } else {
        mysqli_stmt_execute($stmt1);


        mysqli_stmt_close($stmt1);
        header("Location: ../terrariaChecklist.php");
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
if (isset($_POST["checkItemT_x"])) {

    $trackerId = $_POST["hiddenId1"];
    $userId = $_POST["hiddenId2"];
    checkTerrariaItem($link, $trackerId, $userId);
}
else {
    echo "function not reached";
}

?>

</body>
</html>


