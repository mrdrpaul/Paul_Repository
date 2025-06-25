import {useEffect, useRef, useState} from "react";
import "./chatInterface.css"
import type {Character} from "../../CharacterType.ts";
import {fetchChats, sendChat} from "../ChatService.ts";
import type {Chat} from "../../ChatType.ts";

// function ChatInterface({isOpen}: Props, {changeFocus}){
const ChatInterface = ({characterName,isOpen,changeFocus})=>{
    const [chatText,setChatText] = useState("")
    const [chatLog, setChatLog] = useState<string[]>([])
    const [chatHistory, setChatHistory] = useState<Chat[]>([])
    const [currentUser,setCurrentUser] = useState(characterName)
    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    const chatInterfaceReference = useRef<HTMLDivElement>(null)

    const [loginTime, setLoginTime] = useState(new Date().toLocaleTimeString())
    const handleChange = (event) =>{
        setChatText(event.target.value)
    }

    const handleKeyDown = (event) =>{
        if(event.key === 'Enter'){
            sendChat(currentUser,chatText,new Date().toLocaleTimeString() );
            // console.log("Value passed: " + characterName)
            // fetchChats().then(setChatHistory)
            // fetchChats().then((r)=>{for(let i = 0; i < r.length; i++){setChatLog([...chatLog,r[i].characterName + ": " + r[i].message]);console.log("Current Chat message " + r[i].message)}})
            setChatLog([...chatLog,chatText]);
            setChatText("")
            // console.log("All chat messages" + chatHistory[0].characterName +": "+chatHistory[0].message)
            console.log("All chat messages" + chatLog)
            // updateChat()
            // if(currentTime > new Date().toLocaleTimeString()){
            //     console.log("State Time is lesser")
            // }else{
            //     console.log("STate time is greaTER")
            // }
            // console.log("OLD TIME IS time is " + currentTime)
            // console.log("Current time is " + new Date().toLocaleTimeString())
        }
    }

    const updateChat = ()=>{
        // console.log("test data sample")
        chatHistory.map((chat)=>{
            {chat.messageTimeStamp > loginTime && chat.messageTimeStamp != null ? setChatLog([...chatLog,chat.characterName +": "+ chat.message]) : null}

            console.log("Login Time: " + loginTime)
            console.log("Chat Message Timestamp: " + chat.messageTimeStamp)
        })

    }

    const handleFocusChange = () =>{
        changeFocus("chat")
    }

    useEffect(() => {
        setCurrentUser(characterName)

        setInterval(()=>{
            fetchChats().then(setChatHistory)
            console.log("Login Time: " + loginTime)
            console.log("interval message")
        },5000)

    }, []);

    useEffect(()=>{
        messagesEndRef.current?.scrollIntoView({behavior:"smooth",block:"nearest"});
    },[chatHistory])

    // useEffect(() => {
    //     setChatHistory(chatHistory)
    // }, [chatHistory]);



    return(
        <div
            ref={chatInterfaceReference}
            className={`chatInterface ${isOpen ? "open" : "closed"}`}
            tabIndex={0}
            onClick={handleFocusChange}
        >
            {/*<div className={"chatMessages"}>{chatLog.map((msg,i)=>(*/}
            {/*    <div key={i}>{currentUser} : {msg}</div>*/}
            {/*    // <div key={i}>{msg}</div>*/}
            {/*))}*/}
            {/*</div>*/}

            <div className={"chatMessages"}>
                {chatHistory.map((chatMessage, i)=>(
                    // chatMessage.messageTimeStamp === "@" ? (console.log("time") ): (console.log("Time2"))
                    chatMessage.messageTimeStamp > loginTime
                        ?
                    <div key={i} ref={i===chatHistory.length - 1 ? messagesEndRef : null}>
                        {chatMessage.characterName}: {chatMessage.message}
                    </div>
                    :
                        null
                ))}

            </div>

            <input className={"chatBar"} name={"chatBox"} type={"text"} value={chatText} placeholder={"Type text here (chat updates every 5 seconds)"} onChange={handleChange} maxLength={50} onKeyDown={handleKeyDown}></input>
        </div>
    )
}

export default ChatInterface