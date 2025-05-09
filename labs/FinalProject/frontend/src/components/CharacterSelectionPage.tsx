import {useEffect, useState} from "react";
import axios from "axios";
import type {Character} from "../CharacterType.ts";
import {fetchCharacters} from "./CharacterService.ts";

function CharacterSelectionPage({onStateChange}){
    const [characters,setCharacters] = useState<Character[]>([])
    const [currentAccountId,setCurrentAccountId] = useState(2)
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

    useEffect(()=>{
        fetchCharacters(currentAccountId).then(setCharacters)
    })

    return (
        <div className={"characterSelectionPage"}>
            <h1>Character Selection Page</h1>
            <button type={"button"} onClick={handleCharacterSelection}>Select Character</button>
            <button type={"button"} onClick={addCharacter}>New Character</button>
            <button type={"button"} onClick={displayCharacters}>Display Character</button>
        </div>
    )
}

export default CharacterSelectionPage