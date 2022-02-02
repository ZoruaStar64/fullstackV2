//Terraspark Boots objects
const craftGuide1 = document.getElementById("itemCraftGuideBar1");
const spectreBoots = document.getElementById("tracker1");
const lightningBoots = document.getElementById("tracker2");
const frostsparkBoots = document.getElementById("tracker3");
const obsidianSkull1 = document.getElementById("tracker4");
const moltenCharm = document.getElementById("tracker5");
const lavaWaders = document.getElementById("tracker6");
const terraSpark = document.getElementById("tracker7");

//Cellphone objects
const craftGuide2 = document.getElementById("itemCraftGuideBar2");
const platWatch = document.getElementById("tracker8");
const goldWatch = document.getElementById("tracker9");
const GPS = document.getElementById("tracker10");
const REK3K = document.getElementById("tracker11");
const goblinTech = document.getElementById("tracker12");
const fishFinder = document.getElementById("tracker13");
const PDA = document.getElementById("tracker14");
const cellPhone = document.getElementById("tracker15");

//Ankh Shield objects
const craftGuide3 = document.getElementById("itemCraftGuideBar3");
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
const craftGuide4 = document.getElementById("itemCraftGuideBar4");
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




//Terraspark Boots Functions
function showSpectreRecipe() {
        craftGuide1.innerHTML = "";
        craftGuide1.innerHTML += "<div style='margin: 10px 0 0 10px'><img style='transform: scale(2)' src='../terrariaImg/Spectre_Boots.png' alt='Spectre Boots'><p style='float: right; margin: 10px 35% 0 0; font-size: 20px'>Made with</p> " +
            " <br><br><img style='float: left' src='../terrariaImg/Hermes_Boots.png' alt='Hermes Boots'><p style='float: left; margin: 10px 0 0 0'>Obtained from <img style='transform: scale(1.3); float: right; margin: 0 0 0 0' src='../terrariaImg/Gold_Chest.png' alt='Gold Chest'></p><br><br><br><p style='margin-left: 15px'>or</p>" +
            "<img style='float: left' src='../terrariaImg/Flurry_Boots.png' alt='Flurry Boots'><p style='float: left; margin: 10px 0 0 0'>Obtained from <div style='float: right; margin-right: 10%' class='alignTriangle'><div id='triangleP1'><img style='transform: scale(1.2); padding: 5px' src='../terrariaImg/Frozen_Crate.png' alt='Frozen Crate'><img style='transform: scale(1.2); padding: 5px' src='../terrariaImg/Boreal_Crate.png' alt='Boreal Crate'></div><div id='triangleP2'><img style='transform: scale(1.2); padding: 5px' src='../terrariaImg/Frozen_Chest.png' alt='Frozen Chest'></div></div></p><br><br><br><p style='margin-left: 15px;'>or</p>" +
            "<img style='float: left' src='../terrariaImg/Dunerider_Boots.png' alt='Dunerider Boots'><p style='float: left; margin: 10px 0 0 0'>Obtained from <div style='float: right; margin-right: 10%' class='alignTriangle'><div id='triangleP1'><img style='transform: scale(1.2); padding: 5px' src='../terrariaImg/Mirage_Crate.png' alt='Mirage Crate'><img style='transform: scale(1.2); padding: 5px' src='../terrariaImg/Oasis_Crate.png' alt='Oasis Crate'></div><div id='triangleP2'><img style='transform: scale(1.2); padding: 5px' src='../terrariaImg/Sandstone_Chest.png' alt='Sandstone Chest'></div></div></p><br><br><br><p style='margin-left: 15px;'>or</p>" +
            "<img style='float: left' src='../terrariaImg/Sailfish_Boots.png' alt='Sailfish Boots'><p style='float: left; margin: 10px 0 0 0'>Obtained from <div style='float: right; margin-right: 10%' class='alignSquare'><div id='squareP1'><img style='transform: scale(1.2); padding: 5px' src='../terrariaImg/Wooden_Crate.png' alt='Wooden Crate'><img style='transform: scale(1.2); padding: 5px' src='../terrariaImg/Pearlwood_Crate.png' alt='Pearlwood Crate'></div><div id='squareP2'><img style='transform: scale(1.2); padding: 5px' src='../terrariaImg/Iron_Crate.png' alt='Iron Crate'><img style='transform: scale(1.2); padding: 5px' src='../terrariaImg/Mythril_Crate.png' alt='Mythril Crate'></div></div></p><br><br><br><p style='margin-left: 15px;'>Combined With</p>" +
            "<img style='float: left' src='../terrariaImg/Rocket_Boots.png' alt='Rocket Boots'><p style='float: left; margin: 10px 0 0 0'>Bought from <img src='../terrariaImg/Goblin_Tinkerer.png' alt='Goblin Tinkerer Map icon'></p><br><br><br>" +
            "<p>At <img src='../terrariaImg/Tinkerers_Workshop.png' alt='Tinkerers Workshop'>Bought from <img src='../terrariaImg/Goblin_Tinkerer.png' alt='Goblin Tinkerer Map icon'></p></div>"
}

