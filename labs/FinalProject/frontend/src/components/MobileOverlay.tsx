import "./mobileOverlay.css"
import {handleGameInterraction} from "./gameComponent/HandleKeyBindings.ts";
import {handleKeyUp} from "./gameComponent/GameInterFaceControl.ts";
const MobileOverlay = () =>{
    function handleClickDown(selection: string){
        handleGameInterraction(selection);
    }
    function handleClickUp(selection:string){
        handleKeyUp(selection)
    }
    return(
        <div className={"mobileOverlay"}>
            {/*<div className={"mobileMovement mobileCameraLeft"} onClick={()=>{handleClick("cameraLeft")}}></div>*/}
            <div className={"mobileMovement mobileCameraLeft"} onTouchStart={()=>{handleClickDown("arrowleft")}} onTouchEnd={()=>{handleClickUp("arrowleft")}}></div>
            <div className={"mobileMovement mobileForward"} onTouchStart={()=>{handleClickDown("w")}} onTouchEnd={()=>{handleClickUp("w")}}></div>
            <div className={"mobileMovement mobileCameraRight"} onTouchStart={()=>{handleClickDown("arrowright")}} onTouchEnd={()=>{handleClickUp("arrowright")}}></div>
            <div className={"mobileMovement mobileLeft"} onTouchStart={()=>{handleClickDown("a")}} onTouchEnd={()=>{handleClickUp("a")}}></div>
            <div className={"mobileMovement mobileBackward"} onTouchStart={()=>{handleClickDown("s")}} onTouchEnd={()=>{handleClickUp("s")}}></div>
            <div className={"mobileMovement mobileRight"} onTouchStart={()=>{handleClickDown("d")}} onTouchEnd={()=>{handleClickUp("d")}}></div>

            {/*<div className={"mobileMovement mobileForward"} onClick={()=>{handleClick("moveForward")}}></div>*/}
            {/*<div className={"mobileMovement mobileCameraRight"} onClick={()=>{handleClick("cameraRight")}}></div>*/}
            {/*<div className={"mobileMovement mobileBackward"} onClick={()=>{handleClick("moveBackward")}}></div>*/}
            {/*<div className={"mobileMovement mobileLeft"} onClick={()=>{handleClick("moveLeft")}}></div>*/}
            {/*<div className={"mobileMovement mobileRight"} onClick={()=>{handleClick("moveRight")}}></div>*/}


        </div>
    )
}

export default MobileOverlay