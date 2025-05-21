import "./actionBar.css"
import {useEffect, useRef} from "react";
import {createReferenceMappings, initializeFirstActionBarSlot} from "./ActionBarHandler.ts";

const ActionBar = () =>{
    const slotOneReference = useRef<HTMLDivElement>(null)
    const slotTwoReference = useRef<HTMLDivElement>(null)
    const slotThreeReference = useRef<HTMLDivElement>(null)
    const slotFourReference = useRef<HTMLDivElement>(null)
    const slotFiveReference = useRef<HTMLDivElement>(null)
    const slotSixReference = useRef<HTMLDivElement>(null)
    const slotSevenReference = useRef<HTMLDivElement>(null)
    const slotEightReference = useRef<HTMLDivElement>(null)

    // const references = [slotOneReference, slotTwoReference, slotThreeReference, slotFourReference, slotFiveReference, slotSixReference, slotSevenReference, slotEightReference]

    useEffect(() => {
        if(slotOneReference){
            initializeFirstActionBarSlot(slotOneReference.current)
        }

        if(slotOneReference && slotTwoReference && slotThreeReference && slotFourReference && slotFiveReference && slotSixReference && slotSevenReference && slotEightReference){
            createReferenceMappings(slotOneReference.current, slotTwoReference.current, slotThreeReference.current, slotFourReference.current, slotFiveReference.current, slotSixReference.current, slotSevenReference.current, slotEightReference.current)
        }
        // for(let i = 0; i < references.length; i++){
        //     // console.log("value")
        //     // console.log("test")
        //     // console.log(references[i])
        //     if(references[i]){
        //         references[i]=references[i].current;
        //         console.log(references[i]);
        //
        //     }
        // }
        // createReferenceMappings(references[0],references[1],references[2],references[3],references[4],references[5],references[6],references[7])
        // createReferenceMappings(references[0],references[1],references[2],references[3],references[4],references[5],references[6],references[7])
        // createReferenceMappings(references)

    }, []);

    return(
        // <div tabIndex={0} className={"actionBar"} onKeyDown={(event) => {handleKey(event)}}>
        <div tabIndex={0} className={"actionBar"}>
            <div ref={slotOneReference} className={"actionBarSlot slotOne isSelected"}>Slot One</div>
            <div ref={slotTwoReference} className={"actionBarSlot slotTwo"}>Slot Two</div>
            <div ref={slotThreeReference} className={"actionBarSlot slotThree"}>Slot Three</div>
            <div ref={slotFourReference} className={"actionBarSlot slotFour"}>Slot Four</div>
            <div ref={slotFiveReference} className={"actionBarSlot slotFive"}>Slot Five</div>
            <div ref={slotSixReference} className={"actionBarSlot slotSix"}>Slot Six</div>
            <div ref={slotSevenReference} className={"actionBarSlot slotSeven"}>Slot Seven</div>
            <div ref={slotEightReference} className={"actionBarSlot slotEight"}>Slot Eight</div>
        </div>

    )
}

export default ActionBar