function showLightningRecipe() {
    craftGuide1.innerHTML = "";
        craftGuide1.innerHTML += "<div style='margin: 10px 0 0 10px'><img style='transform: scale(2)' src='../terrariaImg/Lightning_Boots.png' alt='Lightning Boots'><p style='float: right; margin: 10px 35% 0 0; font-size: 20px'>Made with</p><br><br>" +
            "<img style='float: left' src='../terrariaImg/Aglet.png' alt='Aglet'><p style='float: left; margin: 10px 0 0 0'>Obtained from <div style='float: right; margin-right: 10%' class='alignTriangle'><div id='triangleP1'><img style='transform: scale(1.2); padding: 5px' src='../terrariaImg/Wooden_Crate.png' alt='Wooden Crate'><img style='transform: scale(1.2); padding: 5px' src='../terrariaImg/Pearlwood_Crate.png' alt='Pearlwood Crate'></div><div id='triangleP2'><img style='transform: scale(1.2); padding: 5px' src='../terrariaImg/Chest.png' alt='Regular Chest'></div></div></p><br><br><br><p style='margin-left: 15px;'>Combined with</p>" +
            "<img style='float: left' src='../terrariaImg/Anklet_of_the_Wind.png' alt='Anklet of the Wind'><p style='float: left; margin: 10px 0 0 0'>Obtained from <div style='float: right; margin-right: 10%' class='alignTriangle'><div id='triangleP1'><img style='transform: scale(1.2); padding: 5px' src='../terrariaImg/Jungle_Crate.png' alt='Jungle Crate'><img style='transform: scale(1.2); padding: 5px' src='../terrariaImg/Bramble_Crate.png' alt='Bramble Crate'></div><div id='triangleP2'><img style='transform: scale(1.2); padding: 5px' src='../terrariaImg/Ivy_Chest.png' alt='Ivy Chest'></div></div></p><br><br><br><p style='margin-left: 15px;'>Combined with</p>" +
            "<img style='float: left' src='../terrariaImg/Spectre_Boots.png' alt='Spectre Boots'><br><br><br>" +
            "<p>At <img src='../terrariaImg/Tinkerers_Workshop.png' alt='Tinkerers Workshop'>Bought from <img src='../terrariaImg/Goblin_Tinkerer.png' alt='Goblin Tinkerer Map icon'></p></div>"
}
function showFrostsparkRecipe() {
    craftGuide1.innerHTML = "";
        craftGuide1.innerHTML += "<div style='margin: 10px 0 0 10px'><img style='transform: scale(2)' src='../terrariaImg/Frostspark_Boots.png' alt='Frostspark Boots'><p style='float: right; margin: 10px 35% 0 0; font-size: 20px'>Made with</p><br><br>" +
            "<img style='float: left' src='../terrariaImg/Ice_Skates.png' alt='Ice Skates'><p style='float: left; margin: 10px 0 0 0'>Obtained from <div style='float: right; margin-right: 10%' class='alignTriangle'><div id='triangleP1'><img style='transform: scale(1.2); padding: 5px' src='../terrariaImg/Boreal_Crate.png' alt='Boreal Crate'><img style='transform: scale(1.2); padding: 5px' src='../terrariaImg/Frozen_Crate.png' alt='Frozen Crate'></div><div id='triangleP2'><img style='transform: scale(1.2); padding: 5px' src='../terrariaImg/Frozen_Chest.png' alt='Frozen Chest'></div></div></p><br><br><br><p style='margin-left: 15px;'>Combined with</p>" +
            "<img style='float: left' src='../terrariaImg/Lightning_Boots.png' alt='Lightning Boots'><br><br><br>" +
            "<p>At <img src='../terrariaImg/Tinkerers_Workshop.png' alt='Tinkerers Workshop'>Bought from <img src='../terrariaImg/Goblin_Tinkerer.png' alt='Goblin Tinkerer Map icon'></p></div>"
}
function showObsidianskullRecipe1() {
    craftGuide1.innerHTML = "";
        craftGuide1.innerHTML += "<div style='margin: 10px 0 0 10px'><img style='transform: scale(2)' src='../terrariaImg/Obsidian_Skull.png' alt='Obsidian Skull'><p style='float: right; margin: 10px 35% 0 0; font-size: 20px'>Made with</p><br><br>" +
            "<img style='float: left' src='../terrariaImg/Obsidian.png' alt='Obsidian'><p>Obtained from <img src='../terrariaImg/Water.png' alt='Water'> + <img src='../terrariaImg/Lava.png' alt='Lava'></p>" +
            "<img style='float: left' src='../terrariaImg/Obsidian.png' alt='Obsidian'><p>X 20 at <img src='../terrariaImg/Furnace.png' alt='Furnace'></p></div>"
}
function showMoltencharmRecipe() {
    craftGuide1.innerHTML = "";
        craftGuide1.innerHTML += "<div style='margin: 10px 0 0 10px'><img style='transform: scale(2)' src='../terrariaImg/Molten_Charm.png' alt='Molten Charm'><p style='float: right; margin: 10px 35% 0 0; font-size: 20px'>Made with</p><br><br>" +
            "<img style='float: left' src='../terrariaImg/Obsidian_Skull.png' alt='Obsidian Skull'><br><br><br><p style='margin-left: 15px;'>Combined with</p>" +
            "<img style='float: left' src='../terrariaImg/Lava_Charm.png' alt='Lava Charm'><p>Obtained from <img src='../terrariaImg/Obsidian_Crate.png' alt='Obsidian Crate'> or <img src='../terrariaImg/Gold_Chest.png' alt='Golden Chest'></p><br>" +
            "<p>At <img src='../terrariaImg/Tinkerers_Workshop.png' alt='Tinkerers Workshop'>Bought from <img src='../terrariaImg/Goblin_Tinkerer.png' alt='Goblin Tinkerer Map icon'></p></div>"
}
function showLavawadersRecipe() {
    craftGuide1.innerHTML = "";
        craftGuide1.innerHTML += "<div style='margin: 10px 0 0 10px'><img style='transform: scale(2)' src='../terrariaImg/Lava_Waders.png' alt='Lava Waders'><p style='float: right; margin: 10px 35% 0 0; font-size: 20px'>Made with</p><br><br>" +
            "<img style='float: left' src='../terrariaImg/Obsidian_Rose.png' alt='Obsidian Rose'><p>Obtained from <img src='../terrariaImg/Fire_Imp.png' alt='Fire Imp'></p><br><p style='margin-left: 15px;'>Combined with</p><br>" +
            "<img style='float: left' src='../terrariaImg/Water_Walking_Boots.png' alt='Water walking boots'><p style='float: left;margin: 10px 0 0 0'>Obtained from <div style='float: right; margin: 0 10% 0 0' class='alignTriangle'><div id='triangleP1'><img style='transform: scale(1.2); padding: 5px' src='../terrariaImg/Ocean_Crate.png' alt='Ocean Crate'><img style='transform: scale(1.2); padding: 5px' src='../terrariaImg/Seaside_Crate.png' alt='Seaside Crate'></div><div id='triangleP2'><img style='transform: scale(1.2); padding: 5px' src='../terrariaImg/Water_Chest.png' alt='Water Chest'></div></div></p><br><br>" +
            "<p style='float: left'>At <img src='../terrariaImg/Tinkerers_Workshop.png' alt='Tinkerers Workshop'>Bought from <img src='../terrariaImg/Goblin_Tinkerer.png' alt='Goblin Tinkerer Map icon'></p></div>"
}
function showTerrasparkRecipe() {
    craftGuide1.innerHTML = "";
        craftGuide1.innerHTML += "<div style='margin: 10px 0 0 10px'><img style='transform: scale(2)' src='../terrariaImg/Terraspark_Boots.png' alt='Terraspark Boots'><p style='float: right; margin: 10px 35% 0 0; font-size: 20px'>Made with</p><br><br>" +
            "<img style='float: left' src='../terrariaImg/Frostspark_Boots.png' alt='Frostspark Boots'><br><br><br><p style='margin-left: 15px;'>Combined with</p>" +
            "<img style='float: left' src='../terrariaImg/Lava_Waders.png' alt='Lava Waders'><br><br><br>" +
            "<p>At <img src='../terrariaImg/Tinkerers_Workshop.png' alt='Tinkerers Workshop'>Bought from <img src='../terrariaImg/Goblin_Tinkerer.png' alt='Goblin Tinkerer Map icon'></p></div>"
}

