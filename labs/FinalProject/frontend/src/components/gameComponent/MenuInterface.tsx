import '../GamePage.css'

type Props = {
    isOpen: boolean;

}
function MenuInterface({isOpen}: Props){
    return(
        <div className={`menuInterface ${isOpen ? "open": "closed"}`}>Menu Interface</div>
    )
}

export default MenuInterface