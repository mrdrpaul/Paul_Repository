let menuContainer = document.getElementsByClassName("menuContainer")[0];
// let menuDrag = document.getElementById("menuDrag");
let columnLeftBorder = document.getElementById("columnLeftBorder");
let scene = document.getElementsByClassName("scene")[0];
let centerBlock = document.getElementById("columnCenterBlock")

let newUserButton = document.getElementById("firstTime");
let previousUserButton = document.getElementById("previousUser");
let rotateSceneControlXaxis = document.getElementById("rotateSceneControlXaxis")
let rotateSceneControlYaxis = document.getElementById("rotateSceneControlYaxis")
let baseFaces = document.querySelectorAll(".baseFaces")
let baseHeightControl = document.getElementById("baseHeightControl")
let sceneSizeControl = document.getElementById("sceneSizeControl")
let perspectiveControl = document.getElementById("perspectiveControl")
let centerBlockCenterCol = document.getElementById("centerBlockCenterCol")
let sceneScale = document.getElementById("sceneScale")
let sceneFloorChanger = document.getElementById("floorSelection")
let sceneFloor = document.getElementsByClassName("sceneFloor")[0]
let baseChanger = document.getElementById("baseSelection")
let perspectiveValue = document.getElementById("perspectiveValue")
let xAxisValue = document.getElementById("xAxisValue")
let yAxisValue = document.getElementById("yAxisValue")
let sceneScaleValue = document.getElementById("sceneScaleValue")
let backgroundSelection = document.getElementById("backgroundSelection")
let beginGame = document.getElementById("begin")
let sceneContainer = document.getElementsByClassName("sceneContainer")[0]
// let bossScene = document.getElementsByClassName("bossScene")[0]
// let bossSceneContainer = document.getElementsByClassName("bossSceneContainer")[0]
let skeletonBossContainer = document.getElementsByClassName("skeletonBossContainer")[0]

// let baseImage = document.getElementsByClassName("baseFaces")


let angleY=0;
let angleX=75;
let scaleValue = 1;

//button to begin tutorial for customization (active, not implemented)
newUserButton.addEventListener('click', ()=>{
    alert("new user clicked");
})

//button to skip straight to scene builder
previousUserButton.addEventListener('click', ()=>{
    customizationButtonIsActive();
    scene.style.display="block";
    alert("previous user clicked");
    scene.style.width="300px";
    setTimeout(()=>{
        scene.style.transform="rotateX(75deg)"
        menuContainer.style.width ="200px";
        columnLeftBorder.style.opacity=1;

    },600)
//logic to drag menu from side with range input (scroll, in a way) dont want to delete just yet.
//     menuDrag.addEventListener('input', (event) =>{
//     let percentage= event.target.value;
//     let startingPos=200;
//     let newPos=startingPos - percentage
//     menuContainer.style.right =`${newPos}%`;
//     // centerBlocksubGrid.style.width =`${percentage}px`;
//     if(percentage==0){
//         columnLeftBorder.style.opacity=0.7;
//     }else{
//         columnLeftBorder.style.opacity=1;
//     }
// })

})

//button to begin game and play a pre-made boss fight
beginGame.addEventListener('click', ()=>{
    beginGameButtonIsActive();
    newUserButton.style.opacity="0";
    previousUserButton.style.opacity="0";
    beginGame.style.opacity="0";

    setTimeout(()=>{
        newUserButton.style.display="none";
        previousUserButton.style.display="none";
        beginGame.style.display="none";
        scene.style.display="block";
		skeletonBossContainer.style.display="block";
        // bossScene.style.display="block";
    },1000)
    setTimeout(()=>{
        scene.style.width="600px";
		// bossScene.style.width="600px";
        // scene.style.transform="rotateX(90deg)"
        centerBlock.style.backgroundImage="url(./assets/blackHole.png)";
        sceneFloor.style.backgroundImage= "url(./assets/stars.png)";
        baseFaces.forEach(elements => {elements.style.backgroundImage="url(./assets/stars.png)"});

    },1100)

})
// true if user selected button to customize [currently "ive been here before" button]

