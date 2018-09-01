import React, { Component } from 'react';
import styled from 'styled-components'
import Blank from './components/blank';
import Carousel from './components/carousel';
import Canopy from './components/canopy';
import HeroImage from './components/hero-image';
import HeroText from './components/hero-text'
import Navbar from './components/navbar';

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

const MAIN_HERO_INTRO = "images/main/main_intro.jpg"

const StyledNavbar = styled(Navbar)`
  border-top: 2px solid black;
`

class App extends Component {
  state = {
    fixed: false,
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

  shouldComponentUpdate(_nextProps, { fixed, width, height}) {
    return !(
      fixed === this.state.fixed &&
      width === this.state.width &&
      height === this.state.height
    );
  }

  handleScroll = (e) => {
    const breakpixel = 60
    const fixed = window.scrollY > window.innerHeight - breakpixel

    this.setState({ fixed })
  };

  handleResize = () => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }

  render() {
    const { height, fixed } = this.state;

    return (
      <div className="App">
        <Canopy retractedHeight={60} extendedHeight={height} retracted={fixed}>
          <HeroImage src={MAIN_HERO_INTRO}/>
          <HeroText>Welcome to Bhutan</HeroText>
          <StyledNavbar links={MAIN_NAV_LINKS} />
        </Canopy>
        <Blank height={2000}/>
      </div>
    );
  }
}

export default App;
