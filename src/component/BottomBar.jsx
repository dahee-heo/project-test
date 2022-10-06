import React from 'react'
import styled from 'styled-components';

const Bar = styled.div`
  display: fixed;
  bottom: 0;
  width: 640px;
  height: 50px;
  border-top: solid 1px #ccc;

  & > div{
    display: flex;
    width: 20%;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
`
const BottomBar = () => {
  return (
    <Bar>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
    </Bar>
  )
}

export default BottomBar