import './GamePage.css'
import MenuInterface from "./MenuInterface.tsx";
import GameInterface from "./GameInterface.tsx";
import ChatInterface from "./ChatInterface.tsx";
import {useState} from "react";
import Login from "./Login.tsx";
import CharacterSelectionPage from "./CharacterSelectionPage.tsx";
function GamePage(){
    const [openMenu,setOpenMenu] = useState(false);
    const [openChat,setOpenChat] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isCharacterSelected,setIsCharacterSelected] = useState(false);

    const toggleMenu = () =>{
        setOpenMenu((status)=> !status)
    }
    const toggleChat = () =>{
        setOpenChat((status)=> !status)
    }

    const handleLogin = (loginState: boolean) =>{
        setIsLoggedIn(loginState);
    }

    const handleCharacterSelected = (characterSelectedState: boolean)=>{
        setIsCharacterSelected(characterSelectedState);
    }

    if (isLoggedIn){
        if(isCharacterSelected){
            return(
                <div id="columnCenterBlock">
                    <GameInterface/>
                    <MenuInterface isOpen={openMenu}/>
                    <ChatInterface isOpen={openChat}/>
                    <div id={"gameBar"}>
                        <button onClick={toggleChat}>{openChat ? "Close Chat":"Open Chat"}</button>
                        <button onClick={toggleMenu}>{openMenu ? "Close Menu":"Open Menu"}</button>
                    </div>
                </div>
            )
        }else{
            return(
                <div>
                    <CharacterSelectionPage onStateChange={handleCharacterSelected}/>
                </div>
            )
        }
    }else{
        return(
            <Login onStateChange={handleLogin}/>
        )
    }
}

export default GamePage
