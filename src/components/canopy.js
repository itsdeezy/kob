import React from 'react';
import styled from 'styled-components'

const StyledCanopy = styled.div`
  position: relative;
  height: ${props => props.height}px;
  width: 100%;

  &.retracted {
    margin-top: ${props => props.marginTop}px;
    position: fixed;
  }
`

const Canopy = ({children, retracted, retractedHeight, extendedHeight }) => {
  const marginTop = -(extendedHeight - retractedHeight)
  return (
    <StyledCanopy
      className={retracted ? "retracted" : ""}
      height={extendedHeight}
      marginTop={marginTop}
    >
      { children }
    </StyledCanopy>
  )
}

export default Canopy;