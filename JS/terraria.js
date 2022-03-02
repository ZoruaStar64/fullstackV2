//Common object
const craftGuide = document.getElementById("itemCraftGuideModal");

const itemTree1 = document.getElementById("mainItemTree1");
const itemTree2 = document.getElementById("mainItemTree2");
const itemTree3 = document.getElementById("mainItemTree3");
const itemTree4 = document.getElementById("mainItemTree4");
let i;

function expandPanel1() {
    this.classList.toggle("active");
    let panel1 = this.nextElementSibling;
    if (panel1.style.maxHeight) {
        panel1.style.maxHeight = null;
    } else {
        panel1.style.maxHeight = panel1.scrollHeight + "px";
    }
}

itemTree1.addEventListener('click', expandPanel1);

function expandPanel2() {
    this.classList.toggle("active");
    let panel2 = this.nextElementSibling;
    if (panel2.style.maxHeight) {
        panel2.style.maxHeight = null;
    } else {
        panel2.style.maxHeight = panel2.scrollHeight + "px";
    }
}

itemTree2.addEventListener('click', expandPanel2)

function expandPanel3() {
    this.classList.toggle("active");
    let panel3 = this.nextElementSibling;
    if (panel3.style.maxHeight) {
        panel3.style.maxHeight = null;
    } else {
        panel3.style.maxHeight = panel3.scrollHeight + "px";
    }
}

itemTree3.addEventListener('click', expandPanel3);

function expandPanel4() {
    this.classList.toggle("active");
    let panel4 = this.nextElementSibling;
    if (panel4.style.maxHeight) {
        panel4.style.maxHeight = null;
    } else {
        panel4.style.maxHeight = panel4.scrollHeight + "px";
    }
}

itemTree4.addEventListener('click', expandPanel4);

//Terraspark Boots objects
const spectreBoots = document.getElementById("tracker1");
const lightningBoots = document.getElementById("tracker2");
const frostsparkBoots = document.getElementById("tracker3");
const obsidianSkull1 = document.getElementById("tracker4");
const moltenCharm = document.getElementById("tracker5");
const lavaWaders = document.getElementById("tracker6");
const terraSpark = document.getElementById("tracker7");

//Cellphone objects
const platWatch = document.getElementById("tracker8");
const goldWatch = document.getElementById("tracker9");
const GPS = document.getElementById("tracker10");
const REK3K = document.getElementById("tracker11");
const goblinTech = document.getElementById("tracker12");
const fishFinder = document.getElementById("tracker13");
const PDA = document.getElementById("tracker14");
const cellPhone = document.getElementById("tracker15");

//Ankh Shield objects
const armorBracing = document.getElementById("tracker16");
const medicatedBandage = document.getElementById("tracker17");
const counterCurse = document.getElementById("tracker18");
const thePlan = document.getElementById("tracker19");
const obsidianSkull2 = document.getElementById("tracker20");
const obsidianShield = document.getElementById("tracker21");
const blindfold = document.getElementById("tracker22")
const ankhCharm = document.getElementById("tracker23");
const ankhShield = document.getElementById("tracker24");

//Zenith objects
const BoG = document.getElementById("tracker25");
const muramasa = document.getElementById("tracker26");
const FGS = document.getElementById("tracker27");
const lightsBane = document.getElementById("tracker28");
const BB = document.getElementById("tracker29")
const nightsEdge = document.getElementById("tracker30");
const CB = document.getElementById("tracker31");
const excalibur = document.getElementById("tracker32");
const trueExcalibur = document.getElementById("tracker33");
const truenightsEdge = document.getElementById("tracker34");
const terraBlade = document.getElementById("tracker35");
const CopperSS = document.getElementById("tracker36");
const starfury = document.getElementById("tracker37");
const ES = document.getElementById("tracker38");
const BK = document.getElementById("tracker39");
const seedler = document.getElementById("tracker40");
const THMB = document.getElementById("tracker41");
const IW = document.getElementById("tracker42");
const starWrath = document.getElementById("tracker43");
const meowmere = document.getElementById("tracker44");
const zenith = document.getElementById("tracker45");

//Terraspark Boots addeventlisteners
spectreBoots.addEventListener('click', showSpectreRecipe);
lightningBoots.addEventListener('click', showLightningRecipe);
frostsparkBoots.addEventListener('click', showFrostsparkRecipe);
obsidianSkull1.addEventListener('click', showObsidianskullRecipe1);
moltenCharm.addEventListener('click', showMoltencharmRecipe);
lavaWaders.addEventListener('click', showLavawadersRecipe);
terraSpark.addEventListener('click', showTerrasparkRecipe);

//Cellphone addeventlisteners
platWatch.addEventListener('click', showplatWatchRecipe);
goldWatch.addEventListener('click', showgoldWatchRecipe);
GPS.addEventListener('click', showGPSRecipe);
REK3K.addEventListener('click', showREK3KRecipe);
goblinTech.addEventListener('click', showGoblinRecipe);
fishFinder.addEventListener('click', showFishRecipe);
PDA.addEventListener('click', showPDARecipe);
cellPhone.addEventListener('click', showCellphoneRecipe);

//Ankh Shield addeventlisteners
armorBracing.addEventListener('click', showABRecipe);
medicatedBandage.addEventListener('click', showMBRecipe);
counterCurse.addEventListener('click', showCCMRecipe);
thePlan.addEventListener('click', showthePlanRecipe);
obsidianSkull2.addEventListener('click', showObsidianskullRecipe2);
obsidianShield.addEventListener('click', showOSRecipe);
blindfold.addEventListener('click', showBlindfold)
ankhCharm.addEventListener('click', showACRecipe);
ankhShield.addEventListener('click', showASRecipe);

//Zenith addeventlisteners
BoG.addEventListener('click',showBoGRecipe);
muramasa.addEventListener('click',showMuramasaRecipe);
FGS.addEventListener('click',showFGSRecipe);
lightsBane.addEventListener('click',showLBRecipe);
BB.addEventListener('click', showBBRecipe)
nightsEdge.addEventListener('click',showNERecipe);
CB.addEventListener('click',showCBRecipe);
excalibur.addEventListener('click',showExcaliburRecipe);
trueExcalibur.addEventListener('click',showTExcaliburRecipe);
truenightsEdge.addEventListener('click',showTNERecipe);
terraBlade.addEventListener('click',showTerrabladeRecipe);
CopperSS.addEventListener('click',showCopperSSRecipe);
starfury.addEventListener('click',showStarfuryRecipe);
ES.addEventListener('click',showESRecipe);
BK.addEventListener('click',showBKRecipe);
seedler.addEventListener('click',showSeedlerRecipe);
THMB.addEventListener('click',showTHMBRecipe);
IW.addEventListener('click',showIWRecipe);
starWrath.addEventListener('click',showStarwrathRecipe);
meowmere.addEventListener('click',showMeowmereRecipe);
zenith.addEventListener('click',showZenithRecipe);

//common functions


function showCraftGuide() {
    if (craftGuide.style.display === 'none') {
        craftGuide.style.display = 'block';
    }
    else {
        craftGuide.style.display = 'block';
    }
}

function closeCraftGuide() {
    if (craftGuide.style.display === 'block') {
        craftGuide.style.display = 'none';
        closeBox.removeEventListener('click', closeCraftGuide);
    }
}

//Terraspark Boots Functions
function showSpectreRecipe() {
    showCraftGuide();
    craftGuide.innerHTML = "";
    craftGuide.innerHTML += "<p id='closeBox'>&times;</p><div style='margin: 10px 0 0 10px'><img style='transform: scale(1.5)' src='../terrariaImg/Spectre_Boots.png' alt='Spectre Boots'><h2 class='mainItem'>Spectre Boots</h2><p style='margin: 10px 5% 0 0; font-size: 20px'>Made with</p> " +
        "<div class='tooltip' style='float: left'><img src='../terrariaImg/Hermes_Boots.png' alt='Hermes Boots'><span class='tooltiptext'>Hermes Boots</span></div><p class='recipeTextCenter'>Obtained from <img style='transform: scale(1.3); position: absolute; top: 125px; left: 150px' src='../terrariaImg/Gold_Chest.png' alt='Gold Chest'></div></p><br><br><br><p style='margin-left: 15px'>or</p>" +
        "<div class='tooltip' style='float: left'><img src='../terrariaImg/Flurry_Boots.png' alt='Flurry Boots'><span class='tooltiptext'>Flurry Boots</span></div><p class='recipeTextCenter'>Obtained from <div style='position: absolute; top: 180px; left: 155px' class='alignTriangle'><div id='triangleP1'><img style='transform: scale(1.2); padding: 5px' src='../terrariaImg/Frozen_Crate.png' alt='Frozen Crate'><img style='transform: scale(1.2); padding: 5px' src='../terrariaImg/Boreal_Crate.png' alt='Boreal Crate'></div><div id='triangleP2'><img style='transform: scale(1.2); padding: 5px' src='../terrariaImg/Frozen_Chest.png' alt='Frozen Chest'></div></div></p><br><br><br><p style='margin-left: 15px;'>or</p>" +
        "<div class='tooltip' style='float: left'><img src='../terrariaImg/Dunerider_Boots.png' alt='Dunerider Boots'><span class='tooltiptext'>Dunerider Boots</span></div><p class='recipeTextCenter'>Obtained from <div style='position: absolute; top: 250px; left: 155px' class='alignTriangle'><div id='triangleP1'><img style='transform: scale(1.2); padding: 5px' src='../terrariaImg/Mirage_Crate.png' alt='Mirage Crate'><img style='transform: scale(1.2); padding: 5px' src='../terrariaImg/Oasis_Crate.png' alt='Oasis Crate'></div><div id='triangleP2'><img style='transform: scale(1.2); padding: 5px' src='../terrariaImg/Sandstone_Chest.png' alt='Sandstone Chest'></div></div></p><br><br><br><p style='margin-left: 15px;'>or</p>" +
        "<div class='tooltip' style='float: left'><img src='../terrariaImg/Sailfish_Boots.png' alt='Sailfish Boots'><span class='tooltiptext'>Sailfish Boots</span></div><p class='recipeTextCenter'>Obtained from <div style='position: absolute; top: 320px; left: 155px' class='alignSquare'><div id='squareP1'><img style='transform: scale(1.2); padding: 5px' src='../terrariaImg/Wooden_Crate.png' alt='Wooden Crate'><img style='transform: scale(1.2); padding: 5px' src='../terrariaImg/Pearlwood_Crate.png' alt='Pearlwood Crate'></div><div id='squareP2'><img style='transform: scale(1.2); padding: 5px' src='../terrariaImg/Iron_Crate.png' alt='Iron Crate'><img style='transform: scale(1.2); padding: 5px' src='../terrariaImg/Mythril_Crate.png' alt='Mythril Crate'></div></div></p><br><br><br><p style='margin-left: 15px;'>Combined With</p>" +
        "<div class='tooltip' style='float: left'><img src='../terrariaImg/Rocket_Boots.png' alt='Rocket Boots'><span class='tooltiptext'>Rocket Boots</span></div><p class='recipeTextCenter'>Bought from <div class='tooltip' style='float: left'><img src='../terrariaImg/Goblin_Tinkerer.png' alt='Goblin Tinkerer Map icon'><span class='tooltiptext'>Goblin Tinkerer</span></div></p><br><br><br>" +
        "<p class='recipeTextCenter'>At</p><div class='tooltip' style='float: left'><img src='../terrariaImg/Tinkerers_Workshop.png' alt='Tinkerers Workshop'><span class='tooltiptext'>Tinkerer's Workshop</span></div><p class='recipeTextCenter'>Bought from<div class='tooltip' style=''><img src='../terrariaImg/Goblin_Tinkerer.png' alt='Goblin Tinkerer Map icon'><span class='tooltiptext'>Goblin Tinkerer</span></div></p></div>"
    const closeBox = document.getElementById('closeBox');
    closeBox.addEventListener('click', closeCraftGuide);
}

