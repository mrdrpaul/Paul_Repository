import Dice from "./components/Dice.jsx";
import {randomNumber} from "./Util/helper.js";
import {useState, useEffect} from "react";

const App = ()=>{
    const [diceRollOne,setDiceRollOne] = useState();
    const [diceRollTwo,setDiceRollTwo] = useState();
    const handleClick = () => {
        setDiceRollOne(randomNumber());
        setDiceRollTwo(randomNumber());
    }

    useEffect(()=>{
        setDiceRollOne(0)
        setDiceRollTwo(0)
    },[])
    return (
        <div id="diceBodyBackground" style={{textAlign:"center",position:"absolute",width:"100%",top:"20%"}}>
            <div id="diceBody" style={{textAlign:"center",width:"100%"}}>
                <h1>Dead Man's Dice</h1>
                <div style={{fontSize:"250px"}}>
                    <Dice roll={diceRollOne}/>
                    <Dice roll={diceRollTwo}/>
                </div>
                <button onClick={handleClick}>Roll Dice</button>
                <div style={{fontSize:"50px"}}>Yer' total be {diceRollOne + diceRollTwo + 2} matey</div>
            </div>
        </div>
    )
}
export default App