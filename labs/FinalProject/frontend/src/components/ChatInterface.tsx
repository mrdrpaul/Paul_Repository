import {useEffect, useRef, useState} from "react";

type Props = {
    isOpen: boolean;
}

function ChatInterface({isOpen}: Props){
    const [chatText,setChatText] = useState("")
    const [chatLog, setChatLog] = useState<string[]>([])
    const [currentUser,setCurrentUser] = useState("[GAME DEV] [mrdrpaul] ")
    const messagesEndRef = useRef<HTMLDivElement | null>(null);
    const handleChange = (event) =>{
        setChatText(event.target.value)
    }

    const handleKeyDown = (event) =>{
        if(event.key === 'Enter'){
            setChatLog([...chatLog,chatText]);
            setChatText("")
        }
    }

    useEffect(()=>{
        messagesEndRef.current?.scrollIntoView({behavior:"smooth"});
    },[chatLog])

    return(
        <div className={`chatInterface ${isOpen ? "open" : "closed"}`}>
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