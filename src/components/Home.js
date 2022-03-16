import React from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Movies from "./Movies";
function Home() {
  return (
    <Container>
      <ImgSlider />
      <Movies />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  padding: 2vh 3vw;
  overflow: hidden;
`;
