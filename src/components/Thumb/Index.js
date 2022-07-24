import React from "react";
import { Image } from "./Thumb.style";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
const Thumb = ({image, movieId, clickable}) => (
    <div>
        {clickable?(
            <Link to={`/${movieId}`}>
                <Image src={image} alt="movie-Thumb"/>
            </Link>
        ):(
            <Image src={image} alt = 'movie-thumb'/>
        )}
        

    </div>
);
Thumb.protoType = {
    image: PropTypes.string,
    movieId: PropTypes.number,
    clickable: PropTypes.bool,
}
export default Thumb;