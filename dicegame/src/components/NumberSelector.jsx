import React, { useState } from 'react'
import styled from 'styled-components'
const NumberSelector = ({setError,error,selectedNumber, setSelectedNumber}) => {
    const arrayNum =[1,2,3,4,5,6]

    const numberSelectorHandler = (value) =>{
        setSelectedNumber(value)
        setError('')
    }
    
  return (
    <NumberSelectorContainer>
        <p className='error'>{error}</p>
        <div className="flex">
        {arrayNum.map((value,i)=>(
            <Box isSelected={value==selectedNumber} key={i} onClick={()=>numberSelectorHandler(value)}>
                {value}</Box>
        ))}
        </div>
        <p>Select Number</p>
    </NumberSelectorContainer>
  )
}

export default NumberSelector
const NumberSelectorContainer =styled.div`
display: flex;
flex-direction: column;
align-items: end;
.flex{
    display: flex;
    gap: 24px;
}
.error{
    color: red;
}
p{
    font-size: 24px;
    font-weight: 700;
} 
`
const Box =styled.button`
    width: 72px;
    height: 72px;
    display: grid;
    place-items: center;
    border: 1px solid black;
    font-size: 24px;
    font-weight: 700;
    cursor: pointer;
    background-color: ${(props)=> props.isSelected ? "black": "white"};
    color: ${(props)=> props.isSelected ? "white": "black"};
`