function showLightningRecipe() {
    showCraftGuide();
    craftGuide.innerHTML = "";
    craftGuide.innerHTML += "<p id='closeBox'>&times;</p><div style='margin: 10px 0 0 10px'><img style='transform: scale(1.5)' src='../terrariaImg/Lightning_Boots.png' alt='Lightning Boots'><h2 class='mainItem'>Lightning Boots</h2><p style='margin: 10px 5% 0 0; font-size: 20px'>Made by combining</p><br>" +
        "<div class='tooltip' style='float: left'><img src='../terrariaImg/Aglet.png' alt='Aglet'><span class='tooltiptext'>Aglet</span></div><p class='recipeTextCenter'>Obtained from <div style='position: absolute; top: 120px; left: 155px' class='alignTriangle'><div id='triangleP1'><img style='transform: scale(1.2); padding: 5px' src='../terrariaImg/Wooden_Crate.png' alt='Wooden Crate'><img style='transform: scale(1.2); padding: 5px' src='../terrariaImg/Pearlwood_Crate.png' alt='Pearlwood Crate'></div><div id='triangleP2'><img style='transform: scale(1.2); padding: 5px' src='../terrariaImg/Chest.png' alt='Regular Chest'></div></div></p><br><br><br><br>" +
        "<div class='tooltip' style='float: left'><img src='../terrariaImg/Anklet_of_the_Wind.png' alt='Anklet of the Wind'><span class='tooltiptext'>Anklet of the Wind</span></div><p class='recipeTextCenter'>Obtained from <div style='position: absolute; top: 190px; left: 155px' class='alignTriangle'><div id='triangleP1'><img style='transform: scale(1.2); padding: 5px' src='../terrariaImg/Jungle_Crate.png' alt='Jungle Crate'><img style='transform: scale(1.2); padding: 5px' src='../terrariaImg/Bramble_Crate.png' alt='Bramble Crate'></div><div id='triangleP2'><img style='transform: scale(1.2); padding: 5px' src='../terrariaImg/Ivy_Chest.png' alt='Ivy Chest'></div></div></p><br><br><br><p style='margin-left: 15px;'>with</p>" +
        "<div class='tooltip' style='float: left'><img src='../terrariaImg/Spectre_Boots.png' alt='Spectre Boots'><span class='tooltiptext'>Spectre Boots</span></div><br><br><br>" +
        "<p class='recipeTextCenter'>At</p><div class='tooltip' style='float: left'><img src='../terrariaImg/Tinkerers_Workshop.png' alt='Tinkerers Workshop'><span class='tooltiptext'>Tinkerer's Workshop</span></div><p class='recipeTextCenter'>Bought from<div class='tooltip' style=''><img src='../terrariaImg/Goblin_Tinkerer.png' alt='Goblin Tinkerer Map icon'><span class='tooltiptext'>Goblin Tinkerer</span></div></p></div>"
    const closeBox = document.getElementById('closeBox');
    closeBox.addEventListener('click', closeCraftGuide);
}
function showFrostsparkRecipe() {
    showCraftGuide();
    craftGuide.innerHTML = "";
    craftGuide.innerHTML += "<p id='closeBox'>&times;</p><div style='margin: 10px 0 0 10px'><img style='transform: scale(1.5)' src='../terrariaImg/Frostspark_Boots.png' alt='Frostspark Boots'><h2 class='mainItem'>Frostspark Boots</h2><p style='margin: 10px 5% 0 0; font-size: 20px'>Made by combining</p>" +
        "<div class='tooltip' style='float: left'><img src='../terrariaImg/Ice_Skates.png' alt='Ice Skates'><span class='tooltiptext'>Ice Skates</span></div><p class='recipeTextCenter'>Obtained from <div style='position: absolute; top: 110px; left: 155px' class='alignTriangle'><div id='triangleP1'><img style='transform: scale(1.2); padding: 5px' src='../terrariaImg/Boreal_Crate.png' alt='Boreal Crate'><img style='transform: scale(1.2); padding: 5px' src='../terrariaImg/Frozen_Crate.png' alt='Frozen Crate'></div><div id='triangleP2'><img style='transform: scale(1.2); padding: 5px' src='../terrariaImg/Frozen_Chest.png' alt='Frozen Chest'></div></div></p><br><br><br><p style='margin-left: 15px;'>with</p>" +
        "<div class='tooltip' style='float: left'><img src='../terrariaImg/Lightning_Boots.png' alt='Lightning Boots'><span class='tooltiptext'>Lightning Boots</span></div><br><br><br>" +
        "<p class='recipeTextCenter'>At</p><div class='tooltip' style='float: left'><img src='../terrariaImg/Tinkerers_Workshop.png' alt='Tinkerers Workshop'><span class='tooltiptext'>Tinkerer's Workshop</span></div><p class='recipeTextCenter'>Bought from<div class='tooltip' style=''><img src='../terrariaImg/Goblin_Tinkerer.png' alt='Goblin Tinkerer Map icon'><span class='tooltiptext'>Goblin Tinkerer</span></div></p></div>"
    const closeBox = document.getElementById('closeBox');
    closeBox.addEventListener('click', closeCraftGuide);
}
function showObsidianskullRecipe1() {
    showCraftGuide();
    craftGuide.innerHTML = "";
    craftGuide.innerHTML += "<p id='closeBox'>&times;</p><div style='margin: 10px 0 15px 10px'><img style='transform: scale(1.5)' src='../terrariaImg/Obsidian_Skull.png' alt='Obsidian Skull'><h2 class='mainItem'>Obsidian Skull</h2><p style='margin: 10px 5% 0 0; font-size: 20px'>Made with</p>" +
        "<div class='tooltip' style='float: left'><img src='../terrariaImg/Obsidian.png' alt='Obsidian'><span class='tooltiptext'>Obsidian</span></div><p class='recipeTextCenter'>Obtained from <div class='tooltip' style='float: left'><img src='../terrariaImg/Water.png' alt='Water'><span class='tooltiptext'>Water</span></div> <p class='recipeTextCenter'>+</p> <div class='tooltip' style='float: left'><img src='../terrariaImg/Lava.png' alt='Lava'><span class='tooltiptext'>Lava</span></div></p><br><br><br>" +
        "<div class='tooltip' style='float: left;'><img style='' src='../terrariaImg/Obsidian.png' alt='Obsidian'><span class='tooltiptext'>Obsidian</span></div><p class='recipeTextCenter'>X 20 at </p><div class='tooltip' style='float: left'><img src='../terrariaImg/Furnace.png' alt='Furnace'><span class='tooltiptext'>Furnace</span></div></div>"
    const closeBox = document.getElementById('closeBox');
    closeBox.addEventListener('click', closeCraftGuide);
}
function showMoltencharmRecipe() {
    showCraftGuide();
    craftGuide.innerHTML = "";
    craftGuide.innerHTML += "<p id='closeBox'>&times;</p><div style='margin: 10px 0 15px 10px'><img style='transform: scale(1.5)' src='../terrariaImg/Molten_Charm.png' alt='Molten Charm'><h2 class='mainItem'>Molten Charm</h2><p style='margin: 10px 5% 0 0; font-size: 20px'>Made by combining</p>" +
        "<div class='tooltip' style='float: left'><img src='../terrariaImg/Obsidian_Skull.png' alt='Obsidian Skull'><span class='tooltiptext'>Obsidian Skull</span></div><br><br><br><br><p style='margin-left: 15px;'>with</p><br>" +
        "<div class='tooltip' style='float: left'><img src='../terrariaImg/Lava_Charm.png' alt='Lava Charm'><span class='tooltiptext'>Lava Charm</span></div><p >Obtained from <img src='../terrariaImg/Obsidian_Crate.png' alt='Obsidian Crate'> or <img src='../terrariaImg/Gold_Chest.png' alt='Golden Chest'></p><br>" +
        "<p class='recipeTextCenter'>At</p><div class='tooltip' style='float: left'><img src='../terrariaImg/Tinkerers_Workshop.png' alt='Tinkerers Workshop'><span class='tooltiptext'>Tinkerer's Workshop</span></div><p class='recipeTextCenter'>Bought from<div class='tooltip' style=''><img src='../terrariaImg/Goblin_Tinkerer.png' alt='Goblin Tinkerer Map icon'><span class='tooltiptext'>Goblin Tinkerer</span></div></p></div>"
    const closeBox = document.getElementById('closeBox');
    closeBox.addEventListener('click', closeCraftGuide);
}
function showLavawadersRecipe() {
    showCraftGuide();
    craftGuide.innerHTML = "";
    craftGuide.innerHTML += "<p id='closeBox'>&times;</p><div style='margin: 10px 0 0 10px'><img style='transform: scale(1.5)' src='../terrariaImg/Lava_Waders.png' alt='Lava Waders'><h2 class='mainItem'>Lava Waders</h2><p style='margin: 10px 5% 0 0; font-size: 20px'>Made by combining</p>" +
        "<div class='tooltip' style='float: left'><img src='../terrariaImg/Obsidian_Rose.png' alt='Obsidian Rose'><span class='tooltiptext'>Obsidian Rose</span></div><p class='recipeTextCenter'>Obtained from </p><div class='tooltip' style='float: left'><img src='../terrariaImg/Fire_Imp.png' alt='Fire Imp'><span class='tooltiptext'>Fire Imp</span></div><br><br><br><br><p style='margin-left: 15px;'>with</p><br>" +
        "<div class='tooltip' style='float: left'><img src='../terrariaImg/Water_Walking_Boots.png' alt='Water walking boots'><span class='tooltiptext'>Water Walking Boots</span></div><p class='recipeTextCenter'>Obtained from <div style='position: absolute; top: 210px; left: 155px' class='alignTriangle'><div id='triangleP1'><img style='transform: scale(1.2); padding: 5px' src='../terrariaImg/Ocean_Crate.png' alt='Ocean Crate'><img style='transform: scale(1.2); padding: 5px' src='../terrariaImg/Seaside_Crate.png' alt='Seaside Crate'></div><div id='triangleP2'><img style='transform: scale(1.2); padding: 5px' src='../terrariaImg/Water_Chest.png' alt='Water Chest'></div></div></p><br><br><br>" +
        "<p class='recipeTextCenter'>At</p><div class='tooltip' style='float: left'><img src='../terrariaImg/Tinkerers_Workshop.png' alt='Tinkerers Workshop'><span class='tooltiptext'>Tinkerer's Workshop</span></div><p class='recipeTextCenter'>Bought from<div class='tooltip' style=''><img src='../terrariaImg/Goblin_Tinkerer.png' alt='Goblin Tinkerer Map icon'><span class='tooltiptext'>Goblin Tinkerer</span></div></p></div>"
    const closeBox = document.getElementById('closeBox');
    closeBox.addEventListener('click', closeCraftGuide);
}
function showTerrasparkRecipe() {
    showCraftGuide();
    craftGuide.innerHTML = "";
    craftGuide.innerHTML += "<p id='closeBox'>&times;</p><div style='margin: 10px 0 15px 10px'><img style='transform: scale(2)' src='../terrariaImg/Terraspark_Boots.png' alt='Terraspark Boots'><h2 class='mainItem'>Terraspark Boots</h2><p style='margin: 10px 5% 0 0; font-size: 20px'>Made by combining</p>" +
        "<div class='tooltip' style='float: left'><img src='../terrariaImg/Frostspark_Boots.png' alt='Frostspark Boots'><span class='tooltiptext'>Frostspark Boots</span></div><br><br><br><br><p style='margin-left: 15px;'>with</p><br>" +
        "<div class='tooltip' style='float: left'><img src='../terrariaImg/Lava_Waders.png' alt='Lava Waders'><span class='tooltiptext'>Lava Waders</span></div><br><br><br>" +
        "<p class='recipeTextCenter'>At</p><div class='tooltip' style='float: left'><img src='../terrariaImg/Tinkerers_Workshop.png' alt='Tinkerers Workshop'><span class='tooltiptext'>Tinkerer's Workshop</span></div><p class='recipeTextCenter'>Bought from<div class='tooltip' style=''><img src='../terrariaImg/Goblin_Tinkerer.png' alt='Goblin Tinkerer Map icon'><span class='tooltiptext'>Goblin Tinkerer</span></div></p></div>"
    const closeBox = document.getElementById('closeBox');
    closeBox.addEventListener('click', closeCraftGuide);
}

