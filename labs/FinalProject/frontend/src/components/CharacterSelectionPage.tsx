import {use, useEffect, useRef, useState} from "react";
import axios from "axios";
import type {Character} from "../CharacterType.ts";
import {fetchCharacters} from "./CharacterService.ts";
import {changeCharacterImage} from "./characterSelection.ts";
import NewCharacterPane from "./newCharacterPane.tsx";

function CharacterSelectionPage({onStateChange, activeId}){
    const [characters,setCharacters] = useState<Character[]>([])
    const [currentAccountId,setCurrentAccountId] = useState(activeId) //hardcoded to account 2, need to change to mach id of account that is logged in
    // const [characterName, setCharacterName] = useState("")
    // const [characterClass, setCharacterClass] = useState("")
    // const [statPoints,setStatPoints] = useState(5)
    // const [health,setHealth] = useState(100)
    // const [mana,setMana] = useState(40)
    // const [attack,setAttack] = useState(5)
    // const [defense,setDefense] = useState(5)
    // const [lore, setLore] = useState("")

    const characterReference = useRef<HTMLDivElement>(null)
    // const characterLore Reference

    const handleCharacterSelection = () =>{
        onStateChange(true);
    }

    const displayCharacters = (event) => {
        console.log(activeId)
        fetchCharacters(currentAccountId).then(setCharacters)
        console.log(characters)
    }

    // const addCharacter = (event) =>{
    //     event.preventDefault();
    //     axios.post(`/api/newCharacter/${currentAccountId}`,{
    //         "characterName": characterName,
    //         "characterClass": characterClass,
    //         "health": health,
    //         "mana" : mana,
    //         "attack": attack,
    //         "defense" : defense,
    //         "level": 1
    //     })
    //         .then((r)=>{
    //             console.log(r)
    //         })
    //         .catch((err)=>{
    //             console.log(err)
    //         })
    // }

    // const handleNameChange = (event) =>{
    //     setCharacterName(event.target.value)
    // }
    //
    // const handleClassSelection = (event) =>{
    //     setCharacterClass(event.target.value)
    //     if(characterReference){
    //         changeCharacterImage(characterReference.current, event.target.value)
    //     }
    // }

    // function handleStatChange(event, changeType: string){
    //     if(statPoints === 0 && changeType === "add"){
    //         alert("No points remain")
    //     }else{
    //         setStatPoints((changeType==="add") ? statPoints-1 : statPoints+1)
    //         switch (event.target.value){
    //             case "health":
    //                 (changeType === "add") ? setHealth(health+10) : setHealth(health-10);
    //                 break;
    //             case "mana":
    //                 (changeType === "add") ? setMana(mana+10) : setMana(mana-10);
    //                 break;
    //             case "attack":
    //                 (changeType === "add") ? setAttack(attack+3) : setAttack(attack-3);
    //                 break;
    //             case "defense":
    //                 (changeType === "add") ? setDefense(defense+3) : setDefense(defense-3);
    //                 break;
    //         }
    //     }
    //
    // }


    useEffect(()=>{
        fetchCharacters(currentAccountId).then(setCharacters);
        setCurrentAccountId(activeId);
    })

    return (
        <div className={"characterSelectionPage"}>
            <div className={"characterList"}>
                {/*map all characters tied to account to a character card*/}
            </div>
            <div className={"characterView"}>
                <h1>Character Selection Page</h1>
                <button type={"button"} onClick={handleCharacterSelection}>Select Character</button>

                <button type={"button"} onClick={displayCharacters}>Display Character</button>
                <div ref={characterReference} className={"currentCharacterView"}></div>
            </div>
            {/*<div className={"characterStatAdjustment"}>*/}
            {/*    <div>*/}
            {/*        <input className={"characterNameInput"} name={"nameInput"} type={"text"} value={characterName} placeholder={"Character Name"} onChange={handleNameChange} maxLength={15}></input>*/}
            {/*        <select id="propSelection" aria-label="Prop Selection" onChange={handleClassSelection}>*/}
            {/*            <option selected disabled>Select a class</option>*/}
            {/*            <option value="wizard">Wizard</option>*/}
            {/*            <option value="barbarian" >Barbarian</option>*/}
            {/*            <option value="paladin">Paladin</option>*/}
            {/*            <option value="rogue">Rogue</option>*/}
            {/*            <option value="archer">Archer</option>*/}
            {/*            <option value="mouse">Mouse</option>*/}
            {/*            <option value="golem">Golem</option>*/}
            {/*            <option value="notPixelBarbarian">Not Pixel Barbarian</option>*/}
            {/*            <option value="priest">Priest</option>*/}
            {/*            <option value="bishop">Bishop</option>*/}
            {/*        </select>*/}

            {/*        <div>Level: 1</div>*/}
            {/*        <div>Stat Points Remaining: {statPoints}</div>*/}
            {/*        <div className={"statPointContainer"}>*/}

            {/*            <div style={{width:"75px", height:"50px", backgroundColor:"purple"}}>*/}
            {/*                <div style={{border:"4px solid white"}}>*/}
            {/*                    <div>Health</div>*/}
            {/*                    <div>{health}</div>*/}
            {/*                </div>*/}
            {/*                <button className={"statButton"} type={"button"} onClick={(event)=>handleStatChange(event,"add")} value={"health"}>+</button>*/}
            {/*                <button className={"statButton"} type={"button"} onClick={(event)=>handleStatChange(event,"minus")} value={"health"}>-</button>*/}
            {/*            </div>*/}

            {/*            <div style={{width:"75px", height:"50px", backgroundColor:"purple"}}>*/}
            {/*                <div style={{border:"4px solid white"}}>*/}
            {/*                    <div>Mana</div>*/}
            {/*                    <div>{mana}</div>*/}
            {/*                </div>*/}
            {/*                <button className={"statButton"} type={"button"} onClick={(event)=>handleStatChange(event,"add")} value={"mana"}>+</button>*/}
            {/*                <button className={"statButton"} type={"button"} onClick={(event)=>handleStatChange(event,"minus")} value={"mana"}>-</button>*/}
            {/*            </div>*/}

            {/*            <div style={{width:"75px", height:"50px", backgroundColor:"purple"}}>*/}
            {/*                <div style={{border:"4px solid white"}}>*/}
            {/*                    <div>Attack</div>*/}
            {/*                    <div>{attack}</div>*/}
            {/*                </div>*/}
            {/*                <button className={"statButton"} type={"button"} onClick={(event)=>handleStatChange(event,"add")} value={"attack"}>+</button>*/}
            {/*                <button className={"statButton"} type={"button"} onClick={(event)=>handleStatChange(event,"minus")} value={"attack"}>-</button>*/}
            {/*            </div>*/}

            {/*            <div style={{width:"75px", height:"50px", backgroundColor:"purple"}}>*/}
            {/*                <div style={{border:"4px solid white"}}>*/}
            {/*                    <div>Defense</div>*/}
            {/*                    <div>{defense}</div>*/}
            {/*                </div>*/}
            {/*                <button className={"statButton"} type={"button"} onClick={(event)=>handleStatChange(event,"add")} value={"defense"}>+</button>*/}
            {/*                <button className={"statButton"} type={"button"} onClick={(event)=>handleStatChange(event,"minus")} value={"defense"}>-</button>*/}
            {/*            </div>*/}

            {/*        </div>*/}
            {/*        <div className={"characterLore"}>{lore}</div>*/}
            {/*        <button type={"button"} onClick={addCharacter}>New Character</button>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <NewCharacterPane currentActiveId={currentAccountId}/>
        </div>

    )
}

export default CharacterSelectionPage