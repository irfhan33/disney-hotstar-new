import React from "react";
import styled from "styled-components";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

function UpcomingItem() {
  return (
    <Container>
      <CardImage>
        <img
          src="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1399/1121399-h-9b523b5f96ec"
          alt=""
        />
      </CardImage>
      <TitleWrapper>
        <ButtonWatch>
          <PlayArrowRoundedIcon className="icon_play" />
          <span>
            Pintu Surga Terakhit - Traile dwadwa awdawdw awd dwadw wadwar
          </span>
        </ButtonWatch>
      </TitleWrapper>
      <InfoWrapper>
        <ButtonWatch>
          <PlayArrowRoundedIcon className="icon_play" />
          <span>Pintu Surga Terakhit - Trailer</span>
        </ButtonWatch>
        <Description>
          Irma menolak banuak lamaran meski sudah cukup dewasa. Suatu harim dia
          tidak sengaja bertemu Yusuf, seorang yang sangat bla bla bla
        </Description>
        <ButtonAdd>
          <AddRoundedIcon className="icon_add" />
          <span>Tambah ke Daftar Nonton</span>
        </ButtonAdd>
      </InfoWrapper>
    </Container>
  );
}

export default UpcomingItem;

const CardImage = styled.div`
  img {
    width: 100%;
    height: 100%;
  }
`;

const ButtonWatch = styled.div`
  display: flex;
  align-items: center;
  border-radius: 2px;
  padding: 1px 2px;
  transition: all 250ms;
  margin-bottom: 4px;

  .icon_play {
    width: 20px;
    height: 20px;
    /* margin-left: -10px; */
    margin-right: 4px;
  }
  span {
    font-size: 10px;
    text-transform: capitalize;
    font-weight: 600;
  }
`;

const TitleWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  transition: all 250ms;
  background-image: linear-gradient(
    to top,
    rgba(3, 11, 23, 0.8),
    transparent 40%
  );

  span {
    font-size: 14px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
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
  padding: 10px 10px;
  background-image: linear-gradient(to top, #192133, rgba(4, 8, 15, 0.3));
  opacity: 0;
  transition: all 250ms;
`;

const Container = styled.div`
  margin: 0 5px;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  transition: all 250ms;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
    z-index: 4;
    ${InfoWrapper} {
      opacity: 1;
    }

    ${TitleWrapper} {
      display: none;
    }
  }
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

const ButtonAdd = styled.div`
  display: flex;
  align-items: center;
  border-radius: 2px;
  padding: 1px 2px;
  transition: all 250ms;
  margin-top: 4px;
  .icon_add {
    width: 16px !important;
    height: 16px !important;
    margin-right: 4px;
  }
  span {
    text-transform: uppercase;
    font-size: 8px;
    font-weight: 600;
  }
  &:hover {
    background-color: rgba(255, 255, 255, 0.4);
  }
`;
