import {useEffect, useRef} from "react";

const ActionBar = () =>{
    const slotOneReference = useRef<HTMLDivElement>(null)
    const slotTwoReference = useRef<HTMLDivElement>(null)
    const slotThreeReference = useRef<HTMLDivElement>(null)
    const slotFourReference = useRef<HTMLDivElement>(null)
    const slotFiveReference = useRef<HTMLDivElement>(null)
    const slotSixReference = useRef<HTMLDivElement>(null)
    const slotSevenReference = useRef<HTMLDivElement>(null)
    const slotEightReference = useRef<HTMLDivElement>(null)

    useEffect(() => {
        function handleKeyDown(event){
            console.log("action bar " + event.key)
        }



        document.addEventListener('keydown',handleKeyDown)
    }, []);


    return(
        <div className={"actionBar"}>
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