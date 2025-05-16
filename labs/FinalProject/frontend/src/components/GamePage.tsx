import './GamePage.css'
import MenuInterface from "./MenuInterface.tsx";
import GameInterface from "./GameInterface.tsx";
import ChatInterface from "./ChatInterface.tsx";
import {useState} from "react";
import Login from "./Login.tsx";
import CharacterSelectionPage from "./CharacterSelectionPage.tsx";
import ActionBar from "./ActionBar.tsx";
function GamePage(){
    const [openMenu,setOpenMenu] = useState(false);
    const [openChat,setOpenChat] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isCharacterSelected,setIsCharacterSelected] = useState(false);
    const [activeAccountId, setActiveAccountId] = useState(0);

    const toggleMenu = () =>{
        setOpenMenu((status)=> !status)
    }
    const toggleChat = () =>{
        setOpenChat((status)=> !status)
    }

    const handleLogin = (loginState: boolean, activeId:number) =>{
        setActiveAccountId(activeId);

        setIsLoggedIn(loginState);
    }
    const handleActiveId = (activeId:number) =>{
        setActiveAccountId(activeId);
        console.log(activeId)

    }


    const handleCharacterSelected = (characterSelectedState: boolean)=>{
        setIsCharacterSelected(characterSelectedState);
    }

    if (isLoggedIn){
        if(isCharacterSelected){
            return(
                <div id="columnCenterBlock">
                    <GameInterface isChatOpen={openChat}/>
                    <ActionBar/>
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
                    <CharacterSelectionPage onStateChange={handleCharacterSelected} activeId={activeAccountId}/>
                </div>
            )
        }
    }else{
        return(
            <Login onState2Change={handleActiveId} onStateChange={handleLogin} />
        )
    }
}

export default GamePage
