import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";
import MovieItem from "./MovieItem";

function Movies() {
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
      <Carousel {...settings}>
        <MovieItem
          cardImage="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2415/1112415-v-f59565643ec7"
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
  }

  .slick-slide {
    /* margin: 0 5px; */
  }

  .slick-track {
    /* transform: translate3d(0px, 0px, 0px) !important; */
  }

  > button {
    z-index: 10;
  }
`;
