import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { selectUserPhoto, setUserLogin } from "../features/user/userSlice";
import { signInWithPopup } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { provider } from "./../firebaseConfig";

function Navbar() {
  const dispatch = useDispatch();
  const loginUser = (e) => {
    e.preventDefault();

    signInWithPopup(auth, provider)
      .then((result) => {
        dispatch(
          setUserLogin({
            name: result.user.displayName,
            email: result.user.email,
            photo: result.user.photoURL,
          })
        );
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  const userPhoto = useSelector(selectUserPhoto);
  return (
    <Container>
      <GenreButton>
        <img src="/menu.svg" alt="" />
      </GenreButton>
      <Link to="/">
        <Logo>
          <img
            src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg"
            alt=""
          />
        </Logo>
      </Link>
      <NavMenu>
        <NavMenuItem>Serial</NavMenuItem>
        <NavMenuItem>Film</NavMenuItem>
        <NavMenuItem>Disney+</NavMenuItem>
        <NavMenuItem>Lokal</NavMenuItem>
      </NavMenu>
      <SearchButton>
        <form action="">
          <input type="text" placeholder="Search" />
          <img src="search.svg" alt="" />
        </form>
      </SearchButton>
      <SubscriptionButton>Langganan</SubscriptionButton>
      <LanguageButton>Indonesia</LanguageButton>

      {userPhoto ? (
        <UserAvatar>
          <img src={userPhoto} alt="" />
          <LogoutButton>
            <span>Logout</span>
          </LogoutButton>
        </UserAvatar>
      ) : (
        <LoginButton onClick={loginUser}>MASUK</LoginButton>
      )}
    </Container>
  );
}

export default Navbar;

const Container = styled.nav`
  padding: 0 3vw;
  background-color: black;
  height: 80px;
  display: flex;
  align-items: center;
  gap: 20px;
`;

const GenreButton = styled.div``;
const Logo = styled.div`
  margin-bottom: 5px;
`;
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;

  @media (max-width: 1028px) {
    display: none;
  }
`;
const NavMenuItem = styled.div``;

const SubscriptionButton = styled.div`
  text-align: center;
  text-transform: uppercase;
  background: #1f80e0;
  font-size: 12px;
  padding: 0 12px;
  letter-spacing: 0.4px;
  font-weight: 700;
  line-height: 24px;
  border-radius: 4px;
  color: white;
  cursor: pointer;

  @media (max-width: 768px) {
    display: none;
  }
`;
const LanguageButton = styled.div`
  border: 0.5px solid #ffffff99;
  line-height: 24px;
  letter-spacing: 0.4px;
  border-radius: 4px;
  font-size: 12px;
  padding: 0 12px;
  font-weight: 500;
  @media (max-width: 768px) {
    display: none;
  }
`;
const LoginButton = styled.div`
  font-weight: 500;
  text-transform: uppercase;
  cursor: pointer;
  display: inline-block;
  padding: 13px 0;
  font-size: 14px;

  @media (max-width: 768px) {
    margin-left: auto;
  }
`;
const SearchButton = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    display: none;
  }

  img {
    position: absolute;
    width: 15px;
    height: 15px;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  input {
    background: none;
    border: none;
    color: #ffffffcc;
    border-bottom: 1px solid #a1a3a9;
    padding: 10px 5px;
    font-size: 14px;
    outline: none;
    width: 200px;
    transition: all 250ms;
    &:focus {
      border-bottom: 1px solid #1f80e0;
      width: 300px;
    }

    &::placeholder {
      color: #ffffffcc;
    }
  }
`;

const LogoutButton = styled.div`
  position: absolute;
  font-size: 14px;
  top: 100%;
  background-color: rgba(222, 222, 222, 0.1);
  padding: 3px 5px;
  left: -4px;
  border-radius: 4px;
  margin-top: 2px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  opacity: 0;
  transition: all 250ms;
`;

const UserAvatar = styled.div`
  width: 44px;
  cursor: pointer;
  position: relative;

  img {
    width: 100%;
    border-radius: 50%;
  }

  &:hover {
    ${LogoutButton} {
      opacity: 1;
    }
  }
`;