//Cellphone Functions
function showplatWatchRecipe() {
    showCraftGuide();
    craftGuide.innerHTML = "";
    craftGuide.innerHTML += "<p id='closeBox'>&times;</p><div style='margin: 10px 0 0 10px'><img style='transform: scale(2)' src='../terrariaImg/Platinum_Watch.png' alt='Platinum Watch'><h2 class='mainItem'>Platinum Watch</h2><p style='margin: 10px 5% 0 0; font-size: 20px'>Made by combining</p> " +
        "<div class='tooltip' style='float: left'><img src='../terrariaImg/Platinum_Bar.png' alt='Platinum bar'><span class='tooltiptext'>Platinum Bar</span></div><p class='recipeTextCenter'>X10 + </p><div class='tooltip' style='float: left'><img src='../terrariaImg/Chain.png' alt='Chain'><span class='tooltiptext'>Chain</span></div><p class='recipeTextCenter'>X1</p><br><br><br>" +
        "<p class='recipeTextCenter' '>At</p><div class='tooltip' style='float: left'><img src='../terrariaImg/Wooden_Table.png' alt='Wooden Table'><span class='tooltiptext'>Wooden table</span></div><p class='recipeTextCenter'> & </p><div class='tooltip' style='float: left'><img src='../terrariaImg/Wooden_Chair.png' alt='Wooden Chair'><span class='tooltiptext'>Wooden chair</span></div></div>";
    const closeBox = document.getElementById('closeBox');
    closeBox.addEventListener('click', closeCraftGuide);
}
function showgoldWatchRecipe() {
    showCraftGuide();
    craftGuide.innerHTML = "";
    craftGuide.innerHTML += "<p id='closeBox'>&times;</p><div style='margin: 10px 0 0 10px'><img style='transform: scale(2)' src='../terrariaImg/Gold_Watch.png' alt='Gold Watch'><h2 class='mainItem'>Gold Watch</h2><p style='margin: 10px 5% 0 0; font-size: 20px'>Made by combining</p> " +
        "<div class='tooltip' style='float: left'><img src='../terrariaImg/Gold_Bar.png' alt='Gold bar'><span class='tooltiptext'>Gold Bar</span></div><p class='recipeTextCenter'>X10 + </p><div class='tooltip' style='float: left'><img src='../terrariaImg/Chain.png' alt='Chain'><span class='tooltiptext'>Chain</span></div><p class='recipeTextCenter'>X1</p><br><br><br>" +
        "<p class='recipeTextCenter'>At</p><div class='tooltip' style='float: left'><img src='../terrariaImg/Wooden_Table.png' alt='Wooden Table'><span class='tooltiptext'>Wooden table</span></div><p class='recipeTextCenter'> & </p><div class='tooltip' style='float: left'><img src='../terrariaImg/Wooden_Chair.png' alt='Wooden Chair'><span class='tooltiptext'>Wooden chair</span></div></div>";
    const closeBox = document.getElementById('closeBox');
    closeBox.addEventListener('click', closeCraftGuide);
}
function showGPSRecipe() {
    showCraftGuide();
    craftGuide.innerHTML = "";
    craftGuide.innerHTML += "<p id='closeBox'>&times;</p><div style='margin: 10px 0 0 10px'><img style='transform: scale(2)' src='../terrariaImg/GPS.png' alt='GPS'><h2 class='mainItem'>GPS</h2><p style='margin: 10px 5% 0 0; font-size: 20px'>Made by combining</p> " +
        "<div class='tooltip' style='float: left'><img src='../terrariaImg/Platinum_Watch.png' alt='Platinum Watch'><span class='tooltiptext'>Platinum Watch</span></div><p class='recipeTextCenter'>or</p>" +
        "<div class='tooltip' style='float: left'><img src='../terrariaImg/Gold_Watch.png' alt='Gold Watch'><span class='tooltiptext'>Gold Watch</span></div><br><br><br><br> <p class='recipeTextCenter'>with</p><br><br>" +
        "<div class='tooltip' style='float: left; margin-left: 10px'><img src='../terrariaImg/Depth_Meter.png' alt='Depth Meter'><span class='tooltiptext'>Depth Meter (obtained from Bats, Salamanders, Giant Shelly and Crawdad)</span></div><br><br><br><p style='margin-left: 15px'>with</p><br>" +
        "<div class='tooltip' style='float: left; margin-left: 10px'><img src='../terrariaImg/Compass.png' alt='Compass'><span class='tooltiptext'>Compass (obtained from Piranhas, Salamanders, Giant Shelly, Crawdad, Mother Slime, Snow Flinx and Skeleton vikings)</span></div><br><br><br>" +
        "<p class='recipeTextCenter'>At</p><div class='tooltip' style='float: left'><img src='../terrariaImg/Tinkerers_Workshop.png' alt='Tinkerers Workshop'><span class='tooltiptext'>Tinkerer's Workshop</span></div><p class='recipeTextCenter'>Bought from<div class='tooltip' style=''><img src='../terrariaImg/Goblin_Tinkerer.png' alt='Goblin Tinkerer Map icon'><span class='tooltiptext'>Goblin Tinkerer</span></div></p></div>"
    const closeBox = document.getElementById('closeBox');
    closeBox.addEventListener('click', closeCraftGuide);
}
function showREK3KRecipe() {
    showCraftGuide();
    craftGuide.innerHTML = "";
    craftGuide.innerHTML += "<p id='closeBox'>&times;</p><div style='margin: 10px 0 0 10px'><img style='transform: scale(2)' src='../terrariaImg/R.E.K._3000.png' alt='R.E.K 3000'><h2 class='mainItem'>R.E.K 3000</h2><p style='margin: 10px 5% 0 0; font-size: 20px'>Made by combining</p> " +
        "<div class='tooltip' style='float: left'><img src='../terrariaImg/Radar.png' alt='Radar'><span class='tooltiptext'>Radar</span></div><p class='recipeTextCenter'>Obtained from <div style='position: absolute; top: 110px; left: 155px' class='alignTriangle'><div id='triangleP1'><img style='transform: scale(1.2); padding: 5px' src='../terrariaImg/Wooden_Crate.png' alt='Wooden Crate'><img style='transform: scale(1.2); padding: 5px' src='../terrariaImg/Pearlwood_Crate.png' alt='Pearlwood Crate'></div><div id='triangleP2'><img style='transform: scale(1.2); padding: 5px' src='../terrariaImg/Chest.png' alt='Regular Chest'></div></div></p><br><br><br><p style='margin-left: 15px;'>with</p>" +
        "<div class='tooltip' style='float: left'><img src='../terrariaImg/Tally_Counter.png' alt='Tally Counter'><span class='tooltiptext'>Tally Counter</span></div><p class='recipeTextCenter'>Obtained from <div style='position: absolute; top: 180px; left: 155px' class='alignTriangle'><div id='triangleP1'><img style='transform: scale(1.2); padding: 5px' src='../terrariaImg/Angry_Bones_1.png' alt='Angry Bones'><img style='transform: scale(1.2); padding: 5px' src='../terrariaImg/Dark_Caster.png' alt='Dark Caster'></div><div id='triangleP2'><img style='transform: scale(1.2); padding: 5px' src='../terrariaImg/Cursed_Skull.png' alt='Cursed Skull'></div></div></p><br><br><br><p style='margin-left: 15px;'>with</p>" +
        "<div class='tooltip' style='float: left'><img src='../terrariaImg/Lifeform_Analyzer.png' alt='Lifeform Analyzer'><span class='tooltiptext'>Lifeform Analyzer (5 Gold coins)</span></div><p class='recipeTextCenter'>Bought from </p><div class='tooltip' style='float: left'><img src='../terrariaImg/Traveling_Merchant.png' alt='Travelling Merchant Map icon'><span class='tooltiptext'>Travelling Merchant</span></div><br><br><br><br>" +
        "<p class='recipeTextCenter'>At</p><div class='tooltip' style='float: left'><img src='../terrariaImg/Tinkerers_Workshop.png' alt='Tinkerers Workshop'><span class='tooltiptext'>Tinkerer's Workshop</span></div><p class='recipeTextCenter'>Bought from<div class='tooltip' style=''><img src='../terrariaImg/Goblin_Tinkerer.png' alt='Goblin Tinkerer Map icon'><span class='tooltiptext'>Goblin Tinkerer</span></div></p></div>"
    const closeBox = document.getElementById('closeBox');
    closeBox.addEventListener('click', closeCraftGuide);
}
function showGoblinRecipe() {
    showCraftGuide();
    craftGuide.innerHTML = "";
    craftGuide.innerHTML += "<p id='closeBox'>&times;</p><div style='margin: 10px 0 0 10px'><img style='transform: scale(2)' src='../terrariaImg/Goblin_Tech.png' alt='Goblin Tech'><h2 class='mainItem'>Goblin Tech</h2><p style='margin: 10px 5% 0 0; font-size: 20px'>Made by combining</p> " +
        "<div class='tooltip' style='float: left'><img src='../terrariaImg/DPS_Meter.png' alt='DPS Meter'><span class='tooltiptext'>DPS Meter (5 Gold coins)</span></div><p class='recipeTextCenter'>Bought from </p><div class='tooltip' style='float: left'><img src='../terrariaImg/Traveling_Merchant.png' alt='Travelling Merchant Map icon'><span class='tooltiptext'>Travelling Merchant</span></div><br><br><br><p style='margin: 15px 0 15px 15px ;'>Combined with</p>" +
        "<div class='tooltip' style='float: left'><img src='../terrariaImg/Stopwatch.png' alt='Stopwatch'><span class='tooltiptext'>Stopwatch (5 Gold coins)</span></div><p class='recipeTextCenter'>Bought from </p><div class='tooltip' style='float: left'><img src='../terrariaImg/Traveling_Merchant.png' alt='Travelling Merchant Map icon'><span class='tooltiptext'>Travelling Merchant</span></div><br><br><br><p style='margin: 15px 0 15px 15px;'>Combined with</p>" +
        "<div class='tooltip' style='float: left'><img src='../terrariaImg/Metal_Detector.png' alt='Metal Detector'><span class='tooltiptext'>Metal Detector (50% chance on normal mode, 100% chance on Expert or higher)</span></div><p class='recipeTextCenter'>Obtained from </p><div class='tooltip' style='float: left'><img src='../terrariaImg/Nymph.png' alt='Nymph'><span class='tooltiptext'>Nymph</span></div><br><br><br><br>" +
        "<p class='recipeTextCenter'>At</p><div class='tooltip' style='float: left'><img src='../terrariaImg/Tinkerers_Workshop.png' alt='Tinkerers Workshop'><span class='tooltiptext'>Tinkerer's Workshop</span></div><p class='recipeTextCenter'>Bought from<div class='tooltip' style=''><img src='../terrariaImg/Goblin_Tinkerer.png' alt='Goblin Tinkerer Map icon'><span class='tooltiptext'>Goblin Tinkerer</span></div></p></div>"
    const closeBox = document.getElementById('closeBox');
    closeBox.addEventListener('click', closeCraftGuide);
}

