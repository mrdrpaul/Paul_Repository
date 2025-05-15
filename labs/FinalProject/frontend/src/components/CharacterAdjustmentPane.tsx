import type {Character} from "../CharacterType"
import {useEffect, useState} from "react";
import {loreChanger} from "./characterSelection.ts";
import axios from "axios";
import {fetchCharacters} from "./CharacterService.ts";

type CharacterProps = {
    character : Character;
    imageChange : string;
    isCharacterSelected: boolean;
}


// const CharacterAdjustmentPane = ({character}: CharacterProps) =>{
const CharacterAdjustmentPane = ({character, imageChange, isCharacterSelected} :CharacterProps) =>{
    const [currentCharacterId,setCurrentCharacterId] = useState<number>()

    const [characterName, setCharacterName] = useState("")
    const [characterClass, setCharacterClass] = useState("")
    const [statPoints,setStatPoints] = useState<number>()
    const [health,setHealth] = useState<number>()
    const [mana,setMana] = useState<number>()
    const [attack,setAttack] = useState<number>()
    const [defense,setDefense] = useState<number>()
    const [lore, setLore] = useState("")

    const updateCharacter = (characterId: number) =>{
        const path = ("/api/character/"+characterId)
        console.log(characterId)
        axios.patch(`${path}`,{
            "health": health,
            "mana" : mana,
            "attack": attack,
            "defense" : defense,
            "statPoints":statPoints
        })
    }



    useEffect(()=>{
        setCurrentCharacterId(character.id)
        setCharacterName(character.characterName)
        setCharacterClass(character.characterClass)
        setStatPoints(character.statPoints)
        setHealth(character.health)
        setMana(character.mana)
        setAttack(character.attack)
        setDefense(character.defense)
        setLore(loreChanger(character.characterClass))
        imageChange(character.characterClass)
    }, [character])
    function handleStatChange(event, changeType: string){
        if(statPoints === 0 && changeType === "add"){
            alert("No points remain")
        }else{
            setStatPoints((changeType==="add") ? statPoints-1 : statPoints+1)
            switch (event.target.value){
                case "health":
                    (changeType === "add") ? setHealth(health+10) : setHealth(health-10) ;
                    break;
                case "mana":
                    (changeType === "add") ? setMana(mana+10) : setMana(mana-10);
                    break;
                case "attack":
                    (changeType === "add") ? setAttack(attack+3) : setAttack(attack-3);
                    break;
                case "defense":
                    (changeType === "add") ? setDefense(defense+3) : setDefense(defense-3);
                    break;
            }
        }

    }

    const playGame = ()=>{
        isCharacterSelected(true)
    }

    return(
        <div className={"characterStatAdjustment"}>
            <div>
                <div>Level: 1</div>
            <div>Stat Points Remaining: {statPoints}</div>
            <div className={"statPointContainer"}>

                <div className={"pointContainer"}>
                    <div style={{border:"4px solid white"}}>
                        <div>Health</div>
                        <div>{health}</div>
                    </div>
                    <button className={"statButton"} type={"button"} onClick={(event)=>handleStatChange(event,"add")} value={"health"}>+</button>
                    <button className={"statButton"} type={"button"} onClick={(event)=>handleStatChange(event,"minus")} value={"health"}>-</button>
                </div>

                <div className={"pointContainer"}>
                    <div style={{border:"4px solid white"}}>
                        <div>Mana</div>
                        <div>{mana}</div>
                    </div>
                    <button className={"statButton"} type={"button"} onClick={(event)=>handleStatChange(event,"add")} value={"mana"}>+</button>
                    <button className={"statButton"} type={"button"} onClick={(event)=>handleStatChange(event,"minus")} value={"mana"}>-</button>
                </div>

                <div className={"pointContainer"}>
                    <div style={{border:"4px solid white"}}>
                        <div>Attack</div>
                        <div>{attack}</div>
                    </div>
                    <button className={"statButton"} type={"button"} onClick={(event)=>handleStatChange(event,"add")} value={"attack"}>+</button>
                    <button className={"statButton"} type={"button"} onClick={(event)=>handleStatChange(event,"minus")} value={"attack"}>-</button>
                </div>

                <div className={"pointContainer"}>
                    <div style={{border:"4px solid white"}}>
                        <div>Defense</div>
                        <div>{defense}</div>
                    </div>
                    <button className={"statButton"} type={"button"} onClick={(event)=>handleStatChange(event,"add")} value={"defense"}>+</button>
                    <button className={"statButton"} type={"button"} onClick={(event)=>handleStatChange(event,"minus")} value={"defense"}>-</button>
                </div>

            </div>
            <div className={"characterLore"}>{lore}</div>
            <button type={"button"} onClick={() => {updateCharacter(currentCharacterId)}}>Update Character</button>
            <button type={"button"} onClick={playGame}>Enter Game</button>
        </div>
        </div>
    )

}

export default CharacterAdjustmentPane