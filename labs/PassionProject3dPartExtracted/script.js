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
let camera = document.getElementsByClassName("camera")[0]
let bossContainer = document.getElementsByClassName("bossContainer")[0]
let tileContainer = document.getElementsByClassName("tileContainer")[0]
let skeletonBossContainer = document.getElementsByClassName("skeletonBossContainer")[0]
let summonPortal = document.getElementsByClassName("summonPortal")[0]

let tree = document.getElementsByClassName("treeContainer")[0]

const audio = new Audio('./assets/Untitled.mp3')

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
    newUserButton.style.opacity="0";
    previousUserButton.style.opacity="0";
    beginGame.style.opacity="0";

    scene.style.display="block";
    alert("previous user clicked");
    tileContainer.style.width="300px";

    setTimeout(()=>{
        newUserButton.style.display="none";
        previousUserButton.style.display="none";
        beginGame.style.display="none";

        menuContainer.style.width ="200px";
        columnLeftBorder.style.opacity=1;

        tileContainer.style.display="block";
    },1000)

    // setTimeout(()=>{
    //     scene.style.transform="rotateX(75deg)"
    //     menuContainer.style.width ="200px";
    //     columnLeftBorder.style.opacity=1;
    //
    // },600)


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

        tileContainer.style.display="block";
        //Currently Hiding Boss Code
        // summonPortal.style.animation="bossPortal 6s linear"
    },1000)
    setTimeout(()=>{
        tileContainer.style.width="800px";
        //The first transform would position the board to hide the bottom of the boss as it moved through the portal
        // tileContainer.style.transform="rotateX(90deg) scale3d(1,1,1) translate3d(0,250px,50px)";
        // The second transform moves the board and positions it right behind the player in a 3rd person perspective
        // tileContainer.style.transform="rotateX(90deg) scale3d(1,1,1) translate3d(-10px,660px,340px)";
        // The third transform moves the board and positions it on the player in a 1st person perspective
        // tileContainer.style.transform="rotateX(90deg) scale3d(1,1,1) translate3d(-10px,800px,385px)";
        tileContainer.style.transform="rotateX(90deg) scale3d(1,1,1) translate3d(0px,1200px,385px)";
        centerBlock.style.backgroundImage="url(./assets/background.png)";
        sceneFloor.style.backgroundImage= "url(./assets/grass.png)";
        baseFaces.forEach(elements => {elements.style.backgroundImage="url(./assets/dirt.jpeg)"});

        //Currently Hiding Boss Code
        // centerBlock.style.backgroundImage="url(./assets/blackHole.png)";
        // sceneFloor.style.backgroundImage= "url(./assets/stars.png)";
        // baseFaces.forEach(elements => {elements.style.backgroundImage="url(./assets/stars.png)"});
        // audio.play();
    },1100)
    setTimeout(()=>{
        //Currently Hiding Boss Code
        // skeletonBossContainer.style.display="flex";

    },5000)
    setTimeout(()=>{
        //Currently Hiding Boss Code
        // skeletonBossContainer.style.animation="rotateBossContainer 10s linear";
        // skeletonBossContainer.style.animationFillMode="forwards";
    },6000)
    setTimeout(()=>{
        // camera.style.animation="rotateCamera 10s linear infinite";
    },23300)

})
// true if user selected button to customize [currently "ive been here before" button]

