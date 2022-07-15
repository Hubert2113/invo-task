import styled from "styled-components";

export const HeaderBlock = styled.header`
  display: flex;
  justify-content: space-around;
  padding: 12px 0;
  align-items: center;
`;

export const LogoImg = styled.img`
  @media screen and (min-width: 1280px) {
    width: 50px;
    height: 50px;
  }
  @media screen and (max-width: 1279px) {
    width: 35px;
    height: 35px;
  }
`;

export const NavBox = styled.nav`
  display: flex;
  flex: 1;
  justify-content: space-around;

  @media screen and (max-width: 1279px) {
    display: none;
  }
`;

export const NavElement = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000;
  font-size: 14px;
  font-weight: 400;
  word-wrap: normal;
  padding: 5px;
  border-radius: 10px;
  transition: color 500ms linear 200ms, background-color 500ms linear;

  &:hover {
    color: #fff;
    background-color: #920303;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  gap: 5%;
  flex: 1;
  justify-content: center;
  

  @media screen and (max-width: 1279px) {
    gap: 0px;
    
  }
`;

export const HeaderBtn = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 97px;
  height: 57px;
  text-decoration: none;
  color: #000;
  border-radius: 10px;
  fill: #000;
  font-size: 14px;
  font-weight: 400;
  transition: color 500ms linear 200ms, background-color 500ms linear;

  &:hover {
    color: #fff;
    background-color: #920303;
  }

  @media screen and (min-width: 1280px) {
    display: ${({isMenu}) => (isMenu ? 'none' : "flex")};
  }

  @media screen and (min-width: 320px) and (max-width: 767px) {
    flex: 1;
    width: auto;
    font-size: calc(100vw / 25)
  }
`;
