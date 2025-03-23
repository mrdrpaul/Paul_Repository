
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
			document.getElementById("homePageNavBar").style.display="grid"
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
			document.getElementById("homePageNavBar").style.display="none"
            pointRight.style.animation="graduallyDisappear 2s"
            pointRight.style.animationFillMode="forwards"
            dungeonImage.style.animation="locationChange 4s linear"
            leftWall.style.animation="moveLeftDungeon 4s linear"
            rightWall.style.animation="moveRightDungeon 4s linear"
        }else if (directionPoint === pointRight){
			document.getElementById("homePageNavBar").style.display="none"
            pointLeft.style.animation="graduallyDisappear 2s"
            pointLeft.style.animationFillMode="forwards"
            dungeonImage.style.animation="locationChange 4s linear"
            leftWall.style.animation="moveLeftDungeon 4s linear"
            rightWall.style.animation="moveRightDungeon 4s linear"
        }
    }
}

if(document.body.classList.contains('menuPage')){

    let callMenu = document.getElementById("menuCall")
    let menuState = false;
    let previousMenuItem = document.getElementById("previousItemButton")
	let nextMenuItem = document.getElementById("nextItemButton")
    let portal = document.getElementsByClassName("portal")
    let menuItem = document.getElementById("menuItemContainer")
	let currentMenuItemName = document.getElementById("menuItemName")
	let currentMenuItemPrice = document.getElementById("menuItemPrice")
	let currentMenuItemImage = document.getElementById("menuItemImage")
    let currentMenuItemDescription = document.getElementById("menuItemDescription")
	let portalLeftOpening = document.getElementById("portalBeamLeftOpening")
	let portalRightOpening = document.getElementById("portalBeamRightOpening")
	let currentItemIndex=0;
	let menuItems = [
		{
			"menuItemName":"Hearth-Roasted Mutton Platter",
			"menuItemPrice":9,
			"menuItemImage":"./assets/Mutton.png",
			"menuItemDescription":"Slow-roasted o’er an open flame, our Hearth-Roasted Mutton Platter be a feast fit for a weary traveler. This rich and hearty cut be basted in a blend o’ me own secret herbs and dripping with savory juices. Served alongside a crusty hunk o’ barley bread, a dollop o’ spiced apple chutney, and a heapin’ portion o’ buttered root vegetables, this meal shall warm thy belly and put the strength o’ ten men in thy bones!",
			"altText":"Hearth-Roasted Mutton Platter"
		},
		{
			"menuItemName":"Steaming Bowl o' Hearth-Porridge",
			"menuItemPrice":6,
			"menuItemImage":"./assets/porridge.png",
			"menuItemDescription":"Made fresh each morn with oats soaked o’er night in sweet well-water and simmered slow atop the hearth, ‘til thick as fog o’er the moors. We stir in a touch o’ wild honey from the forest edge, a pinch o’ salt, and a dash o’ cinnamon. Topped with a few stewed berries or a knob o’ fresh-churned butter, if ye’ve the coin to spare.",
			"altText":"Steaming Bowl o' Hearth-Porridge"
		},
		{
			"menuItemName":"The Huntsman's Hearty Board",
			"menuItemPrice":14,
			"menuItemImage":"./assets/muttonMealSpread.png",
			"menuItemDescription":"A generous slab o’ smoke-kissed mutton, carved fresh from the spit and resting beside thick slices o’ the roast, still dripping with rich fat and flavor. Nestled ‘round the meat be a gathering o’ boiled root rounds, tender to the bite and earthy as the forest floor. A hunk o’ aged yellow cheese, sharp enough to make thine eyes water and thy soul sing, sits proudly on the board.",
			"altText":"The Huntsman's Hearty Board"
		},
		{
			"menuItemName":"The Winter-Worn Stewpot",
			"menuItemPrice":7,
			"menuItemImage":"./assets/stew.png",
			"menuItemDescription":"This here’s a thick and hearty beef ‘n barley stew, slow-cooked since first cockcrow in a black-iron cauldron o’er steady flame. Chunks o’ tender beef, browned ‘til they near fall apart, float among generous helpings o’ carrots, parsnips, onions, and potatoes—each bite steeped in rich broth and seasoned with thyme, black pepper, and a whisper of bay leaf.",
			"altText":"The Winter-Worn Stewpot"
		},
		{
			"menuItemName":"The Fisherman's Supper",
			"menuItemPrice":12,
			"menuItemImage":"./assets/fish.png",
			"menuItemDescription":"A whole oven-roasted river fish, caught at first light and cooked with naught but salt, flame, and skill. Its skin be crisped golden, and the flesh within tender, flaking easy from the bone with but a touch of the fork. Served beside it be three slices of coarse brown bread, perfect for soppin’ up the juices or filling thy belly.",
			"altText":"The Fisherman's Supper"
		},
		{
			"menuItemName":"Tavern Eggs",
			"menuItemPrice":3,
			"menuItemImage":"./assets/tavernEggs.png",
			"menuItemDescription":"Three hen’s eggs, hard-boiled ‘til firm yet tender, then steeped in a brew of sour vinegar, cracked black pepper, mustard seed, and clove, left to soak until the yolk’s taken on a golden tang and the white bites back just a touch.",
			"altText":"Tavern Eggs"
		}
	]
	let menuDescriptions = [
	"Slow-roasted o’er an open flame, our Hearth-Roasted Mutton Platter be a feast fit for a weary traveler. This rich and hearty cut be basted in a blend o’ me own secret herbs and dripping with savory juices. Served alongside a crusty hunk o’ barley bread, a dollop o’ spiced apple chutney, and a heapin’ portion o’ buttered root vegetables, this meal shall warm thy belly and put the strength o’ ten men in thy bones!",
	"test",
	"",
	"",
	"",
	]
    // leftPortal.style.animation="activatePortal 2s linear"

    callMenu.addEventListener('click', () =>{
		currentItemIndex=0;
        if (menuState === false){
            menuState = true	
			callMenu.textContent="Close Menu"
			outputMenuItem(currentItemIndex)
			
            for ( let i = 0; i < portal.length;i++){
                portal[i].style.animation="activatePortal 2s linear"
                portal[i].style.animationFillMode="forwards"
				portalBeamLeftOpening.style.animation="graduallyAppear 2s linear"
				portalBeamRightOpening.style.animation="graduallyAppear 2s linear"
				portalBeamLeftOpening.style.animationFillMode="forwards"
				portalBeamRightOpening.style.animationFillMode="forwards"
            }
            // menuItem.style.animation="moveRight 2s linear, addBorder 1s linear"
			menuItem.style.animation="unBlur 2s linear,addBorder 1s ease-in"
            menuItem.style.animationDelay="2s,3s"
            menuItem.style.animationFillMode="forwards"
            currentMenuItemDescription.style.animation="graduallyAppear 2s linear"
            currentMenuItemDescription.style.animationDelay="2s"
            currentMenuItemDescription.style.animationFillMode="forwards"
        }else if (menuState === true){
            menuState = false;
			callMenu.textContent="Call for menu"
            for ( let i = 0; i < portal.length;i++){
                portal[i].style.animation="deactivatePortal 2s linear"
                portal[i].style.animationFillMode="forwards"
				portalBeamLeftOpening.style.animation="dissipateMenu 2s linear"
				portalBeamRightOpening.style.animation="dissipateMenu 2s linear"
				portalBeamLeftOpening.style.animationFillMode="forwards"
				portalBeamRightOpening.style.animationFillMode="forwards"
            }
            menuItem.style.animation="dissipateMenu 2s linear"
            currentMenuItemDescription.style.animation="dissipateMenu 2s linear"
            //Code to close portals and discard card
        }
		// setTimeout(function(){
			// menuItem.classList.remove('moveRight')
			// menuItem.style.left="55vw"
			// menuItem.style.animation="dissipateMenu 2s linear"

		// },8000)
    })

    nextMenuItem.addEventListener("click", ()=>{
		if(currentItemIndex === menuItems.length-1){
			currentItemIndex = 0;
		}else{
			currentItemIndex++;
		}
        outputMenuItem(currentItemIndex)
    })
	previousMenuItem.addEventListener("click", ()=>{
        if(currentItemIndex === 0){
			currentItemIndex = menuItems.length-1;
		}else{
			currentItemIndex--;
		}
		outputMenuItem(currentItemIndex)
    })
	
	
	function outputMenuItem(index){
		currentMenuItemName.textContent = menuItems[index].menuItemName;
		currentMenuItemPrice.textContent = menuItems[index].menuItemPrice + " royal-minor pieces";
		currentMenuItemImage.src = menuItems[index].menuItemImage;
		currentMenuItemDescription.textContent = menuItems[index].menuItemDescription;
		currentMenuItemImage.alt=menuItems[index].altText;
	}
}

if(document.body.classList.contains('hiringPage')){
	let submitClick = document.getElementById("submitButton")
	submitClick.addEventListener('click', () =>{
		let userFormAge = document.forms["userForm"]["age"].value;
		validateForm(userFormAge)
})
	
	
function validateForm(userformage){
	if (userformgae<21||userformage>99){
		alert("Must be older than 21 and younger than 99");
	}
	
}
}




