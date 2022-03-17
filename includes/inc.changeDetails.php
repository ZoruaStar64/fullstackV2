<?php

require_once('../functions.php');
require_once('../creds.php');
JSC($_FILES);
JSC($_POST);



$target_dir = "../uploads/";
$target_file = $target_dir . basename($_FILES["changedPFP"]["name"]);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

// Check if image file is a actual image or fake image
if(isset($_POST["changePFP"])) {
    $check = getimagesize($_FILES["changedPFP"]["tmp_name"]);
    if($check !== false) {
        echo "File is an image - " . $check["mime"] . ".";
        $uploadOk = 1;
    } else {
        echo "File is not an image.";
        $uploadOk = 0;
    }
}

// Check if file already exists
if (file_exists($target_file)) {
    echo "Sorry, file already exists.";
    $uploadOk = 0;
}

// Check file size
if ($_FILES["changedPFP"]["size"] > 500000) {
    echo "Sorry, your file is too large.";
    $uploadOk = 0;
}

// Allow certain file formats
if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
    /*&& $imageFileType != "gif"*/ ) {
    echo "Sorry, only JPG, JPEG & PNG files are allowed.";
    $uploadOk = 0;
}

// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
    echo "Sorry, your file was not uploaded.";
// if everything is ok, try to upload file
} else {
    if (move_uploaded_file($_FILES["changedPFP"]["tmp_name"], $target_file)) {
        echo "The file ". htmlspecialchars( basename( $_FILES["changedPFP"]["name"])). " has been uploaded.";
    } else {
        echo "Sorry, there was an error uploading your file.";
    }
}

function JSC($input){
    echo "<pre>";
    print_r($input);
    echo "</pre>";
}

//FILE STAAT OP DE SERVER
//------ LINK NAAR DE FILE in DE DB

if (isset($_POST["changePFP"])) {
    $userId = $_POST['hiddenId'];
    editPFP($link, $target_file, $userId);
}

if ($_POST["changeBio"]) {

    $errorCount = 0;
    $bio = $_POST["changedBio"];
    $userId = $_POST["hiddenId"];
    if (!preg_match("/^[a-zA-Z-_0-9!?+=#&^' ]*$/",$bio)) {
        $bioErr = "<p>Invalid characters error: don't use characters like ,.;:][}{)(*%$@<>\|'</p>";
        $errorCount = 1;
        echo $bioErr;
        echo $bio;
        header( "refresh:5;url=../profile.php?id=$userId" );
    }
    if (preg_match("/(fuck|bitch|shit|cunt|dick|ass|slut|asshole|nigger|neger|slet|nigga|motherfucker|fucker|pussy|faggot|fucking|rape|rapist|pedophile|pedo|cock|loli|shota|cancer|kanker|hentai|porn|nazi|rule34|rule63|e621|)/", $bio)) {
        echo "don't use bad/harmfull language";
        $errorCount = 1;
        header( "refresh:5;url=../profile.php?id=$userId" );
    }
    if ($errorCount === 0) {
        editBio($link, $bio, $userId);
    }
}

if (isset($_POST["changeGender"])) {

        foreach ($_POST["gender"] as $theGender) {
            $gender = $theGender;
        }

    $userId = $_POST["hiddenId"];
    editGender($link, $gender, $userId);
}


if (empty($_POST["changeNickname"]) && empty($_POST["changeBio"])) {
    $nicknameErr = "<p>Name Error: Nickname is required</p>";
    echo "Nickname is required";
    header( "refresh:5;url=../profile.php?id=$userId" );
}
else {
    $errorCount = 0;
    $username = $_POST["changedName"];
    $userId = $_POST["hiddenId"];
    if (!preg_match("/^[a-zA-Z-_0-9']*$/",$username)) {
        $nicknameErr = "<p>Name Error: Only letters and numbers allowed</p>";
        echo $nicknameErr;
        $errorCount = 1;
        header( "refresh:5;url=../profile.php?id=$userId" );
    }
    if ($username === "fuck" || "bitch" || "nigger" || "slut" || "neger" || "nigga" || "fucking" || "pussy" || "faggot" || "motherfucker" ||
        "shit" || "asshole" || "fucker" || "rape" || "rapist" || "pedophile" || "cock" || "cunt" || "ass" || "cancer" || "kanker" || "loli" || "shota" ||
        "hentai" || "porn" || "rule34" || "rule63" || "e621" || "nazi") {
        echo "<p>don't use harmfull/inappopriate language</p>";
        $errorCount = 1;
        header( "refresh:5;url=../profile.php?id=$userId" );
    }
    if ($errorCount === 0) {
        editUsername($link, $username, $userId);
    }

}





