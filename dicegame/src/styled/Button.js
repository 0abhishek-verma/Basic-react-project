import styled from "styled-components"
export const Button =styled.button`
    min-width: 220px;
    min-height: 44px;
    padding: 10px 18px;
    background: black;
    color: white;
    font-weight: 600;
    border-radius: 5px;
    border: none;
    font-size: 16px;
    line-height: 24px;
    gap: 10px;
    cursor: pointer;
    border: 1px solid transparent;
    transition: 0.7s background ease-in;
    margin-left: 300px;
    &:hover{
        background-color: white;
        border: 1px solid black;
        color: black;
        transition: 0.5s background ease-in;
    }
`
export const OutlineButton =styled(Button)`
    background-color: white;
    color:black;
    border: 1px solid black;
    &:hover{
        background-color: black;
        border: 1px solid transparent;
        color: white;
        
    }
`