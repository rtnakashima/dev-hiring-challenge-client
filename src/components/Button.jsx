import styled from 'styled-components';

const Button = styled.button`
    width: 12em;
    min-width: 2em
    min-height: 1em;
    padding: 1em;
    background-color: ${ props => props.disabled ? "lightgray" : "mediumseagreen"};
    outline: 0;
    border: 0;
    border-radius: 5px;
    font-size: 1.3em;
    color: white;
    &:active {
        background-color: seagreen;
    }
`

export default Button;