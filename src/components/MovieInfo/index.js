import React from "react";
//Components
import Thumb from "../Thumb/Index";
//config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";
//IMAGE
import NoImage from '../../images/no_image.jpg';
import PropTypes from 'prop-types';
import { Wrapper, Content, Text } from "./Movieinfo.style";

const Movieinfo = ({movie}) => (
    <Wrapper backdrop={movie.backdrop_path}>
        <Content>
            <Thumb image={
                movie.poster_path
                ?`${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                :NoImage
            }
            clickable={false}
            alt='movie thumb'
            />
            <Text>
                <h1>{movie.title}</h1>
                <h3>PLOT</h3>
                <p>{movie.overview}</p>
                <div className="ratting-directors">
                    <div>
                        <h3>Rating</h3>
                        <div className="score">{movie.vote_average}</div>
                    </div>
                    <div className="director">
                        <h3>DIRECTOR{movie.directors.length> 1?'s':'' }</h3>
                        {movie.directors.map(director =>  (
                            <p key={director.credit_id}>{director.name}</p>
                            
                        ))}

                    </div>
                </div>
            </Text>
        </Content>
    </Wrapper>
)
Movieinfo.protoType = {
    movie: PropTypes.string
    
}
export default Movieinfo