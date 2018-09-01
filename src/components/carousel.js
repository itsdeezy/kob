import React, { Component } from 'react';
import styled from 'styled-components'
import { array } from 'prop-types';
import { map } from 'lodash/fp';
import Slider from 'react-slick';

const propTypes = {
  images: array.isRequired
};

const StyledContainer = styled.div`
  /* overflow: hidden; */
  position: absolute;
  top: 0;
  height: ${prop => prop.height}px;
  width: 100%;

  -webkit-transition: height 0.1s ease-out;
  transition: height 0.1s ease-out;

  /* Slider */
  .slick-list,.slick-slider,.slick-track{position:relative;display:block}
  .slick-loading .slick-slide,.slick-loading .slick-track{visibility:hidden}
  .slick-slider{box-sizing:border-box;-webkit-user-select:none;
  -moz-user-select:none;-ms-user-select:none;user-select:none;
  -webkit-touch-callout:none;-khtml-user-select:none;-ms-touch-action:pan-y;
  touch-action:pan-y;-webkit-tap-highlight-color:transparent}.slick-list{
  overflow:hidden;margin:0;padding:0}.slick-list:focus{outline:0}
  .slick-list.dragging{cursor:pointer;cursor:hand}.slick-slider .slick-list,
  .slick-slider .slick-track{-webkit-transform:translate3d(0,0,0);
  -moz-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);
  -o-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}
  .slick-track{top:0;left:0;margin-left:auto;margin-right:auto}
  .slick-track:after,.slick-track:before{display:table;content:''}
  .slick-track:after{clear:both}.slick-slide{display:none;float:left;
  height:100%;min-height:1px}[dir=rtl] .slick-slide{float:right}.slick-slide
  img{display:block}.slick-slide.slick-loading img{display:none}
  .slick-slide.dragging img{pointer-events:none}.slick-initialized
  .slick-slide{display:block}.slick-vertical .slick-slide{display:block;
  height:auto;border:1px solid transparent}
  .slick-arrow.slick-hidden{display:none}
`;

const StyledFullBgImage = styled.div`
  height: ${props => props.height}px;
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

  -webkit-transition: height 0.1s ease-out;
  transition: height 0.1s ease-out;
`;

const Carousel = ({ images, height }) => {
  const settings = {
    autoplay: true,
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const imageMapper = map(
    image => <StyledFullBgImage height={height} key={image} src={image} />
  )

  return (
    <StyledContainer height={height}>
      <Slider {...settings}  >
        { imageMapper(images) }
      </Slider>
    </StyledContainer>
  )
}

Carousel.propTypes = propTypes;

export default Carousel;

