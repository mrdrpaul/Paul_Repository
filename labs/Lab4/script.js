
if(document.body.classList.contains('homePage')){
let dungeonImage = document.getElementById("dungeonBackgroundImage") //Background image for the dungeon (progression)
let pointLeft = document.getElementById("leftPoint") //image to move left
let point = document.getElementById("forwardPoint") //image to move forward
let pointRight = document.getElementById("rightPoint") //image to move right
let currentPosition="dungeonEntrance"
let banner = document.getElementsByTagName("header")[0]
let storyAreas = ["dungeonEntrance","signPost"]
let leftWall = document.getElementById("leftWallImage")
let rightWall = document.getElementById("rightWallImage")

point.addEventListener("click", () =>{
    screenChange(point) //calls function to perform screen change
    if(currentPosition ==="dungeonEntrance"){
        banner.style.animation="graduallyDisappear 4s ease-in"
        banner.style.animationFillMode="forwards"

    }
    // below function - after the previous image animation ends, displays new area image and makes new directional hands appear, adds pulse animation to them
    setTimeout(function(){
        if (currentPosition==="dungeonEntrance"){
            // banner.style.animation="graduallyDisappear 4s ease-in"
            // banner.style.animationFillMode="forwards"
            currentPosition = "signPost"
            dungeonImage.src="./assets/signpost.png"
        }
        pointLeft.style.display="block"
        pointRight.style.display="block"
        pointLeft.style.animation="pulse 3s linear infinite"
        pointRight.style.animation="pulse 3s linear infinite"
    },4000)
})

pointLeft.addEventListener('click', () =>{
    screenChange(pointLeft)
    setTimeout(function(){
        if (currentPosition==="signPost"){
            currentPosition = "jobFaire"
            dungeonImage.src="./assets/jobFaire.png"
            window.location="./hiring.html"
        }

    },4000)

})

pointRight.addEventListener('click', () =>{
    // pointLeft.style.animation="graduallyDisappear 2s" // applies fadeout animation
    // pointLeft.style.animationFillMode="forwards" // preserves state of image after animation instead of resetting
    screenChange(pointRight)

    setTimeout( function(){
        if (currentPosition==="signPost"){
            currentPosition = "tavern"
            dungeonImage.src="./assets/tavernMenu.jpeg"
            window.location="./menu.html"
        }
    },4000)
})
    function screenChange(directionPoint){
        directionPoint.style.animation="graduallyDisappear 2s"// applies fadeout animation
        directionPoint.style.animationFillMode="forwards" // preserves state of image after animation instead of resetting`
        if(directionPoint === point){
            dungeonImage.style.animation="entrance 4s ease-in" // applies animation to simulate entering somewhere, (screen transition)
        }else if (directionPoint === pointLeft){
            pointRight.style.animation="graduallyDisappear 2s"
            pointRight.style.animationFillMode="forwards"
            dungeonImage.style.animation="locationChange 4s linear"
            leftWall.style.animation="moveLeft 4s linear"
            rightWall.style.animation="moveRight 4s linear"
        }else if (directionPoint === pointRight){
            pointLeft.style.animation="graduallyDisappear 2s"
            pointLeft.style.animationFillMode="forwards"
            dungeonImage.style.animation="locationChange 4s linear"
            leftWall.style.animation="moveLeft 4s linear"
            rightWall.style.animation="moveRight 4s linear"
        }
    }
}

if(document.body.classList.contains('menuPage')){

    let callMenu = document.getElementById("menuCall")
    let menuState = false;
    let nextMenuItem = document.getElementById("nextItemButton")
    let portal = document.getElementsByClassName("portal")
    let menuItem = document.getElementsByClassName("menuItemContainer")[0]
    let menuItemDescription = document.getElementById("menuItemDescription")

    // leftPortal.style.animation="activatePortal 2s linear"

    callMenu.addEventListener('click', () =>{
        if (menuState === false){
            menuState = true
            for ( let i = 0; i < portal.length;i++){
                portal[i].style.animation="activatePortal 2s linear"
                portal[i].style.animationFillMode="forwards"
            }
            menuItem.style.animation="moveRight 2s linear, addBorder 1s linear"
            menuItem.style.animationDelay="2s,4s"
            menuItem.style.animationFillMode="forwards"
            menuItemDescription.style.animation="graduallyAppear 2s linear"
            menuItemDescription.style.animationDelay="4.3s"
            menuItemDescription.style.animationFillMode="forwards"
        }else if (menuState === true){
            menuState = false;
            for ( let i = 0; i < portal.length;i++){
                portal[i].style.animation="deactivatePortal 2s linear"
                portal[i].style.animationFillMode="forwards"
            }
            menuItem.style.animation="dissipateMenu 2s linear"
            menuItemDescription.style.animation="dissipateMenu 2s linear"
            //Code to close portals and discard card
        }
    })

    nextMenuItem.addEventListener("click", ()=>{
        alert("test")
    })
}

if(document.body.classList.contains('hiringPage')){

}




