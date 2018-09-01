import React, { Component } from 'react';
import styled from 'styled-components'
import {
  Route,
  NavLink,
  BrowserRouter
} from "react-router-dom";

import Kingdom from './pages/kingdom';
import Wip from './pages/wip';

import Carousel from './components/carousel';
import Canopy from './components/canopy';
import HeroText from './components/hero-text'
import Navbar from './components/navbar';

import { MAIN_HERO_IMAGES } from './constants';

const StyledNavbar = styled(Navbar)`
  border-top: 2px solid black;
  position: absolute;
  bottom: -58px;
  width: 100%;
  display: block;
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

  handleScroll = () => {
    const breakpixel = 60
    const fixed = window.scrollY > window.innerHeight - breakpixel
    this.setState({ fixed })
  };

  handleResizeEnd = () => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }

  constructor(props) {
    super(props);

    this.throttledResize = this.throttledResize.bind(this)
    this.handleScroll = this.handleScroll.bind(this);
    this.handleResizeEnd = this.handleResizeEnd.bind(this);
  }

  // NOTE!
  // This is a hacked closure. Make sure its only called in
  // componentDidMount, otherwise beware of memory leaks
  throttledResize() {
    let resizeTimer = 0;
    const resizeClosure = (() => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(this.handleResizeEnd, 250);
    }).bind(this)

    window.addEventListener('resize', resizeClosure);
    return resizeClosure
  }

  componentDidMount() {
    this.handleResizeEnd();
    window.addEventListener('scroll', this.handleScroll);
    this.handleResize = this.throttledResize();
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

  render() {
    const { height, fixed } = this.state;

    return (
      <BrowserRouter>
        <React.Fragment>
          <Canopy retractedHeight={60} extendedHeight={height} retracted={fixed}>
            <Carousel
              images={MAIN_HERO_IMAGES}
              height={height}
              playing={!fixed}
            />
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
