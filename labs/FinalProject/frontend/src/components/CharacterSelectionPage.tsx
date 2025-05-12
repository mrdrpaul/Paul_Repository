import {use, useEffect, useRef, useState} from "react";
import axios from "axios";
import type {Character} from "../CharacterType.ts";
import {fetchCharacters} from "./CharacterService.ts";
import {changeCharacterImage} from "./helper.ts";

function CharacterSelectionPage({onStateChange, activeId}){
    const [characters,setCharacters] = useState<Character[]>([])
    const [currentAccountId,setCurrentAccountId] = useState(activeId) //hardcoded to account 2, need to change to mach id of account that is logged in
    const [characterName, setCharacterName] = useState("")
    const [characterClass, setCharacterClass] = useState("")
    const [statPoints,setStatPoints] = useState(5)
    const [health,setHealth] = useState(100)
    const [mana,setMana] = useState(40)
    const [attack,setAttack] = useState(5)
    const [defense,setDefense] = useState(5)

    const characterReference = useRef<HTMLDivElement>(null)

    const handleCharacterSelection = () =>{
        onStateChange(true);
    }

    const displayCharacters = (event) => {
        console.log(activeId)
        fetchCharacters(currentAccountId).then(setCharacters)
        console.log(characters)
    }

    const addCharacter = (event) =>{
        event.preventDefault();
        axios.post(`/api/newCharacter/${currentAccountId}`,{
            "characterName": characterName,
            "characterClass": characterClass,
            "health": health,
            "mana" : mana,
            "attack": attack,
            "defense" : defense
        })
            .then((r)=>{
                console.log(r)
            })
            .catch((err)=>{
                console.log(err)
            })
    }

    const handleNameChange = (event) =>{
        setCharacterName(event.target.value)
    }



    // const handleClassSelection = (event: React.ChangeEvent<HTMLScriptElement>) =>{
    const handleClassSelection = (event) =>{
        setCharacterClass(event.target.value)
        if(characterReference){
            changeCharacterImage(characterReference.current, event.target.value)
        }

    }

    const handleStatChange = (event) =>{
        if(statPoints === 0){
            alert("No points remain")
        }else{
            switch (event.target.value){
                case "healthIncrease":
                    setHealth(health+10);
                    setStatPoints(statPoints-1);
                    break;
                case "healthDecrease":
                    setHealth(health-10);
                    setStatPoints(statPoints+1);
                    break;
                case "manaIncrease":
                    setMana(mana+10);
                    setStatPoints(statPoints-1);
                    break;
                case "manaDecrease":
                    setMana(mana-10);
                    setStatPoints(statPoints+1);
                    break;
                case "attackIncrease":
                    setAttack(attack+3);
                    setStatPoints(statPoints-1);
                    break;
                case "attackDecrease":
                    setAttack(attack-3);
                    setStatPoints(statPoints+1);
                    break;
                case "defenseIncrease":
                    setDefense(defense+3);
                    setStatPoints(statPoints-1);
                    break;
                case "defenseDecrease":
                    setDefense(defense-3);
                    setStatPoints(statPoints+1);
                    break;
            }
        }

    }


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
                <button type={"button"} onClick={addCharacter}>New Character</button>
                <button type={"button"} onClick={displayCharacters}>Display Character</button>
                <div ref={characterReference} className={"currentCharacterView"}></div>
            </div>
            <div className={"characterStatAdjustment"}>
                <div>
                    <input className={"characterNameInput"} name={"nameInput"} type={"text"} value={characterName} placeholder={"Character Name"} onChange={handleNameChange} maxLength={15}></input>
                    <select id="propSelection" aria-label="Prop Selection" onChange={handleClassSelection}>
                        <option value="wizard" defaultValue="wizard">Wizard</option>
                        <option value="barbarian" >Barbarian</option>
                        <option value="paladin">Paladin</option>
                        <option value="rogue">Rogue</option>
                        <option value="archer">Archer</option>
                        <option value="mouse">Mouse</option>
                        <option value="golem">Golem</option>
                        <option value="notPixelBarbarian">Not Pixel Barbarian</option>
                        <option value="priest">Priest</option>
                    </select>
                    <div>Stat Points Remaining: {statPoints}</div>
                    <div style={{display:"flex"}}>
                        <div style={{width:"75px", height:"50px", backgroundColor:"purple"}}>
                            <div style={{border:"4px solid white"}}>
                                <div>Health</div>
                                <div>{health}</div>
                            </div>
                            <button type={"button"} style={{width:"25px", height:"25px",padding:0,textAlign:"center"}} onClick={handleStatChange} value={"healthIncrease"}>+</button>
                            <button type={"button"} style={{width:"25px", height:"25px",padding:0,textAlign:"center"}} onClick={handleStatChange} value={"healthDecrease"}>-</button>
                        </div>
                        <div style={{width:"75px", height:"50px", backgroundColor:"purple"}}>
                            <div style={{border:"4px solid white"}}>
                                <div>Mana</div>
                                <div>{mana}</div>
                            </div>
                            <button type={"button"} style={{width:"25px", height:"25px",padding:0,textAlign:"center"}} onClick={handleStatChange} value={"manaIncrease"}>+</button>
                            <button type={"button"} style={{width:"25px", height:"25px",padding:0,textAlign:"center"}} onClick={handleStatChange} value={"manaDecrease"}>-</button>
                        </div>
                        <div style={{width:"75px", height:"50px", backgroundColor:"purple"}}>
                            <div style={{border:"4px solid white"}}>
                                <div>Attack</div>
                                <div>{attack}</div>
                            </div>
                            <button type={"button"} style={{width:"25px", height:"25px",padding:0,textAlign:"center"}} onClick={handleStatChange} value={"attackIncrease"}>+</button>
                            <button type={"button"} style={{width:"25px", height:"25px",padding:0,textAlign:"center"}} onClick={handleStatChange} value={"attackDecrease"}>-</button>
                        </div>
                        <div style={{width:"75px", height:"50px", backgroundColor:"purple"}}>
                            <div style={{border:"4px solid white"}}>
                                <div>Defense</div>
                                <div>{defense}</div>
                            </div>
                            <button type={"button"} style={{width:"25px", height:"25px",padding:0,textAlign:"center"}} onClick={handleStatChange} value={"defenseIncrease"}>+</button>
                            <button type={"button"} style={{width:"25px", height:"25px",padding:0,textAlign:"center"}} onClick={handleStatChange} value={"defenseDecrease"}>-</button>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default CharacterSelectionPage