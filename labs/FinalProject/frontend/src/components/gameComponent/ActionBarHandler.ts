import {useRef} from "react";

let oldActionBarSlot : HTMLElement;
let slotOne : HTMLElement;
let slotTwo : HTMLElement;
let slotThree : HTMLElement;
let slotFour : HTMLElement;
let slotFive : HTMLElement;
let slotSix : HTMLElement;
let slotSeven : HTMLElement;
let slotEight : HTMLElement;
let actionBarSlots: HTMLElement[];

import swordImage from "../../assets/paladinSword.png"
import torchImage from "../../assets/torch.png"

let actionBarItems = [swordImage, torchImage]

const root = document.documentElement;

// let actionBarSlots: HTMLElement[] = [slotOne, slotTwo, slotThree,slotFour,slotFive,slotSix,slotSeven,slotEight]

function changeImageToSword(){
    // root.style.setProperty('--selectedHandItem', swordImage);
    root.style.setProperty('--selectedHandItem', `url("${swordImage}")`);
    root.style.setProperty('--selectedBackgroundColor', 'blue')
}
export function initializeFirstActionBarSlot(firstActionBarSlot: HTMLElement){
    console.log(firstActionBarSlot)
    oldActionBarSlot = firstActionBarSlot;
    root.style.setProperty('--selectedHandItem', `url("${swordImage}")`);

}


export function createReferenceMappings(slotOneReference : HTMLElement, slotTwoReference : HTMLElement, slotThreeReference : HTMLElement,slotFourReference : HTMLElement,slotFiveReference : HTMLElement,slotSixReference : HTMLElement,slotSevenReference : HTMLElement,slotEightReference : HTMLElement){
    slotOne = slotOneReference;
    slotTwo = slotTwoReference;
    slotThree = slotThreeReference;
    slotFour = slotFourReference;
    slotFive = slotFiveReference;
    slotSix = slotSixReference;
    slotSeven = slotSevenReference;
    slotEight = slotEightReference;
    actionBarSlots = [slotOne, slotTwo, slotThree,slotFour,slotFive,slotSix,slotSeven,slotEight]
}


// export function createReferenceMappings(references:HTMLElement[]) {
//     console.log(references)
//     for (let element = 0; element < references.length; element++) {
//         actionBarSlots[element] = references[element];
//         console.log(references[element])
//     }
// }


export function changeActiveActionBarSlot(selectedActionBarSlot: number){
    // if (selectedActionBarSlot === 4){
    //     changeImageToSword()
    // }
    root.style.setProperty('--selectedHandItem', `url("${actionBarItems[selectedActionBarSlot]}")`);
    oldActionBarSlot.classList.remove("isSelected")
    oldActionBarSlot = actionBarSlots[selectedActionBarSlot];
    actionBarSlots[selectedActionBarSlot].classList.add("isSelected")

}