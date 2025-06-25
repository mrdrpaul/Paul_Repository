import {useEffect, useRef} from "react";
import {handleKeyDown, handleKeyUp, initialize} from "./FreePlay.ts";
import "./freePlay.css"
import Warehouse from "./Models/Warehouse.tsx";
const FreePlay = () =>{

    const tileContainerReference = useRef<HTMLDivElement>(null)
    const cameraReference = useRef<HTMLDivElement>(null)
    const sceneContainerReference = useRef<HTMLDivElement>(null)
    const playerContainerReference = useRef<HTMLDivElement>(null)
    const playerReference = useRef<HTMLDivElement>(null)

    function handleKey(event){
        console.log(event)
    }


    useEffect(() => {
        if(sceneContainerReference && cameraReference && playerContainerReference && playerReference){
            initialize(sceneContainerReference.current, cameraReference.current, playerContainerReference.current, playerReference.current)
        }
    }, []);

    return (
        <div className="gameInterface"
             // onKeyDown={(event)=>{handleKeyDown(event.key.toLowerCase())}}
             // onKeyDown={(event)=>{handleKey(event.key.toLowerCase())}}
             // onKeyUp={(event)=>{handleKeyUp(event.key.toLowerCase())}}
        >
            <div className="tileContainer" ref={tileContainerReference}

            >
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
                            <Warehouse/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FreePlay