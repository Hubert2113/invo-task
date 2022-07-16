import styled from "styled-components";

export const HeaderBlock = styled.header`
  display: flex;
  justify-content: space-around;
  padding: 12px 0;
  align-items: center;
  overflow: hidden;
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
    justify-content: space-around;
    
  }

  @media screen and (min-width: 1280px) {
    gap: 10px;
  }
`;

export const HeaderBtn = styled.button`
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
  background-color: #fff;
  border: 0;
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
    font-size: calc(100vw / 25n)
  }
`;

export const Modal = styled.nav`
  position: fixed;
  display: flex;
  gap: 10px;
  flex-direction: column;
  right: 0;
  top: 0;
  width: 300px;
  padding: 10px;
  background-color: #fff;
  z-index: 11;
  border-radius: 0 0 0 10px;
  border: 1px solid #a2a3a2;
  box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
  transform: ${({isVisible}) => (isVisible ? 'none' : 'translate(322px, 0)')};
  overflow: hidden;
  transition: transform 500ms linear;
`;

export const ModalCloseBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 50%;
  border: #8c8c8c 1px solid;
  width: 23px;
  height: 23px;
  padding: 5px;
  position: absolute;
  top: 30px;
  right: 30px;
`;