//
// function customizationButtonIsActive(){
//     perspectiveControl.addEventListener('input',(event)=>{
//         centerBlockCenterCol.style.perspective=`${event.target.value}px`
//         perspectiveValue.textContent=`${event.target.value}px`
//     })
//
//     rotateSceneControlYaxis.addEventListener('input', (event)=>{
//         angleY = (event.target.value-180);
//         scene.style.transform=`rotateY(${angleY}deg) rotateX(${angleX}deg) scale3d(${scaleValue},${scaleValue},${scaleValue})`
//         xAxisValue.textContent=`X Axis: ${angleY}deg`
//
//     })
//     rotateSceneControlXaxis.addEventListener('input', (event)=>{
//         angleX = (event.target.value);
//         scene.style.transform=`rotateX(${angleX}deg) rotateY(${angleY}deg) scale3d(${scaleValue},${scaleValue},${scaleValue})`
//         yAxisValue.textContent=`Y Axis: ${angleX}deg`
//     })
//
//     baseHeightControl.addEventListener('input',(event)=>{
//         val = event.target.value;
//         baseFaces.forEach(element=>{element.style.setProperty('--baseHeight',(isNaN(val) || val <=0) ? "40px" : `${val}px`);});
//     })
//     sceneSizeControl.addEventListener('input',(event)=>{
//         val = event.target.value;
//         scene.style.width=((isNaN(val) || val <=100) ? "100px" : `${event.target.value}px`)
//     })
//
//     sceneScale.addEventListener('input',(event)=>{
//         scaleValue = event.target.value;
//         scene.style.transform=`rotateX(${angleX}deg) rotateY(${angleY}deg) scale3d(${scaleValue},${scaleValue},${scaleValue})`
//         sceneScaleValue.textContent = `Scale: ${scaleValue}`
//     })
//
//     sceneFloorChanger.addEventListener('change', ()=>{
//         let currentSelection = sceneFloorChanger.value;
//         switch (currentSelection){
//             case "grassyFields":
//                 sceneFloor.style.backgroundImage= "url(./assets/grass.png)";
//                 break;
//             case "magmaFloor":
//                 sceneFloor.style.backgroundImage= "url(./assets/magmaFloor.png)";
//                 break;
//             case "dungeonFloor":
//                 sceneFloor.style.backgroundImage= "url(./assets/dungeonFloor.png)";
//                 break;
//             case "desertSands":
//                 sceneFloor.style.backgroundImage= "url(./assets/desertFloor.png)";
//                 break;
//             case "bossFloor":
//                 sceneFloor.style.backgroundImage= "url(./assets/bossFloor.png)";
//                 break;
//             case "bossFloorGlowing":
//                 sceneFloor.style.backgroundImage= "url(./assets/bossFloorGlowing.png)";
//                 break;
//             case "stars":
//                 sceneFloor.style.backgroundImage= "url(./assets/stars.png)";
//                 break;
//         }
//     })
//     baseChanger.addEventListener('change', ()=>{
//         let currentSelection = baseChanger.value;
//         background="";
//         switch (currentSelection){
//             case "dirt":
//                 background= "url(./assets/dirt.png)";
//                 break;
//             case "grassyFields":
//                 background= "url(./assets/grass.png)";
//                 break;
//             case "magmaFloor":
//                 background= "url(./assets/magmaFloor.png)";
//                 break;
//             case "dungeonFloor":
//                 background= "url(./assets/dungeonFloor.png)";
//                 break;
//             case "desertSands":
//                 background= "url(./assets/desertFloor.png)";
//                 break;
//             case "bossFloor":
//                 background= "url(./assets/bossFloor.png)";
//                 break;
//             case "bossFloorGlowing":
//                 background= "url(./assets/bossFloorGlowing.png)";
//                 break;
//             case "stars":
//                 background= "url(./assets/stars.png)";
//                 break;
//         }
//         baseFaces.forEach(elements => {elements.style.backgroundImage=background});
//     })
//
//     backgroundSelection.addEventListener('change', ()=>{
//         let currentSelection = backgroundSelection.value;
//         background="";
//         switch (currentSelection){
//             case "grassyFields":
//                 background= "url(./assets/background.png)";
//                 break;
//             case "stars":
//                 background= "url(./assets/stars.png)";
//                 break;
//             case "graveyard":
//                 background= "url(./assets/graveyard.png)";
//                 break;
//             case "blackHole":
//                 background= "url(./assets/blackHole.png)";
//                 break;
//             case "desertSands":
//                 background= "url(./assets/desertFloor.png)";
//                 break;
//         }
//         centerBlock.style.backgroundImage=background;
//     })
//
// }



