import './GamePage.css'
import {useState} from "react";
import Login from "./Login.tsx";
import CharacterSelectionPage from "./CharacterSelectionAndCreationComponent/CharacterSelectionPage.tsx";
import GameComponent from "./gameComponent/GameComponent.tsx";
function GamePage(){
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isCharacterSelected,setIsCharacterSelected] = useState(false);
    const [activeAccountId, setActiveAccountId] = useState(0);

    const handleLoginAndActiveAccount = (loginState: boolean, activeId:number) =>{
        setActiveAccountId(activeId);
        setIsLoggedIn(loginState);
    }

    const handleCharacterSelected = (characterSelectedState: boolean)=>{
        setIsCharacterSelected(characterSelectedState);
    }

    if (isLoggedIn){
        if(isCharacterSelected){
            return(<GameComponent/>)
        }else{
            return(<CharacterSelectionPage onStateChange={handleCharacterSelected} activeId={activeAccountId}/>)
        }
    }else{
        return(<Login authentication={handleLoginAndActiveAccount}/>)
    }

}

export default GamePage
