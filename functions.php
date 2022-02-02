<?php
session_start();
require_once('creds.php');



global $link;
$showloggedin = false;


/*$query = "SELECT * FROM Users";
$result = $link->query($query);*/
/*JSC($result);*/
/*JSC($link);*/

/*while ($row = $result->fetch_assoc()){
    JSC($row['nickname'] );
}*/

/*function JSC($input){
    echo "<pre>";
    print_r($input);
    echo "</pre>";
}*/

$creationMessage = "";

if (isset($_POST["createAcc"])) {

    if (isset($_POST["emailReg"])) {
        $emailReg = $_POST["emailReg"];
    }

    if (isset($_POST["passwordReg"])) {
        $passwordReg = $_POST["passwordReg"];
    }

    if (isset($_POST["nickname"])) {
        $nickname = $_POST["nickname"];
    }

    if (isset($_POST["gender"])) {
        foreach ($_POST["gender"] as $theGender) {
            $gender = $theGender;
        }

    }
    createAccount($link, $emailReg, $nickname, $passwordReg, $gender);
}
/*
function createAccount ($link, $emailReg, $nickname, $passwordReg, $gender)
{

    $query = "INSERT INTO u3651p69583_tracker.Users(`e-mail`, nickname, password, gender) VALUE (?, ?, ?, ?)";
    $stmt1 = mysqli_prepare($link, $query);
    $stmt1->bind_param("ssss", $emailReg, $nickname, $passwordReg, $gender);
    if (!$stmt1) {
        die("mysqli error: " . mysqli_error($link));
    } else {
        mysqli_stmt_execute($stmt1);

        $creationMessage = "Account created!";
        echo mysqli_stmt_error($stmt1);
        mysqli_stmt_close($stmt1);
    }
}
*/

function createAccount ($link, $emailReg, $nickname, $passwordReg, $gender)
{

    $hashedPassword = password_hash($passwordReg, PASSWORD_DEFAULT);
    $query = "INSERT INTO u3651p69583_tracker.Users(`e-mail`, nickname, password, gender) VALUE (?, ?, ?, ?)";
    $stmt1 = mysqli_prepare($link, $query);
    $stmt1->bind_param("ssss", $emailReg, $nickname, $hashedPassword, $gender);
    if (!$stmt1) {
        die("mysqli error: " . mysqli_error($link));
    } else {
        mysqli_stmt_execute($stmt1);

        $creationMessage = "Account created!";
        echo mysqli_stmt_error($stmt1);
        mysqli_stmt_close($stmt1);
    }
}

if (isset($_POST["login"])) {
    inLogFormulier($link);
}

