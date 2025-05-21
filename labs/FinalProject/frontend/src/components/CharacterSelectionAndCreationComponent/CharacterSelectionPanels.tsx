import type {Character} from "../../CharacterType.ts"

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
            <div className={"upperRightCornerLine"}></div>
            <div className={"panelStatPointContainer"}>
            <div className={"health"}>
                <div className={"healthIcon"}></div>
                <div>Health: {character.health}</div>
            </div>
            <div className={"mana"}>
                <div className={"manaIcon"}></div>
                <div>Mana: {character.mana}</div>
            </div>
            <div className={"attack"}>
                <div className={"attackIcon"}></div>
                <div>Attack: {character.attack}</div>
            </div>
            <div className={"defense"}>
                <div className={"defenseIcon"}></div>
                <div>Defense: {character.defense}</div>
            </div>
            <div></div>
            <div></div>
            <div></div>

            </div>

            <p>Stat Points Available: {character.statPoints}</p>
        </div>
    )
}

export default CharacterSelectionPanels