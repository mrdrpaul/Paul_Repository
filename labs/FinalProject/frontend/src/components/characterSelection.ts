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
import bishop from "../assets/pixelBishop.png"
import pixelNecromancer from "../assets/pixelNecromancer.png"


import wizardBackground from "../assets/wizardBackground.png"
import barbarianBackground from "../assets/barbarianBackground.png"
import paladinBackground from "../assets/paladinBackground.png"
import necromancerBackground from "../assets/necromancerBackground.png"

export function changeImages(characterBackground: HTMLElement, character: HTMLElement, characterSelection: string){
    switch (characterSelection){
        case "wizard":
            character.style.backgroundImage=`url(${pixelWizard})`;
            characterBackground.style.backgroundImage=`url(${wizardBackground})`
            break;
        case "barbarian":
            character.style.backgroundImage=`url(${pixelBarbarian})`;
            characterBackground.style.backgroundImage=`url(${barbarianBackground})`

            break;
        case "paladin":
            character.style.backgroundImage=`url(${pixelPaladin})`;
            characterBackground.style.backgroundImage=`url(${paladinBackground})`
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
        case "bishop":
            character.style.backgroundImage=`url(${bishop})`;
            break;
        case "necromancer":
            character.style.backgroundImage=`url(${pixelNecromancer})`
            characterBackground.style.backgroundImage=`url(${necromancerBackground})`

            break;
    }

}

export function loreChanger(characterSelection): string{
    switch (characterSelection){
        case "wizard":
            return "Masters of forgotten tongues and stars that no longer shine, Wizards bend reality with sheer intellect and will. Each spell drawn from their tome is a whisper stolen from the void — a truth mortals were never meant to know"
        case "barbarian":
            return "Born where the maps end and the wild things rule, Barbarians are fury made flesh. They fight not for coin or crown, but for blood, honor, and the song of steel upon bone."
        case "paladin":
            return "Clad in oathbound steel and guided by sacred flame, Paladins are the last light against the dark. Whether driven by faith or vengeance, their blade strikes with purpose, and their soul never yields"
        case "rogue":
            return "In shadow they walk, unseen and unheard, with daggers sharp as secrets. Rogues trust no law but their own, thriving where others falter — in the hush before betrayal, and the silence after."
        case "archer":
            return "Eyes like hawks and hearts like hunters, Archers are death at a distance. From forest boughs or battlefield rise, their arrows find truth — swift, silent, and final."
        case "mouse":
            return "no lore"
        case "golem":
            return "no lore"
        case "notPixelBarbarian":
            return "no lore"
        case "priest":
            return "Vessels of the divine or voices of forgotten gods, Priests mend flesh and soul with sacred rites. But power drawn from faith cuts both ways — and mercy is not always their first prayer."
        case "bishop":
            return "Crowned in scripture and cloaked in ceremony, Bishops command reverence — and fear. Where Priests bring healing, Bishops bring judgment, wielding relic and rite to break the unworthy."
        case "necromancer":
            return "Life is fleeting, but death obeys. Necromancers blur the veil with every whispered rite, commanding bone and shadow to do their bidding. To them, the grave is not an end -- only a doorway"
    }
    return "";

}