//Cellphone Functions
function showplatWatchRecipe() {
    craftGuide2.innerHTML = "";
    craftGuide2.innerHTML += "<div style='margin: 10px 0 0 10px'><img style='transform: scale(2)' src='../terrariaImg/Platinum_Watch.png' alt='Platinum Watch'><p style='float: right; margin: 10px 35% 0 0; font-size: 20px'>Made with</p><br><br> " +
        "<img style='float: left' src='../terrariaImg/Platinum_Bar.png' alt='Platinum bar'><p>X10 + <img src='../terrariaImg/Chain.png' alt='Chain'>X1</p><br>" +
        "<p>At <img src='../terrariaImg/Wooden_Table.png' alt='Wooden Table'> & <img src='../terrariaImg/Wooden_Chair.png' alt='Wooden Chair'></p></div>";
}
function showgoldWatchRecipe() {
    craftGuide2.innerHTML = "";
    craftGuide2.innerHTML += "<div style='margin: 10px 0 0 10px'><img style='transform: scale(2)' src='../terrariaImg/Gold_Watch.png' alt='Gold Watch'><p style='float: right; margin: 10px 35% 0 0; font-size: 20px'>Made with</p><br><br> " +
        "<img style='float: left' src='../terrariaImg/Gold_Bar.png' alt='Gold bar'><p>X10 + <img src='../terrariaImg/Chain.png' alt='Chain'>X1</p><br>" +
        "<p>At <img src='../terrariaImg/Wooden_Table.png' alt='Wooden Table'> & <img src='../terrariaImg/Wooden_Chair.png' alt='Wooden Chair'></p></div>";
}
function showGPSRecipe() {
    craftGuide2.innerHTML = "";
    craftGuide2.innerHTML += "<div style='margin: 10px 0 0 10px'><img style='transform: scale(2)' src='../terrariaImg/GPS.png' alt='GPS'><p style='float: right; margin: 10px 35% 0 0; font-size: 20px'>Made with</p><br><br> " +
        "<img style='float: left' src='../terrariaImg/Platinum_Watch.png' alt='Platinum Watch'><p style='float: left; margin: 10px 0 10% 0'></p><br><br><br> <p style='margin-left: 15px'>or</p>" +
        "<img style='float: left' src='../terrariaImg/Gold_Watch.png' alt='Gold Watch'><p style='float: left; margin: 10px 0 10% 0'></p><br><br><br> <p style='margin-left: 15px'>Combined with</p>" +
        "<img src='../terrariaImg/Depth_Meter.png' alt='Depth Meter'><p style='margin-left: 15px'>Combined with</p>" +
        "<img src='../terrariaImg/Compass.png' alt='Compass'>" +
        "<p>At <img src='../terrariaImg/Tinkerers_Workshop.png' alt='Tinkerers Workshop'>Bought from <img src='../terrariaImg/Goblin_Tinkerer.png' alt='Goblin Tinkerer Map icon'></p></div>"
}
function showREK3KRecipe() {
    craftGuide2.innerHTML = "";
    craftGuide2.innerHTML += "<div style='margin: 10px 0 0 10px'><img style='transform: scale(2)' src='../terrariaImg/R.E.K._3000.png' alt='R.E.K 3000'><p style='float: right; margin: 10px 35% 0 0; font-size: 20px'>Made with</p><br><br> " +
        "<img style='float: left' src='../terrariaImg/Radar.png' alt='Radar'><p style='float: left; margin: 10px 0 0 0'>Obtained from <div style='float: right; margin-right: 10%' class='alignTriangle'><div id='triangleP1'><img style='transform: scale(1.2); padding: 5px' src='../terrariaImg/Wooden_Crate.png' alt='Wooden Crate'><img style='transform: scale(1.2); padding: 5px' src='../terrariaImg/Pearlwood_Crate.png' alt='Pearlwood Crate'></div><div id='triangleP2'><img style='transform: scale(1.2); padding: 5px' src='../terrariaImg/Chest.png' alt='Regular Chest'></div></div></p><br><br><br><p style='margin-left: 15px;'>Combined with</p>" +
        "<img style='float: left' src='../terrariaImg/Tally_Counter.png' alt='Tally Counter'><p style='float: left; margin: 10px 0 0 0'>Obtained from <div style='float: right; margin-right: 10%' class='alignTriangle'><div id='triangleP1'><img style='transform: scale(1.2); padding: 5px' src='../terrariaImg/Angry_Bones_1.png' alt='Angry Bones'><img style='transform: scale(1.2); padding: 5px' src='../terrariaImg/Dark_Caster.png' alt='Dark Caster'></div><div id='triangleP2'><img style='transform: scale(1.2); padding: 5px' src='../terrariaImg/Cursed_Skull.png' alt='Cursed Skull'></div></div></p><br><br><br><p style='margin-left: 15px;'>Combined with</p>" +
        "<p><img src='../terrariaImg/Lifeform_Analyzer.png' alt='Lifeform Analyzer'>Bought from <img src='../terrariaImg/Traveling_Merchant.png' alt='Travelling Merchant Map icon'></p><br><br>" +
        "<p>At <img src='../terrariaImg/Tinkerers_Workshop.png' alt='Tinkerers Workshop'>Bought from <img src='../terrariaImg/Goblin_Tinkerer.png' alt='Goblin Tinkerer Map icon'></p></div>"
}
function showGoblinRecipe() {
    craftGuide2.innerHTML = "";
    craftGuide2.innerHTML += "<div style='margin: 10px 0 0 10px'><img style='transform: scale(2)' src='../terrariaImg/Goblin_Tech.png' alt='Goblin Tech'><p style='float: right; margin: 10px 35% 0 0; font-size: 20px'>Made with</p><br><br> " +
        "<p><img src='../terrariaImg/DPS_Meter.png' alt='DPS Meter'>Bought from <img src='../terrariaImg/Traveling_Merchant.png' alt='Travelling Merchant Map icon'></p><p style='margin: 15px 0 15px 15px ;'>Combined with</p>" +
        "<p><img src='../terrariaImg/Stopwatch.png' alt='Stopwatch'>Bought from <img src='../terrariaImg/Traveling_Merchant.png' alt='Travelling Merchant Map icon'></p><p style='margin: 15px 0 15px 15px;'>Combined with</p>" +
        "<p><img src='../terrariaImg/Metal_Detector.png' alt='Metal Detector'>Obtained from <img src='../terrariaImg/Nymph.png' alt='Nymph'></p><br>" +
        "<p>At <img src='../terrariaImg/Tinkerers_Workshop.png' alt='Tinkerers Workshop'>Bought from <img src='../terrariaImg/Goblin_Tinkerer.png' alt='Goblin Tinkerer Map icon'></p></div>"

}

function showFishRecipe() {
    craftGuide2.innerHTML = "";
    craftGuide2.innerHTML += "<div style='margin: 10px 0 0 10px'><img style='transform: scale(2)' src='../terrariaImg/Fish_Finder.png' alt='Fish Finder'><p style='float: right; margin: 10px 35% 0 0; font-size: 20px'>Made with</p><br><br> " +
        "<p><img src='../terrariaImg/Fishermans_Pocket_Guide.png' alt='Fishermans Pocket guide'>Obtained from <img src='../terrariaImg/Angler.png' alt='Angler Map icon'>'s quest</p><br><p style='margin-left: 15px;'>Combined with</p>" +
        "<p><img src='../terrariaImg/Weather_Radio.png' alt='Weather Radio'>Obtained from <img src='../terrariaImg/Angler.png' alt='Angler Map icon'>'s quest</p><br><p style='margin-left: 15px;'>Combined with</p>" +
        "<p><img src='../terrariaImg/Sextant.png' alt='Sextant'>Obtained from <img src='../terrariaImg/Angler.png' alt='Angler Map icon'>'s quest</p><br>" +
        "<p>At <img src='../terrariaImg/Tinkerers_Workshop.png' alt='Tinkerers Workshop'>Bought from <img src='../terrariaImg/Goblin_Tinkerer.png' alt='Goblin Tinkerer Map icon'></p</div>"
}