function showFishRecipe() {
    showCraftGuide();
    craftGuide.innerHTML = "";
    craftGuide.innerHTML += "<p id='closeBox'>&times;</p><div style='margin: 10px 0 0 10px'><img style='transform: scale(2)' src='../terrariaImg/Fish_Finder.png' alt='Fish Finder'><h2 class='mainItem'>Fish Finder</h2><p style='margin: 10px 5% 0 0; font-size: 20px'>Made by combining</p> " +
        "<div class='tooltip' style='float: left'><img src='../terrariaImg/Fishermans_Pocket_Guide.png' alt='Fishermans Pocket guide'><span class='tooltiptext'>Fisherman's Pocket Guide (3.33% chance)</span></div><p class='recipeTextCenter'>Obtained from </p><div class='tooltip' style='float: left'><img src='../terrariaImg/Angler.png' alt='Angler Map icon'><span class='tooltiptext'>Angler</span></div><p class='recipeTextCenter'>'s quest</p><br><br><br><br><p style='margin-left: 15px;'>Combined with</p>" +
        "<div class='tooltip' style='float: left'><img src='../terrariaImg/Weather_Radio.png' alt='Weather Radio'><span class='tooltiptext'>Weather Radio (3.33% chance)</span></div><p class='recipeTextCenter'>Obtained from </p><div class='tooltip' style='float: left'><img src='../terrariaImg/Angler.png' alt='Angler Map icon'><span class='tooltiptext'>Angler</span></div><p class='recipeTextCenter'>'s quest</p><br><br><br><br><p style='margin-left: 15px;'>Combined with</p>" +
        "<div class='tooltip' style='float: left'><img src='../terrariaImg/Sextant.png' alt='Sextant'><span class='tooltiptext'>Sextant (3.33% chance)</span></div><p class='recipeTextCenter'>Obtained from </p><div class='tooltip' style='float: left'><img src='../terrariaImg/Angler.png' alt='Angler Map icon'><span class='tooltiptext'>Angler</span></div><p class='recipeTextCenter'>'s quest</p><br><br><br><br>" +
        "<p class='recipeTextCenter'>At</p><div class='tooltip' style='float: left'><img src='../terrariaImg/Tinkerers_Workshop.png' alt='Tinkerers Workshop'><span class='tooltiptext'>Tinkerer's Workshop</span></div><p class='recipeTextCenter'>Bought from<div class='tooltip' style=''><img src='../terrariaImg/Goblin_Tinkerer.png' alt='Goblin Tinkerer Map icon'><span class='tooltiptext'>Goblin Tinkerer</span></div></p></div>"
    const closeBox = document.getElementById('closeBox');
    closeBox.addEventListener('click', closeCraftGuide);
}

function showPDARecipe() {
    showCraftGuide();
    craftGuide.innerHTML = "";
    craftGuide.innerHTML += "<p id='closeBox'>&times;</p><div style='margin: 10px 0 0 10px'><img style='transform: scale(2)' src='../terrariaImg/PDA.png' alt='PDA'><h2 class='mainItem'>PDA</h2><p style='margin: 10px 5% 0 0; font-size: 20px'>Made by combining</p> " +
        "<div class='tooltip' style='float: left'><img src='../terrariaImg/GPS.png' alt='GPS'><span class='tooltiptext'>GPS</span></div><br><br><br><p style='margin-left: 15px;'>with</p>" +
        "<div class='tooltip' style='float: left'><img src='../terrariaImg/R.E.K._3000.png' alt='R.E.K.3000'><span class='tooltiptext'>R.E.K 3000</span></div><br><br><br><br><p style='margin-left: 15px;'>with</p>" +
        "<div class='tooltip' style='float: left'><img src='../terrariaImg/Goblin_Tech.png' alt='Goblin Tech'><span class='tooltiptext'>Goblin Tech</span></div><br><br><br><p style='margin-left: 15px;'>with</p>" +
        "<div class='tooltip' style='float: left'><img src='../terrariaImg/Fish_Finder.png' alt='Fish Finder'><span class='tooltiptext'>Fish Finder</span></div><br><br><br><br>" +
        "<p class='recipeTextCenter'>At</p><div class='tooltip' style='float: left'><img src='../terrariaImg/Tinkerers_Workshop.png' alt='Tinkerers Workshop'><span class='tooltiptext'>Tinkerer's Workshop</span></div><p class='recipeTextCenter'>Bought from<div class='tooltip' style=''><img src='../terrariaImg/Goblin_Tinkerer.png' alt='Goblin Tinkerer Map icon'><span class='tooltiptext'>Goblin Tinkerer</span></div></p></div>"
    const closeBox = document.getElementById('closeBox');
    closeBox.addEventListener('click', closeCraftGuide);
}

function showCellphoneRecipe() {
    showCraftGuide();
    craftGuide.innerHTML = "";
    craftGuide.innerHTML += "<p id='closeBox'>&times;</p><div style='margin: 10px 0 0 10px'><img style='transform: scale(2)' src='../terrariaImg/Cell_Phone.png' alt='Cell Phone'><h2 class='mainItem'>Cellphone</h2><p style='margin: 10px 5% 0 0; font-size: 20px'>Made by combining</p>" +
        "<div class='tooltip' style='float: left'><img src='../terrariaImg/PDA.png' alt='PDA'><span class='tooltiptext'>PDA</span></div><p class='recipeTextCenter'>with</p>" +
        "<div class='tooltip' ><img style='position: absolute; top: -50' src='../terrariaImg/Magic_Mirror.png' alt='Magic Mirror'><span class='tooltiptext'>Magic Mirror (from Gold chests or Gold/Titanium crates from fishing)</span></div><br><br><br><br><p style='margin-left: 15px;'>or</p>" +
        "<div class='tooltip' style='float: left'><img src='../terrariaImg/Ice_Mirror.png' alt='Ice Mirror'><span class='tooltiptext'>Ice Mirror (from Ice chests and Tundra biome crates from fishing)</span></div><br><br><br><p style='margin-left: 15px;'></p>" +
        "<p class='recipeTextCenter'>At</p><div class='tooltip' style='float: left'><img src='../terrariaImg/Tinkerers_Workshop.png' alt='Tinkerers Workshop'><span class='tooltiptext'>Tinkerer's Workshop</span></div><p class='recipeTextCenter'>Bought from<div class='tooltip' style=''><img src='../terrariaImg/Goblin_Tinkerer.png' alt='Goblin Tinkerer Map icon'><span class='tooltiptext'>Goblin Tinkerer</span></div></p></div>"
    const closeBox = document.getElementById('closeBox');
    closeBox.addEventListener('click', closeCraftGuide);
}

