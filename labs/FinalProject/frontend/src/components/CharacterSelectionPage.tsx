import {use, useEffect, useRef, useState} from "react";
import axios from "axios";
import type {Character} from "../CharacterType.ts";
import {fetchCharacters} from "./CharacterService.ts";
import {changeCharacterImage} from "./characterSelection.ts";
import NewCharacterPane from "./newCharacterPane.tsx";

function CharacterSelectionPage({onStateChange, activeId}){
    const [characters,setCharacters] = useState<Character[]>([])
    const [currentAccountId,setCurrentAccountId] = useState(activeId)


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
    const handleClassSelection = (value: String) =>{
        // setCharacterClass(event.target.value)
        if(characterReference){
            changeCharacterImage(characterReference.current, value)
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

                <button type={"button"} onClick={displayCharacters}>Display Character</button>
                <div ref={characterReference} className={"currentCharacterView"}></div>
            </div>
            {/*allows user to create new character CHANGE THIS TO POPULATE ONLY IF NEW CHARACTER IS SELECTED, OTHERWISE DISPLAY NOTHING OR SELECTED CHARACTER*/}
            <NewCharacterPane currentActiveId={currentAccountId} imageChange={handleClassSelection}/>
        </div>

    )
}

export default CharacterSelectionPage