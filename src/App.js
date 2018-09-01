import React, { Component } from 'react';
import styled from 'styled-components'
import {
  Route,
  NavLink,
  BrowserRouter
} from "react-router-dom";

import Kingdom from './pages/kingdom';
import Wip from './pages/wip';

import Blank from './components/blank';
// import Carousel from './components/carousel';
import Canopy from './components/canopy';
import HeroImage from './components/hero-image';
import HeroText from './components/hero-text'
import Navbar from './components/navbar';

// import { map } from 'lodash/fp';


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

const StyledContentContainer = styled.div`
  display: block;
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
      <BrowserRouter>
        <React.Fragment>
          <Canopy retractedHeight={60} extendedHeight={height} retracted={fixed}>
            <HeroImage src={MAIN_HERO_INTRO}/>
            <HeroText>Welcome to Bhutan</HeroText>
            <StyledNavbar navlinks={[
              <NavLink key="kingdom" to="/kingdom">KINGDOM</NavLink>,
              <NavLink key="region" to="/wip">REGIONS</NavLink>,
              <NavLink key="visinfo" to="/wip">VISITOR INFORMATION</NavLink>,
              <NavLink key="travarr" to="/wip">TRAVEL ARRANGEMENTS</NavLink>,
            ]} />
          </Canopy>
          <StyledContentContainer>
            <Route exact path="/" component={Kingdom}/>
            <Route path="/kingdom" component={Kingdom}/>
            <Route path="/wip" component={Wip}/>
          </StyledContentContainer>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
