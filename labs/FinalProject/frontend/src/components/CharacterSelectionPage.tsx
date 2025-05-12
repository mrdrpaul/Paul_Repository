import {useEffect, useRef, useState} from "react";
import axios from "axios";
import type {Character} from "../CharacterType.ts";
import {fetchCharacters} from "./CharacterService.ts";
import {changeCharacterImage} from "./helper.ts";

function CharacterSelectionPage({onStateChange}){
    const [characters,setCharacters] = useState<Character[]>([])
    const [characterName, setCharacterName] = useState("")
    const [currentAccountId,setCurrentAccountId] = useState(2)

    const characterReference = useRef<HTMLDivElement>(null)

    const handleCharacterSelection = () =>{
        onStateChange(true);
    }

    const displayCharacters = (event) => {
        fetchCharacters(currentAccountId).then(setCharacters)
        console.log(characters)
    }

    const addCharacter = (event) =>{
        event.preventDefault();
        axios.post(`/api/newCharacter/${currentAccountId}`,{
            "characterName": "testGuy",
            "characterClass": "testClass",
            "health":100,
            "mana" : 40,
            "attack": 7,
            "defense" : 3
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
        const selectedClass = event.target.value;
        if(characterReference){
            changeCharacterImage(characterReference.current, selectedClass)
        }

    }


    useEffect(()=>{
        fetchCharacters(currentAccountId).then(setCharacters)
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
                        <option value="wizard" selected>Wizard</option>
                        <option value="barbarian" >Barbarian</option>
                        <option value="paladin">Paladin</option>
                        <option value="rogue">Rogue</option>
                        <option value="archer">Archer</option>
                    </select>
                </div>
            </div>


        </div>
    )
}

export default CharacterSelectionPage