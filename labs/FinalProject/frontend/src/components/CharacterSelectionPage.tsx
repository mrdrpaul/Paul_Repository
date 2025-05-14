import {use, useEffect, useRef, useState} from "react";
import axios from "axios";
import type {Character} from "../CharacterType.ts";
import {fetchCharacters} from "./CharacterService.ts";
import {changeCharacterImage} from "./characterSelection.ts";
import NewCharacterPane from "./NewCharacterPane.tsx";
import CharacterSelectionPanels from "./CharacterSelectionPanels.tsx";
import CharacterAdjustmentPane from "./CharacterAdjustmentPane.tsx";

function CharacterSelectionPage({onStateChange, activeId}){
    const [characters,setCharacters] = useState<Character[]>([])
    const [currentAccountId,setCurrentAccountId] = useState(activeId)
    const [isCharacterSelected, setIsCharacterSelected] = useState(false)
    const [isNewCharacter,setIsNewCharacter] = useState(false)

    const [selectedCharacter, setSelectedCharacter] = useState<Character>()


    const characterReference = useRef<HTMLDivElement>(null)
    // const characterLore Reference

    const handleCharacterSelection = (event, character : Character) =>{
        setSelectedCharacter(character)
        setIsCharacterSelected(true)
        console.log(character)
        console.log(true)

    }

    const displayCharacters = (event) => {
        console.log(activeId)
        fetchCharacters(currentAccountId).then(setCharacters)
        console.log(characters)
    }
    const handleImageChange = (value: String) =>{
        // setCharacterClass(event.target.value)
        if(characterReference){
            changeCharacterImage(characterReference.current, value)
        }
    }

    const handleCharacterCreationAndAdjustment = () =>{
        if(isCharacterSelected){
            return(
                <CharacterAdjustmentPane character={selectedCharacter} imageChange={handleImageChange}/>
            )
        }else if(isNewCharacter){
            return(
                <NewCharacterPane currentActiveId={currentAccountId} imageChange={handleImageChange}/>
            )
        }
    }

    useEffect(()=>{
        fetchCharacters(currentAccountId).then(setCharacters);
        setCurrentAccountId(activeId);
    })
    // useEffect(() => {
    //     handleCharacterCreationAndAdjustment()
    // }, [selectedCharacter]);

    return (
        <div className={"characterSelectionPage"}>
            <div className={"characterList"}>
                {characters.map((character,index)=> <div onClick={(event)=>{handleCharacterSelection(event,character)}} key={index}><CharacterSelectionPanels character={character}/></div>)}
            </div>
            <div className={"characterView"}>
                <h1>Character Selection Page</h1>
                <div ref={characterReference} className={"currentCharacterView"}></div>
            </div>
            {handleCharacterCreationAndAdjustment()}
            {/*{selectedCharacter && <CharacterAdjustmentPane character={selectedCharacter}/>}*/}
        </div>

    )
}

export default CharacterSelectionPage