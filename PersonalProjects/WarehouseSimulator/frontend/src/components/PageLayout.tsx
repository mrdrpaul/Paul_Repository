import "./pageLayout.css"
import HandleGame from "./HandleGame.tsx";
const PageLayout = () =>{


    return(
        <div className="bodyPage">
            <header></header>
            <div className="outerColumns" id="columnLeftBorder"></div>
            <div className="outerColumns" id="columnCenterBlock">
                    <HandleGame/>
            </div>
            <div className="outerColumns" id="columnRightBorder"></div>
            <footer></footer>
        </div>
    )
}

export default PageLayout