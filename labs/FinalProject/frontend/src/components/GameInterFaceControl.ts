// let playerOneContainer = document.getElementsByClassName("playerContainer")[0];
// let playerOne = document.getElementsByClassName("player")[0];

// let sceneContainer = document.getElementsByClassName("sceneContainer")[0]
let sceneContainer : HTMLElement;
let camera : HTMLElement;

export function initialize(sceneContainerReference:HTMLElement, cameraReference:HTMLElement){
    sceneContainer = sceneContainerReference;
    camera = cameraReference;
}

let playerOnePosition = [0,0,0];

let playerAngle = 0;
let playerAngle2 = 0;

let cameraAngle=0;

const keys = {};

let isNorthPlane = (cameraAngle === 0 || cameraAngle === 45 || cameraAngle === 315)
let isEastPlane = (cameraAngle === 225 || cameraAngle === 270 || cameraAngle === 315)
let isWestPlane = (cameraAngle === 45 || cameraAngle === 90 || cameraAngle === 135)
let isSouthPlane = (cameraAngle === 135 || cameraAngle === 180 || cameraAngle === 225)

// document.addEventListener("keydown",(event)=>{
//     keys[event.key.toLowerCase()]=true;
//     // keys[event.key]=true;
// })
//
// document.addEventListener("keyup",(event)=>{
//     keys[event.key.toLowerCase()]=false;
//     // keys[event.key]=false;
// })

export function handleKeyDown(letter : string){
    keys[letter] = true;
    // alert(letter + " was pressed!")
    // if(tileContainerReference){
    //     testMovement(tileContainerReference.current, event.key.toLowerCase())
    // }

}
export function handleKeyUp(letter: string){
    keys[letter]=false;
}

setInterval(()=>{
    if(keys["w"]){moveForward()}
    // if(keys["W"]){sprintForward()}
    if(keys["a"]){moveLeft()}
    if(keys["s"]){moveBackward()}
    if(keys["d"]){moveRight()}

    if(keys["arrowleft"]){cameraLeft()}
    if(keys["arrowright"]){cameraRight()}

    // handleMovement(sceneContainer);
    handleMovement();
},100)

function moveForward(){
    playerOnePosition[2]+= (isNorthPlane ? 10 : isSouthPlane ? -10 :0);
    playerOnePosition[0]+= (isEastPlane ? 10 : isWestPlane ? -10 :0);
}
// function sprintForward(){
//     playerOnePosition[2]+= (isNorthPlane ? 20 : isSouthPlane ? -20 :0);
//     playerOnePosition[0]+= (isEastPlane ? 20 : isWestPlane ? -20 :0);
// }

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
// export function handleMovement(sceneContainer: HTMLElement, camera: HTMLElement){
    isNorthPlane = (cameraAngle === 0 || cameraAngle === 45 || cameraAngle === 315)
    isEastPlane = (cameraAngle === 225 || cameraAngle === 270 || cameraAngle === 315)
    isWestPlane = (cameraAngle === 45 || cameraAngle === 90 || cameraAngle === 135)
    isSouthPlane = (cameraAngle === 135 || cameraAngle === 180 || cameraAngle === 225)
    cameraAngle = (cameraAngle + 360)%360

    //playerContainer moves the character
    // playerOneContainer.style.transform=`rotateX(-90deg) translate3d(${playerOnePosition[0]}px,${playerOnePosition[1]*-1}px,${playerOnePosition[2]*-1}px)`
    // golemEnemy.style.transform=`rotateX(-90deg) translate3d(${playerOnePosition[0]}px,10px,${playerOnePosition[2]*-1}px)`
    //player rotates the play to face camera (only matters for third person)
    // playerOne.style.transform=`rotateY(${playerAngle}deg)`
    //camera is purely for looking around (rotating board on axis of camera)
    camera.style.transform=`rotateZ(${playerAngle + 0.00001}deg) rotateX(${playerAngle2}deg)`
    //sceneContainer translation is to simulate movement in a 3d space
    sceneContainer.style.transform=`translate3d(${-1*playerOnePosition[0]}px,${playerOnePosition[2]}px,0px)`
}

export function testMovement(tileContainer: HTMLElement, keyPress: string){
    tileContainer.style.transform="rotateX(145deg) scale3d(1,1,1) translate3d(0px,1200px,385px)";

}