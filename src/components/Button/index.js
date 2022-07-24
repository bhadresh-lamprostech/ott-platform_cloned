import React from "react";
import { Wrapper } from "../Button/Button.styles";
import PropTypes from 'prop-types';
const Button = ({text, callback}) => (
    <Wrapper type="button" onClick={callback}>
        {text}
    </Wrapper>
);
Button.protoType = {
    text:PropTypes.string,
    callback:PropTypes.func,
}
export default Button;