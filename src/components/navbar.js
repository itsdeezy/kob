import React from 'react';
import styled from 'styled-components'
import { map } from 'lodash/fp';

const StyledUl = styled.ul`
  margin: 0;
  padding: 10px 0;

  li {
    vertical-align: top;
    display: inline-block;
    width: 25%;
    box-sizing: border-box;
  }
`

const Navbar = ({className, links}) => {
  const navLinkMapper = map(
    ({title, link}) =>
      <li key={`${title}-${link}`}>
        <a href={link}>{title}</a>
      </li>
  )

  return (
    <StyledUl className={className}>
      { navLinkMapper(links) }
    </StyledUl>
  );
}

export default Navbar