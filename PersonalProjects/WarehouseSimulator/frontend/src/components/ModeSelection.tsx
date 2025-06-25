import "./modeSelection.css"
import {useState} from "react";
import Story from "./Story.tsx";
import FreePlay from "./FreePlay.tsx";
const ModeSelection = () =>{
    const [gameMode, setGameMode] = useState("")

        switch (gameMode){
            case "story":
                return(<Story/>)
            case "freePlay":
                return(<FreePlay/>)
            default:
                return(
                    <div
                        onClick={()=>console.log("clicked")}>
                        <button value={"story"} onClick={() => setGameMode("story")}>Story</button>
                        <button value={"freePlay"} onClick={() => setGameMode("freePlay")}>Free Play</button>
                    </div>
                )
        }
}
export default ModeSelection