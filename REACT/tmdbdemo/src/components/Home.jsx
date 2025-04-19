import SearchAppBar from "./Appbar.jsx";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import * as React from "react";
import {useEffect} from "react";

const Home = () =>{
    const clearSearchBar = ()=>{
        document.getElementsByClassName("searchBar")[0].style.display="none"

    }
    useEffect(() => {
        clearSearchBar();
    }, []);

    return(
        <>
            <SearchAppBar></SearchAppBar>
            <h1>Movie Database Lab</h1>

        </>
    )
}

export default Home;