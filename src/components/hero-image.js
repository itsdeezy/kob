import React from 'react';
import styled from 'styled-components';

export default styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;