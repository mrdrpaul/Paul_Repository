import GameInterface from "./GameInterface.tsx";
import ActionBar from "./ActionBar.tsx";
import MenuInterface from "./MenuInterface.tsx";
import ChatInterface from "./ChatInterface.tsx";
import {useState} from "react";
import {handleGameInterraction} from "./HandleKeyBindings.ts";
import {handleKeyUp} from "./GameInterFaceControl.ts";

const GameComponent = () =>{

    const [openMenu,setOpenMenu] = useState(false);
    const [openChat,setOpenChat] = useState(false);

    const [currentFocus, setCurrentFocus] = useState("Game");

    const handleKeyDown = (pressedKey) =>{
        if (currentFocus === "game"){
            switch(pressedKey){
                case "i":
                    toggleMenu()
                    break;
                case "c":
                    toggleChat()
                    break;
                case "escape":
                    alert("settings triggered")
                    break;
                default:
                    handleGameInterraction(pressedKey)
                    break;
            }
        }


    }
    const toggleMenu = () =>{
        setOpenMenu((status)=> !status)
    }
    const toggleChat = () =>{
        setOpenChat((status)=> !status)
    }

    const handleFocus = (focus: string) => {
        setCurrentFocus(focus)
    }

    return (
        <div id="columnCenterBlock"
             onKeyDown={(event)=>{handleKeyDown(event.key.toLowerCase())}}
             onKeyUp={(event)=>{handleKeyUp(event.key.toLowerCase())}}
        >
            <GameInterface changeFocus={handleFocus} chatInterraction={toggleChat} menuInterraction={toggleMenu}/>
            <ActionBar/>
            <MenuInterface isOpen={openMenu}/>
            <ChatInterface changeFocus={handleFocus} isOpen={openChat}/>
            {/*<div id={"gameBar"}>*/}
            {/*    <button onClick={toggleChat}>{openChat ? "Close Chat":"Open Chat"}</button>*/}
            {/*    <button onClick={toggleMenu}>{openMenu ? "Close Menu":"Open Menu"}</button>*/}
            {/*</div>*/}
        </div>
    )

}

export default GameComponent