//Ankh Shield functions
function showABRecipe() {
    showCraftGuide();
    craftGuide.innerHTML = "";
    craftGuide.innerHTML += "<p id='closeBox'>&times;</p><div style='margin: 10px 0 0 10px'><img style='transform: scale(2)' src='../terrariaImg/Armor_Bracing.png' alt='Armor Bracing'><h2 class='mainItem'>Armor Bracing</h2><p style='margin: 10px 5% 0 0; font-size: 20px'>Made by combining</p>" +
        "<div class='tooltip' style='float: left; margin-left: 10px'><img src='../terrariaImg/Vitamins.png' alt='Vitamins'><span class='tooltiptext'>Vitamins (1% chance on normal, 2% chance on Expert or higher)</span></div><p class='recipeTextCenter'>Obtained from </p><div class='tooltip' style='float: left'><img src='../terrariaImg/Corruptor.png' alt='Corruptor'><span class='tooltiptext'>Corruptor</span></div><p class='recipeTextCenter'>&</p><div class='tooltip' style='float: left'><img src='../terrariaImg/Floaty_Gross.png' alt='Floaty Gross'><span class='tooltiptext'>Floaty Gross</span></div><br><br><br><br><p style='margin-left: 15px;'>with</p>" +
        "<div class='tooltip' style='float: left; margin-left: 10px'><img src='../terrariaImg/Armor_Polish.png' alt='Armor Polish'><span class='tooltiptext'>Armor Polish (1% chance on normal, 2% chance on Expert or higher)</span></div><p class='recipeTextCenter'>Obtained from </p><div class='tooltip' style='float: left'><img src='../terrariaImg/Blue_Armored_Bones_1.png' alt='Blue Armored Bones'><span class='tooltiptext'>Blue Armored Bones</span></div><p class='recipeTextCenter'>&</p><div class='tooltip' style='float: left'><img src='../terrariaImg/Armored_Skeleton.png' alt='Armored Skeleton'><span class='tooltiptext'>Armored Skeleton</span></div><br><br><br>" +
        "<p class='recipeTextCenter'>At</p><div class='tooltip' style='float: left'><img src='../terrariaImg/Tinkerers_Workshop.png' alt='Tinkerers Workshop'><span class='tooltiptext'>Tinkerer's Workshop</span></div><p class='recipeTextCenter'>Bought from<div class='tooltip' style=''><img src='../terrariaImg/Goblin_Tinkerer.png' alt='Goblin Tinkerer Map icon'><span class='tooltiptext'>Goblin Tinkerer</span></div></p></div>"
    const closeBox = document.getElementById('closeBox');
    closeBox.addEventListener('click', closeCraftGuide);
}
function showMBRecipe() {
    showCraftGuide();
    craftGuide.innerHTML = "";
    craftGuide.innerHTML += "<p id='closeBox'>&times;</p><div style='margin: 10px 0 0 10px'><img style='transform: scale(2)' src='../terrariaImg/Medicated_Bandage.png' alt='Medicated Bandage'><h2 class='mainItem'>Medicated Bandage</h2><p style='margin: 10px 5% 0 0; font-size: 20px'>Made by combining</p>" +
        "<div class='tooltip' style='float: left; margin-left: 10px'><img src='../terrariaImg/Adhesive_Bandage.png' alt='Adhesive Bandage'><span class='tooltiptext'>Adhesive Bandage (1% chance on normal, 2% chance on Expert and higher)</span></div><p class='recipeTextCenter'>Obtained from </p><br><br><div class='tooltip' style='float: left'><img src='../terrariaImg/Rusty_Armored_Bones_1.png' alt='Rusty Armored Bones'><span class='tooltiptext'>Rusty Armored Bones</span></div>" +
        "<p class='recipeTextCenter'>&</p><div class='tooltip' style='float: left'><img src='../terrariaImg/Werewolf.png' alt='Werewolf'><span class='tooltiptext'>Werewolf</span></div><p class='recipeTextCenter'>&</p><div class='tooltip' style='float: left'><img src='../terrariaImg/Angler_Fish.png' alt='Angler Fish'><span class='tooltiptext'>Angler Fish</span></div><br><br><br><p style='margin-left: 15px;'>with</p>" +
        "<div class='tooltip' style='float: left; margin-left: 10px'><img src='../terrariaImg/Bezoar.png' alt='Bezoar'><span class='tooltiptext'>Bezoar (1% chance on normal, 2% chance on Expert and higher)</span></div><p class='recipeTextCenter'>Obtained from </p><br><br><div class='tooltip' style='float: left'><img src='../terrariaImg/Hornet.png' alt='Hornet'><span class='tooltiptext'>Hornet</span></div>" +
        "<p class='recipeTextCenter'>&</p><div class='tooltip' style='float: left'><img src='../terrariaImg/Moss_Hornet.png' alt='Moss Hornet'><span class='tooltiptext'>Moss Hornet</span></div><p class='recipeTextCenter'>&</p><div class='tooltip' style='float: left'><img src='../terrariaImg/Toxic_Sludge.png' alt='Toxic Sludge'><span class='tooltiptext'>Toxic Sludge</span></div><br><br><br>" +
        "<p class='recipeTextCenter'>At</p><div class='tooltip' style='float: left'><img src='../terrariaImg/Tinkerers_Workshop.png' alt='Tinkerers Workshop'><span class='tooltiptext'>Tinkerer's Workshop</span></div><p class='recipeTextCenter'>Bought from<div class='tooltip' style=''><img src='../terrariaImg/Goblin_Tinkerer.png' alt='Goblin Tinkerer Map icon'><span class='tooltiptext'>Goblin Tinkerer</span></div></p></div>"
    const closeBox = document.getElementById('closeBox');
    closeBox.addEventListener('click', closeCraftGuide);
}
function showCCMRecipe() {
    showCraftGuide();
    craftGuide.innerHTML = "";
    craftGuide.innerHTML += "<p id='closeBox'>&times;</p><div style='margin: 10px 0 0 10px'><img style='transform: scale(2)' src='../terrariaImg/Countercurse_Mantra.png' alt='Countercurse Mantra'><h2 class='mainItem'>Countercurse Mantra</h2><p style='margin: 10px 5% 0 0; font-size: 20px'>Made by combining</p>" +
        "<div class='tooltip' style='float: left; margin-left: 10px'><img src='../terrariaImg/Nazar.png' alt='Nazar'><span class='tooltiptext'>Nazar (1% chance on normal, 2% chance on Expert and higher) from Crimson Axe, Cursed Hammer, Enchanted Sword(Enemy) and (Giant)Cursed Skull</span></div><br><br><br><br><p style='margin-left: 15px;'>with</p>" +
        "<div class='tooltip' style='float: left; margin-left: 10px'><img src='../terrariaImg/Megaphone.png' alt='Megaphone'><span class='tooltiptext'>Megaphone (1% chance on normal, 2% chance on Expert and higher) from Green Jellyfish, Blood/Dark Mummy and Pixie</span></div><br><br><br>" +
        "<p class='recipeTextCenter'>At</p><div class='tooltip' style='float: left'><img src='../terrariaImg/Tinkerers_Workshop.png' alt='Tinkerers Workshop'><span class='tooltiptext'>Tinkerer's Workshop</span></div><p class='recipeTextCenter'>Bought from<div class='tooltip' style=''><img src='../terrariaImg/Goblin_Tinkerer.png' alt='Goblin Tinkerer Map icon'><span class='tooltiptext'>Goblin Tinkerer</span></div></p></div>"
    const closeBox = document.getElementById('closeBox');
    closeBox.addEventListener('click', closeCraftGuide);
}

function showthePlanRecipe() {
    showCraftGuide();
    craftGuide.innerHTML = "";
    craftGuide.innerHTML += "<p id='closeBox'>&times;</p><div style='margin: 10px 0 0 10px'><img style='transform: scale(2)' src='../terrariaImg/The_Plan.png' alt='The Plan'><h2 class='mainItem'>The Plan</h2><p style='margin: 10px 5% 0 0; font-size: 20px'>Made by combining</p>" +
        "<div class='tooltip' style='float: left; margin-left: 10px'><img src='../terrariaImg/Trifold_Map.png' alt='Trifold Map'><span class='tooltiptext'>Trifold Map (1% chance on normal, 2% chance on Expert and higher) from Giant Bat, Light Mummy and Clown</span></div><br><br><br><p style='margin-left: 15px;'>with</p>" +
        "<div class='tooltip' style='float: left; margin-left: 10px'><img src='../terrariaImg/Fast_Clock.png' alt='Fast Clock'><span class='tooltiptext'>Fast Clock (1% chance on normal, 2% chance on Expert and higher) from Mummy, Pixie and Wraith</span></div><br><br><br><br>" +
        "<p class='recipeTextCenter'>At</p><div class='tooltip' style='float: left'><img src='../terrariaImg/Tinkerers_Workshop.png' alt='Tinkerers Workshop'><span class='tooltiptext'>Tinkerer's Workshop</span></div><p class='recipeTextCenter'>Bought from<div class='tooltip' style=''><img src='../terrariaImg/Goblin_Tinkerer.png' alt='Goblin Tinkerer Map icon'><span class='tooltiptext'>Goblin Tinkerer</span></div></p></div>"
    const closeBox = document.getElementById('closeBox');
    closeBox.addEventListener('click', closeCraftGuide);
}
function showObsidianskullRecipe2() {
    showCraftGuide();
    craftGuide.innerHTML = "";
    craftGuide.innerHTML += "<p id='closeBox'>&times;</p><div style='margin: 10px 0 15px 10px'><img style='transform: scale(1.5)' src='../terrariaImg/Obsidian_Skull.png' alt='Obsidian Skull'><h2 class='mainItem'>Obsidian Skull</h2><p style='margin: 10px 5% 0 0; font-size: 20px'>Made with</p>" +
        "<div class='tooltip' style='float: left'><img src='../terrariaImg/Obsidian.png' alt='Obsidian'><span class='tooltiptext'>Obsidian</span></div><p class='recipeTextCenter'>Obtained from <div class='tooltip' style='float: left'><img src='../terrariaImg/Water.png' alt='Water'><span class='tooltiptext'>Water</span></div> <p class='recipeTextCenter'>+</p> <div class='tooltip' style='float: left'><img src='../terrariaImg/Lava.png' alt='Lava'><span class='tooltiptext'>Lava</span></div></p><br><br><br>" +
        "<div class='tooltip' style='float: left;'><img style='' src='../terrariaImg/Obsidian.png' alt='Obsidian'><span class='tooltiptext'>Obsidian</span></div><p class='recipeTextCenter'>X 20 at </p><div class='tooltip' style='float: left'><img src='../terrariaImg/Furnace.png' alt='Furnace'><span class='tooltiptext'>Furnace</span></div></div>"
    const closeBox = document.getElementById('closeBox');
    closeBox.addEventListener('click', closeCraftGuide);
}

