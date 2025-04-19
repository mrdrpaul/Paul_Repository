import Home from "./components/Home.jsx";
import Results from "./components/Results.jsx";
import Error from "./components/Error.jsx"
import MovieCard from "./components/MovieCard.jsx";
import {BrowserRouter as Router, data, Link, Route, Routes} from "react-router-dom";
import axios from "axios";
import {useState} from "react";
import ButtonAppBar from "./components/Appbar.jsx";
import SearchAppBar from "./components/Appbar.jsx";
import * as React from "react";


const App = () =>{
    return(
        <div className="pageHolder" style={{width:"100vw"}}>
            <Router>
                {/*<SearchAppBar></SearchAppBar>*/}
                <Routes>
                    <Route path="/" element=<Home/>/>
                    <Route path="/results" element=<Results/>/>
                    <Route path="/*" element=<Error/>/>
                </Routes>
            </Router>
            {/*<button onClick={handleClick}>Now Playing</button>*/}
            {/*<div className="cardHolder">*/}
            {/*    /!*<div style={{width:"400px"}}>{movies}</div>*!/*/}
            {/*    {movies}*/}
            {/*</div>*/}
        </div>
    )
}

export default App;