function showPDARecipe() {
    craftGuide2.innerHTML = "";
    craftGuide2.innerHTML += "<div style='margin: 10px 0 0 10px'><img style='transform: scale(2)' src='../terrariaImg/PDA.png' alt='PDA'><p style='float: right; margin: 10px 35% 0 0; font-size: 20px'>Made with</p><br><br> " +
        "<img style='float: left' src='../terrariaImg/GPS.png' alt='GPS'><br><br><br><p style='margin-left: 15px;'>Combined with</p>" +
        "<img style='float: left' src='../terrariaImg/R.E.K._3000.png' alt='R.E.K.3000'><br><br><br><p style='margin-left: 15px;'>Combined with</p>" +
        "<img style='float: left' src='../terrariaImg/Goblin_Tech.png' alt='Goblin Tech'><br><br><br><p style='margin-left: 15px;'>Combined with</p>" +
        "<img style='float: left' src='../terrariaImg/Fish_Finder.png' alt='Fish FInder'><br><br><br><p style='margin-left: 15px;'></p>" +
        "<p>At <img src='../terrariaImg/Tinkerers_Workshop.png' alt='Tinkerers Workshop'>Bought from <img src='../terrariaImg/Goblin_Tinkerer.png' alt='Goblin Tinkerer Map icon'></p</div>"

}

function showCellphoneRecipe() {
    craftGuide2.innerHTML = "";
    craftGuide2.innerHTML += "<div style='margin: 10px 0 0 10px'><img style='transform: scale(2)' src='../terrariaImg/Cell_Phone.png' alt='Cell Phone'><p style='float: right; margin: 10px 35% 0 0; font-size: 20px'>Made with</p><br><br> " +
        "<img style='float: left' src='../terrariaImg/PDA.png' alt='PDA'><br><br><br><p style='margin-left: 15px;'>Combined with</p>" +
        "<img style='float: left' src='../terrariaImg/Magic_Mirror.png' alt='Magic Mirror'><br><br><br><p style='margin-left: 15px;'>or</p>" +
        "<img style='float: left' src='../terrariaImg/Ice_Mirror.png' alt='Ice Mirror'><br><br><br><p style='margin-left: 15px;'></p>" +
        "<p>At <img src='../terrariaImg/Tinkerers_Workshop.png' alt='Tinkerers Workshop'>Bought from <img src='../terrariaImg/Goblin_Tinkerer.png' alt='Goblin Tinkerer Map icon'></p</div>"

}

//Ankh Shield functions
function showABRecipe() {
    craftGuide3.innerHTML = "";
    craftGuide3.innerHTML += "<div style='margin: 10px 0 0 10px'><img style='transform: scale(2)' src='../terrariaImg/Armor_Bracing.png' alt='Armor Bracing'><p style='float: right; margin: 10px 35% 0 0; font-size: 20px'>Made with</p><br><br>" +
        "<img style='float: left' src='../terrariaImg/Vitamins.png' alt='Vitamins'><p>Obtained from <img src='../terrariaImg/Corruptor.png' alt='Corruptor'>&<img src='../terrariaImg/Floaty_Gross.png' alt='Floaty Gross'></p><br><br><p style='margin-left: 15px;'>Combined with</p>" +
        "<img style='float: left' src='../terrariaImg/Armor_Polish.png' alt='Armor Polish'><p>Obtained from <img src='../terrariaImg/Blue_Armored_Bones_1.png' alt='Blue Armored Bones'>&<img src='../terrariaImg/Armored_Skeleton.png' alt='Armored Skeleton'></p><br>" +
        "<p>At <img src='../terrariaImg/Tinkerers_Workshop.png' alt='Tinkerers Workshop'>Bought from <img src='../terrariaImg/Goblin_Tinkerer.png' alt='Goblin Tinkerer Map icon'></p></div>"
}
function showMBRecipe() {
    craftGuide3.innerHTML = "";
    craftGuide3.innerHTML += "<div style='margin: 10px 0 0 10px'><img style='transform: scale(2)' src='../terrariaImg/Medicated_Bandage.png' alt='Medicated Bandage'><p style='float: right; margin: 10px 35% 0 0; font-size: 20px'>Made with</p><br><br>" +
        "<img style='float: left' src='../terrariaImg/Adhesive_Bandage.png' alt='Adhesive Bandage'><p>Obtained from <br><img src='../terrariaImg/Rusty_Armored_Bones_1.png' alt='Rusty Armored Bones'>&<img src='../terrariaImg/Werewolf.png' alt='Werewolf'>&<img src='../terrariaImg/Angler_Fish.png' alt='Angler Fish'></p><br><br><p style='margin-left: 15px;'>Combined with</p>" +
        "<img style='float: left' src='../terrariaImg/Bezoar.png' alt='Bezoar'><p>Obtained from <br><img src='../terrariaImg/Hornet.png' alt='Hornet'>&<img src='../terrariaImg/Moss_Hornet.png' alt='Moss Hornet'>&<img src='../terrariaImg/Toxic_Sludge.png' alt='Toxic Sludge'></p><br>" +
        "<p>At <img src='../terrariaImg/Tinkerers_Workshop.png' alt='Tinkerers Workshop'>Bought from <img src='../terrariaImg/Goblin_Tinkerer.png' alt='Goblin Tinkerer Map icon'></p></div>"
}
function showCCMRecipe() {
    craftGuide3.innerHTML = "";
    craftGuide3.innerHTML += "<div style='margin: 10px 0 0 10px'><img style='transform: scale(2)' src='../terrariaImg/Countercurse_Mantra.png' alt='Countercurse Mantra'><p style='float: right; margin: 10px 35% 0 0; font-size: 20px'>Made with</p><br><br>" +
        "<img style='float: left' src='../terrariaImg/Nazar.png' alt='Nazar'><p>Obtained from <br><br><br><img style='transform: scale(1)' src='../terrariaImg/Cursed_Hammer.png' alt='Cursed Hammer'><img style='transform: scale(1)' src='../terrariaImg/Enchanted_Sword_NPC.png' alt='Enchanted Sword Enemy'>" +
        "<img style='transform: scale(1)' src='../terrariaImg/Crimson_Axe.png' alt='Crimson Axe'><img style='transform: scale(1)' src='../terrariaImg/Giant_Cursed_Skull.png' alt='Giant Cursed Skull'><img style='transform: scale(1)' src='../terrariaImg/Cursed_Skull.png' alt='Cursed Skull'></p><br><p style='margin-left: 15px;'>Combined with</p>" +
        "<img style='float: left' src='../terrariaImg/Megaphone.png' alt='Megaphone'><p>Obtained from <br><img src='../terrariaImg/Pixie.png' alt='Pixie'><img src='../terrariaImg/Dark_Mummy.png' alt='Dark Mummy'><img src='../terrariaImg/Blood_Mummy.png' alt='Blood Mummy'><img src='../terrariaImg/Green_Jellyfish.png' alt='Green Jellyfish'></p><br>" +
        "<p>At <img src='../terrariaImg/Tinkerers_Workshop.png' alt='Tinkerers Workshop'>Bought from <img src='../terrariaImg/Goblin_Tinkerer.png' alt='Goblin Tinkerer Map icon'></p></div>"
}