function customizationButtonIsActive(){
    perspectiveControl.addEventListener('input',(event)=>{
        centerBlockCenterCol.style.perspective=`${event.target.value}px`
        perspectiveValue.textContent=`${event.target.value}px`
    })

    rotateSceneControlYaxis.addEventListener('input', (event)=>{
        angleY = (event.target.value-180);
        scene.style.transform=`rotateY(${angleY}deg) rotateX(${angleX}deg) scale3d(${scaleValue},${scaleValue},${scaleValue})`
        xAxisValue.textContent=`X Axis: ${angleY}deg`

    })
    rotateSceneControlXaxis.addEventListener('input', (event)=>{
        angleX = (event.target.value);
        scene.style.transform=`rotateX(${angleX}deg) rotateY(${angleY}deg) scale3d(${scaleValue},${scaleValue},${scaleValue})`
        yAxisValue.textContent=`Y Axis: ${angleX}deg`
    })

    baseHeightControl.addEventListener('input',(event)=>{
        val = event.target.value;
        baseFaces.forEach(element=>{element.style.setProperty('--baseHeight',(isNaN(val) || val <=0) ? "40px" : `${val}px`);});
    })
    sceneSizeControl.addEventListener('input',(event)=>{
        val = event.target.value;
        scene.style.width=((isNaN(val) || val <=100) ? "100px" : `${event.target.value}px`)
    })

    sceneScale.addEventListener('input',(event)=>{
        scaleValue = event.target.value;
        scene.style.transform=`rotateX(${angleX}deg) rotateY(${angleY}deg) scale3d(${scaleValue},${scaleValue},${scaleValue})`
        sceneScaleValue.textContent = `Scale: ${scaleValue}`
    })

    sceneFloorChanger.addEventListener('change', ()=>{
        let currentSelection = sceneFloorChanger.value;
        switch (currentSelection){
            case "grassyFields":
                sceneFloor.style.backgroundImage= "url(./assets/grass.png)";
                break;
            case "magmaFloor":
                sceneFloor.style.backgroundImage= "url(./assets/magmaFloor.png)";
                break;
            case "dungeonFloor":
                sceneFloor.style.backgroundImage= "url(./assets/dungeonFloor.png)";
                break;
            case "desertSands":
                sceneFloor.style.backgroundImage= "url(./assets/desertFloor.png)";
                break;
            case "bossFloor":
                sceneFloor.style.backgroundImage= "url(./assets/bossFloor.png)";
                break;
            case "bossFloorGlowing":
                sceneFloor.style.backgroundImage= "url(./assets/bossFloorGlowing.png)";
                break;
            case "stars":
                sceneFloor.style.backgroundImage= "url(./assets/stars.png)";
                break;
        }
    })
    baseChanger.addEventListener('change', ()=>{
        let currentSelection = baseChanger.value;
        background="";
        switch (currentSelection){
            case "dirt":
                background= "url(./assets/dirt.png)";
                break;
            case "grassyFields":
                background= "url(./assets/grass.png)";
                break;
            case "magmaFloor":
                background= "url(./assets/magmaFloor.png)";
                break;
            case "dungeonFloor":
                background= "url(./assets/dungeonFloor.png)";
                break;
            case "desertSands":
                background= "url(./assets/desertFloor.png)";
                break;
            case "bossFloor":
                background= "url(./assets/bossFloor.png)";
                break;
            case "bossFloorGlowing":
                background= "url(./assets/bossFloorGlowing.png)";
                break;
            case "stars":
                background= "url(./assets/stars.png)";
                break;
        }
        baseFaces.forEach(elements => {elements.style.backgroundImage=background});
    })

    backgroundSelection.addEventListener('change', ()=>{
        let currentSelection = backgroundSelection.value;
        background="";
        switch (currentSelection){
            case "grassyFields":
                background= "url(./assets/background.png)";
                break;
            case "stars":
                background= "url(./assets/stars.png)";
                break;
            case "graveyard":
                background= "url(./assets/graveyard.png)";
                break;
            case "blackHole":
                background= "url(./assets/blackHole.png)";
                break;
            case "desertSands":
                background= "url(./assets/desertFloor.png)";
                break;
        }
        centerBlock.style.backgroundImage=background;
    })

}

