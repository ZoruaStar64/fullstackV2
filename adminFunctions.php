<?php
session_start();
require_once('creds.php');
require_once('functions.php');
$userIdREAL = $_SESSION['user']['userId'];
if ($userIdREAL ==! 1) {
    header("Location: index.php");
}
global $link;

function createGame($link, $gameName, $gameCover, $pageLink) {
    {

        $query = "INSERT INTO sborgman_startracker.Games(`gameName`, gameCover, pageLink) VALUE (?, ?, ?)";
        $stmt1 = mysqli_prepare($link, $query);
        $stmt1->bind_param("sss", $gameName, $gameCover, $pageLink);
        if (!$stmt1) {
            die("mysqli error: " . mysqli_error($link));
        } else {
            mysqli_stmt_execute($stmt1);

            echo mysqli_stmt_error($stmt1);
            mysqli_stmt_close($stmt1);
            echo "Game created!";
            header("refresh:5;url=../adminPanel.php");
        }
    }
}

function createItem($link, $itemName, $gameId) {
    {

        $query = "INSERT INTO Trackers(`trackerName`, Games_idGame) VALUE (?, ?)";
        $stmt1 = mysqli_prepare($link, $query) or die ('Error 1');
        $stmt1->bind_param("si", $itemName, $gameId) or die ('error bind');
        if (!$stmt1) {
            die("mysqli error: " . mysqli_error($link));
        } else {
            mysqli_stmt_execute($stmt1)/* or die ('Error 2')*/;

            echo mysqli_stmt_error($stmt1);
            mysqli_stmt_close($stmt1) or die ('Erroe 3');
            echo "item created!";
            header("refresh:5;url=../adminPanel.php");
        }
    }
}

function editGenderAdmin ($link, $gender, $userId) {
    $queryGender = "UPDATE sborgman_startracker.Users SET gender='$gender' WHERE userId='$userId'";
    $stmt1 = $link->prepare($queryGender);
    $stmt1->bind_param("s", $gender);
    if (!$stmt1) {
        die("mysqli error:" . mysqli_error($link));
    } else {
        mysqli_stmt_execute($stmt1);
        echo '<p>succesfully changed the gender of the user with the id: '. $userId .'!</p>';
        mysqli_stmt_close($stmt1);
        refreshDetails($link);
        header("refresh:5;url=../adminPanel.php");
    }
}

function editUsernameAdmin ($link, $username, $userId) {
    $queryUser = "UPDATE sborgman_startracker.Users SET nickname='$username' WHERE userId='$userId'";
    $stmt1 = $link->prepare($queryUser);
    $stmt1->bind_param("s", $username);
    if (!$stmt1) {
        die("mysqli error:" . mysqli_error($link));
    } else {
        mysqli_stmt_execute($stmt1);
        echo '<p>succesfully changed the username of the user with the id: '. $userId .'!</p>';
        mysqli_stmt_close($stmt1);
        refreshDetails($link);
        header("refresh:5;url=../adminPanel.php");
    }
}

function editBioAdmin ($link, $bio, $userId) {

    $queryBio = "UPDATE sborgman_startracker.Users SET bio='$bio' WHERE userId='$userId'";
    $stmt1 = $link->prepare($queryBio);
    $stmt1->bind_param("s", $bio);
    if (!$stmt1) {
        die("mysqli error: " . mysqli_error($link));
    } else {
        mysqli_stmt_execute($stmt1);

        echo '<p>succesfully changed the bio of the user with the id: '. $userId .'!</p>';
        /*echo mysqli_stmt_error($stmt1);*/
        mysqli_stmt_close($stmt1);
        refreshDetails($link);
        header("refresh:5;url=../adminPanel.php");
    }
}

function editPFPAdmin ($link, $PFP, $userId) {

    $queryPFP = "UPDATE sborgman_startracker.Users SET profilePicture='$PFP' WHERE userId='$userId'";
    $stmt1 = $link->prepare($queryPFP);
    $stmt1->bind_param("s", $PFP);
    if (!$stmt1) {
        die("mysqli error: " . mysqli_error($link));
    } else {
        mysqli_stmt_execute($stmt1);

        echo '<p>succesfully changed the pfp of the user with the id: '. $userId .'!</p>';
        /*echo mysqli_stmt_error($stmt1);*/
        mysqli_stmt_close($stmt1);
        refreshDetails($link);
        header("refresh:5;url=../adminPanel.php");
    }
}
