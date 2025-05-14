import type {Character} from "../CharacterType"

type CharacterProps = {
    character : Character;
}

const CharacterSelectionPanels = ({character}: CharacterProps) =>{
    return(
        <div className={"characterSelectionPanel"}>
            <div className={"nameAndClassRow"}>
                <h4>{character.characterName}</h4>
                <h4>Level {character.level} {character.characterClass}</h4>
            </div>
            <p>Health: {character.health}</p>
            <p>Mana: {character.mana}</p>
            <p>Attack: {character.attack}</p>
            <p>Defense: {character.defense}</p>
            <p>Stat Points Available: {character.statPoints}</p>
        </div>
    )
}

export default CharacterSelectionPanels