function inLogFormulier($link) {

    global $showloggedin, $profilePicture, $userName, $userId, $bio;

    $email = $_POST['emailLogin'];
    $wachtwoord = $_POST['passwordLogin'];

    $queryPasswordCheck = "SELECT password FROM u3651p69583_tracker.Users WHERE `e-mail` = '$email' ";
    $checkResult = $link->query($queryPasswordCheck);
    while ($checkedResult = $checkResult->fetch_assoc()) {
        $DBpwd = $checkedResult['password'];
    }

    if (password_verify($wachtwoord, $DBpwd)) {
        $query = "SELECT * FROM u3651p69583_tracker.Users WHERE `e-mail` = '$email'";
        $result = $link->query($query);
        /*   $statement = mysqli_prepare($link, $query);
           $statement->bind_param("isssss", $userId, $trueEmail, $nick, $trueWachtwoord, $gender, $profilePicture);*/

        while ($arraytable = $result->fetch_assoc()) {

            $profileId = $arraytable['userId'];
            $trueEmail = $arraytable['e-mail'];
            $nick = $arraytable['nickname'];
            $trueWachtwoord = $arraytable['password'];
            $gender = $arraytable['gender'];
            $bio = $arraytable['bio'];
            $profilePicture = $arraytable['profilePicture'];
        }
        if (isset($_POST['login'])) {

            $_SESSION["user"] = array("userId" => $profileId,
                "email" => $trueEmail,
                "name" => $nick,
                "wachtwoord" => $trueWachtwoord,
                "gender" => $gender,
                "bio" => $bio,
                "PFP" => $profilePicture);


            $usercreds = userCreds();
            $profilePicture = $usercreds['profilePicture'];
            $userName = $usercreds['userName'];
            $userId = $usercreds['userId'];
            $bio = $usercreds['bio'];
            $showloggedin = true;
        }

        //This part exists so the database's favorite and Trackers table stays updated

        $query2 = "SELECT COUNT(*) as total FROM Games";
        $result2 = $link->query($query2);
        while ($arraytable2 = $result2->fetch_assoc()) {
            $gameTotal = $arraytable2['total'];
        }
        $query3 = "SELECT COUNT(*) as existingFavoriteRows FROM Favorites WHERE Users_userId = '$userId'";
        $result3 = $link->query($query3);
        while ($arraytable3 = $result3->fetch_assoc()) {
            $existingFavoriteRows = $arraytable3['existingFavoriteRows'];
        }
        $missingFavorites = $gameTotal - $existingFavoriteRows;

        if ($missingFavorites > 0 && $missingFavorites <= $gameTotal) {
            for ($favoriteStartPoint = ($existingFavoriteRows + 1); $favoriteStartPoint <= $gameTotal; $favoriteStartPoint++) {
                $queryFav = "INSERT INTO u3651p69583_tracker.Favorites(Games_idGame, Users_userId) VALUE (?, ?)";
                $stmt1 = mysqli_prepare($link, $queryFav);
                $stmt1->bind_param("ii", $favoriteStartPoint, $userId);
                if (!$stmt1) {
                    die("mysqli error: " . mysqli_error($link));
                } else {
                    mysqli_stmt_execute($stmt1);

                    echo mysqli_stmt_error($stmt1);
                    mysqli_stmt_close($stmt1);
                }
            }
        }

        $query4 = "SELECT COUNT(*) as total FROM Trackers";
        $result4 = $link->query($query4);
        while ($arraytable4 = $result4->fetch_assoc()) {
            $trackerTotal = $arraytable4['total'];
        }
        $query5 = "SELECT COUNT(*) as existingTrackerRows FROM Trackers_has_Users WHERE Users_userId = '$userId'";
        $result5 = $link->query($query5);
        while ($arraytable5 = $result5->fetch_assoc()) {
            $existingTrackerRows = $arraytable5['existingTrackerRows'];
        }
        $missingTrackers = $trackerTotal - $existingTrackerRows;

        if ($missingTrackers > 0 && $missingTrackers <= $trackerTotal) {
            for ($trackerStartPoint = ($existingTrackerRows + 1); $trackerStartPoint <= $trackerTotal; $trackerStartPoint++) {
                $queryTrack = "INSERT INTO u3651p69583_tracker.Trackers_has_Users(Trackers_idTrackers, Users_userId) VALUE (?, ?)";
                $stmt2 = mysqli_prepare($link, $queryTrack);
                $stmt2->bind_param("ii", $trackerStartPoint, $userId);
                if (!$stmt2) {
                    die("mysqli error: " . mysqli_error($link));
                } else {
                    mysqli_stmt_execute($stmt2);

                    echo mysqli_stmt_error($stmt2);
                    mysqli_stmt_close($stmt2);
                }
            }
        }

    }
    else {
        echo "either the e-mail or password has been typed in incorrectly.";
    }
}


if (isset($_POST["changeBio"])) {

    $bio = $_POST["changedBio"];
    $userId = $_POST["hiddenId"];
    editBio($link, $bio, $userId);
}

function editBio ($link, $bio, $userId) {

    $queryBio = "UPDATE u3651p69583_tracker.Users SET bio='$bio' WHERE userId='$userId'";
    $stmt1 = $link->prepare($queryBio);
    $stmt1->bind_param("s", $bio);
    if (!$stmt1) {
        die("mysqli error: " . mysqli_error($link));
    } else {
        mysqli_stmt_execute($stmt1);

        echo "Your bio has been changed!";
        /*echo mysqli_stmt_error($stmt1);*/
        mysqli_stmt_close($stmt1);
        header("Location: profile.php?id=$userId");
    }
}

/*if (isset($_POST["changePFP"])) {

    $PFP = $_POST["changedPFP"];
    $userId = $_POST["hiddenId"];
    editPFP($link, $PFP, $userId);
}*/

function editPFP ($link, $PFP, $userId) {

    $queryPFP = "UPDATE u3651p69583_tracker.Users SET profilePicture='$PFP' WHERE userId='$userId'";
    $stmt1 = $link->prepare($queryPFP);
    $stmt1->bind_param("s", $PFP);
    if (!$stmt1) {
        die("mysqli error: " . mysqli_error($link));
    } else {
        mysqli_stmt_execute($stmt1);

        echo "Your bio has been changed!";
        /*echo mysqli_stmt_error($stmt1);*/
        mysqli_stmt_close($stmt1);
        header("Location: profile.php?id=$userId");
    }
}

