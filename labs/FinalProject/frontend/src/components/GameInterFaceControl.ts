// let playerOneContainer = document.getElementsByClassName("playerContainer")[0];
// let playerOne = document.getElementsByClassName("player")[0];

// let sceneContainer = document.getElementsByClassName("sceneContainer")[0]
let sceneContainer : HTMLElement;
let camera : HTMLElement;
let playerContainer : HTMLElement;
let player : HTMLElement;

export function initialize(sceneContainerReference:HTMLElement, cameraReference:HTMLElement, playerContainerReference:HTMLElement, playerReference: HTMLElement){
    sceneContainer = sceneContainerReference;
    camera = cameraReference;
    playerContainer = playerContainerReference;
    player = playerReference;
}

let playerOnePosition = [0,0,0];

let playerAngle = 0;
let playerAngle2 = 0;

let cameraAngle=0;

const keys = {};

let isNorthPlane : boolean
let isEastPlane : boolean
let isWestPlane : boolean
let isSouthPlane : boolean

let isMoving = false;

export function handleKeyDown(letter : string | number){
    keys[letter] = true;
    // isMoving = true;

}
export function handleKeyUp(letter: string | number){
    keys[letter]=false;
    // isMoving = false;
}

setInterval(()=>{
    if(keys["w"]){moveForward()}
    if(keys["a"]){moveLeft()}
    if(keys["s"]){moveBackward()}
    if(keys["d"]){moveRight()}

    if(keys["arrowleft"]){cameraLeft()}
    if(keys["arrowright"]){cameraRight()}

    handleMovement();
    // handleHandMovement(isMoving)
},100)

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
    playerContainer.style.transform=`rotateX(-90deg) translate3d(${playerOnePosition[0]}px,${playerOnePosition[1]*-1}px,${playerOnePosition[2]*-1}px)`
    // golemEnemy.style.transform=`rotateX(-90deg) translate3d(${playerOnePosition[0]}px,10px,${playerOnePosition[2]*-1}px)`
    //player rotates the play to face camera (only matters for third person)
    player.style.transform=`rotateY(${playerAngle}deg)`
    //camera is purely for looking around (rotating board on axis of camera)
    camera.style.transform=`rotateZ(${playerAngle + 0.00001}deg) rotateX(${playerAngle2}deg)`
    //sceneContainer translation is to simulate movement in a 3d space
    sceneContainer.style.transform=`translate3d(${-1*playerOnePosition[0]}px,${playerOnePosition[2]}px,0px)`
}

function handleHandMovement(movement: boolean){
    if(movement){

    }
}