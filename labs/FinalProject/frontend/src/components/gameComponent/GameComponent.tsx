import GameInterface from "./GameInterface.tsx";
import ActionBar from "./ActionBar.tsx";
import MenuInterface from "./MenuInterface.tsx";
import ChatInterface from "./ChatInterface.tsx";
import {useEffect, useState} from "react";
import {handleGameInterraction} from "./HandleKeyBindings.ts";
import {handleKeyUp} from "./GameInterFaceControl.ts";
import MobileOverlay from "../MobileOverlay.tsx";
import type {Character} from "../../CharacterType.ts";

// type CharacterProps = {
//     // activeCharacter : Character;
//     activeCharacter : string;
// }
const GameComponent = ( {activeCharacter}) =>{

    const [openMenu,setOpenMenu] = useState(false);
    const [openChat,setOpenChat] = useState(false);
    const [currentCharacter, setCurrentCharacter] = useState<Character>(activeCharacter)
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
                    // alert("settings triggered")
                    console.log(activeCharacter.characterName)
                    break;
                default:
                    handleGameInterraction(pressedKey)
                    break;
            }
        }


    }

    useEffect(() => {
        setCurrentCharacter(activeCharacter)
    }, []);
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
            <div className={"gameComponentContainer"}>
                {/*<div style={{backgroundColor:"white", height:"100%", width:"100%", display:"block"}}>test</div>*/}
                <GameInterface changeFocus={handleFocus} chatInterraction={toggleChat} menuInterraction={toggleMenu}/>
                <ActionBar/>
                <MenuInterface isOpen={openMenu}/>
                <ChatInterface characterName={activeCharacter.characterName} changeFocus={handleFocus} isOpen={openChat}/>
                {/*<MobileOverlay/>*/}
                {/*<div id={"gameBar"}>*/}
                {/*    <button onClick={toggleChat}>{openChat ? "Close Chat":"Open Chat"}</button>*/}
                {/*    <button onClick={toggleMenu}>{openMenu ? "Close Menu":"Open Menu"}</button>*/}
                {/*</div>*/}

            </div>

        </div>
    )

}

export default GameComponent