function showthePlanRecipe() {
    craftGuide3.innerHTML = "";
    craftGuide3.innerHTML += "<div style='margin: 10px 0 0 10px'><img style='transform: scale(2)' src='../terrariaImg/The_Plan.png' alt='The Plan'><p style='float: right; margin: 10px 35% 0 0; font-size: 20px'>Made with</p><br><br>" +
        "<img style='float: left' src='../terrariaImg/Trifold_Map.png' alt='Trifold Map'><p>Obtained from <br><img src='../terrariaImg/Giant_Bat.png' alt='Giant Bat'><img src='../terrariaImg/Light_Mummy.png' alt='Light Mummy'>" +
        "<img style='transform: scale(1)' src='../terrariaImg/Clown.png' alt='Clown'></p><br><p style='margin-left: 15px;'>Combined with</p>" +
        "<img style='float: left' src='../terrariaImg/Fast_Clock.png' alt='Fast Clock'><p>Obtained from <br><img src='../terrariaImg/Pixie.png' alt='Pixie'><img src='../terrariaImg/Mummy.png' alt='Mummy'><img src='../terrariaImg/Wraith.png' alt='Wraith'></p><br>" +
        "<p>At <img src='../terrariaImg/Tinkerers_Workshop.png' alt='Tinkerers Workshop'>Bought from <img src='../terrariaImg/Goblin_Tinkerer.png' alt='Goblin Tinkerer Map icon'></p></div>"
}
function showObsidianskullRecipe2() {
    craftGuide3.innerHTML = "";
    craftGuide3.innerHTML += "<div style='margin: 10px 0 0 10px'><img style='transform: scale(2)' src='../terrariaImg/Obsidian_Skull.png' alt='Obsidian Skull'><p style='float: right; margin: 10px 35% 0 0; font-size: 20px'>Made with</p><br><br>" +
        "<img style='float: left' src='../terrariaImg/Obsidian.png' alt='Obsidian'><p>Obtained from <img src='../terrariaImg/Water.png' alt='Water'> + <img src='../terrariaImg/Lava.png' alt='Lava'></p>" +
        "<img style='float: left' src='../terrariaImg/Obsidian.png' alt='Obsidian'><p>X 20 at <img src='../terrariaImg/Furnace.png' alt='Furnace'></p></div>"
}

function showOSRecipe() {
    craftGuide3.innerHTML = "";
    craftGuide3.innerHTML += "<div style='margin: 10px 0 0 10px'><img style='transform: scale(2)' src='../terrariaImg/Obsidian_Shield.png' alt='Obsidian Shield'><p style='float: right; margin: 10px 35% 0 0; font-size: 20px'>Made with</p><br><br>" +
        "<img style='float: left' src='../terrariaImg/Obsidian_Skull.png' alt='Obsidian Skull'><br><br><p style='margin-left: 15px;'>Combined with</p>" +
        "<img style='float: left' src='../terrariaImg/Cobalt_Shield.png' alt='Armor Polish'><p>Obtained from <img src='../terrariaImg/Gold_Chest.png' alt='Gold Chest'>or<img src='../terrariaImg/Golden_Lock_Box.png' alt='Golden Lock Box'></p><br>" +
        "<p>At <img src='../terrariaImg/Tinkerers_Workshop.png' alt='Tinkerers Workshop'>Bought from <img src='../terrariaImg/Goblin_Tinkerer.png' alt='Goblin Tinkerer Map icon'></p>" +
        "<p>Note: the golden chest displayed here is supposed to represent<br> an OPENED Dungeon Gold Chest</p></div>"
}

function showBlindfold() {
    craftGuide3.innerHTML = "";
    craftGuide3.innerHTML += "<div style='margin: 10px 0 0 10px'><img style='transform: scale(2)' src='../terrariaImg/Blindfold.png' alt='Blindfold'><p style='float: right; margin: 10px 15% 0 0; font-size: 20px'>Obtained from</p><br><br><br>" +
        "<p><img src='../terrariaImg/Slimeling.png' alt='Slimeling'>or</p><br>" +
        "<p><img src='../terrariaImg/Corrupt_Slime.png' alt='Corrupt Slime'><br>or</p>" +
        "<p><img src='../terrariaImg/Crimslime.png' alt='Crimslime'><br>or</p>" +
        "<p><img src='../terrariaImg/Dark_Mummy.png' alt='Dark Mummy'><br>or</p>" +
        "<img src='../terrariaImg/Blood_Mummy.png' alt='Blood Mummy'></div>"
}

function showACRecipe() {
    craftGuide3.innerHTML = "";
    craftGuide3.innerHTML += "<div style='margin: 10px 0 0 10px'><img style='transform: scale(2)' src='../terrariaImg/Ankh_Charm.png' alt='Ankh Charm'><p style='float: right; margin: 10px 35% 0 0; font-size: 20px'>Made with</p><br><br>" +
        "<img style='float: left' src='../terrariaImg/Armor_Bracing.png' alt='Armor Bracing'><br><br><br><p style='margin-left: 15px;'>Combined with</p>" +
        "<img style='float: left' src='../terrariaImg/Medicated_Bandage.png' alt='Medicated Bandage'><br><br><br><p style='margin-left: 15px;'>Combined with</p>" +
        "<img style='float: left' src='../terrariaImg/Countercurse_Mantra.png' alt='Countercurse Mantra'><br><br><br><p style='margin-left: 15px;'>Combined with</p>" +
        "<img style='float: left' src='../terrariaImg/The_Plan.png' alt='The Plan'><br><br><br><p style='margin-left: 15px;'>Combined with</p>" +
        "<img style='float: left' src='../terrariaImg/Blindfold.png' alt='Blindfold'><br><br><br>" +
        "<p>At <img src='../terrariaImg/Tinkerers_Workshop.png' alt='Tinkerers Workshop'>Bought from <img src='../terrariaImg/Goblin_Tinkerer.png' alt='Goblin Tinkerer Map icon'></p></div>"
}

function showASRecipe() {
    craftGuide3.innerHTML = "";
    craftGuide3.innerHTML += "<div style='margin: 10px 0 0 10px'><img style='transform: scale(2)' src='../terrariaImg/Ankh_Shield.png' alt='Ankh Shield'><p style='float: right; margin: 10px 35% 0 0; font-size: 20px'>Made with</p><br><br>" +
        "<img style='float: left' src='../terrariaImg/Obsidian_Shield.png' alt='Obidian Shield'><br><br><br><p style='margin-left: 15px;'>Combined with</p>" +
        "<img style='float: left' src='../terrariaImg/Ankh_Charm.png' alt='Ankh Charm'><br><br><br>" +
        "<p>At <img src='../terrariaImg/Tinkerers_Workshop.png' alt='Tinkerers Workshop'>Bought from <img src='../terrariaImg/Goblin_Tinkerer.png' alt='Goblin Tinkerer Map icon'></p></div>"

}

