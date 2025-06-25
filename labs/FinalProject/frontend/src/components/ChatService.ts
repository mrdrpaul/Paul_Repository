import type {Chat} from "../ChatType.ts";
import axios from "axios";

export function fetchChats():Promise<Chat[]>{
    return axios.get("/api/getMessages").then((r)=>r.data)
}

export function sendChat(characterName, message, messageTimeStamp){
    axios.post("/api/sendMessage",{
        "characterName":characterName,
        "message":message,
        "messageTimeStamp":messageTimeStamp
    })
        .then((r)=>{console.log(r)})
        .catch((err)=>{console.log(err)})
}