import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import {BrowserRouter as Router, Link, Route, Routes, useNavigate} from "react-router-dom";
import Home from "./Home.jsx"
import Results from "./Results.jsx";
import UsingColorObject from "./ui/pallete.jsx";

let menu = false;



const handleClick = () =>{
    menu=!menu;
    if(menu){
        document.getElementsByClassName("links")[0].style.display="none";
    }else{
        document.getElementsByClassName("links")[0].style.display="block";
    }
}

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

export default function SearchAppBar({userSearchChange}) {
    const handleChange = (event) => {
        userSearchChange(event.target.value);
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                        onClick={handleClick}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                    <div className="links">
                        <Link to="/" style={{color:"black"}}>| Home | </Link>
                        <Link to="/results" style={{color:"gold", border: "2x solid white", backgroundColor:"black", borderRadius:"10%"}}> Now Playing In Theaters</Link>
                    </div>
                    </Typography>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <div className="searchBar" style={{display:"none"}}>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                                onChange={handleChange}
                            />
                        </div>

                    </Search>
                </Toolbar>

            </AppBar>

        </Box>

    );
}


            // <Box sx={{display:"flex",flexGrow:1}}>
            //     <Typography variant={"h6"} sx={{mr:2}}>
            //
            //     </Typography>
            //     Test
            // </Box>