//Zenith Functions
function showBoGRecipe() {
    craftGuide4.innerHTML = "";
    craftGuide4.innerHTML += "<div style='margin: 10px 0 0 10px'><img style='transform: scale(1.3)' src='../terrariaImg/Blade_of_Grass.png' alt='Blade of Grass'><p style='float: right; margin: 10px 15% 0 0; font-size: 20px'>Made with</p><br><br>" +
        "<p><img style='float: left' src='../terrariaImg/Jungle_Spores_Item.png' alt='Jungle Spores Item'>X12 <br><br>Obtained from</p><img src='../terrariaImg/Jungle_Spores.png' alt='Jungle Spores Terrain'><br><br><p style='margin-left: 15px;'>Combined with</p>" +
        "<p><img style='float: left' src='../terrariaImg/Stinger.png' alt='Stinger'>X12 <br><br>Obtained from</p>" +
        "<img src='../terrariaImg/Hornet.png' alt='Hornet'><img src='../terrariaImg/Moss_Hornet.png' alt='Moss Hornet'><img src='../terrariaImg/Spiked_Jungle_Slime.png' alt='Spiked Jungle Slime'><br><br><br>" +
        "<p>At <img src='../terrariaImg/Tinkerers_Workshop.png' alt='Tinkerers Workshop'>Bought from <img src='../terrariaImg/Goblin_Tinkerer.png' alt='Goblin Tinkerer Map icon'></p></div>"

}

function showMuramasaRecipe() {
    craftGuide4.innerHTML = "";
    craftGuide4.innerHTML += "<div style='margin: 10px 0 0 10px'><img style='transform: scale(1.3)' src='../terrariaImg/Muramasa.png' alt='Muramasa'><p style='float: right; margin: 10px 5% 0 0; font-size: 20px'>Obtained from</p><br><br>" +
        "<img style='float: left' src='../terrariaImg/Gold_Chest.png' alt='Gold Chest'><br><br><p style='margin-left: 15px;'>or</p>" +
        "<img src='../terrariaImg/Golden_Lock_Box.png' alt='Golden Lock Box'>" +
        "<p>Note: the gold chest is suposed to be an opened gold chest from within the dungeon</p></div>"

}

function showFGSRecipe() {
    craftGuide4.innerHTML = "";
    craftGuide4.innerHTML += "<div style='margin: 10px 0 0 10px'><img style='transform: scale(1.3)' src='../terrariaImg/Fiery_Greatsword.png' alt='Fiery Greatsword'><p style='float: right; margin: 10px 5% 0 0; font-size: 20px'>Made with</p><br><br>" +
        "<p><img src='../terrariaImg/Hellstone_Bar.png' alt='Hellstone bar'>X 20</p>" +
        "<img style='float: left' src='../terrariaImg/Obsidian.png' alt='Obsidian'><p><br><br>Obtained from <img src='../terrariaImg/Water.png' alt='Water'> + <img src='../terrariaImg/Lava.png' alt='Lava'></p>" +
        "<img style='float: left' src='../terrariaImg/Obsidian.png' alt='Obsidian'><p>X 20 at <img src='../terrariaImg/Furnace.png' alt='Furnace'></p><br><br><p style='margin-left: 15px;'>Combined with</p>" +
        "<p><img src='../terrariaImg/Hellstone.png' alt='Hellstone'>X 60</p>" +
        "<p>at <img src='../terrariaImg/Iron_Anvil.png' alt='Iron Anvil'>or<img src='../terrariaImg/Lead_Anvil.png' alt='Lead Anvil'></p></div>"

}

function showLBRecipe() {
    craftGuide4.innerHTML = "";
    craftGuide4.innerHTML += "<div style='margin: 10px 0 0 10px'><img style='transform: scale(1.3)' src='../terrariaImg/Lights_Bane.png' alt='Lights Bane'><p style='float: right; margin: 10px 5% 0 0; font-size: 20px'>Made with</p><br><br>" +
        "<p><img style='float: left' src='../terrariaImg/Demonite_Ore.png' alt='Demonite Ore'>X 30</p><p>Obtained from <br><img src='../terrariaImg/Eye_of_Cthulhu.png' alt='Eye of Cthulhu'> or <img src='../terrariaImg/Eater_of_Worlds.png' alt='Eater of Worlds'></p><br><p style='margin-left: 15px;'>To make</p>" +
        "<p><img src='../terrariaImg/Demonite_Bar.png' alt='Demonite Bar'>X 10</p>" +
        "<p>at <img src='../terrariaImg/Iron_Anvil.png' alt='Iron Anvil'>or<img src='../terrariaImg/Lead_Anvil.png' alt='Lead Anvil'></p></div>"

}

function showBBRecipe() {
    craftGuide4.innerHTML = "";
    craftGuide4.innerHTML += "<div style='margin: 10px 0 0 10px'><img style='transform: scale(1.3)' src='../terrariaImg/Blood_Butcherer.png' alt='Blood Butcherer'><p style='float: right; margin: 10px 5% 0 0; font-size: 20px'>Made with</p><br><br>" +
        "<p><img style='float: left' src='../terrariaImg/Crimtane_Ore.png' alt='Crimtane Ore'>X 30</p><p>Obtained from <br><img src='../terrariaImg/Eye_of_Cthulhu.png' alt='Eye of Cthulhu'> or <img src='../terrariaImg/Brain_of_Cthulhu.png' alt='Brain of Cthulhu'></p><br><p style='margin-left: 15px;'>To make</p>" +
        "<p><img src='../terrariaImg/Crimtane_Bar.png' alt='Crimtane Bar'>X 10</p>" +
        "<p>at <img src='../terrariaImg/Iron_Anvil.png' alt='Iron Anvil'>or<img src='../terrariaImg/Lead_Anvil.png' alt='Lead Anvil'></p></div>"

}

function showNERecipe() {
    craftGuide4.innerHTML = "";
    craftGuide4.innerHTML += "<div style='margin: 10px 0 0 10px'><img style='transform: scale(1.5)' src='../terrariaImg/Nights_Edge.png' alt='Nights Edge'><p style='float: right; margin: 10px 15% 0 0; font-size: 20px'>Made with</p><br><br>" +
        "<img style='float: left; transform: scale(1)'  src='../terrariaImg/Blade_of_Grass.png' alt='Blade of Grass'><br><p style='margin-left: 15px;'>Combined with</p><br><br>" +
        "<img style='float: left; transform: scale(1)' src='../terrariaImg/Muramasa.png' alt='Muramasa'><br><p style='margin-left: 15px;'>Combined with</p><br><br>" +
        "<img style='float: left; transform: scale(1)' src='../terrariaImg/Fiery_Greatsword.png' alt='Fiery Greatsword'><br><p style='margin-left: 15px;'>Combined with</p><br><br>" +
        "<p><img style='float: left; transform: scale(1)' src='../terrariaImg/Lights_Bane.png' alt='Lights Bane'>or<img style='transform: scale(1)' src='../terrariaImg/Blood_Butcherer.png' alt='Blood Butcherer'></p>" +
        "<p>At <img style='transform: scale(1)' src='../terrariaImg/Demon_Altar.png' alt='Demon Altar'>or <img style='transform: scale(1)' src='../terrariaImg/Crimson_Altar.png' alt='Crimson Altar'></p></div>"

}

