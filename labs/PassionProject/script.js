// let cardContainer = document.getElementsByClassName()
let cardContainer = document.getElementById("website1")

// cardContainer.addEventListener('mouseover',function(){
//     cardContainer.style.animation="pulse 2s linear infinite"
// })
// cardContainer.addEventListener('mouseleave',function(){
//     cardContainer.classList.remove("pulse")
// })
let cardSite1 = document.getElementById("website1")
let ship = document.getElementById("ship1")
let planet = document.getElementById("planet")
let Story = document.getElementById("StoryBlock")
let console = document.getElementById("console")
let centerBlock = document.getElementById("centerBlocksubGrid")
let centerBlockDungeon = document.getElementById("centerBlockDungeon")
let centerBlockGauntlet = document.getElementById("centerBlockGauntlet")
let centerBlock3d = document.getElementById("centerBlock3D")
let centerBlockSubSections = document.querySelectorAll(".centerBlockSubSections")
let cardContainers = document.querySelectorAll(".cardContainer")
let gauntletBoard = document.getElementById("gauntletBoard")
let gridSquare = document.getElementById("gridSquare")
let currentPos=0

let boxContainer = document.getElementById("boxContainer")
let box = document.getElementsByClassName("boxRoom")
let scene = document.getElementsByClassName("sceneContainer")
let player1 = document.getElementsByClassName("player");
let playerContainer = document.getElementsByClassName("playerContainer")
let pillar1 = document.getElementsByClassName("pillarOne")

cardSite1.addEventListener("mouseenter", ()=>{
    startSpaceStoryBoard();
})

cardSite1.addEventListener("mouseleave", ()=>{
    stopSpaceStoryBoard();
})

let timeouts=[];
function startSpaceStoryBoard(){
    timeouts.push(setTimeout(function() {
        ship.src="./SpaceShip.png";
        cardSite1.classList.remove('fly-out');
        cardSite1.classList.add('fly-in');
        cardSite1.classList.remove('reset-planet');
        cardSite1.classList.add('approach-planet');
        console.style.scale="1.5"
    },1000))
    timeouts.push(setTimeout(function(){
        ship.style.left="20%";
        ship.style.top="40%";
    },3000))
    timeouts.push(setTimeout(function(){
        ship.style.left="15%";
        ship.style.top="50%";
        animateText("This is Pilot #3942");


    },5000))
    timeouts.push(setTimeout(function(){
        ship.style.left="35%";
        ship.style.top="30%";

    },7000))
    timeouts.push(setTimeout(function(){
        ship.style.left="20%";
        ship.style.top="48%";
        animateText("Approaching the planet");
        // centerBlock.style.visibility="hidden";

    },9000))
    timeouts.push(setTimeout(function(){
        ship.style.left="50%";
        ship.style.top="60%";
        ship.style.scale="0"
        animateText("Landing Imminent");
    },13000))
    timeouts.push(setTimeout(function(){
        planet.style.filter="brightness(0.5)"
        // planet.src="Cracked Planet.png"
        // cardSite1.classList.add('shift-planet')
        Story.textContent=""
    },15000))
    timeouts.push(setTimeout(function(){
        ship.style.scale="0"
    },16000))
    timeouts.push(setTimeout(function(){
        Story.textContent=""
        planet.style.filter="brightness(1)"
        planet.style.opacity="0"
        console.style.opacity="0"
        cardSite1.style.backgroundImage="url('./assets/SpaceCard/mushroomBiome1.png')"

        planet.style.src=""
        // cardSite1.classList.add('shift-planet')
    },17000))

}

function animateText(text){
    Story.innerHTML = "";
    text.split("").forEach((char, i) =>{
        const span = document.createElement("span");
        span.textContent = char === " " ? "\u00A0" : char;
        span.style.animationDelay = `${i*0.05}s`;
        Story.appendChild(span);
    })
}

function stopSpaceStoryBoard(){
    timeouts.forEach(clearTimeout);
    timeouts = [];
    cardSite1.style.transition="filter 1s linear"
    cardSite1.style.filter="blur(2.5rem)"
    // planet.style.scale="1"
    ship.style.scale="1"
    console.style.scale="1"
    cardSite1.style.backgroundImage="url('./assets/SpaceCard/DarkNebula.png')"
    planet.src="./assets/SpaceCard/ringedTerraWorld.png"
    Story.textContent=""
    planet.style.filter="brightness(1)"
    planet.style.opacity="1"
    console.style.opacity="1"

    cardSite1.classList.remove('fly-in');
    cardSite1.classList.add('fly-out');
    cardSite1.classList.remove('approach-planet');
    cardSite1.classList.add('reset-planet');
    cardSite1.classList.remove('shift-planet')

    setTimeout(function(){
        ship.style.left="0";
        ship.style.top="0";
        cardSite1.style.filter="blur(0)"

    },1000)
}

// centerBlock.addEventListener("click", (event)=>{
//     const cardClicked = event.target.closest(".cardContainer")
//
//     if (cardClicked && centerBlock.contains(cardClicked)) {
//         const selectedCard = cardClicked.id;
//         engageSelection(selectedCard);
//     }
// })

