import { useEffect, useState } from "react";
import API from '../API';
import Helper from '../helpers'
export const useMovieFetch = movieId => {
    const [state, setState] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => 
    {
            const fetchMovie = async () =>
            {
                try
                {
                    setLoading(true);
                    setError(false);

                    const movie = await API.fetchMovie(movieId);
                    const credits = await API.fetchCredits(movieId);
                    //get directors
                    const directors = credits.crew.filter(
                        member => member.job === 'Directors'
                    );
                        setState({
                            ...movie, 
                            actors: credits.cast,
                            directors
                        })
                        setLoading(false);
                }
                catch(error)
                {
                    setError(true);
                }
            }
            const sessionState = 
            fetchMovie();

    }, [movieId])
    return{state, loading, error};



}