import Styled from "styled-components";

export  const Wrapper = Styled.div`
background: var(--darkGrey);
padding: 0 20px;
`;

export  const Content = Styled.div`
display: Flex;
align-items: center;
justify-content: space-between;
max-width: var(--maxWidth);
padding: 20px 0;
margin: 0 auto;
`;

export  const LogoImg = Styled.img`
    width: 300px;
 
    @media screen and (max-width: 500px) {
        width:150px;
    }
`;

export  const TMDBLogoImg = Styled.img`
width: 300px;
@media screen and (max-width: 500px){
    width: 150px;
}
`;
