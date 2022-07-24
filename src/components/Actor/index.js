import React from "react";
import PropType from 'prop-types';


import {Wrapper, Image} from './Actor.styles';
const Actor = ({name, character, imageurl}) => (
    <Wrapper>
        <Image src ={imageurl} alt = 'actor-thumb' />
        <h3>{name}</h3>
        <p>{character}</p>
    </Wrapper>
);
Actor.protoType = {
    name: PropType.string,
    character: PropType.string,
    imageurl: PropType.string,
}
export default Actor;