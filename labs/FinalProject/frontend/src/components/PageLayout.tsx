import './GamePage.css'
import GamePage from "./GamePage.tsx";
import {useState} from "react";

const PageLayout = () => {

    const [openMenu,setOpenMenu] = useState(false);
    const [openChat,setOpenChat] = useState(false);
    const [chatText,setChatText] = useState("");
    const [gameStarted, setGameStarted] = useState(false)

    const toggleMenu = () =>{
        setOpenMenu((status)=> !status)
    }
    const toggleChat = () =>{
        setOpenChat((status)=> !status)
    }

    const handleisGameRunning = (gameRunningState) =>{
        setGameStarted(gameRunningState);
    }
    function isGameRunning(){
        if(gameStarted){
            return(
                <footer>
                    <button onClick={toggleChat}>{openChat ? "Close Chat":"Open Chat"}</button>
                    <button onClick={toggleMenu}>{openMenu ? "Close Menu":"Open Menu"}</button>
                </footer>
            )
        }else{
            return(
                <footer></footer>
            )
        }
    }
    return (
        <div className="bodyPage">
            <header></header>
            <div className="outerColumns" id="columnLeftBorder"></div>
            <div className="outerColumns" id="columnCenterBlock">
                <GamePage onStateChange={handleisGameRunning}/>
            </div>
            <div className="outerColumns" id="columnRightBorder"></div>
            {isGameRunning()}
        </div>
    )
}
export default PageLayout