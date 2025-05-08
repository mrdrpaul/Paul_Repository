import {useEffect, useRef, useState} from "react";
import music from '../assets/deep-in-the-dungeon.mp3'
import axios from "axios";

function Login(){
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [isNewUser, setIsNewUser] = useState(false)
    const musicRef = useRef<HTMLAudioElement | null>(null);


    const handleUsername = (event) => {
            setUserName(event.target.value);
    }
    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleLogin = (event)=>{
        // event.preventDefault()
        musicRef.current?.play()
        // alert(`Logging in with  ${username} ${password}`)
    }

    const handleNewUser = () => {
        return(
            setIsNewUser(true)
        )
        // alert("New User")
    }
    const handleAccountCreation = (event) => {
        event.preventDefault();
        setIsNewUser(false)
        axios.post("/api/newUser",{
            "username": username,
            "password":password
        })
        .then((r)=>{
                console.log(r)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    if(!isNewUser){
        return (
            <div className="loginModal">
                {/*<audio id={"loginMusic"} src={'../assets/deep-in-the-dungeon.mp3'}></audio>*/}
                <audio id={"loginMusic"} controls autoPlay={true} loop={true}>
                    <source src={music} type={"audio/mpeg"}></source>
                </audio>
                <div>Login</div>
                <form>
                    <div><input name={"username"} value={username} type={"text"} placeholder={"username"} onChange={handleUsername}></input></div>
                    <div><input name={"password"} value={password} type={"password"} placeholder={"password"} onChange={handlePassword}></input></div>
                    <button type={"button"} onClick={handleLogin}>Login</button>
                    <button type={"button"} onClick={handleNewUser}>New User</button>
                </form>
            </div>
        )
    }else{
        return(
            <div className={"loginModal"}>
                <div>New User</div>
                <form onSubmit={handleAccountCreation}>
                    <div><input name={"username"} value={username} type={"text"} placeholder={"username"} onChange={handleUsername}></input></div>
                    <div><input name={"password"} value={password} type={"password"} placeholder={"password"} onChange={handlePassword}></input></div>
                    <button type={"submit"}>Create Account</button>
                </form>
            </div>
            )

    }
}
export default Login;