import {handleKeyDown} from "./GameInterFaceControl.ts";
import {changeActiveActionBarSlot} from "./ActionBarHandler.ts";
// import {toggleMenu} from "./GameComponent.tsx"

let chatInterface : HTMLElement;

export function initializeChat(chatInterfaceReference:HTMLElement){
    chatInterface = chatInterfaceReference;
}
export function handleGameInterraction(pressedKey){
    if(pressedKey >= 1 && pressedKey <= 8){
        handleActionBarChange(pressedKey)

    }
    if(pressedKey === "w" || pressedKey === "a" || pressedKey === "s" || pressedKey === "d" || pressedKey === "arrowleft" || pressedKey === "arrowright"){
        handleMovement(pressedKey)
    }
    if(pressedKey ==="i"){
        // toggleMenu()
    }
    if(pressedKey === "c"){
        toggleChat()
    }

}


function handleActionBarChange(pressedKey){
    // alert("handling action bar change")
    changeActiveActionBarSlot(pressedKey-1)
}
function handleMovement(pressedKey){
    handleKeyDown(pressedKey)
}
function toggleMenu(){
    alert("menu triggered")
}
function toggleChat(){
    alert("chat triggered")
}
