import React from 'react';
import styled from 'styled-components';

export default styled.div`
  pointer-events: none;
  display: block;
  width: 100%;
  height: ${props => props.height}px;
`