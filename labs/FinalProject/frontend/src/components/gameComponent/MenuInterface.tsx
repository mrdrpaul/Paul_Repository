import './menuInterface.css'
import {useState} from "react";

type Props = {
    isOpen: boolean;

}
function MenuInterface({isOpen}: Props){
    const [activeMenu, setActiveMenu] = useState("Inventory")
    const handleMenuChange = (event) =>{
        console.log(event.target.name + " clicked")
        setActiveMenu(event.target.name)
    }

    const menu = () =>{
        switch(activeMenu){
            case "Inventory":
                return(
                    <div className={"characterInventory"}>
                        <div className={"menuTitle"}>Inventory Menu</div>
                        {/*<div className={"inventorySlot"}></div>*/}
                        {/*<div className={"inventorySlot"}></div>*/}
                        {/*<div className={"inventorySlot"}></div>*/}
                        {/*<div className={"inventorySlot"}></div>*/}
                        {/*<div className={"inventorySlot"}></div>*/}
                        {/*<div className={"inventorySlot"}></div>*/}
                        {/*<div className={"inventorySlot"}></div>*/}
                        {/*<div className={"inventorySlot"}></div>*/}
                        {/*<div className={"inventorySlot"}></div>*/}
                        {/*<div className={"inventorySlot"}></div>*/}
                        {/*<div className={"inventorySlot"}></div>*/}
                        {/*<div className={"inventorySlot"}></div>*/}
                        {/*<div className={"inventorySlot"}></div>*/}
                        {/*<div className={"inventorySlot"}></div>*/}
                        {/*<div className={"inventorySlot"}></div>*/}
                        {/*<div className={"inventorySlot"}></div>*/}
                        {/*<div className={"inventorySlot"}></div>*/}
                        {/*<div className={"inventorySlot"}></div>*/}
                        {/*<div className={"inventorySlot"}></div>*/}
                        {/*<div className={"inventorySlot"}></div>*/}
                        {/*<div className={"inventorySlot"}></div>*/}
                        {/*<div className={"inventorySlot"}></div>*/}
                        {/*<div className={"inventorySlot"}></div>*/}
                        {/*<div className={"inventorySlot"}></div>*/}
                    </div>
                )
            case "Character":
                return(
                    <div>Character Menu</div>
                )
        }
    }


    return(
        <div className={`menuInterface ${isOpen ? "open": "closed"}`}>
            <button name={"Inventory"} type={"button"} onClick={handleMenuChange}>Inventory</button>
            <button name={"Character"} type={"button"} onClick={handleMenuChange}>Character</button>
            {menu()}
    </div>
    )
}

export default MenuInterface