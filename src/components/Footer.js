import React from "react";
import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

function Footer() {
  return (
    <Container>
      <Copyright>
        <Top>
          <ul>
            <li>Tentang Disney+ Hotstar</li>
            <li>Syarat Penggunaan</li>
            <li>Kebijakan Privasi (Baru)</li>
            <li>Tanya Jawab</li>
            <li>Masukan</li>
          </ul>
        </Top>
        <Bottom>
          © 2022 Disney dan entitas-entitas terkaitnya. Hak Cipta Dilindungi
          Undang-Undang. © 2022 Entitas-entitas pemberi lisensi Disney. Hak
          Cipta Dilindungi Undang-Undang
        </Bottom>
      </Copyright>
      <Community>
        <SocialMedia>
          <span>Terhubung dengan kami</span>
          <IconContainer>
            <FacebookIcon />
          </IconContainer>
          <IconContainer>
            <TwitterIcon />
          </IconContainer>
        </SocialMedia>
        <Download>
          <span>Disney+ Hotstar App</span>
          <IconContainer>
            <img src="/googleplay.png" alt="" />
          </IconContainer>
          <IconContainer>
            <img src="/appstore.png" alt="" />
          </IconContainer>
        </Download>
      </Community>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  padding: 90px 3vw;
  display: grid;
  grid-template-columns: 60% 40%;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(auto, auto));
    row-gap: 20px;
  }
`;
const Copyright = styled.div``;
const Top = styled.div`
  ul {
    display: flex;
    padding: 0;
    flex-wrap: wrap;

    li {
      list-style: none;
      margin-right: 10px;
      font-size: 14px;
      font-weight: 400;
      text-transform: capitalize;
      color: #ffffffcc;
      text-decoration: none;
      cursor: pointer;
      display: inline-block;
      padding-bottom: 5px;
      transition: all 150ms;

      &:hover {
        color: #1a78cf;
      }
    }
  }
`;
const Bottom = styled.div`
  padding-top: 11px;
  padding-right: 15%;
  font-size: 12px;
  line-height: 1.8;
  font-weight: 400;

  @media (max-width: 768px) {
    padding-right: unset;
  }
`;

const Community = styled.div`
  display: flex;
  justify-content: space-between;
  span {
    font-size: 14px;
    font-weight: 500;
    color: #ffffff99;
    padding-bottom: 7px;
    display: block;
  }
`;
const SocialMedia = styled.div`
  width: 100%;
`;
const Download = styled.div`
  width: 100%;

  img {
    width: 100px;
    height: 30px;
    object-fit: cover;
  }
`;

const IconContainer = styled.div`
  background-color: #192133;
  display: inline-flex;
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 50ms;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  margin-bottom: 6px;

  &:hover {
    background-color: #1f80e0;
  }
`;
