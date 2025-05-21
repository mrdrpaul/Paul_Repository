import "./castle.css"

const Castle = () =>{
    return(
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

    )
}

export default Castle