function beginGameButtonIsActive(){
    //move container to simulate player movement
    let playerOneContainer = document.getElementsByClassName("playerContainer")[0];
    let playerOne = document.getElementsByClassName("player")[0];

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
    // let cameraPosition=[10,800,280];
    // let boardPosition = [-10,800,385];
    let boardPosition = [0,0,0];
    let cameraPosition=[0,0,0];
    let playerCameraPosition = [0,0,0]
    // let cameraPosition=[10,-280,800];
    //Y val of 160 is first person
    //Z val of 40 is just under top of hat, considering character height is is fine for 1st person pov


    // controls the rotateX value of the board (used when changing cameraAngle) initialized to 60
    let overheadBoardAngle = 0;
    let boardCameraPosition = 0;
    let boardCameraPosition2 = 0;
    let firstPersonMode = true;

    let playerAngle = 0;
    let playerAngle2 = 0;
    let boardAngle = 0;

    let cameraAngle=0;

    setTimeout(()=>{
        // sceneContainer.style.transform=`rotateX(90deg) translate3d(${cameraPosition[0]*-1}px,${cameraPosition[1]}px,${cameraPosition[2]}px)`;
        // scene.style.transform=`rotateX(${overheadBoardAngle}deg) scale3d(1,1,1)`;
    },2000)

// player movement

    const keys = {};
    // const isNorthPlane = (cameraAngle === 0 || cameraAngle === 45 || cameraAngle === 315)
    // const isEastPlane = (cameraAngle === 225 || cameraAngle === 270 || cameraAngle === 315)
    // const isWestPlane = (cameraAngle === 45 || cameraAngle === 90 || cameraAngle === 135)
    // const isSouthPlane = (cameraAngle === 135 || cameraAngle === 180 || cameraAngle === 225)
    let isNorthPlane = (cameraAngle === 0 || cameraAngle === 45 || cameraAngle === 315)
    let isEastPlane = (cameraAngle === 225 || cameraAngle === 270 || cameraAngle === 315)
    let isWestPlane = (cameraAngle === 45 || cameraAngle === 90 || cameraAngle === 135)
    let isSouthPlane = (cameraAngle === 135 || cameraAngle === 180 || cameraAngle === 225)

    let isTreeLit = true;

    document.addEventListener("keydown",(event)=>{
        keys[event.key.toLowerCase()]=true;
    })

    document.addEventListener("keyup",(event)=>{
        keys[event.key.toLowerCase()]=false;
    })


    setInterval(()=>{
        if(keys["w"]){moveForward()}
        if(keys["a"]){moveLeft()}
        if(keys["s"]){moveBackward()}
        if(keys["d"]){moveRight()}
        if(keys["l"]){lightTree()}

        if(keys["arrowleft"]){cameraLeft()}
        if(keys["arrowright"]){cameraRight()}

        handleMovement();
    },100)

    function lightTree(){
        tree.style.filter=`brightness(${isTreeLit ? 0 : 1})`
        isTreeLit= !isTreeLit;
    }

    function moveForward(){
        playerOnePosition[2]+= (isNorthPlane ? 10 : isSouthPlane ? -10 :0);
        playerOnePosition[0]+= (isEastPlane ? 10 : isWestPlane ? -10 :0);
    }

    function moveLeft(){
        playerOnePosition[0]+= (isNorthPlane ? -10 : isSouthPlane ? 10 :0);
        playerOnePosition[2]+= (isEastPlane ? 10 : isWestPlane ? -10 :0);
    }
    function moveBackward(){
        playerOnePosition[2]+= (isNorthPlane ? -10 : isSouthPlane ? 10 :0);
        playerOnePosition[0]+= (isEastPlane ? -10 : isWestPlane ? 10 :0);
    }
    function moveRight(){
        playerOnePosition[0]+= (isNorthPlane ? 10 : isSouthPlane ? -10 :0);
        playerOnePosition[2]+= (isEastPlane ? -10 : isWestPlane ? 10 :0);
    }

    function cameraLeft(){
        playerAngle+=45;
        cameraAngle+=45
    }
    function cameraRight(){
        playerAngle-=45;
        cameraAngle-=45
    }

    function handleMovement(){
        isNorthPlane = (cameraAngle === 0 || cameraAngle === 45 || cameraAngle === 315)
        isEastPlane = (cameraAngle === 225 || cameraAngle === 270 || cameraAngle === 315)
        isWestPlane = (cameraAngle === 45 || cameraAngle === 90 || cameraAngle === 135)
        isSouthPlane = (cameraAngle === 135 || cameraAngle === 180 || cameraAngle === 225)
        cameraAngle = (cameraAngle + 360)%360

        //playerContainer moves the character
        playerOneContainer.style.transform=`rotateX(-90deg) translate3d(${playerOnePosition[0]}px,${playerOnePosition[1]*-1}px,${playerOnePosition[2]*-1}px)`
        //player rotates the play to face camera (only matters for third person)
        playerOne.style.transform=`rotateY(${playerAngle}deg)`
        //camera is purely for looking around (rotating board on axis of camera)
        camera.style.transform=`rotateZ(${playerAngle}deg) rotateX(${playerAngle2}deg)`
        //sceneContainer translation is to simulate movement in a 3d space
        sceneContainer.style.transform=`translate3d(${-1*playerOnePosition[0]}px,${playerOnePosition[2]}px,0px)`
    }

}

function customizationButtonIsActive(){
    perspectiveControl.addEventListener('input',(event)=>{
        centerBlockCenterCol.style.perspective=`${event.target.value}px`
        perspectiveValue.textContent=`${event.target.value}px`
    })

    rotateSceneControlYaxis.addEventListener('input', (event)=>{
        angleY = (event.target.value-180);
        tileContainer.style.transform=`rotateY(${angleY}deg) rotateX(${angleX}deg) scale3d(${scaleValue},${scaleValue},${scaleValue})`
        xAxisValue.textContent=`X Axis: ${angleY}deg`

    })
    rotateSceneControlXaxis.addEventListener('input', (event)=>{
        angleX = (event.target.value);
        tileContainer.style.transform=`rotateX(${angleX}deg) rotateY(${angleY}deg) scale3d(${scaleValue},${scaleValue},${scaleValue})`
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
        tileContainer.style.transform=`rotateX(${angleX}deg) rotateY(${angleY}deg) scale3d(${scaleValue},${scaleValue},${scaleValue})`
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
