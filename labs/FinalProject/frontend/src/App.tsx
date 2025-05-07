import './App.css'
import MenuInterface from "./components/MenuInterface.tsx";
import GameInterface from "./components/GameInterface.tsx";
import ChatInterface from "./components/ChatInterface.tsx";
import * as JsFunctions from './scripts.tsx'
import {useState} from "react";
function App(){
    const [openMenu,setOpenMenu] = useState(true);
    const [openChat,setOpenChat] = useState(true);
    const [chatText,setChatText] = useState("Hello World");

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
                <GameInterface/>
                <MenuInterface isOpen={openMenu}/>
                <ChatInterface isOpen={openChat} chatText={chatText}/>
            </div>

                {/*<h1>Hello World</h1>*/}
                {/*<div className="tileContainer">*/}
                {/*    <div className="camera">*/}
                {/*        <div className="scene"></div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className="outerColumns" id="columnRightBorder"></div>
                <footer>
                    <button onClick={toggleChat}>{openChat ? "Close Chat":"OpenChat"}</button>
                    <button onClick={toggleMenu}>{openMenu ? "Close Menu":"Open Menu"}</button>
                </footer>
            </div>
            )

            }

            export default App
