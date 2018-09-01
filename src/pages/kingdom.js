import React from 'react';
import styled from 'styled-components';
import { times } from 'lodash/fp';
import Blank from '../components/blank';

const Thing = styled.div`
  font-size: 64px;
`

export default () =>
  <React.Fragment>
    <Blank height={58}/>
    { times(() => <Thing>Hi</Thing>)(20) }
  </React.Fragment>