function showOSRecipe() {
    showCraftGuide();
    craftGuide.innerHTML = "";
    craftGuide.innerHTML += "<p id='closeBox'>&times;</p><div style='margin: 10px 0 0 10px'><img style='transform: scale(2)' src='../terrariaImg/Obsidian_Shield.png' alt='Obsidian Shield'><h2 class='mainItem'>Obsidian Shield</h2><p style='margin: 10px 5% 0 0; font-size: 20px'>Made by combining</p>" +
        "<div class='tooltip' style='float: left'><img src='../terrariaImg/Obsidian_Skull.png' alt='Obsidian Skull'><span class='tooltiptext'>Obsidian Skull</span></div><br><br><br><br><p style='margin-left: 15px;'>with</p>" +
        "<div class='tooltip' style='float: left'><img src='../terrariaImg/Cobalt_Shield.png' alt='Cobalt Shield'><span class='tooltiptext'>Cobalt Shield</span></div><p class='recipeTextCenter'>Obtained from </p><div class='tooltip' style='float: left'><img src='../terrariaImg/Gold_Chest.png' alt='Gold Chest'><span class='tooltiptext'>Opened Dungeon Chest</span></div><p class='recipeTextCenter'>or</p><div class='tooltip' style='float: left'><img src='../terrariaImg/Golden_Lock_Box.png' alt='Golden Lock Box'><span class='tooltiptext'>Golden Lock Box (14.29% chance) (obtained from opening dungeon crates from fishing)</span></div><br><br><br>" +
        "<p class='recipeTextCenter'>At</p><div class='tooltip' style='float: left'><img src='../terrariaImg/Tinkerers_Workshop.png' alt='Tinkerers Workshop'><span class='tooltiptext'>Tinkerer's Workshop</span></div><p class='recipeTextCenter'>Bought from<div class='tooltip' style=''><img src='../terrariaImg/Goblin_Tinkerer.png' alt='Goblin Tinkerer Map icon'><span class='tooltiptext'>Goblin Tinkerer</span></div></p></div>" +
    "<br><p style='margin: 0 0 15px 15px'>Note: the golden chest displayed here is supposed to represent<br> an OPENED Dungeon Gold Chest</p></div>"
    const closeBox = document.getElementById('closeBox');
    closeBox.addEventListener('click', closeCraftGuide);
}

function showBlindfold() {
    showCraftGuide();
    craftGuide.innerHTML = "";
    craftGuide.innerHTML += "<p id='closeBox'>&times;</p><div style='margin: 10px 0 0 10px'><img style='transform: scale(2)' src='../terrariaImg/Blindfold.png' alt='Blindfold'><h2 class='mainItem'>Blindfold</h2><p style='margin: 10px 5% 0 0; font-size: 20px'>Obtained from</p>" +
        "<div class='tooltip' style='float: left'><img src='../terrariaImg/Slimeling.png' alt='Slimeling'><span class='tooltiptext'>Slimeling</span></div><br><br><p>or</p>" +
        "<div class='tooltip' style='float: left'><img src='../terrariaImg/Corrupt_Slime.png' alt='Corrupt Slime'><span class='tooltiptext'>Corrupt Slime</span></div><br><br><br><p>or</p>" +
        "<div class='tooltip' style='float: left'><img src='../terrariaImg/Crimslime.png' alt='Crimslime'><span class='tooltiptext'>Crimslime</span></div><br><br><br><p>or</p>" +
        "<div class='tooltip' style='float: left'><img src='../terrariaImg/Dark_Mummy.png' alt='Dark Mummy'><span class='tooltiptext'>Dark Mummy</span></div><br><br><br><p>or</p>" +
        "<div class='tooltip' style='float: left'><img src='../terrariaImg/Blood_Mummy.png' alt='Blood Mummy'><span class='tooltiptext'>Blood Mummy</span></div><br><br><br><p style='margin: 0 0 15px 15px'>At a 1% chance in Normal mode and a 2% chance in Expert or higher.</p></div>"
    const closeBox = document.getElementById('closeBox');
    closeBox.addEventListener('click', closeCraftGuide);
}

function showACRecipe() {
    showCraftGuide();
    craftGuide.innerHTML = "";
    craftGuide.innerHTML += "<p id='closeBox'>&times;</p><div style='margin: 10px 0 0 10px'><img style='transform: scale(2)' src='../terrariaImg/Ankh_Charm.png' alt='Ankh Charm'><h2 class='mainItem'>Ankh Charm</h2><p style='margin: 10px 5% 0 0; font-size: 20px'>Made by combining</p>" +
        "<div class='tooltip' style='float: left'><img src='../terrariaImg/Armor_Bracing.png' alt='Armor Bracing'><span class='tooltiptext'>Armor Bracing</span></div><br><br><br><p style='margin-left: 15px;'>with</p>" +
        "<div class='tooltip' style='float: left'><img src='../terrariaImg/Medicated_Bandage.png' alt='Medicated Bandage'><span class='tooltiptext'>Medicated Bandage</span></div><br><br><br><p style='margin-left: 15px;'>with</p>" +
        "<div class='tooltip' style='float: left'><img src='../terrariaImg/Countercurse_Mantra.png' alt='Countercurse Mantra'><span class='tooltiptext'>Countercurse Mantra</span></div><br><br><br<br><br><br><p style='margin-left: 15px;'>with</p>" +
        "<div class='tooltip' style='float: left'><img src='../terrariaImg/The_Plan.png' alt='The Plan'><span class='tooltiptext'>The Plan</span></div><br><br><br><br><p style='margin-left: 15px;'>with</p>" +
        "<div class='tooltip' style='float: left'><img src='../terrariaImg/Blindfold.png' alt='Blindfold'><span class='tooltiptext'>Blindfold</span></div><br><br><br>" +
        "<p class='recipeTextCenter'>At</p><div class='tooltip' style='float: left'><img src='../terrariaImg/Tinkerers_Workshop.png' alt='Tinkerers Workshop'><span class='tooltiptext'>Tinkerer's Workshop</span></div><p class='recipeTextCenter'>Bought from<div class='tooltip' style=''><img src='../terrariaImg/Goblin_Tinkerer.png' alt='Goblin Tinkerer Map icon'><span class='tooltiptext'>Goblin Tinkerer</span></div></p></div>"
    const closeBox = document.getElementById('closeBox');
    closeBox.addEventListener('click', closeCraftGuide);
}

function showASRecipe() {
    showCraftGuide();
    craftGuide.innerHTML = "";
    craftGuide.innerHTML += "<p id='closeBox'>&times;</p><div style='margin: 10px 0 0 10px'><img style='transform: scale(2)' src='../terrariaImg/Ankh_Shield.png' alt='Ankh Shield'><h2 class='mainItem'>Ankh Shield</h2><p style='margin: 10px 5% 0 0; font-size: 20px'>Made by combining</p>" +
        "<div class='tooltip' style='float: left'><img src='../terrariaImg/Obsidian_Shield.png' alt='Obsidian Shield'><span class='tooltiptext'>Obsidian Shield</span></div><p class='recipeTextCenter'>with</p>" +
        "<div class='tooltip' style='float: left' ><img src='../terrariaImg/Ankh_Charm.png' alt='Ankh Charm'><span class='tooltiptext'>Ankh Charm</span></div><br><br><br><br>" +
        "<p class='recipeTextCenter'>At</p><div class='tooltip' style='float: left'><img src='../terrariaImg/Tinkerers_Workshop.png' alt='Tinkerers Workshop'><span class='tooltiptext'>Tinkerer's Workshop</span></div><p class='recipeTextCenter'>Bought from<div class='tooltip' style=''><img src='../terrariaImg/Goblin_Tinkerer.png' alt='Goblin Tinkerer Map icon'><span class='tooltiptext'>Goblin Tinkerer</span></div></p></div>"
    const closeBox = document.getElementById('closeBox');
    closeBox.addEventListener('click', closeCraftGuide);
}

//Zenith Functions
function showBoGRecipe() {
    showCraftGuide();
    craftGuide.innerHTML = "";
    craftGuide.innerHTML += "<p id='closeBox'>&times;</p><div style='margin: 10px 0 0 10px'><img style='transform: scale(1.3)' src='../terrariaImg/Blade_of_Grass.png' alt='Blade of Grass'><h2 class='mainItem'>Blade of Grass</h2><p style='margin: 10px 5% 0 0; font-size: 20px'>Made by combining</p>" +
        "<p><img style='float: left' src='../terrariaImg/Jungle_Spores_Item.png' alt='Jungle Spores Item'>X12 <br><br>Obtained from</p><img src='../terrariaImg/Jungle_Spores.png' alt='Jungle Spores Terrain'><br><br><p style='margin-left: 15px;'>Combined with</p>" +
        "<p><img style='float: left' src='../terrariaImg/Stinger.png' alt='Stinger'>X12 <br><br>Obtained from</p>" +
        "<img src='../terrariaImg/Hornet.png' alt='Hornet'><img src='../terrariaImg/Moss_Hornet.png' alt='Moss Hornet'><img src='../terrariaImg/Spiked_Jungle_Slime.png' alt='Spiked Jungle Slime'><br><br><br>" +
        "<p>at <img src='../terrariaImg/Iron_Anvil.png' alt='Iron Anvil'>or<img src='../terrariaImg/Lead_Anvil.png' alt='Lead Anvil'></p></div>"
    const closeBox = document.getElementById('closeBox');
    closeBox.addEventListener('click', closeCraftGuide);
}

function showMuramasaRecipe() {
    showCraftGuide();
    craftGuide.innerHTML = "";
    craftGuide.innerHTML += "<p id='closeBox'>&times;</p><div style='margin: 10px 0 0 10px'><img style='transform: scale(1.3)' src='../terrariaImg/Muramasa.png' alt='Muramasa'><h2 class='mainItem'>Muramasa</h2><p style='margin: 10px 5% 0 0; font-size: 20px'>Obtained from</p>" +
        "<img style='float: left' src='../terrariaImg/Gold_Chest.png' alt='Gold Chest'><br><br><p style='margin-left: 15px;'>or</p>" +
        "<img src='../terrariaImg/Golden_Lock_Box.png' alt='Golden Lock Box'>" +
        "<p>Note: the gold chest is suposed to be an opened gold chest from within the dungeon</p></div>"
    const closeBox = document.getElementById('closeBox');
    closeBox.addEventListener('click', closeCraftGuide);
}

function showFGSRecipe() {
    showCraftGuide();
    craftGuide.innerHTML = "";
    craftGuide.innerHTML += "<p id='closeBox'>&times;</p><div style='margin: 10px 0 0 10px'><img style='transform: scale(1.3)' src='../terrariaImg/Fiery_Greatsword.png' alt='Fiery Greatsword'><h2 class='mainItem'>Fiery Greatsword</h2><p style='margin: 10px 5% 0 0; font-size: 20px'>Made by combining</p>" +
        "<p><img src='../terrariaImg/Hellstone_Bar.png' alt='Hellstone bar'>X 20</p>" +
        "<img style='float: left' src='../terrariaImg/Obsidian.png' alt='Obsidian'><p><br><br>Obtained from <img src='../terrariaImg/Water.png' alt='Water'> + <img src='../terrariaImg/Lava.png' alt='Lava'></p>" +
        "<img style='float: left' src='../terrariaImg/Obsidian.png' alt='Obsidian'><p>X 20 at <img src='../terrariaImg/Furnace.png' alt='Furnace'></p><br><br><p style='margin-left: 15px;'>Combined with</p>" +
        "<p><img src='../terrariaImg/Hellstone.png' alt='Hellstone'>X 60</p>" +
        "<p>at <img src='../terrariaImg/Iron_Anvil.png' alt='Iron Anvil'>or<img src='../terrariaImg/Lead_Anvil.png' alt='Lead Anvil'></p></div>"
    const closeBox = document.getElementById('closeBox');
    closeBox.addEventListener('click', closeCraftGuide);
}

