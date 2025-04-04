import {useState} from "react";
const Dice = ({roll}) =>{
    const [diceArraySelection,setDiceArraySelection] = useState("test")
    switch (roll){
        case 0:
            return (<i className="fa-solid fa-dice-one"></i>)
        case 1:
            return (<i className="fa-solid fa-dice-two"></i>)
        case 2:
            return (<i className="fa-solid fa-dice-three"></i>)
        case 3:
            return (<i className="fa-solid fa-dice-four"></i>)
        case 4:
            return (<i className="fa-solid fa-dice-five"></i>)
        case 5:
            return (<i className="fa-solid fa-dice-six"></i>)
    }
}

export default Dice