import './App.css'
import MenuInterface from "./components/MenuInterface.tsx";
import GameInterface from "./components/GameInterface.tsx";
import ChatInterface from "./components/ChatInterface.tsx";
import {useState} from "react";
import Login from "./components/Login.tsx";
function App(){
    const [openMenu,setOpenMenu] = useState(false);
    const [openChat,setOpenChat] = useState(false);
    const [chatText,setChatText] = useState("");

    const toggleMenu = () =>{
        setOpenMenu((status)=> !status)
    }
    const toggleChat = () =>{
        setOpenChat((status)=> !status)
    }

    return(
        <div className="bodyPage">
            <header>header</header>
            <div className="outerColumns" id="columnLeftBorder"></div>
            <div className="outerColumns" id="columnCenterBlock">
                <Login/>
                <GameInterface/>
                <MenuInterface isOpen={openMenu}/>
                <ChatInterface isOpen={openChat}/>
            </div>
                <div className="outerColumns" id="columnRightBorder"></div>
                <footer>
                    <button onClick={toggleChat}>{openChat ? "Close Chat":"Open Chat"}</button>
                    <button onClick={toggleMenu}>{openMenu ? "Close Menu":"Open Menu"}</button>
                </footer>
            </div>
            )

            }

            export default App