function showLBRecipe() {
    showCraftGuide();
    craftGuide.innerHTML = "";
    craftGuide.innerHTML += "<p id='closeBox'>&times;</p><div style='margin: 10px 0 0 10px'><img style='transform: scale(1.3)' src='../terrariaImg/Lights_Bane.png' alt='Lights Bane'><h2 class='mainItem'>Light's Bane</h2><p style='margin: 10px 5% 0 0; font-size: 20px'>Made by combining</p>" +
        "<p><img style='float: left' src='../terrariaImg/Demonite_Ore.png' alt='Demonite Ore'>X 30</p><p>Obtained from <br><img src='../terrariaImg/Eye_of_Cthulhu.png' alt='Eye of Cthulhu'> or <img src='../terrariaImg/Eater_of_Worlds.png' alt='Eater of Worlds'></p><br><p style='margin-left: 15px;'>To make</p>" +
        "<p><img src='../terrariaImg/Demonite_Bar.png' alt='Demonite Bar'>X 10</p>" +
        "<p>at <img src='../terrariaImg/Iron_Anvil.png' alt='Iron Anvil'>or<img src='../terrariaImg/Lead_Anvil.png' alt='Lead Anvil'></p></div>"
    const closeBox = document.getElementById('closeBox');
    closeBox.addEventListener('click', closeCraftGuide);
}

function showBBRecipe() {
    showCraftGuide();
    craftGuide.innerHTML = "";
    craftGuide.innerHTML += "<p id='closeBox'>&times;</p><div style='margin: 10px 0 0 10px'><img style='transform: scale(1.3)' src='../terrariaImg/Blood_Butcherer.png' alt='Blood Butcherer'><h2 class='mainItem'>Blood Butcherer</h2><p style='margin: 10px 5% 0 0; font-size: 20px'>Made by combining</p>" +
        "<p><img style='float: left' src='../terrariaImg/Crimtane_Ore.png' alt='Crimtane Ore'>X 30</p><p>Obtained from <br><img src='../terrariaImg/Eye_of_Cthulhu.png' alt='Eye of Cthulhu'> or <img src='../terrariaImg/Brain_of_Cthulhu.png' alt='Brain of Cthulhu'></p><br><p style='margin-left: 15px;'>To make</p>" +
        "<p><img src='../terrariaImg/Crimtane_Bar.png' alt='Crimtane Bar'>X 10</p>" +
        "<p>at <img src='../terrariaImg/Iron_Anvil.png' alt='Iron Anvil'>or<img src='../terrariaImg/Lead_Anvil.png' alt='Lead Anvil'></p></div>"
    const closeBox = document.getElementById('closeBox');
    closeBox.addEventListener('click', closeCraftGuide);
}

function showNERecipe() {
    showCraftGuide();
    craftGuide.innerHTML = "";
    craftGuide.innerHTML += "<p id='closeBox'>&times;</p><div style='margin: 10px 0 0 10px'><img style='transform: scale(1.5)' src='../terrariaImg/Nights_Edge.png' alt='Nights Edge'><h2 class='mainItem'>Night's Edge</h2><p style='margin: 10px 5% 0 0; font-size: 20px'>Made by combining</p>" +
        "<img style='float: left; transform: scale(1)'  src='../terrariaImg/Blade_of_Grass.png' alt='Blade of Grass'><br><p style='margin-left: 15px;'>Combined with</p><br><br>" +
        "<img style='float: left; transform: scale(1)' src='../terrariaImg/Muramasa.png' alt='Muramasa'><br><p style='margin-left: 15px;'>Combined with</p><br><br>" +
        "<img style='float: left; transform: scale(1)' src='../terrariaImg/Fiery_Greatsword.png' alt='Fiery Greatsword'><br><p style='margin-left: 15px;'>Combined with</p><br><br>" +
        "<p><img style='float: left; transform: scale(1)' src='../terrariaImg/Lights_Bane.png' alt='Lights Bane'>or<img style='transform: scale(1)' src='../terrariaImg/Blood_Butcherer.png' alt='Blood Butcherer'></p>" +
        "<p>At <img style='transform: scale(1)' src='../terrariaImg/Demon_Altar.png' alt='Demon Altar'>or <img style='transform: scale(1)' src='../terrariaImg/Crimson_Altar.png' alt='Crimson Altar'></p></div>"
    const closeBox = document.getElementById('closeBox');
    closeBox.addEventListener('click', closeCraftGuide);
}

function showCBRecipe() {
    showCraftGuide();
    craftGuide.innerHTML = "";
    craftGuide.innerHTML += "<p id='closeBox'>&times;</p><div style='margin: 10px 0 0 10px'><img style='transform: scale(2)' src='../terrariaImg/Chlorophyte_Bar.png' alt='Chlorophyte Bar'><h2 class='mainItem'>Chlorophyte Bar</h2><p style='margin: 10px 5% 0 0; font-size: 20px'>Made by smelting</p>" +
        "<img style='float: left' src='../terrariaImg/Chlorophyte_Ore.png' alt='Chlorophyte Ore'><p>X 5 <br><br>at <img src='../terrariaImg/Adamantite_Forge.png' alt='Adamantite Forge'> or <img src='../terrariaImg/Titanium_Forge.png' alt='Titanium Forge'></p></div>"
    const closeBox = document.getElementById('closeBox');
    closeBox.addEventListener('click', closeCraftGuide);
}

function showExcaliburRecipe() {
    showCraftGuide();
    craftGuide.innerHTML = "";
    craftGuide.innerHTML += "<p id='closeBox'>&times;</p><div style='margin: 10px 0 0 10px'><img style='transform: scale(1.3)' src='../terrariaImg/Excalibur.png' alt='Excalibur'><h2 class='mainItem'>Excalibur</h2><p style='margin: 10px 5% 0 0; font-size: 20px'>Made by combining</p>" +
        "<img src='../terrariaImg/Hallowed_Bar.png' alt='Hallowed Bar'><p>Obtained from <br><img src='../terrariaImg/Retinazer.png' alt='The Twins'> or <img src='../terrariaImg/The_Destroyer.png' alt='The Destroyer'>or <img src='../terrariaImg/Skeletron_Prime.png' alt='Skeletron Prime'></p>" +
        "<img style='float: left' src='../terrariaImg/Hallowed_Bar.png' alt='Hallowed Bar'><p>X 12 at <img src='../terrariaImg/Mythril_Anvil.png' alt='Myhril Anvil'>or<img src='../terrariaImg/Orichalcum_Anvil.png' alt='Orichalcum Anvil'></p></div>"
    const closeBox = document.getElementById('closeBox');
    closeBox.addEventListener('click', closeCraftGuide);
}
function showTExcaliburRecipe() {
    showCraftGuide();
    craftGuide.innerHTML = "";
    craftGuide.innerHTML += "<p id='closeBox'>&times;</p><div style='margin: 10px 0 0 10px'><img style='transform: scale(1.5)' src='../terrariaImg/True_Excalibur.png' alt='True Excalibur'><h2 class='mainItem'>True Excalibur</h2><p style='margin: 10px 5% 0 0; font-size: 20px'>Made by combining</p>" +
        "<img style='float: left; transform: scale(1)'  src='../terrariaImg/Excalibur.png' alt='Excalibur'><br><p style='margin-left: 15px;'>Combined with</p><br><br>" +
        "<p><img style='float: left; transform: scale(1)'  src='../terrariaImg/Chlorophyte_Bar.png' alt='Chlorophyte Bar'>X 24</p><br><br>" +
        "<p>At <img src='../terrariaImg/Mythril_Anvil.png' alt='Myhril Anvil'>or<img src='../terrariaImg/Orichalcum_Anvil.png' alt='Orichalcum Anvil'></p></div>"
    const closeBox = document.getElementById('closeBox');
    closeBox.addEventListener('click', closeCraftGuide);
}

function showTNERecipe() {
    showCraftGuide();
    craftGuide.innerHTML = "";
    craftGuide.innerHTML += "<p id='closeBox'>&times;</p><div style='margin: 10px 0 0 10px'><img style='transform: scale(1.5)' src='../terrariaImg/True_Nights_Edge.png' alt='True Nights Edge'><h2 class='mainItem'>True Night's Edge</h2><p style='margin: 10px 5% 0 0; font-size: 20px'>Made by combining</p>" +
        "<img style='float: left; transform: scale(1)'  src='../terrariaImg/Nights_Edge.png' alt='Nights Edge'><br><p style='margin-left: 15px;'>Combined with</p><br><br>" +
        "<p><img style='float: left; transform: scale(1)' src='../terrariaImg/Soul_of_Sight.png' alt='Soul of Sight'>X 20 from<img style='transform: scale(1)' src='../terrariaImg/Retinazer.png' alt='The Twins'></p><br><p style='margin-left: 15px;'>Combined with</p>" +
        "<p><img style='float: left; transform: scale(1)' src='../terrariaImg/Soul_of_Might.png' alt='Soul of Might'>X 20 from<img style='transform: scale(1)' src='../terrariaImg/The_Destroyer.png' alt='The Destroyer'></p><br><p style='margin-left: 15px;'>Combined with</p>" +
        "<p><img style='float: left; transform: scale(1)' src='../terrariaImg/Soul_of_Fright.png' alt='Soul of Fright'>X 20 from<img style='transform: scale(1)' src='../terrariaImg/Skeletron_Prime.png' alt='Skeletron Prime'></p>" +
        "<p>At <img src='../terrariaImg/Mythril_Anvil.png' alt='Myhril Anvil'>or<img src='../terrariaImg/Orichalcum_Anvil.png' alt='Orichalcum Anvil'></p></div>"
    const closeBox = document.getElementById('closeBox');
    closeBox.addEventListener('click', closeCraftGuide);
}

