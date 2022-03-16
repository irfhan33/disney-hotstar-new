import React from "react";
import { Carousel, Container, SectionTitle } from "./Movies";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";
import UpcomingItem from "./UpcomingItem";

function Upcoming() {
  const settings = {
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    arrows: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          // arrows: false,
        },
      },
    ],

    // autoplay: true,
  };
  return (
    <Container>
      <SectionTitle>Akan Datang</SectionTitle>
      <Carousel {...settings}>
        <UpcomingItem />
        <UpcomingItem />
        <UpcomingItem />
        <UpcomingItem />
        <UpcomingItem />
        <UpcomingItem />
        <UpcomingItem />
        <UpcomingItem />
      </Carousel>
    </Container>
  );
}

export default Upcoming;