function loadFavoritedGames($link) {
    $userId = $_SESSION['user']['userId'];
    $query = "SELECT * FROM Games INNER JOIN Favorites ON Games.idGame = Favorites.Games_idGame WHERE Favorites.Users_userId = '$userId' AND Favorites.favorited = '1'";
    $result = $link->query($query);
    $defaultRows = 5 - $result->num_rows;

    while ($arraytable = $result->fetch_assoc()) {

        $gameId = $arraytable['idGame'];
        $gameName = $arraytable['gameName'];
        $gameCover = $arraytable['gameCover'];
        $pageLink = $arraytable['pageLink'];
        $favorited = $arraytable['favorited'];

        if ($favorited == 0) {
            $class = 'favStarUnchecked';
        }
        elseif ($favorited == 1) {
            $class = 'favStarChecked';
        }

        echo '
            <div style="width: 125px; height: 175px" class="gameOrder" style="position: relative">
            <a href="' . $pageLink .'">
           
            <form style="position: absolute; margin: 10px 0 0 10px" id="favoriteGame2" name="favoriteGame2" action="includes/inc.favoriteGame.php" method="POST">
            <input type="hidden" value="' . $gameId .'" name="hiddenId1">
            <input type="hidden" value="' . $userId .'" name="hiddenId2">

            <input type="submit" value="" class="' . $class . '" name="favoriteGame2">
            </form>
             <img class="seperate" alt="' . $gameName . '"  src="' . $gameCover . '"  width="125" height="175">
             </a>
            </div>
          ';


    }
    for($i = 0; $i < $defaultRows; $i++){
        //here placeholder
        echo '<img alt="Placeholder" class="seperate" src="img/emptyTracker.png" width="125" height="175">';
    }

}

//end of profile functions
//start of Main Menu functions

function createGame($link, $gameName, $gameCover, $pageLink) {
    {

        $query = "INSERT INTO u3651p69583_tracker.Games(`gameName`, gameCover, pageLink) VALUE (?, ?, ?)";
        $stmt1 = mysqli_prepare($link, $query);
        $stmt1->bind_param("sss", $gameName, $gameCover, $pageLink);
        if (!$stmt1) {
            die("mysqli error: " . mysqli_error($link));
        } else {
            mysqli_stmt_execute($stmt1);

            echo mysqli_stmt_error($stmt1);
            mysqli_stmt_close($stmt1);
            /*header("Location: mainMenu.php");*/
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
            /*header("Location: mainMenu.php");*/
        }
    }
}

function loadGames($link) {

    //SELECT * FROM Games LIMIT 15 INNER JOIN Favorites ON Games.idGame = Favorites.Games_idGame
    $userId = $_SESSION['user']['userId'];
        $query = "SELECT * FROM Games INNER JOIN Favorites ON Games.idGame = Favorites.Games_idGame WHERE Favorites.Users_userId = '$userId'";
    $result = $link->query($query);
    $defaultRows = 15 - $result->num_rows;

    while ($arraytable = $result->fetch_assoc()) {

        $gameId = $arraytable['idGame'];
        $gameName = $arraytable['gameName'];
        $gameCover = $arraytable['gameCover'];
        $pageLink = $arraytable['pageLink'];
        $favorited = $arraytable['favorited'];

        if ($favorited == 0) {
            $class = 'favStarUnchecked';
        }
        elseif ($favorited == 1) {
            $class = 'favStarChecked';
        }

        echo '
            <div style="width: 125px; height: 175px" class="seperate image-container" style="position: relative">
            <a href="' . $pageLink .'">
           
            <form style="position: absolute; margin: 10px 0 0 10px" id="favoriteGame1" name="favoriteGame1" action="includes/inc.favoriteGame.php" method="POST">
            <input type="hidden" value="' . $gameId .'" name="hiddenId1">
            <input type="hidden" value="' . $userId .'" name="hiddenId2">

            <input type="submit" value="" class="' . $class . '" name="favoriteGame1">
            </form>
             <img class="seperate" alt="' . $gameName . '"  src="' . $gameCover . '"  width="125" height="175">
             </a>
            </div>
          ';


    }
    for($i = 0; $i < $defaultRows; $i++){
        //here placeholder
        echo '<img alt="Placeholder" class="seperate" src="img/emptyTracker.png" width="125" height="175">';
    }

}

//end of Main Menu functions
//start of Tchecklist functions


//start of misc functions


function userCreds() {

    $usercreds = [];
    $profilePicture = $_SESSION["user"]["PFP"];
    /*JSC($profilePicture);*/
    if (!empty($profilePicture)) {

        $usercreds['profilePicture'] = $profilePicture;
    }
    else {
        $gender = $_SESSION["user"]["gender"];
        switch ($gender) {
            case "male":
                $usercreds['profilePicture'] = "img/IconMan.png";
                break;
            case "female":
                $usercreds['profilePicture'] = "img/IconWoman.png";
                break;
            case "secret":
                $usercreds['profilePicture'] = "img/UnknownGender.png";
                break;
            default:
                $usercreds['profilePicture'] = "img/notLoggedIn.png";
        }
    }


    $usercreds['userName'] = $_SESSION["user"]["name"];
    $usercreds['userId'] = $_SESSION["user"]["userId"];
    $usercreds['bio'] = $_SESSION["user"]["bio"];

    return $usercreds;

}

?>