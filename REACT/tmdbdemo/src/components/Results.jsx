import {useState} from "react";
import axios from "axios";
import MovieCard from "./MovieCard.jsx";
import * as React from "react";
import Card from '@mui/material/Card';
import SearchAppBar from "./Appbar.jsx";

const Results = () =>{
    const [movies, setMovies] = useState("");
    const [userSearch, setUserSearch] = useState("")
    const [options, setOptions] = useState({})

    const handleClick = () =>{
        console.log(userSearch)
        document.getElementsByClassName("searchBar")[0].style="block"
        if(userSearch ===""){
            handleAll()
        }else{
            handleSearch()
        }

        axios(options)
            .then(response =>{
                console.log(response.data.results)
                let movieArray = response.data.results.map((movie,i) =>{
                    return <MovieCard data={movie} search={userSearch} key={movie.id ? movie.id : i}/>
                })
                setMovies(movieArray)
            })
            .catch(error =>{
                console.log(error)
            })

    };
    const handleSearch = () =>{
        setOptions(  {
            method: 'GET',
            url: 'https://api.themoviedb.org/3/search/movie',
            params: {query: userSearch, include_adult: 'false', language: 'en-US', page: '1'},
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${process.env.VITE_TMDB_API_TOKEN}`
            }
        });
    }

    const handleAll=() =>{
        setOptions({
            method: 'GET',
            url: 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${process.env.VITE_TMDB_API_TOKEN}`
            }
        });
    }

    return (
        <>
            <SearchAppBar userSearchChange={setUserSearch}></SearchAppBar>
            <p>click to view playing (click again to confirm)</p>
            <button onClick={handleClick}>Now Playing</button>
            <div className="cardHolder">
                {movies}
            </div>
        </>
    )
}
export default Results;