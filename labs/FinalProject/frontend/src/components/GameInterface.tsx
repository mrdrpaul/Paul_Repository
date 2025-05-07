function GameInterface(){
    return (
        <div className="gameInterface">
            Game Interface
            <div className="tileContainer">
                <div className="camera">
                    <div className="sceneContainer">
                        <div className="scene">

                            <div className="playerContainer">
                                <div className="player"></div>
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