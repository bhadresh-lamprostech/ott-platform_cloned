import React, {useState, useEffect, useRef} from "react";

import searchIcone from '../../images/search-icon.svg';
 
import { Wrapper, Content } from "../SearchBar/SearchBar.styles";

import PropsType from 'prop-types'

const SearchBar = ({setSearchTerms}) => {
    const [state, setState] = useState('');
    const initial = useRef(true);
  
    useEffect(() => {
        if(initial.current){
            initial.current = false;
           
            return;
        }
        const timer = setTimeout(() => { 
            setSearchTerms(state);
            // alert(setSearchTerms)

        }, 1000)
        return() => clearTimeout(timer)
    },[setSearchTerms, state])
    //console.log(state)
    return(
        <Wrapper>
            <Content>
                <img src={searchIcone} alt="search-icon" />
                <input 
                type='text'
                placeholder="Search Movie" 
                onChange={event => setState(event.currentTarget.value)}
                // value={state}
                />

            </Content>
        </Wrapper>
    )
}
SearchBar.protoType = {
    setSearchTerms: PropsType.func
}
export default SearchBar