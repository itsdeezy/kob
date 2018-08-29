import React from 'react';
import styled from 'styled-components'
import { map } from 'lodash/fp';

const StyledUl = styled.ul`
  margin: 0;
`

const Navbar = ({links}) => {
  const navLinkMapper = map(
    ({title, link}) =>
      <li key={`${title}-${link}`}>
        <a href={link}>{title}</a>
      </li>
  )

  return (
    <StyledUl>
      { navLinkMapper(links) }
    </StyledUl>
  );
}

export default Navbar