import React,   { useState, useEffect} from "react";
import Api from '../API'
//config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';
 
//Components
import HeroImage from './HeroImage/Index'
//hooks
import {useHomeFetch} from '../hooks/useHomeFetch'
//Image
import Noimage from '../images/no_image.jpg';
import Grid from "./Grid";
import Thumb from "./Thumb/Index"
import Spinner from './Spinner/Index'
import SearchBar from '../components/SearchBar'
import Button from "./Button";
import Actor from './Actor/index'
const Home = () => {
    const {state, loading, error, setSearchTerm, searchTerm, setIsLoadingMore} = useHomeFetch();
  //console.log(setSearchTerm); 
    if(error) return <div>Something fishy </div>
    return( 
        <>
        {state.results[0] ? (
             <HeroImage
              image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
              title={state.results[0].original_title}
              text={state.results[0].overview}
             />
             ) : null
        }
        <SearchBar  setSearchTerms={setSearchTerm}/>
        <Grid Header={searchTerm?'Search Results':'Popular Movie'}>
            {state.results.map(movie => (
                <Thumb key={movie.id}
                    clickable
                    image={
                        movie.poster_path
                        ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                        : Noimage

                    }
                    movieId={movie.id}
                />
            ))}


        </Grid>
        {loading&&<Spinner/>}
        {state.page <state.total_pages && !loading &&(
            <div className="Butt" >
            <Button text='Load More' callback={() => setIsLoadingMore(true) }/>
            </div>
        )}
    </>
    )


};
export default Home; 