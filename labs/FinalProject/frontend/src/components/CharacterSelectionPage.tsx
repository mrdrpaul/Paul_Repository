import {useState} from "react";

function CharacterSelectionPage({onStateChange}){
    // const [characters,setCharacters] = useState<Characters[]>([])
    const handleCharacterSelection = () =>{
        onStateChange(true);
    }

    const displayCharacters = () => {

    }

    return (
        <div className={"characterSelectionPage"}>
            <h1>Character Selection Page</h1>
            <button type={"button"} onClick={handleCharacterSelection}>Select Character</button>
        </div>
    )
}

export default CharacterSelectionPage