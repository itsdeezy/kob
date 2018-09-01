import React from 'react';
import styled from 'styled-components'
import { map } from 'lodash/fp';

const StyledUl = styled.ul`
  margin: 0;
  padding: 10px 0;
  background: white;

  li {
    vertical-align: top;
    display: inline-block;
    width: 25%;
    box-sizing: border-box;
  }
`

const Navbar = ({className, navlinks}) => {
  const navLinkMapper = map(
    navlink => <li key={`${navlink.key}`}>{ navlink }</li>
  )

  return (
    <StyledUl className={className}>
      { navLinkMapper(navlinks) }
    </StyledUl>
  );
}

export default Navbar