import {useEffect, useRef} from "react";
import {handleKeyDown, handleKeyUp, initialize} from "./GameInterFaceControl.ts"
import {changeActiveActionBarSlot} from "./ActionBarHandler.ts";
import Castle from "./models/castles/castle.tsx";
// import {handlePressedKeys} from "./gameComponent/HandleKeyBindings.ts";

const GameInterface = ({changeFocus})=>{

    const tileContainerReference = useRef<HTMLDivElement>(null)
    const cameraReference = useRef<HTMLDivElement>(null)
    const sceneContainerReference = useRef<HTMLDivElement>(null)
    const playerContainerReference = useRef<HTMLDivElement>(null)
    const playerReference = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if(sceneContainerReference && cameraReference && playerContainerReference && playerReference){
            initialize(sceneContainerReference.current, cameraReference.current, playerContainerReference.current, playerReference.current)
        }
    }, []);

    const handleFocusChange = () =>{
        changeFocus("game")
    }

    return (
         <div className="gameInterface"
              tabIndex={0}
              onClick={handleFocusChange}
        >
            <div className="tileContainer" ref={tileContainerReference}>
                <div ref={cameraReference} className="camera">
                    <div ref={sceneContainerReference} className="sceneContainer">
                        <div className="scene">

                            <div ref={playerContainerReference} className="playerContainer">
                                <div ref={playerReference} className="player">
                                    <div className={"handItem"}></div>
                                </div>
                            </div>

                            <div className="sceneFloor"></div>
                            <div className="baseFaces baseFront"></div>
                            <div className="baseFaces baseBack"></div>
                            <div className="baseFaces baseLeft"></div>
                            <div className="baseFaces baseRight"></div>
                            <div className="baseFaces baseFloor"></div>

                            <div className="golemEnemy">
                            </div>
                            <Castle/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default GameInterface