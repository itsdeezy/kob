import React, { Component } from 'react';
import styled from 'styled-components'
import { array } from 'prop-types';

const propTypes = {
  images: array.isRequired
};

const StyledContainer = styled.div`

  position: relative;
  height: 100%;
  width: 100%;
`;

const StyledFullBgImage = styled.div`
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  position: absolute;
  height: 100%;
  width: 100%;
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

class Hero extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentIndex: 0,
      intervalId: -1
    }
  }

  componentDidMount() {
    this.setState({
      ...this.state,
      intervalId: setInterval(this.handleTimeUp.bind(this), 5000)
    })
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  handleTimeUp = () => {
    const { currentIndex } = this.state
    const { images } = this.props
    const nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1

    this.setState({
      ...this.state,
      currentIndex: nextIndex
    })
  }

  render() {
    const { images } = this.props;
    const { currentIndex } = this.state;

    return (
      <StyledContainer>
        <StyledFullBgImage src={images[currentIndex]} />
      </StyledContainer>
    )
  }
};

Hero.propTypes = propTypes;

export default Hero;