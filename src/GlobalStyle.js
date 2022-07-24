import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root{
    --maxWidth: 1280px;
    --white: #fff;
    --lightGrey: #eee;
    --medGrey: #353535;
    --darkGrey: #1c1c1c;
    --fontSupperBig: 2.5rem;
    --fontBig: 1.5rem;
    --fontmed: 1.2rem;
    --fontSmall: 1rem;

}

*{
    box-Sizing: border-box;
    font-family: 'Abel';

}
body{
    margin:0px;
    padding: 0px;

    h1{
        font-size: 2rem;
        font-weight: 600;
        color: var(--white);
        
    }
    h1{
        font-size: 1.1rem;
        font-weight: 600;
        
    }
    p{
        font-size: 1rem;
        color: var(--white);
    }

}
.Butt{
    margin: auto;
    height: auto;
    width: 100px;

}

`