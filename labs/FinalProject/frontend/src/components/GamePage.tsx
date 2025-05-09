import './GamePage.css'
import MenuInterface from "./MenuInterface.tsx";
import GameInterface from "./GameInterface.tsx";
import ChatInterface from "./ChatInterface.tsx";
import {useState} from "react";
import Login from "./Login.tsx";
import CharacterSelectionPage from "./CharacterSelectionPage.tsx";
function GamePage({onStateChange}){
    const [openMenu,setOpenMenu] = useState(false);
    const [openChat,setOpenChat] = useState(false);
    const [chatText,setChatText] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isCharacterSelected,setIsCharacterSelected] = useState(false);

    const toggleMenu = () =>{
        setOpenMenu((status)=> !status)
    }
    const toggleChat = () =>{
        setOpenChat((status)=> !status)
    }

    const handleLogin = (loginState) =>{
        setIsLoggedIn(loginState);
    }

    const handleCharacterSelection = () =>{
        onStateChange(true);
    }

    if (isLoggedIn === true){
        if(isCharacterSelected === true){
            return(
                <div>
                    <GameInterface/>
                    <MenuInterface isOpen={openMenu}/>
                    <ChatInterface isOpen={openChat}/>
                </div>
            )
        }else{
            return(
                <div>
                    <CharacterSelectionPage/>
                    {handleCharacterSelection}
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
