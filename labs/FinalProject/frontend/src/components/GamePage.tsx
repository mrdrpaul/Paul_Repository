import './GamePage.css'
import {useState} from "react";
import Login from "./Login.tsx";
import CharacterSelectionPage from "./CharacterSelectionAndCreationComponent/CharacterSelectionPage.tsx";
import GameComponent from "./gameComponent/GameComponent.tsx";
import type {Character} from "../CharacterType.ts";
function GamePage(){
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isCharacterSelected,setIsCharacterSelected] = useState(false);
    const [activeAccountId, setActiveAccountId] = useState(0);
    const [currentActiveCharacter ,setCurrentActiveCharacter] = useState<Character>()
    // const [currentActiveCharacter ,setCurrentActiveCharacter] = useState("blah blah test")

    const handleLoginAndActiveAccount = (loginState: boolean, activeId:number) =>{
        setActiveAccountId(activeId);
        setIsLoggedIn(loginState);
    }

    const handleCharacterSelected = (characterSelectedState: boolean)=>{
        setIsCharacterSelected(characterSelectedState);
    }
    const setCharacter = (selectedCharacter: Character) =>{
        setCurrentActiveCharacter(selectedCharacter)
        console.log("current character name is: " + selectedCharacter.characterName)
        // console.log("current character is: " + currentActiveCharacter)
    }

    if (isLoggedIn){
        if(isCharacterSelected){
            // return(<GameComponent activeCharacter={currentActiveCharacter}/>)
            return(<GameComponent activeCharacter={currentActiveCharacter}/>)
        }else{
            return(<CharacterSelectionPage selectedActiveCharacter={setCharacter} onStateChange={handleCharacterSelected} activeId={activeAccountId}/>)
        }
    }else{
        return(<Login authentication={handleLoginAndActiveAccount}/>)
    }

}

export default GamePage