function showTerrabladeRecipe() {
    showCraftGuide();
    craftGuide.innerHTML = "";
    craftGuide.innerHTML += "<p id='closeBox'>&times;</p><div style='margin: 10px 0 0 10px'><img style='transform: scale(1.5)' src='../terrariaImg/Terra_Blade.png' alt='Terra Blade'><h2 class='mainItem'>Terra Blade</h2><p style='margin: 10px 5% 0 0; font-size: 20px'>Made by combining</p>" +
        "<img style='float: left; transform: scale(1)'  src='../terrariaImg/True_Nights_Edge.png' alt='True Nights Edge'><br><p style='margin-left: 15px;'>Combined with</p><br><br>" +
        "<p><img style='float: left; transform: scale(1)' src='../terrariaImg/True_Excalibur.png' alt='True Excalibur'></p><br><p style='margin-left: 15px;'>Combined with</p><br><br>" +
        "<p><img style='float: left; transform: scale(1)' src='../terrariaImg/Broken_Hero_Sword.png' alt='Broken Hero Sword'>from<img style='transform: scale(1)' src='../terrariaImg/Mothron.png' alt='Mothron'></p><br>" +
        "<p>At <img src='../terrariaImg/Mythril_Anvil.png' alt='Myhril Anvil'>or<img src='../terrariaImg/Orichalcum_Anvil.png' alt='Orichalcum Anvil'></p></div>"
    const closeBox = document.getElementById('closeBox');
    closeBox.addEventListener('click', closeCraftGuide);
}

function showCopperSSRecipe() {
    showCraftGuide();
    craftGuide.innerHTML = "";
    craftGuide.innerHTML += "<p id='closeBox'>&times;</p><div style='margin: 10px 0 0 10px'><img style='transform: scale(1.5)' src='../terrariaImg/Copper_Shortsword.png' alt='Copper Shortsword'><h2 class='mainItem'>Copper Shortsword</h2><p style='margin: 10px 5% 0 0; font-size: 20px'>Made by combining (or spawning with it)</p>" +
        "<img style='float: left' src='../terrariaImg/Copper_Bar.png' alt='Copper Bar'><p>X 5 Obtained from</p><br><br>" +
        "<img style='float: left' src='../terrariaImg/Copper_Ore.png' alt='Copper Ore'><p>X 15 at <img src='../terrariaImg/Furnace.png' alt='Furnace'></p>" +
        "<p>Made at <img src='../terrariaImg/Iron_Anvil.png' alt='Iron Anvil'> or <img src='../terrariaImg/Lead_Anvil.png' alt='Lead Anvil'></p><br><br></div>"
    const closeBox = document.getElementById('closeBox');
    closeBox.addEventListener('click', closeCraftGuide);
}

function showStarfuryRecipe() {
    showCraftGuide();
    craftGuide.innerHTML = "";
    craftGuide.innerHTML += "<<p id='closeBox'>&times;</p>div style='margin: 10px 0 0 10px'><img style='transform: scale(1.5)' src='../terrariaImg/Starfury.png' alt='Starfury'><h2 class='mainItem'>Starfury</h2><p style='margin: 10px 5% 0 0; font-size: 20px'>Obtained from</p>" +
        "<img style='float: left' src='../terrariaImg/Skyware_Chest.png' alt='Skyware chest'><br><br><br><p>or</p>" +
        "<img style='float: left' src='../terrariaImg/Sky_Crate.png' alt='Sky Crate'><br><br><br><p>or</p>" +
        "<img style='float: left' src='../terrariaImg/Azure_Crate.png' alt='Azure Crate'></div>"
    const closeBox = document.getElementById('closeBox');
    closeBox.addEventListener('click', closeCraftGuide);
}

function showESRecipe() {
    craftGuide.innerHTML = "";
    craftGuide.innerHTML += "<p id='closeBox'>&times;</p><div style='margin: 10px 0 0 10px'><img style='transform: scale(1.5)' src='../terrariaImg/Enchanted_Sword.png' alt='Enchanted Sword'><h2 class='mainItem'>Enchanted Sword</h2><p style='margin: 10px 5% 0 0; font-size: 20px'>Obtained from</p>" +
        "<img style='float: left' src='../terrariaImg/Enchanted_Sword_Shrine.png' alt='Enchanted Sword Shrine'><br><br><br><p>or</p>" +
        "<img style='float: left' src='../terrariaImg/Golden_Crate.png' alt='Golden Crate'><br><br><br><p>or</p>" +
        "<img style='float: left' src='../terrariaImg/Titanium_Crate.png' alt='Titanium Crate'><br><br><br>" +
        "<p>Note: only the sword shrine on the right actually gives the enchanted sword</p></div>"
    const closeBox = document.getElementById('closeBox');
    closeBox.addEventListener('click', closeCraftGuide);
}

function showBKRecipe() {
    showCraftGuide();
    craftGuide.innerHTML = "";
    craftGuide.innerHTML += "<p id='closeBox'>&times;</p><div style='margin: 10px 0 0 10px'><img style='transform: scale(1.5)' src='../terrariaImg/Bee_Keeper.png' alt='Bee Keeper'><h2 class='mainItem'>Bee Keeper</h2><p style='margin: 10px 5% 0 0; font-size: 20px'>Obtained from</p>" +
        "<img style='float: left' src='../terrariaImg/Queen_Bee.png' alt='Queen Bee'><p>33.3% chance</p></div>"
    const closeBox = document.getElementById('closeBox');
    closeBox.addEventListener('click', closeCraftGuide);
}

function showSeedlerRecipe() {
    showCraftGuide();
    craftGuide.innerHTML = "";
    craftGuide.innerHTML += "<p id='closeBox'>&times;</p><div style='margin: 10px 0 0 10px'><img style='transform: scale(1.5)' src='../terrariaImg/Seedler.png' alt='Seedler'><h2 class='mainItem'>Seedler</h2><p style='margin: 10px 5% 0 0; font-size: 20px'>Obtained from</p>" +
        "<img style='float: left' src='../terrariaImg/Plantera.png' alt='Plantera'><p>11.11% chance</p></div>"
    const closeBox = document.getElementById('closeBox');
    closeBox.addEventListener('click', closeCraftGuide);
}

function showTHMBRecipe() {
    showCraftGuide();
    craftGuide.innerHTML = "";
    craftGuide.innerHTML += "<p id='closeBox'>&times;</p><div style='margin: 10px 0 0 10px'><img style='transform: scale(1.5)' src='../terrariaImg/The_Horsemans_Blade.png' alt='The Horsemans Blade'><h2 class='mainItem'>The Horseman's Blade</h2><p style='margin: 10px 5% 0 0; font-size: 20px'>Obtained from</p>" +
        "<img style='float: left' src='../terrariaImg/Pumpking.png' alt='Pumpking'><p>1.79-14.29% chance</p></div>"
    const closeBox = document.getElementById('closeBox');
    closeBox.addEventListener('click', closeCraftGuide);
}

function showIWRecipe() {
    showCraftGuide();
    craftGuide.innerHTML = "";
    craftGuide.innerHTML += "<p id='closeBox'>&times;</p><div style='margin: 10px 0 0 10px'><img style='transform: scale(1.5)' src='../terrariaImg/Influx_Waver.png' alt='Influx Waver'><h2 class='mainItem'>Influx Waver</h2><p style='margin: 10px 5% 0 0; font-size: 20px'>Obtained from</p>" +
        "<img style='float: left' src='../terrariaImg/Martian_Saucer.png' alt='Martian Saucer'><p>16.67% chance</p></div>"
    const closeBox = document.getElementById('closeBox');
    closeBox.addEventListener('click', closeCraftGuide);
}

function showStarwrathRecipe() {
    showCraftGuide();
    craftGuide.innerHTML = "";
    craftGuide.innerHTML += "<p id='closeBox'>&times;</p><div style='margin: 10px 0 0 10px'><img style='transform: scale(1.5)' src='../terrariaImg/Star_Wrath.png' alt='Star Wrath'><h2 class='mainItem'>Star Wrath</h2><p style='margin: 10px 5% 0 0; font-size: 20px'>Obtained from</p>" +
        "<img style='float: left' src='../terrariaImg/Moon_Lord.png' alt='Moon Lord'><p>11.11% chance</p></div>"
    const closeBox = document.getElementById('closeBox');
    closeBox.addEventListener('click', closeCraftGuide);
}

function showMeowmereRecipe() {
    showCraftGuide();
    craftGuide.innerHTML = "";
    craftGuide.innerHTML += "<p id='closeBox'>&times;</p><div style='margin: 10px 0 0 10px'><img style='transform: scale(1.5)' src='../terrariaImg/Meowmere.png' alt='Meowmere'><h2 class='mainItem'>Meowmere</h2><p style='margin: 10px 5% 0 0; font-size: 20px'>Obtained from</p>" +
        "<img style='float: left' src='../terrariaImg/Moon_Lord.png' alt='Moon Lord'><p>11.11% chance</p></div>"
    const closeBox = document.getElementById('closeBox');
    closeBox.addEventListener('click', closeCraftGuide);
}

function showZenithRecipe() {
    showCraftGuide();
    craftGuide.innerHTML = "";
    craftGuide.innerHTML += "<p id='closeBox'>&times;</p><div style='margin: 10px 0 0 10px'><img style='transform: scale(1.5)' src='../terrariaImg/Zenith.png' alt='Zenith'><h2 class='mainItem'>Zenith</h2><p style=' margin: 10px 5% 0 0; font-size: 20px'>Made by combining all swords below</p>" +
        "<p><img style='transform: scale(1)' src='../terrariaImg/Copper_Shortsword.png' alt='Copper ShortSword'><img style='transform: scale(1)' src='../terrariaImg/Starfury.png' alt='Starfury'>" +
        "<img style='transform: scale(1)' src='../terrariaImg/Enchanted_Sword.png' alt='Enchanted Sword'><img style='transform: scale(1)' src='../terrariaImg/Bee_Keeper.png' alt='Bee keeper'>" +
        "<img style='transform: scale(0.8)' src='../terrariaImg/Seedler.png' alt='Seedler'><img style='transform: scale(1)' src='../terrariaImg/Terra_Blade.png' alt='Terra Blade'>" +
        "<img style='transform: scale(1)' src='../terrariaImg/The_Horsemans_Blade.png' alt='The Horsemans Blade'><img style='transform: scale(1)' src='../terrariaImg/Influx_Waver.png' alt='Influx Waver'>" +
        "<img style='transform: scale(1)' src='../terrariaImg/Star_Wrath.png' alt='Star Wrath'><img style='transform: scale(1)' src='../terrariaImg/Meowmere.png' alt='Meowmere'></p>" +
        "<p>At <img src='../terrariaImg/Mythril_Anvil.png' alt='Myhril Anvil'>or<img src='../terrariaImg/Orichalcum_Anvil.png' alt='Orichalcum Anvil'></p></div>";
    const closeBox = document.getElementById('closeBox');
    closeBox.addEventListener('click', closeCraftGuide);
}