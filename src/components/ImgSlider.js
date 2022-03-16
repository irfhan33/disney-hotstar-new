import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";
import CarouselItem from "./CarouselItem";

function ImgSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
  };
  return (
    <Container>
      <Carousel {...settings}>
        <CarouselItem
          title="Free Woman"
          subTitle="Action . 2021"
          description="Four friends living a crazzy romance video games and decides to gelp
        to create documentary study to becase cops"
          image="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/5144/875144-h"
        />
        <CarouselItem
          title="Free Woman"
          subTitle="Action . 2021"
          description="Four friends living a crazzy romance video games and decides to gelp
      to create documentary study to becase cops"
          image="https://cdn.wallpapersafari.com/65/88/RmjTg8.jpg"
        />

        {/* <CarouselItem
          title="Crazy Love"
          subTitle="1 Season . 3 Episode . Action . 13+"
          description="EPISODE BARU SETIAP SENIN & SELASA. Kisah asmara gila antara CEO yang pura-pura amnesia dan sekretarisnya yang berpura-pura menjadi tunangannya."
          image="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4498/1124498-h-1d90498e07bc"
        />

        <CarouselItem
          title="Free Guy"
          subTitle="1 Jam 24 Menit . 3 Episode . Action . 13+"
          description="Sebuha film aksi-komedi tentang teller bank yang mendapati dirinya adalah karakter latar belakang dalam gim video dunia terbuka berjudul Free City"
          image="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1_5x/sources/r1/cms/prod/2416/1112416-h-6c226c2e80b1"
        />

        <CarouselItem
          title="Avenger"
          subTitle="1 Jam 24 Menit . 3 Episode . Action . 13+"
          description="Sebuha film aksi-komedi tentang teller bank yang mendapati dirinya adalah karakter latar belakang dalam gim video dunia terbuka berjudul Free City"
          image="https://wallpaperaccess.com/full/329583.jpg"
        /> */}
      </Carousel>
    </Container>
  );
}

export default ImgSlider;

const Container = styled.div``;

const Carousel = styled(Slider)`
  .slick-list {
    overflow: visible;
  }

  button {
    opacity: 0;
    height: 100%;
    z-index: 99;
    transition: opacity 0.2s ease 0s;
    width: 3vw;
    /* background: red; */
  }

  &:hover {
    button {
      opacity: 1;
    }
  }

  .slick-prev {
    /* left: -75px; */

    &:before {
      /* content: url("/arrow-left.svg"); */
      content: "";
      background: url("/arrow-left.svg");
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 100%;
      /* width: 40px; */
      position: absolute;
      opacity: 0.75;
      /* top: 50%;
      transform: translateY(-50%); */
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      /* display: flex;
      align-items: center;
      justify-content: center; */
      /* background-color: blue; */
    }
  }

  .slick-next {
    /* right: -75px; */

    &:before {
      content: "";
      background: url("/arrow-right.svg");
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 100%;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
    }
  }

  cursor: pointer;
`;
