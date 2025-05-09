import './GamePage.css'
import GamePage from "./GamePage.tsx";

const PageLayout = () => {
    return (
        <div className="bodyPage">
            <header></header>
            <div className="outerColumns" id="columnLeftBorder"></div>
            <div className="outerColumns" id="columnCenterBlock">
                <GamePage/>
            </div>
            <div className="outerColumns" id="columnRightBorder"></div>
            <footer></footer>
        </div>
    )
}
export default PageLayout