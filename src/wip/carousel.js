import React, { Component } from 'react';
import styled from 'styled-components'
import { array } from 'prop-types';
import { map } from 'lodash/fp';

const propTypes = {
  images: array.isRequired
};

const StyledContainer = styled.div`
  overflow: hidden;
  position: relative;
  height: 100%;
  width: 100%;
`;

const StyledFullBgImage = styled.div`
  display: inline-block;
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

class Carousel extends Component {
  constructor(props) {
    super(props)

    const { images } = this.props

    this.state = {
      images: [ ...images, ...images ],
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

    const imageMapper = map(
      image => <StyledFullBgImage key={image} src={image} />
    )

    return (
      <StyledContainer>
        { imageMapper(images) }
      </StyledContainer>
    )
  }
};

Carousel.propTypes = propTypes;

export default Carousel;