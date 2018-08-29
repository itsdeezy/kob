import React, { Component } from 'react';
import styled from 'styled-components'
import Navbar from './components/navbar';
import Hero from './components/hero';

import './App.css';
import { map } from 'lodash/fp';

const MAIN_NAV_LINKS = [
  {title: "KINGDOM", link: "/kingdom"},
  {title: "REGIONS", link: "/not_available"},
  {title: "VISITOR INFORMATION", link: "/not_available"},
  {title: "TRAVEL ARRANGEMENTS", link: "/not_available"}
]

const MAIN_HERO_IMAGES = [
  "images/main/main_hero_1.jpg",
  "images/main/main_hero_2.jpg",
  "images/main/main_hero_3.jpg",
  "images/main/main_hero_4.jpg"
]

const HeroText = styled.div`
  color: white;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10000;
`

const StyledShiftingHeroContainer = styled.div`
  position: absolute;
  height: ${props => props.isTop ? "100%" : "11%"};
  width: 100%;

  -webkit-transition: height 0.25s ease-out;
  transition: height 0.25s ease-out;
`

class App extends Component {
  state = {
    isTop: true
  }

  constructor(props) {
    super(props);

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  shouldComponentUpdate(_nextProps, { isTop }) {
    return isTop !== this.state.isTop;
  }

  handleScroll = (e) => {
    this.setState({ isTop: window.scrollY === 0 });
  };

  render() {
    const { isTop } = this.state;

    return (
      <div className="App">
        <StyledShiftingHeroContainer isTop={isTop}>
          { isTop ? <HeroText>Welcome to Bhutan</HeroText> : null }
          <Hero images={MAIN_HERO_IMAGES}/>
        </StyledShiftingHeroContainer>
        {/* <Navbar links={MAIN_NAV_LINKS}/> */}
      </div>
    );
  }
}

export default App;
