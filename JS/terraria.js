//Common object
const craftGuide = document.getElementById("itemCraftGuideModal");


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
