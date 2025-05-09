import {useState} from "react";
import axios from "axios";
import {fetchAccounts} from "./AccountService.ts";
import type {Character} from "../CharacterType.ts";
import {fetchCharacters} from "./CharacterService.ts";

function CharacterSelectionPage({onStateChange}){
    const [characters,setCharacters] = useState<Character[]>([])
    const handleCharacterSelection = () =>{
        onStateChange(true);
    }

    const displayCharacters = (event) => {
        console.log(characters)
    }

    const addCharacter = () =>{
        event.preventDefault();
        axios.post("/api/newCharacter",{
            "characterName": "testGuy",
            "characterClass": "testClass",
            "health":100,
            "mana" : 40,
            "attack": 7,
            "defense" : 3,
            "account" : 5
        })
            .then((r)=>{
                console.log(r)
            })
            .catch((err)=>{
                console.log(err)
            })

        fetchCharacters().then(setCharacters)
    }

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