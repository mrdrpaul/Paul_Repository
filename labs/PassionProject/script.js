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
let centerBlockSubSections = document.querySelectorAll(".centerBlockSubSections")
let cardContainers = document.querySelectorAll(".cardContainer")
let gauntletBoard = document.getElementById("gauntletBoard")
let gridSquare = document.getElementsByClassName("gridSquare")
let currentPos=0

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
    }
}
document.getElementById("warriorHealth")
document.addEventListener("keydown", (event) =>{
    switch (event.key){
        case "ArrowLeft":
            gridSquare[currentPos].id=""
            currentPos -= (currentPos%10>0)? 1: 0;
            gridSquare[currentPos].id="playerGrid"
            break;
        case "ArrowUp":
            gridSquare[currentPos].id=""
            currentPos -= currentPos<10 ? 0: 10;
            gridSquare[currentPos].id="playerGrid"
            break;
        case "ArrowRight":
            gridSquare[currentPos].id=""
            currentPos += (currentPos%10<9)? 1: 0;
            gridSquare[currentPos].id="playerGrid"
            break;
        case "ArrowDown":
            gridSquare[currentPos].id=""
            currentPos += currentPos<90 ? 10: 0;
            gridSquare[currentPos].id="playerGrid"
            break;
    }
})