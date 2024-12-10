import React,{useState} from 'react'
import styled from 'styled-components'

const RoleDice = ({currentDice,roleDice}) => {
    

  return (
    <DiceController>
      <div className="dice" onClick={roleDice}>
        <img src={`./images/dice_${currentDice}.png`} alt="dice1" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceController>
  )
}

export default RoleDice

const DiceController =styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 48px;
    p{
        font-size: 28px;
        font-weight: 500;
    }
    .dice{
        cursor: pointer;
    }
`
