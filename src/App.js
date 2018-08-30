import React, { Component } from 'react';
import styled from 'styled-components'
import Navbar from './components/navbar';
import Carousel from './components/carousel';

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
    scrollY: 0,
    width: 0,
    height: 0
  }

  constructor(props) {
    super(props);

    this.handleScroll = this.handleScroll.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('scroll', this.handleScroll);
  }

  shouldComponentUpdate(_nextProps, { scrollY, width, height}) {
    // TODO!
    // Usecase for immutableJS here
    return !(
      scrollY === this.state.scrollY &&
      width === this.state.width &&
      height === this.state.height
    );
  }

  handleScroll = (e) => {
    this.setState({
      scrollY: window.scrollY === 0
    });
  };

  handleResize() {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }


  render() {
    const { isTop, height, _width } = this.state;
    return (
      <div className="App">
        <StyledShiftingHeroContainer isTop={true}>
          <HeroText>Welcome to Bhutan</HeroText>
          <Carousel height={height} images={MAIN_HERO_IMAGES}/>
        </StyledShiftingHeroContainer>
        <Navbar links={MAIN_NAV_LINKS}/>
      </div>
    );
  }
}

export default App;
