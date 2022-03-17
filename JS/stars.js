function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

(function staticStars() {
    var rand,
        stars = [];
    var intViewportWidth = window.innerWidth - 10;
    var intViewportHeight = window.innerHeight - 10;

    for (let i = 0; i <= 400; i++) {
        rand = getRandomNumber(0, 3); // for random size of each star. I am also using it for animation duration, which is defined in CSS

        stars[i] = document.createElement("div");
        stars[i].id = "star-" + i;
        stars[i].style.width = rand + "px";
        stars[i].style.height = rand + "px";
        stars[i].style.borderRadius = "50%";
        stars[i].style.backgroundColor = "#89BFE2";
        stars[i].style.position = "absolute";
        stars[i].style.top = Math.random() * intViewportHeight + "px"; // random postion from top
        stars[i].style.left = Math.random() * intViewportWidth + "px"; // random postion from left
        stars[i].style.animation =
            "glow " + rand + 1 + "s linear infinite alternate"; // random animation duration


        document.body.appendChild(stars[i]);
    }
})();

(function fallingStars() {
    var stars = document.createElement("div"); // creating new div with every function run gives smoother animation
    var intViewportWidth = window.innerWidth + 100; // for the div to be out of the screen
    var intViewportHeight = window.innerHeight + 250; // ditto
    var randDuration = getRandomNumber(1, 40); // random animation (falling stars) duration
    var randLength = getRandomNumber(40, 100); // random length of the falling star
    var randPosition = Math.random() * intViewportWidth; // random horizontal location eveytime the function is run
    var motion = 0; // to give motion to animation
    var interval = setInterval(animation, randDuration); // for animation interval. randDuration will give each star a random fall time

    stars.id = "falling-star";
    stars.style.width = randLength + "px";
    stars.style.height = "1.5px";
    stars.style.backgroundImage =
        "linear-gradient(to right, #89BFE2 40%, transparent)";
    stars.style.transform = "rotate(-45deg)";
    stars.style.position = "absolute";
    stars.style.top = "-10px";
    stars.style.right = randPosition + "px";
    stars.style.zIndex = "0";

    document.body.appendChild(stars);

    function animation() {
        if (motion == intViewportHeight + 0) {
            // to clear the interval if the star has already fallen (covered enough distance to be out of the screen)
            clearInterval(interval);
            document.body.removeChild(stars);
        } else {
            motion++;
            stars.style.top = motion + "px";
            stars.style.right = randPosition + motion + "px";
        }
    }

    setTimeout(fallingStars, 2500); // for this function to run every 3 seconds
})();
/*
(function groundDIV() {
  var ground = document.createElement("div");

  ground.id = "ground";
  ground.style.width = window.innerWidth + 50 + "px";
  ground.style.height = "150px";
  ground.style.backgroundColor = "black";
  ground.style.position = "absolute";
  ground.style.bottom = "0";
  ground.style.left = "0";
  ground.style.zIndex = "200";
  ground.style.clipPath =
    "polygon(0% 69%, 5% 70%, 9% 71%, 12% 72%, 16% 72%, 19% 72%, 23% 70%, 28% 69%, 35% 70%, 42% 72%, 54% 75%, 62% 76%, 69% 76%, 76% 74%, 85% 74%, 92% 74%, 99% 77%, 99% 100%, 0% 100%)";

  document.body.appendChild(ground);
})();

(function telescope() {
  va r canvas = document.getElementById("telescope");
  canvas.style.transform = "rotate(25deg)";
  canvas.style.zIndex = "200";
  canvas.style.position = "absolute";
  canvas.style.right = "150px";
  canvas.style.bottom = "10px";

  var ctx = canvas.getContext("2d");

  ctx.fillStyle = "black";

  ctx.beginPath();



  ctx.moveTo(60, 22.5);
  ctx.lineTo(160, 22.5);
  ctx.lineTo(160, 47.5);
  ctx.lineTo(60, 47.5);

  ctx.moveTo(160, 30);
  ctx.lineTo(180, 30);
  ctx.lineTo(180, 40);
  ctx.lineTo(160, 40);

  ctx.moveTo(180, 30);
  ctx.lineTo(180, 28.75);
  ctx.lineTo(190, 27.5);
  ctx.lineTo(190, 42.5);
  ctx.lineTo(180, 41.25);
  ctx.lineTo(180, 40);

  ctx.moveTo(97, 47);
  ctx.lineTo(120, 47);
  ctx.lineTo(120, 67);
  ctx.lineTo(97, 67);
  ctx.lineTo(97, 47);

  ctx.moveTo(100, 67);
  ctx.lineTo(95, 200);
  ctx.lineTo(110, 190);
  ctx.lineTo(110, 67);

  ctx.moveTo(105, 67);
  ctx.lineTo(180, 140);
  ctx.lineTo(200, 140);
  ctx.lineTo(120, 67);

  ctx.moveTo(100, 100);
  ctx.lineTo(145, 100);
  ctx.lineTo(145, 90);
  ctx.lineTo(100, 90);

  ctx.fill();
})();

(function grass() {
  var grass = [];
  var randLength;
  var randRotation;
  var winWidth = window.innerWidth + 10;

  for (let i = 0; i <= winWidth; i++) {
    randLength = getRandomNumber(50, 65);
    randRotation = getRandomNumber(-30, 30);

    grass[i] = document.createElement("div");
    grass[i].id = "grass-" + i;
    grass[i].style.zIndex = "200";
    grass[i].style.width = "2px";
    grass[i].style.height = randLength + "px";
    grass[i].style.backgroundColor = "black";
    grass[i].style.position = "absolute";
    grass[i].style.left = i + "px";
    grass[i].style.bottom = "0px";
    grass[i].style.transform = "rotate(" + randRotation + "deg)";

    document.body.appendChild(grass[i]);
  }
})();
*/
document.body.style.width = "100%";
document.body.style.height = "100%";
/*document.body.style.overflow = "hidden";*/
document.body.style.backgroundColor =
    "#1F1F1F";