function beginGameButtonIsActive(){
    //move container to simulate player movement
    let playerOneContainer = document.getElementsByClassName("playerContainer")[0];
    let playerOne = document.getElementsByClassName("player")[0];
    playerOneContainer.style.display="block";

    // changing the X in the playerContainer moves the player right (increasing value) and left (decreasing value) [preferable, no change required]
    // changing the Y in the playerContainer moves the player down (increasing value) and up (decreasing value) [might multiply by -1 make make decrease move down and increase move up (NOT IMPLEMENTED)]
    // changing the Z in the playerContainer moves the player back (increasing value) and forwards (decreasing value) [might multiply by -1 make make decrease move back and increase move forwards (NOT IMPLEMENTED)]
    let playerOnePosition = [0,0,0];

    // cameraPosition [X, Y, Z]
    // camera is currently positioned to the center of the board
    // changing the X in the scene translate3d(X,Y,Z) moves the camera left (increasing values) and right (decreasing values) [might multiply by -1 make make decrease move left and increase move right (NOT IMPLEMENTED)]
    // changing the Y in the scene translate3d(X,Y,Z) moves the camera forwards (increasing) and backwards (decreasing)
    // changing the Z in the scene translate3d(X,Y,Z) moves the camera down (increasing values) and up (decreasing values) [might multiply by -1 make make decrease move down and increase move up (NOT IMPLEMENTED)]
    // changing Y moves the camera forwards (increasing) and backwards (decreasing)
    // let cameraPosition=[10,160,50];
    let cameraPosition=[10,800,280];
    let playerCameraPosition = [0,0,0];
    // let cameraPosition=[10,-280,800];
    //Y val of 160 is first person
    //Z val of 40 is just under top of hat, considering character height is is fine for 1st person pov


    // controls the rotateX value of the board (used when changing cameraAngle) initialized to 60
    let overheadBoardAngle = 0;
    let boardCameraPosition = 0;
    let boardCameraPosition2 = 0;
    let firstPersonMode = true;

    let playerAngle = 0;
    let boardAngle = 0;

    setTimeout(()=>{
		// bossSceneContainer.style.transform=`rotateX(90deg) translate3d(${cameraPosition[0]*-1}px,${cameraPosition[1]}px,0)`;
		// bossContainer.style.transform=`rotateX(90deg) translate3d(${cameraPosition[0]*-1}px,${cameraPosition[1]}px,${cameraPosition[2]}px)`;
		// bossContainer.style.transform=`rotateX(70deg)`;
        sceneContainer.style.transform=`rotateX(90deg) translate3d(${cameraPosition[0]*-1}px,${cameraPosition[1]}px,${cameraPosition[2]}px)`;
        scene.style.transform=`rotateX(${overheadBoardAngle}deg) scale3d(1,1,1)`;
        // bossScene.style.transform=`rotateX(${overheadBoardAngle}deg) scale3d(1,1,1)`;
    },2000)

// player movement
    document.addEventListener("keydown", (event)=>{
        switch(event.key){
            case "w":
                playerOnePosition[2]+=10;
                boardCameraPosition+=10;
                playerCameraPosition[2]+=10;

                break;
            case "s":
                playerOnePosition[2]-=10;
                boardCameraPosition-=10;
                playerCameraPosition[2]-=10;


                break;
            case "a":
                playerOnePosition[0]-=10;
                cameraPosition[0]-=10;
                boardCameraPosition2-=10;
                playerCameraPosition[0]-=10;


                break;
            case "d":
                playerOnePosition[0]+=10;
                cameraPosition[0]+=10;
                playerCameraPosition[0]+=10;
                boardCameraPosition2+=10;

                break;
            case "ArrowUp":
                //moves camera forward
                if(!firstPersonMode){
                    cameraPosition[1]+=150;
                    cameraPosition[2]-=20;
                    overheadBoardAngle+=30;
                    playerCameraPosition[2]+=150;
                    playerCameraPosition[1]+=60;

                    firstPersonMode=true;
                    playerOne.style.display="none";
                }
                break;
            case "ArrowDown":
                //moves camera back
                if(firstPersonMode){
                    cameraPosition[1]-=150;
                    cameraPosition[2]+=20;
                    overheadBoardAngle-=30;
                    playerCameraPosition[2]-=150;
                    playerCameraPosition[1]-=60;

                    firstPersonMode=false;
                    playerOne.style.display="block";
                }
                break;
            case "ArrowLeft":
                if(firstPersonMode){
                    boardAngle+=10;
                }else{
                    boardAngle+=40;

                }
                playerAngle+=10;

                //turn character left,rotate character container, rotate scene, rotateY
                break;
            case "ArrowRight":
                if(firstPersonMode){
                    boardAngle-=10;
                }else{
                    boardAngle-=40;

                }
                playerAngle-=10;

                break;
        }
        //multiplying the Y and Z by -1 allows for the switch statement to increase and decrease values appropriately
        playerOneContainer.style.transform=`rotateX(-90deg) translate3d(${playerOnePosition[0]}px,${playerOnePosition[1]*-1}px,${playerOnePosition[2]*-1}px)`
        playerOne.style.transform=`rotateY(${playerAngle}deg)`
        // sceneContainer.style.transform=`rotateX(90deg) translate3d(${cameraPosition[0]*-1}px,${cameraPosition[1]}px,${cameraPosition[2]}px)`
        // sceneContainer.style.transform=`translate3d(0,0,0)`
        // scene.style.transform=`rotateX(${overheadBoardAngle}deg) scale3d(1,1,1) rotateZ(${boardAngle}deg) translate3d(${boardCameraPosition2}px,${boardCameraPosition}px,0)`;
        scene.style.transform=`rotateX(${overheadBoardAngle}deg) rotateZ(${boardAngle}deg) translate3d(${playerCameraPosition[0] *-1}px,${playerCameraPosition[2]}px,${playerCameraPosition[1]}px)`;
		// bossSceneContainer.style.transform=`rotateX(${overheadBoardAngle}deg) rotateZ(${boardAngle}deg) translate3d(${playerCameraPosition[0] *-1}px,${playerCameraPosition[2]}px,${playerCameraPosition[1]}px)`;
        sceneContainer.style.transform=`rotateX(90deg) rotateY(${boardAngle}))`
        // bossContainer.style.transform=`rotateX(90deg) rotateY(${boardAngle}))`

    })

}
