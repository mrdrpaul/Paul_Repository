import {useEffect, useRef, useState} from "react";


// function ChatInterface({isOpen}: Props, {changeFocus}){
const ChatInterface = ({isOpen,changeFocus})=>{
    const [chatText,setChatText] = useState("")
    const [chatLog, setChatLog] = useState<string[]>([])
    const [currentUser,setCurrentUser] = useState("[GAME DEV] [mrdrpaul] ")
    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    const chatInterfaceReference = useRef<HTMLDivElement>(null)

    const handleChange = (event) =>{
        setChatText(event.target.value)
    }

    const handleKeyDown = (event) =>{
        if(event.key === 'Enter'){
            setChatLog([...chatLog,chatText]);
            setChatText("")
        }
    }

    const handleFocusChange = () =>{
        changeFocus("chat")
    }

    useEffect(()=>{
        messagesEndRef.current?.scrollIntoView({behavior:"smooth"});
    },[chatLog])

    useEffect(() => {

    }, []);

    return(
        <div ref={chatInterfaceReference}
            className={`chatInterface ${isOpen ? "open" : "closed"}`}
             tabIndex={0}
        onClick={handleFocusChange}
        >
            <div className={"chatMessages"}>{chatLog.map((msg,i)=>(
                <div key={i}>{currentUser} : {msg}</div>
            ))}
                <div ref={messagesEndRef}/>
            </div>
            <input className={"chatBar"} name={"chatBox"} type={"text"} value={chatText} placeholder={"Type text here"} onChange={handleChange} maxLength={50} onKeyDown={handleKeyDown}></input>
        </div>
    )
}

export default ChatInterface