let characterImage = document.getElementsByClassName("currentCharacterView")[0]
import pixelGolem from "../assets/pixelGolem.png"

export function changeCharacterImage(character: HTMLElement, characterSelection: string){
    alert("Character is: " + characterSelection);
    // (characterImage as HTMLElement).style.backgroundImage="url(../assets/pixelGolem.png)";
    (characterImage as HTMLDivElement).style.height="50px";

    switch (characterSelection){
        case "wizard":
            character.style.backgroundImage='url("../assets/pixelWizard.png")';
            break;
        case "paladin":
            character.style.backgroundImage=`url(${pixelGolem})`;
            break;
    }

}