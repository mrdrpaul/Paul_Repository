import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import notFound from '../assets/notFound.jpeg';

const MovieCard = ({data, search}) =>{
    //https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg
    const {title, overview, vote_average, poster_path} = data;
    let posterImage;
    if(poster_path===null){
        posterImage = notFound;
    }else{
        posterImage = `https://image.tmdb.org/t/p/w500${poster_path}`
    }

        return(
            <>
                <div style={{width: "345px", height: "500px", overflow:"auto", borderRadius:"10%"}}>
                    <Card sx={{ maxWidth: 345}}>
                        <Typography gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>
                        <CardMedia
                            sx={{ height: 400 }}
                            image={posterImage}
                            title={title}
                        />
                        <CardContent>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                {overview}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                Rating: {vote_average}
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            </>

        )


}

export default MovieCard