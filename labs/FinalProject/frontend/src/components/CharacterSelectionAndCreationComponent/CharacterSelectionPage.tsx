import {useEffect, useRef, useState} from "react";
import type {Character} from "../../CharacterType.ts";
import {fetchCharacters} from "../CharacterService.ts";
import {changeImages} from "./characterSelection.ts";
import NewCharacterPane from "./NewCharacterPane.tsx";
import CharacterSelectionPanels from "./CharacterSelectionPanels.tsx";
import CharacterAdjustmentPane from "./CharacterAdjustmentPane.tsx";
import "./characterSelectionPage.css"

function CharacterSelectionPage({selectedActiveCharacter, onStateChange, activeId}){
    const [characters,setCharacters] = useState<Character[]>([])
    const [currentAccountId,setCurrentAccountId] = useState(activeId)
    const [isCharacterSelected, setIsCharacterSelected] = useState(false)
    const [isNewCharacter,setIsNewCharacter] = useState(false)

    const [currentSelectedCharacter, setCurrentSelectedCharacter] = useState<Character>()


    const characterReference = useRef<HTMLDivElement>(null)
    const characterSelectionPageReference = useRef<HTMLDivElement>(null)

    const handleCharacterSelection = (event, character : Character) =>{
        setIsNewCharacter(false);
        setCurrentSelectedCharacter(character)
        setIsCharacterSelected(true)
        console.log(character)

    }

    const handleNewCharacter = () =>{
        setIsCharacterSelected(false)
        setIsNewCharacter(true);
        handleImageChange("")
    }

    const handleCharacterUpdate = (selectedCharacter: boolean) =>{
        if(selectedCharacter){
            selectedActiveCharacter(currentSelectedCharacter)
            onStateChange(true)
        }
        // fetchCharacters(currentAccountId).then(setCharacters)
    }
    const displayCharacters = (event) => {
        console.log(activeId)
        fetchCharacters(currentAccountId).then(setCharacters)
        console.log(characters)
    }
    const handleImageChange = (value: String) =>{
        console.log("account Id: " + activeId)
        if(characterReference){
            changeImages(characterSelectionPageReference.current, characterReference.current, value)
        }
    }

    const handleCharacterCreationAndAdjustment = () =>{
        if(isCharacterSelected){
            return(
                <CharacterAdjustmentPane character={currentSelectedCharacter} imageChange={handleImageChange} isCharacterSelectedGameStarted={handleCharacterUpdate}/>
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

    return (
        <div ref={characterSelectionPageReference} className={"characterSelectionPage"}>
            <div className={"characterList"}>
                {characters.map((character,index)=> <div onClick={(event)=>{handleCharacterSelection(event,character)}} key={index}><CharacterSelectionPanels character={character}/></div>)}
            </div>
            <div className={"characterView"}>
                <h1>Character Selection Page</h1>
                <button type={"button"} onClick={handleNewCharacter}>New Character</button>
                <div ref={characterReference} className={"currentCharacterView"}></div>
            </div>
            {handleCharacterCreationAndAdjustment()}
        </div>

    )
}

export default CharacterSelectionPage