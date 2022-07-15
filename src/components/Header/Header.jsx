import {
  HeaderBlock,
  NavBox,
  NavElement,
  LogoImg,
  ButtonBox,
  HeaderBtn,
} from "./Header.styles";

const Header = () => {
  return (
    <HeaderBlock>
      <a style={{ margin: "0 1vw" }} href="s" target="_blank">
        <picture>
          <source media="(max-width: 1279px)" srcSet="l.png" />
          <source media="(max-width: 1920px)" srcSet="l@2x.png" />
          <LogoImg src="l.png" alt="logo" />
        </picture>
      </a>
      <NavBox>
        <NavElement href="#">Steaks</NavElement>
        <NavElement href="#">Burgers</NavElement>
        <NavElement href="#">French fries</NavElement>
        <NavElement href="#"> Drinks</NavElement>
        <NavElement href="#">Gdzie dowozimy?</NavElement>
        <NavElement href="#">Kontakt</NavElement>
      </NavBox>
      <ButtonBox>
        <HeaderBtn href="#" target="_blank">
          <svg width="14px" height="16px">
            <use href="sprite.svg#mojekonto"></use>
          </svg>
          Moje konto
        </HeaderBtn>
        <HeaderBtn href="#" target="_blank">
          <svg width="18px" height="16px">
            <use href="sprite.svg#koszyk"></use>
          </svg>
          Koszyk
        </HeaderBtn>
        <HeaderBtn href="a" target="_blank">
          <svg width="14px" height="16px">
            <use href="sprite.svg#zamow_ikona"></use>
          </svg>
          Zamów
        </HeaderBtn>
        <HeaderBtn isMenu={true} href="a" target='_blank'>
          <span style={{height: "19px"}} className="material-symbols-outlined">
            menu
          </span>
          Menu
        </HeaderBtn>
      </ButtonBox>
    </HeaderBlock>
  );
};

export default Header;
