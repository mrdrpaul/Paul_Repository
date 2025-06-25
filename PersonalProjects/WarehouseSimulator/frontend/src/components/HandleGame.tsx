import "./handleGame.css"
const HandleGame = () =>{
    function handleKey(pressedKey){
        console.log("test")
        console.log(pressedKey)
    }
    // onClick={()=>console.log("clicked")}
    return(
        // <div
        //     onClick={()=>{handleKey("1")}}
        //     onKeyDown={(event)=>{handleKey(event.key.toLowerCase())}}
        //     onKeyUp={(event)=>{handleKeyUp(event.key.toLowerCase())}}
        // >

        <div className={"gameContainer"}
             onClick={()=>console.log("clicked")}
        >
            <ModeSelection/>
        </div>
    // </div>
)
}

import ModeSelection from "./ModeSelection.tsx";

export default HandleGame