function showCBRecipe() {
    craftGuide4.innerHTML = "";
    craftGuide4.innerHTML += "<div style='margin: 10px 0 0 10px'><img style='transform: scale(2)' src='../terrariaImg/Chlorophyte_Bar.png' alt='Chlorophyte Bar'><p style='float: right; margin: 10px 15% 0 0; font-size: 20px'>Made with</p><br><br>" +
          "<img style='float: left' src='../terrariaImg/Chlorophyte_Ore.png' alt='Chlorophyte Ore'><p>X 5 <br><br>at <img src='../terrariaImg/Adamantite_Forge.png' alt='Adamantite Forge'> or <img src='../terrariaImg/Titanium_Forge.png' alt='Titanium Forge'></p></div>"

}

function showExcaliburRecipe() {
    craftGuide4.innerHTML = "";
    craftGuide4.innerHTML += "<div style='margin: 10px 0 0 10px'><img style='transform: scale(1.3)' src='../terrariaImg/Excalibur.png' alt='Excalibur'><p style='float: right; margin: 10px 15% 0 0; font-size: 20px'>Made with</p><br><br>" +
        "<img src='../terrariaImg/Hallowed_Bar.png' alt='Hallowed Bar'><p>Obtained from <br><img src='../terrariaImg/Retinazer.png' alt='The Twins'> or <img src='../terrariaImg/The_Destroyer.png' alt='The Destroyer'>or <img src='../terrariaImg/Skeletron_Prime.png' alt='Skeletron Prime'></p>" +
        "<img style='float: left' src='../terrariaImg/Hallowed_Bar.png' alt='Hallowed Bar'><p>X 12 at <img src='../terrariaImg/Mythril_Anvil.png' alt='Myhril Anvil'>or<img src='../terrariaImg/Orichalcum_Anvil.png' alt='Orichalcum Anvil'></p></div>"

}
function showTExcaliburRecipe() {
    craftGuide4.innerHTML = "";
    craftGuide4.innerHTML += "<div style='margin: 10px 0 0 10px'><img style='transform: scale(1.5)' src='../terrariaImg/True_Excalibur.png' alt='True Excalibur'><p style='float: right; margin: 10px 15% 0 0; font-size: 20px'>Made with</p><br><br>" +
        "<img style='float: left; transform: scale(1)'  src='../terrariaImg/Excalibur.png' alt='Excalibur'><br><p style='margin-left: 15px;'>Combined with</p><br><br>" +
        "<p><img style='float: left; transform: scale(1)'  src='../terrariaImg/Chlorophyte_Bar.png' alt='Chlorophyte Bar'>X 24</p><br><br>" +
        "<p>At <img src='../terrariaImg/Mythril_Anvil.png' alt='Myhril Anvil'>or<img src='../terrariaImg/Orichalcum_Anvil.png' alt='Orichalcum Anvil'></p></div>"

}

function showTNERecipe() {
    craftGuide4.innerHTML = "";
    craftGuide4.innerHTML += "<div style='margin: 10px 0 0 10px'><img style='transform: scale(1.5)' src='../terrariaImg/True_Nights_Edge.png' alt='True Nights Edge'><p style='float: right; margin: 10px 15% 0 0; font-size: 20px'>Made with</p><br><br>" +
        "<img style='float: left; transform: scale(1)'  src='../terrariaImg/Nights_Edge.png' alt='Nights Edge'><br><p style='margin-left: 15px;'>Combined with</p><br><br>" +
        "<p><img style='float: left; transform: scale(1)' src='../terrariaImg/Soul_of_Sight.png' alt='Soul of Sight'>X 20 from<img style='transform: scale(1)' src='../terrariaImg/Retinazer.png' alt='The Twins'></p><br><p style='margin-left: 15px;'>Combined with</p>" +
        "<p><img style='float: left; transform: scale(1)' src='../terrariaImg/Soul_of_Might.png' alt='Soul of Might'>X 20 from<img style='transform: scale(1)' src='../terrariaImg/The_Destroyer.png' alt='The Destroyer'></p><br><p style='margin-left: 15px;'>Combined with</p>" +
        "<p><img style='float: left; transform: scale(1)' src='../terrariaImg/Soul_of_Fright.png' alt='Soul of Fright'>X 20 from<img style='transform: scale(1)' src='../terrariaImg/Skeletron_Prime.png' alt='Skeletron Prime'></p>" +
        "<p>At <img src='../terrariaImg/Mythril_Anvil.png' alt='Myhril Anvil'>or<img src='../terrariaImg/Orichalcum_Anvil.png' alt='Orichalcum Anvil'></p></div>"

}

function showTerrabladeRecipe() {
    craftGuide4.innerHTML = "";
    craftGuide4.innerHTML += "<div style='margin: 10px 0 0 10px'><img style='transform: scale(1.5)' src='../terrariaImg/Terra_Blade.png' alt='Terra Blade'><p style='float: right; margin: 10px 15% 0 0; font-size: 20px'>Made with</p><br><br>" +
        "<img style='float: left; transform: scale(1)'  src='../terrariaImg/True_Nights_Edge.png' alt='True Nights Edge'><br><p style='margin-left: 15px;'>Combined with</p><br><br>" +
        "<p><img style='float: left; transform: scale(1)' src='../terrariaImg/True_Excalibur.png' alt='True Excalibur'></p><br><p style='margin-left: 15px;'>Combined with</p><br><br>" +
        "<p><img style='float: left; transform: scale(1)' src='../terrariaImg/Broken_Hero_Sword.png' alt='Broken Hero Sword'>from<img style='transform: scale(1)' src='../terrariaImg/Mothron.png' alt='Mothron'></p><br>" +
        "<p>At <img src='../terrariaImg/Mythril_Anvil.png' alt='Myhril Anvil'>or<img src='../terrariaImg/Orichalcum_Anvil.png' alt='Orichalcum Anvil'></p></div>"

}

function showCopperSSRecipe() {
    craftGuide4.innerHTML = "";
    craftGuide4.innerHTML += "<div style='margin: 10px 0 0 10px'><img style='transform: scale(1.5)' src='../terrariaImg/Copper_Shortsword.png' alt='Copper Shortsword'><p style='float: right; margin: 10px 15% 0 0; font-size: 20px'>Made with</p><br><br>" +
        "<img style='float: left' src='../terrariaImg/Copper_Bar.png' alt='Copper Bar'><p>X 5 Obtained from</p><br><br>" +
        "<img style='float: left' src='../terrariaImg/Copper_Ore.png' alt='Copper Ore'><p>X 15 at <img src='../terrariaImg/Furnace.png' alt='Furnace'></p>" +
        "<p>Made at <img src='../terrariaImg/Iron_Anvil.png' alt='Iron Anvil'> or <img src='../terrariaImg/Lead_Anvil.png' alt='Lead Anvil'></p><br><br></div>"

}

