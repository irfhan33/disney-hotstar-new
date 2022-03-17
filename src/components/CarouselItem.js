import React from "react";
import styled from "styled-components";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import ShareIcon from "@mui/icons-material/Share";

function CarouselItem({ title, subTitle, description, image, detail }) {
  return (
    <Container detail="detail">
      <InfoWrapper>
        <Title detail={detail}>{title}</Title>
        <SubTitle detail={detail}>{subTitle}</SubTitle>
        <Description detail={detail}>{description}</Description>
        {detail && (
          <Controls>
            <Left>
              <PlayArrowRoundedIcon className="icon_play" />
              <span>Tonton Film</span>
            </Left>
            <Right detail={detail}>
              <ButtonContainer>
                <AddRoundedIcon className="icon_add" />
                <span>Daftar Nonton</span>
              </ButtonContainer>
              <ButtonContainer margin="16px">
                <ShareIcon className="icon_share" />
                <span>Bagikan</span>
              </ButtonContainer>
            </Right>
          </Controls>
        )}
      </InfoWrapper>
      <Image>
        <img src={image} alt={title} />
      </Image>
    </Container>
  );
}

export default CarouselItem;

const Container = styled.div`
  background: red;
  background-color: #030b17;
  display: flex;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  margin: 0 10px;
  ${({ detail }) => detail && "cursor:pointer"};

  @media (max-width: 426px) {
    margin: 0 3px;
  }
`;

const Image = styled.div`
  margin-left: auto;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
  }

  img {
    height: 100%;
    object-fit: cover;
    /* max-height: 400px; */
    max-height: 400px;

    @media (max-width: 768px) {
      width: 100%;
      /* height: auto; */
      opacity: 0.8;
      height: 51vw;
    }
  }

  &:after {
    content: "";
    position: absolute;
    background-image: linear-gradient(to right, #030b17, transparent);
    left: -1px;
    right: 70%;
    top: 0;
    bottom: 0;

    @media (max-width: 768px) {
      background: none;
    }
  }
`;

const InfoWrapper = styled.div`
  position: absolute;
  z-index: 1;
  padding: 40px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  top: 0;
  bottom: 0;
  left: 0;
  /* right: 0; */
  /* background-color: ${({ color }) => color}; */

  @media (max-width: 1024px) {
    right: 0;
  }

  @media (max-width: 768px) {
    padding-top: 0;
    padding-left: 12px;
    padding-right: 12px;
    padding-bottom: 12px;

    /* top: unset; */
    margin-top: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    /* padding-bottom: 30px; */

    &:after {
      content: "";
      background-image: linear-gradient(
        to top,
        rgba(3, 11, 23, 0.6),
        transparent
      );
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      position: absolute;
      z-index: -1;
    }

    @media (max-width: 426px) {
      padding-bottom: 10px;
    }
  }
`;
const Title = styled.h2`
  font-size: 28px;
  font-weight: 600;

  @media (max-width: 768px) {
    margin: 3px 0;
    font-size: 24px;
    line-height: normal;

    ${({ detail }) => detail && "display:none"};
  }

  @media (max-width: 426px) {
    font-size: 12px;
    margin: 2px 0;
  }
`;
const SubTitle = styled.span`
  font-size: 16px;
  font-weight: 500;
  margin: 10px 0;
  display: block;

  max-width: 50vw;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 768px) {
    font-size: 14px;
    margin: 1px 0;
    ${({ detail }) => detail && "display:none"};
  }

  @media (max-width: 426px) {
    font-size: 10px;
    margin: 0;
  }
`;
const Description = styled.p`
  font-size: 16px;
  overflow-wrap: break-word;
  line-height: 28px;
  max-width: 40vw;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (max-width: 768px) {
    margin: 3px 0;
    font-size: 14px;
    font-weight: normal;
    line-height: 18px;
    ${({ detail }) => detail && "display:none"};
  }

  @media (max-width: 426px) {
    font-size: 8px;
    line-height: 13px;
  }
`;

const Controls = styled.div`
  display: flex;
  margin-top: auto;
  justify-content: space-between;
  align-items: center;
`;

const Right = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    ${({ detail }) => detail && "display:none"};
  }
  .icon_add {
    width: 40px;
    height: 40px;
  }

  .icon_share {
    margin-top: -8px;
    width: 30px;
    height: 30px;
    margin-bottom: 4px;
  }

  span {
    font-size: 10px;
    font-weight: 500;
    line-height: 14px;
    text-transform: uppercase;
  }
`;
const Left = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    padding-left: 20px;
  }

  @media (max-width: 426px) {
    padding-left: 10px;
  }
  span {
    font-size: 20px;
    font-weight: 600;

    @media (max-width: 768px) {
      font-size: 18px;
    }

    @media (max-width: 426px) {
      font-size: 16px;
    }
  }

  .icon_play {
    width: 40px;
    height: 40px;
    margin-left: -10px;
    margin-right: 10px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 50px;
  text-align: center;

  margin-left: ${(props) => props.margin};
`;
