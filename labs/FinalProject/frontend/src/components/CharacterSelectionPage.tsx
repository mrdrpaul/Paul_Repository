function CharacterSelectionPage({onStateChange}){

    const handleCharacterSelection = () =>{
        onStateChange(true);
    }

    return (
        <div>
            <h1>Character Selection Page</h1>
            <button type={"button"} onClick={handleCharacterSelection}>Select Character</button>
        </div>
    )
}

export default CharacterSelectionPage