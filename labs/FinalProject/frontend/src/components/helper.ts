let characterImage = document.getElementsByClassName("currentCharacterView")[0]
import pixelGolem from "../assets/pixelGolem.png"
import pixelWizard from "../assets/pixelWizard.png"
import pixelBarbarian from "../assets/pixelBarbarian.png"
import pixelPaladin from "../assets/pixelPaladin.png"
import pixelRogue from "../assets/pixelRogue.png"
import pixelArcher from "../assets/pixelArcher.png"
import mouse from "../assets/dorime-mice-Photoroom.ico"
import golem from "../assets/Golem.png"
import notPixelBarbarian from "../assets/Barbarian.png"
import priest from "../assets/Priest.png"

export function changeCharacterImage(character: HTMLElement, characterSelection: string){
    switch (characterSelection){
        case "wizard":
            character.style.backgroundImage=`url(${pixelWizard})`;
            break;
        case "barbarian":
            character.style.backgroundImage=`url(${pixelBarbarian})`;
            break;
        case "paladin":
            character.style.backgroundImage=`url(${pixelPaladin})`;
            break;
        case "rogue":
            character.style.backgroundImage=`url(${pixelRogue})`;
            break;
        case "archer":
            character.style.backgroundImage=`url(${pixelArcher})`;
            break;
        case "mouse":
            character.style.backgroundImage=`url(${mouse})`;
            break;
        case "golem":
            character.style.backgroundImage=`url(${golem})`;
            break;
        case "notPixelBarbarian":
            character.style.backgroundImage=`url(${notPixelBarbarian})`;
            break;
        case "priest":
            character.style.backgroundImage=`url(${priest})`;
            break;
    }

}