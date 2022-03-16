import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import ImgSlider from "./ImgSlider";
import Movies from "./Movies";
import Upcoming from "./Upcoming";
function Home() {
  return (
    <Container>
      <ImgSlider />
      <Movies title="Pilihan Top Untukmu" />
      <Movies title="Baru Di Disney+ Hotstar" />
      <Upcoming />
      <Movies title="Trending" />
      <Footer />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  padding: 2vh 3vw;
  overflow: hidden;
`;
