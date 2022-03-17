import React from "react";
import styled from "styled-components";
import CarouselItem from "./CarouselItem";

function Detail() {
  return (
    <Container>
      <CarouselItem
        title="Free Woman"
        subTitle="Action . 2021"
        description="Four friends living a crazzy romance video games and decides to gelp
      to create documentary study to becase cops"
        image="https://cdn.wallpapersafari.com/65/88/RmjTg8.jpg"
        detail="true"
      />
    </Container>
  );
}

export default Detail;
const Container = styled.div`
  padding: 2vh 3vw;
  overflow: hidden;
`;
