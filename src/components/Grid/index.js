import React from "react";
import Header from "..";
import PropTypes from 'prop-types'
import { Wrapper,Content } from "./Grid.styles";

const Grid = ({ Header, children}) => (
    <Wrapper>
        <h1>
            {Header}
        </h1>
        <Content>
            {children}
        </Content>
    </Wrapper>
)
Grid.propTypes = {
    Header: PropTypes.string,
}
export default Grid;