import React from "react";
import { useParams } from "react-router-dom";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";
import BreadCrumb from './BreadCrumb/index'
import Grid from "./Grid";
import  Spinner  from "./Spinner/Index";
import NoImage from '../images/no_image.jpg'
import Movieinfo from "./MovieInfo";
import MovieinfoBar from './MovieinfoBar/index'
//hhok
import { useMovieFetch } from "../hooks/useMovieFetch";
import Actor from "./Actor";
const Movie = () => {
    const { movieId } = useParams();
    const { state: movie, loading, error} = useMovieFetch(movieId)
    //console.log(movie)
    if (loading ) return <Spinner/>
    if (error) return <div>Error Something fishy</div>
    return(
        <>
        <BreadCrumb movieTitle = {movie.original_title} />
        <Movieinfo movie={movie}/>
        <MovieinfoBar 
            time = {movie.runtime} 
            budget = {movie.budget} 
            revenue={movie.revenue} 
        />
        <Grid Header='Actors'>
            {movie.actors.map(actor => ( 
                <Actor
                 key = {actor.credit_id}
                 name = {actor.name}
                 character={actor.character}
                 imageurl={
                     actor.profile_path
                     ?`${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                     :NoImage
                    
                 } />
            ))}
        </Grid>
        </>
    );
};

export default Movie;