import React from "react";
import styled from "styled-components";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
function MovieItem({ cardImage, title, subTitle, description }) {
  return (
    <Container>
      <CardImage>
        <img src={cardImage} alt={Title} />
      </CardImage>
      <InfoWrapper>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
        <Description>{description}</Description>
        <ButtonWatch>
          <PlayArrowRoundedIcon className="icon_play" />
          <span>Tonton Film</span>
        </ButtonWatch>
        <ButtonAdd>
          <AddRoundedIcon className="icon_play" />
          <span>Tambah ke Daftar Nonton</span>
        </ButtonAdd>
      </InfoWrapper>
    </Container>
  );
}

export default MovieItem;

const CardImage = styled.div`
  cursor: pointer;
  height: 15vw;

  @media (max-width: 1024px) {
    height: 20vw;
  }

  @media (max-width: 768px) {
    height: 30vw;
  }

  @media (max-width: 426px) {
    height: 40vw;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const InfoWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 15px 10px;
  background-image: linear-gradient(to top, #192133, rgba(4, 8, 15, 0.5) 50%);
  opacity: 0;
  transition: all 250ms;
`;

const Container = styled.div`
  /* background-color: red; */
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  transition: all 250ms;
  margin: 0 5px;

  @media (max-width: 426px) {
    margin: 0 3px;
  }
  &:hover {
    transform: scale(1.2);
    z-index: 4;
    ${InfoWrapper} {
      opacity: 1;
    }
  }
`;

const Title = styled.h5`
  font-size: 10px;
  font-weight: 700;
  padding: 0 5px;
`;
const SubTitle = styled.span`
  font-size: 9px;
  margin: 2px 0;
  line-height: 11px;
  padding: 0 5px;
  font-weight: 600;
`;
const Description = styled.p`
  /* font-size: calc(11px / 1.3); */
  font-size: 9px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  opacity: 0.8;
  margin-bottom: 3px;
  padding: 0 5px;
`;
const ButtonWatch = styled.div`
  display: flex;
  align-items: center;
  border-radius: 3px;
  padding: 1px 2px;
  transition: all 250ms;
  &:hover {
    background-color: rgba(255, 255, 255, 0.4);
  }
  .icon_play {
    width: 18px;
    height: 18px;
    /* margin-left: -10px; */
    margin-right: 4px;
  }
  span {
    font-size: 8px;
    text-transform: uppercase;
    font-weight: 600;
    opacity: 0.8;
  }
`;
const ButtonAdd = styled(ButtonWatch)``;
