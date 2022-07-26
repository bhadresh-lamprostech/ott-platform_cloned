import React from "react";
import RMDBLogo from '../../src/images/react-movie-logo.svg';
import TMDBLogo from '../images/tmdb_logo.svg';
import {Link} from 'react-router-dom';
import { Wrapper, Content, LogoImg, TMDBLogoImg  } from "./Header.style";

const Header = () => (
    <Wrapper>
        <Content>
            <Link to='/'>
            <LogoImg src={RMDBLogo} alt = "rmdb logo" />
            </Link>
            <TMDBLogoImg src={TMDBLogo} alt = "Tmdb logo"/>

        </Content>
    </Wrapper>
)
export default Header 