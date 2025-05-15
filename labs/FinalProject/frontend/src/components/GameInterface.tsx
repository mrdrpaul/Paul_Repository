import {useEffect, useRef} from "react";
import {handleKeyDown, handleKeyUp, initialize} from "./GameInterFaceControl"

const GameInterface = ({isChatOpen})=>{
    const keys = {};

    const tileContainerReference = useRef<HTMLDivElement>(null)
    const cameraReference = useRef<HTMLDivElement>(null)
    const sceneContainerReference = useRef<HTMLDivElement>(null)
    const playerContainerReference = useRef<HTMLDivElement>(null)
    const playerReference = useRef<HTMLDivElement>(null)



    useEffect(() => {
        function handleKeyDownScript(event){
            handleKeyDown(event.key.toLowerCase())
        }
        function handleKeyUpScript(event){
            handleKeyUp(event.key.toLowerCase())
        }
        document.addEventListener('keydown',handleKeyDownScript)
        document.addEventListener('keyup',handleKeyUpScript)


        if(isChatOpen){
            console.log("open Chat")
            document.removeEventListener('keydown',handleKeyDownScript)
            document.removeEventListener('keydown',handleKeyUpScript)
        }else{
            console.log("closed chat")
            document.addEventListener('keydown',handleKeyDownScript)
            document.addEventListener('keyup',handleKeyUpScript)
        }


        if(sceneContainerReference && cameraReference && playerContainerReference && playerReference){
            initialize(sceneContainerReference.current, cameraReference.current, playerContainerReference.current, playerReference.current)
        }

        return () =>{
            document.removeEventListener('keydown',handleKeyDownScript)
            document.removeEventListener('keydown',handleKeyUpScript)
        }

    }, [isChatOpen]);




    return (
        <div className="gameInterface" >
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


                            <div className="castle">

                                <div className="castleWall castleWallFront">
                                    <div className="castleWall castleWallFrontLeft"></div>
                                    <div className="castleWall castleWallFrontGate">
                                        <div className="torchLeft">
                                            <div className="torch torchFaceOne"></div>
                                            <div className="torch torchFaceTwo"></div>
                                        </div>
                                        <div className="torchRight">
                                            <div className="torch torchFaceOne"></div>
                                            <div className="torch torchFaceTwo"></div>
                                        </div>
                                    </div>
                                    <div className="castleWall castleWallFrontRight"></div>
                                </div>

                                <div className="castleWall castleWallLeft"></div>
                                <div className="castleWall castleWallRight"></div>
                                <div className="castleWall castleWallBack"></div>

                                <div className="town">

                                </div>

                                <div className="treeContainer">
                                    <div className="tree treeFaceOne"></div>
                                    <div className="tree treeFaceTwo"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default GameInterface