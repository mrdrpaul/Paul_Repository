let menuContainer = document.getElementsByClassName("menuContainer")[0];
let menuDrag = document.getElementById("menuDrag");
let columnLeftBorder = document.getElementById("columnLeftBorder");
let scene = document.getElementsByClassName("scene")[0];

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

menuDrag.addEventListener('input', (event) =>{
    let percentage= event.target.value;
    let startingPos=200;
    let newPos=startingPos - percentage
    menuContainer.style.right =`${newPos}%`;
    // centerBlocksubGrid.style.width =`${percentage}px`;
    if(percentage==0){
        columnLeftBorder.style.opacity=0.7;
    }else{
        columnLeftBorder.style.opacity=1;
    }
})
let angleY=0;
let angleX=90;
let scaleValue = 1;


perspectiveControl.addEventListener('input',(event)=>{
    centerBlockCenterCol.style.perspective=`${event.target.value}px`
})

rotateSceneControlYaxis.addEventListener('input', (event)=>{
    angleY = (event.target.value-180);
    scene.style.transform=`rotateY(${angleY}deg) rotateX(${angleX}deg) scale3d(${scaleValue},${scaleValue},${scaleValue})`
})
rotateSceneControlXaxis.addEventListener('input', (event)=>{
    angleX = (event.target.value);
    scene.style.transform=`rotateX(${angleX}deg) rotateY(${angleY}deg) scale3d(${scaleValue},${scaleValue},${scaleValue})`
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
})

newUserButton.addEventListener('click', ()=>{
    alert("new user clicked");
})
previousUserButton.addEventListener('click', ()=>{
    scene.style.display="block";
    alert("previous user clicked");
    scene.style.width="300px";
    setTimeout(()=>{
        scene.style.transform="rotateX(75deg)"
        menuContainer.style.width ="200px";
        columnLeftBorder.style.opacity=1;

    },600)
})