function showStarfuryRecipe() {
    craftGuide4.innerHTML = "";
    craftGuide4.innerHTML += "<div style='margin: 10px 0 0 10px'><img style='transform: scale(1.5)' src='../terrariaImg/Starfury.png' alt='Starfury'><p style='float: right; margin: 10px 5% 0 0; font-size: 20px'>Obtained from</p><br><br>" +
        "<img style='float: left' src='../terrariaImg/Skyware_Chest.png' alt='Skyware chest'><br><br><br><p>or</p>" +
        "<img style='float: left' src='../terrariaImg/Sky_Crate.png' alt='Sky Crate'><br><br><br><p>or</p>" +
        "<img style='float: left' src='../terrariaImg/Azure_Crate.png' alt='Azure Crate'></div>"

}

function showESRecipe() {
    craftGuide4.innerHTML = "";
    craftGuide4.innerHTML += "<div style='margin: 10px 0 0 10px'><img style='transform: scale(1.5)' src='../terrariaImg/Enchanted_Sword.png' alt='Enchanted Sword'><p style='float: right; margin: 10px 5% 0 0; font-size: 20px'>Obtained from</p><br><br>" +
        "<img style='float: left' src='../terrariaImg/Enchanted_Sword_Shrine.png' alt='Enchanted Sword Shrine'><br><br><br><p>or</p>" +
        "<img style='float: left' src='../terrariaImg/Golden_Crate.png' alt='Golden Crate'><br><br><br><p>or</p>" +
        "<img style='float: left' src='../terrariaImg/Titanium_Crate.png' alt='Titanium Crate'><br><br><br>" +
        "<p>Note: only the sword shrine on the right actually gives the enchanted sword</p></div>"

}

function showBKRecipe() {
    craftGuide4.innerHTML = "";
    craftGuide4.innerHTML += "<div style='margin: 10px 0 0 10px'><img style='transform: scale(1.5)' src='../terrariaImg/Bee_Keeper.png' alt='Bee Keeper'><p style='float: right; margin: 10px 5% 0 0; font-size: 20px'>Obtained from</p><br><br>" +
        "<img style='float: left' src='../terrariaImg/Queen_Bee.png' alt='Queen Bee'><p>33.3% chance</p></div>"

}

function showSeedlerRecipe() {
    craftGuide4.innerHTML = "";
    craftGuide4.innerHTML += "<div style='margin: 10px 0 0 10px'><img style='transform: scale(1.5)' src='../terrariaImg/Seedler.png' alt='Seedler'><p style='float: right; margin: 10px 5% 0 0; font-size: 20px'>Obtained from</p><br><br>" +
        "<img style='float: left' src='../terrariaImg/Plantera.png' alt='Plantera'><p>11.11% chance</p></div>"

}

function showTHMBRecipe() {
    craftGuide4.innerHTML = "";
    craftGuide4.innerHTML += "<div style='margin: 10px 0 0 10px'><img style='transform: scale(1.5)' src='../terrariaImg/The_Horsemans_Blade.png' alt='The Horsemans Blade'><p style='float: right; margin: 10px 0 0 0; font-size: 20px'>Obtained from</p><br><br>" +
        "<img style='float: left' src='../terrariaImg/Pumpking.png' alt='Pumpking'><p>1.79-14.29% chance</p></div>"

}

function showIWRecipe() {
    craftGuide4.innerHTML = "";
    craftGuide4.innerHTML += "<div style='margin: 10px 0 0 10px'><img style='transform: scale(1.5)' src='../terrariaImg/Influx_Waver.png' alt='Influx Waver'><p style='float: right; margin: 10px 5% 0 0; font-size: 20px'>Obtained from</p><br><br>" +
        "<img style='float: left' src='../terrariaImg/Martian_Saucer.png' alt='Martian Saucer'><p>16.67% chance</p></div>"

}

function showStarwrathRecipe() {
    craftGuide4.innerHTML = "";
    craftGuide4.innerHTML += "<div style='margin: 10px 0 0 10px'><img style='transform: scale(1.5)' src='../terrariaImg/Star_Wrath.png' alt='Star Wrath'><p style='float: right; margin: 10px 5% 0 0; font-size: 20px'>Obtained from</p><br><br>" +
        "<img style='float: left' src='../terrariaImg/Moon_Lord.png' alt='Moon Lord'><p>11.11% chance</p></div>"

}

function showMeowmereRecipe() {
    craftGuide4.innerHTML = "";
    craftGuide4.innerHTML += "<div style='margin: 10px 0 0 10px'><img style='transform: scale(1.5)' src='../terrariaImg/Meowmere.png' alt='Meowmere'><p style='float: right; margin: 10px 5% 0 0; font-size: 20px'>Obtained from</p><br><br>" +
        "<img style='float: left' src='../terrariaImg/Moon_Lord.png' alt='Moon Lord'><p>11.11% chance</p></div>"

}

function showZenithRecipe() {
    craftGuide4.innerHTML = "";
    craftGuide4.innerHTML += "<div style='margin: 10px 0 0 10px'><img style='transform: scale(1.5)' src='../terrariaImg/Zenith.png' alt='Zenith'><p style='float: right; margin: 10px 15% 0 0; font-size: 20px'>Made by</p><br><br>" +
        "<p style='float: left; font-size: 15px'>Combining all swords below</p><br><br><p><img style='transform: scale(1)' src='../terrariaImg/Copper_Shortsword.png' alt='Copper ShortSword'><img style='transform: scale(1)' src='../terrariaImg/Starfury.png' alt='Starfury'>" +
        "<img style='transform: scale(1)' src='../terrariaImg/Enchanted_Sword.png' alt='Enchanted Sword'><img style='transform: scale(1)' src='../terrariaImg/Bee_Keeper.png' alt='Bee keeper'>" +
        "<img style='transform: scale(0.8)' src='../terrariaImg/Seedler.png' alt='Seedler'><img style='transform: scale(1)' src='../terrariaImg/Terra_Blade.png' alt='Terra Blade'>" +
        "<img style='transform: scale(1)' src='../terrariaImg/The_Horsemans_Blade.png' alt='The Horsemans Blade'><img style='transform: scale(1)' src='../terrariaImg/Influx_Waver.png' alt='Influx Waver'>" +
        "<img style='transform: scale(1)' src='../terrariaImg/Star_Wrath.png' alt='Star Wrath'><img style='transform: scale(1)' src='../terrariaImg/Meowmere.png' alt='Meowmere'></p>" +
        "<p>At <img src='../terrariaImg/Mythril_Anvil.png' alt='Myhril Anvil'>or<img src='../terrariaImg/Orichalcum_Anvil.png' alt='Orichalcum Anvil'></p></div>";

}