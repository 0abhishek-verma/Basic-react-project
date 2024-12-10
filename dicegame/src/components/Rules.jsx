import React from 'react'
import styled from 'styled-components'
const Rules = () => {
  return (
    <RuleContainer>
      <h2>How to play dice game</h2>
      <div className="text">
        <p>select any number</p>
        <p>Click on dice image</p>
        <p>after clicking on dice if selected number is equal to dice number you will get same point as dice</p>
        <p>if you get wrong guess then 2 point will be deducted</p>
      </div>
    </RuleContainer >
  )
}

export default Rules


const RuleContainer = styled.div`
max-width: 800px;
margin: 0 auto;
margin-top: 40px;
margin-bottom: 40px;
border: 1px solid black;
border-radius: 10px;
background-color: #fbf1f1;
color: black;
padding: 20px;
h2{
    font-size: 24px;
}
.text{
    margin-top: 24px;
}
`