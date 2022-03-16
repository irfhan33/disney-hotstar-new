import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";
import MovieItem from "./MovieItem";

function Movies({ title }) {
  const settings = {
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 8,
    arrows: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],

    // autoplay: true,
  };
  return (
    <Container>
      <SectionTitle>{title}</SectionTitle>
      <Carousel {...settings}>
        <MovieItem
          cardImage="https://wallpaper.dog/large/5445878.jpg"
          title="Encanto"
          subTitle="1 Jam 42 Menit, Musical, Kids, English, Malay, Indonesian, Thai, 2021"
          description="Tells the tale of the Madrigals, an extraordinary family living in a great city in the sky"
        />
        <MovieItem
          cardImage="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/5663/745663-v"
          title="Encanto"
          subTitle="SubTitle"
          description="Description"
        />
        <MovieItem
          cardImage="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/2421/1112421-v-13d734c1584f"
          title="Encanto"
          subTitle="SubTitle"
          description="Description"
        />
        <MovieItem
          cardImage="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/2814/1132814-v-ec0a0ac599c7"
          title="Encanto"
          subTitle="SubTitle"
          description="Description"
        />
        <MovieItem
          cardImage="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/2427/1112427-v-4afad9cc13cc"
          title="Encanto"
          subTitle="SubTitle"
          description="Description"
        />
        <MovieItem
          cardImage="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/6625/746625-v"
          title="Encanto"
          subTitle="SubTitle"
          description="Description"
        />
        <MovieItem
          cardImage="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/7992/727992-v"
          title="Encanto"
          subTitle="SubTitle"
          description="Description"
        />
        <MovieItem
          cardImage="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/9234/1099234-v-6da7399de2fa"
          title="Encanto"
          subTitle="SubTitle"
          description="Description"
        />
        <MovieItem
          cardImage="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2415/1112415-v-f59565643ec7"
          title="Encanto"
          subTitle="SubTitle"
          description="Description"
        />
        <MovieItem
          cardImage="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/5663/745663-v"
          title="Encanto"
          subTitle="SubTitle"
          description="Description"
        />
        <MovieItem
          cardImage="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/2421/1112421-v-13d734c1584f"
          title="Encanto"
          subTitle="SubTitle"
          description="Description"
        />
        <MovieItem
          cardImage="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/2814/1132814-v-ec0a0ac599c7"
          title="Encanto"
          subTitle="SubTitle"
          description="Description"
        />
        <MovieItem
          cardImage="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/2427/1112427-v-4afad9cc13cc"
          title="Encanto"
          subTitle="SubTitle"
          description="Description"
        />
        <MovieItem
          cardImage="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/6625/746625-v"
          title="Encanto"
          subTitle="SubTitle"
          description="Description"
        />
        <MovieItem
          cardImage="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/7992/727992-v"
          title="Encanto"
          subTitle="SubTitle"
          description="Description"
        />
        <MovieItem
          cardImage="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/9234/1099234-v-6da7399de2fa"
          title="Encanto"
          subTitle="SubTitle"
          description="Description"
        />
      </Carousel>
    </Container>
  );
}

export default Movies;

const Container = styled.div`
  margin-top: 30px;
`;

const Carousel = styled(Slider)`
  .slick-list {
    overflow: visible;
    margin: 0 -5px;
    position: relative;
    /* width: 100vw; */
  }

  .slick-slide {
    /* margin: 0 5px; */
  }

  .slick-track {
    /* transform: translate3d(0px, 0px, 0px) !important; */
  }
  .slick-disabled {
    display: none !important;
  }

  button {
    opacity: 0;
    height: 100%;
    z-index: 99;
    transition: opacity 0.2s ease 0s;
    display: flex;
    width: 4vw;
    transition: all 250ms;
  }

  &:hover {
    button {
      opacity: 1;
    }

    .slick-next {
      background: linear-gradient(
        to right,
        transparent,
        rgba(12, 17, 27, 0.7),
        rgba(12, 17, 27, 0.9)
      );
    }

    .slick-prev {
      background: linear-gradient(
        to left,
        transparent,
        rgba(12, 17, 27, 0.7),
        rgba(12, 17, 27, 0.9)
      );
    }
  }

  .slick-next {
    right: -50px;
    @media (max-width: 1024px) {
      right: -32px;
    }

    @media (max-width: 768px) {
      right: -23px;
    }

    @media (max-width: 426px) {
      right: -13px;
    }
    &:before {
      /* content: ""; */
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      align-items: center;
      display: flex;
      justify-content: center;
    }
  }

  .slick-prev {
    left: -50px;

    @media (max-width: 1024px) {
      left: -32px;
    }

    @media (max-width: 768px) {
      left: -23px;
    }

    @media (max-width: 426px) {
      left: -13px;
    }
    &:before {
      /* content: ""; */
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      align-items: center;
      display: flex;
      justify-content: center;
    }
  }
`;

const SectionTitle = styled.div`
  font-size: 20px;
  padding: 10px 0;
  font-weight: 600;
`;