// adds an on-click to each of the individual cardContainers that results in the main centerblock display
// disappearing and being replaced with the respective sub block of the card
cardContainers.forEach(subSection =>{
    subSection.addEventListener("click", (event)=>{
        let selectedCard = engageSelection(subSection.id);
        centerBlock.style.transition="opacity 1s linear";
        centerBlock.style.opacity="0";
        setTimeout(function(){
            centerBlock.style.display="none";
            selectedCard.style.display="grid";
            selectedCard.style.opacity="1";
        },1000)
    })
})

// adds eventlisteners within the subsections so that when theyre clicked on, returns to the base center block
// NEED TO ADD FUNCTIONALITY TO RETURN ONLY IF SPECIFIC AREA IS SELECTED
centerBlockSubSections.forEach(subSection =>{
    subSection.addEventListener("click", (event)=>{
        subSection.style.transition="opacity 1s linear";
        subSection.style.opacity="0";
        setTimeout(function(){
            subSection.style.display="none";
            centerBlock.style.display="grid";
            centerBlock.style.opacity="1";
        },1000)
    })
})

// centerBlockDungeon.addEventListener("click", ()=>{
//     centerBlockDungeon.style.transition="opacity 1s linear";
//     centerBlockDungeon.style.opacity="0";
//     setTimeout(function(){
//         centerBlockDungeon.style.display="none";
//         centerBlock.style.display="grid";
//         centerBlock.style.opacity="1";
//     },1000)
// })

function engageSelection(card){
    switch (card) {
        case "cardContainer1":
            return null;
        case "cardContainer2":
            return centerBlockDungeon;
        case "cardContainer3":
            return null;
        case "cardContainer4":
            return null;
        case "cardContainer5":
            return null;
        case "cardContainer6":
            return centerBlockGauntlet;
        case "cardContainer7":
            return centerBlock3d;
    }
}
document.getElementById("warriorHealth")

let angle=0; //used for rotating board and character Y, in degrees
let boardAngle=0;
let currentScale=1;
let currentPlayerPos = [0,0,0]; //board units, not pixels
document.addEventListener("keydown", (event) =>{

    let isNS = ((angle > 315 && angle < 360) || (angle >=0 && angle < 45) || (angle > 135 && angle < 225));
    let isSouth = (angle > 135 && angle < 225);
    let isEast = (angle > 45 && angle < 135);
    switch (event.key){
        case "ArrowLeft":
            if(centerBlock3d.style.display !== "none"){
                angle -=10;
                boardAngle -=10;
            }
            if(centerBlockGauntlet.style.display!=="none"){
                gridSquare[currentPos].id="";
                currentPos -= (currentPos%10>0)? 1: 0;
                gridSquare[currentPos].id="playerGrid";
            }

            // gridSquare[currentPos].id="";
            // currentPos -= (currentPos%10>0)? 1: 0;
            // gridSquare[currentPos].id="playerGrid"
            break;
        case "ArrowUp":
            if(centerBlock3d.style.display !== "none") {
                currentScale += .1;
            }
            if(centerBlockGauntlet.style.display!=="none") {
                gridSquare[currentPos].id="";
                currentPos -= currentPos<10 ? 0: 10;
                gridSquare[currentPos].id="playerGrid";
            }
            break;
        case "ArrowRight":
            if(centerBlock3d.style.display !== "none") {
                angle += 10;
                boardAngle+=10;
            }
            if(centerBlockGauntlet.style.display!=="none") {
                gridSquare[currentPos].id="";
                currentPos += (currentPos%10<9)? 1: 0;
                gridSquare[currentPos].id="playerGrid";
            }
            break;
        case "ArrowDown":
            if(centerBlock3d.style.display !== "none") {
                currentScale -= .1;
            }
            if(centerBlockGauntlet.style.display!=="none") {
                gridSquare[currentPos].id="";
                currentPos += currentPos<90 ? 10: 0;
                gridSquare[currentPos].id="playerGrid";
            }
            break;
        case "w":
            currentPlayerPos[isNS ? 2 : 0] +=10 * (isNS ? (isSouth ? 1: -1) : (isEast ? 1 : -1));
            break;
        case "a":
            currentPlayerPos[isNS ? 0 : 2] +=10 * (isNS ? (isSouth ? 1: -1) : (isEast ? -1 : 1));
            break;
        case "d":

            currentPlayerPos[isNS ? 0 : 2] +=10 * (isNS ? (isSouth ? -1: 1) : (isEast ? 1 : -1));
            break;
        case "s":
            currentPlayerPos[isNS ? 2 : 0] +=10 * (isNS ? (isSouth ? -1: 1) : (isEast ? -1 : 1));
            break;
    }

    if(centerBlock3d.style.display !== "none") {
        scene[0].style.transition= "1s ease all";
        scene[0].style.transform = `rotateY(${boardAngle}deg) scale3d(${currentScale},${currentScale},${currentScale})`;
        playerContainer[0].style.transition= "0.5s ease all";
        playerContainer[0].style.transform=`rotateX(${-90}deg) translate3d(${currentPlayerPos[0]}px,${currentPlayerPos[1]}px,${currentPlayerPos[2]}px)`;
        player1[0].style.transform=`rotateY(${-angle}deg)`;
    }
    angle = (angle+360)%360;
});
function buildScene(){

}
