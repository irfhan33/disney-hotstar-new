import React from "react";
import styled from "styled-components";

function CarouselItem({ title, subTitle, description, image }) {
  return (
    <Container>
      <InfoWrapper>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
        <Description>{description}</Description>
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
  position: flex;
  margin: 0 10px;
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
      max-height: 51vw;
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
  padding-top: 40px;
  padding-left: 40px;
  overflow: hidden;
  top: 0;
  bottom: 0;

  @media (max-width: 768px) {
    padding-top: 0;
    padding-left: 12px;
    /* top: unset; */
    margin-top: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-bottom: 30px;

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
  }

  @media (max-width: 426px) {
    font-size: 8px;
    line-height: 13px;
  }
`;
